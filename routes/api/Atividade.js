import express from 'express';
import db from '../../database/models/index.js';
import { broadcast } from '../../server.js';

const router = express.Router();

// GET /atividades - lista todas as atividades
router.get('/', async (req, res) => {
  try {
    const atividades = await db.Atividade.findAll();
    res.json(atividades);
  } catch (error) {
    console.error('Erro ao buscar atividades:', error);
    res.status(500).json({ error: 'Erro ao buscar atividades', details: error.message });
  }
});

// GET /atividades/:id - busca atividade por ID
router.get('/:id', async (req, res) => {
  try {
    const atividade = await db.Atividade.findByPk(req.params.id);
    if (atividade) {
      res.json(atividade);
    } else {
      res.status(404).json({ error: 'Atividade não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao buscar atividade por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar atividade', details: error.message });
  }
});

// POST /atividades - cria nova atividade
router.post('/', async (req, res) => {
  try {
    const novo = await db.Atividade.create(req.body);

    broadcast({ type: 'atividade_criada', data: novo });

    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar atividade' });
  }
});

// PUT /atividades/:id - atualiza atividade
router.put('/:id', async (req, res) => {
  try {
    const item = await db.Atividade.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Atividade não encontrada' });

    await item.update(req.body);

    broadcast({ type: 'atividade_atualizada', data: item });

    res.json(item);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar atividade',details: error.message });
  }
});

// DELETE /atividades/:id - remove atividade
router.delete('/:id', async (req, res) => {
  try {
    const atividade = await db.Atividade.findByPk(req.params.id);
    if (atividade) {
      await atividade.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Atividade não encontrada' });
    }
    broadcast({ type: 'atividade_deletada', id: req.params.id });
  } catch (error) {
    console.error('Erro ao deletar atividade:', error);
    res.status(500).json({ error: 'Erro ao deletar atividade', details: error.message });
  }
});

export default router;
