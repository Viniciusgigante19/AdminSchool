import express from 'express';
import db from '../../database/models/index.js';
import { broadcast } from '../../server.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const itens = await db.Professor.findAll();
    res.json(itens);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar professores' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await db.Professor.findByPk(req.params.id);
    item ? res.json(item) : res.status(404).json({ error: 'Professor não encontrado' });
  } catch {
    res.status(500).json({ error: 'Erro ao buscar professor' });
  }
});

router.post('/', async (req, res) => {
  try {
    const novo = await db.Professor.create(req.body);

    broadcast({ type: 'professor_criado', data: novo });

    res.status(201).json(novo);
  } catch {
    res.status(400).json({ error: 'Erro ao criar professor' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const item = await db.Professor.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Professor não encontrado' });

    await item.update(req.body);

    broadcast({ type: 'professor_atualizado', data: item });

    res.json(item);
  } catch {
    res.status(400).json({ error: 'Erro ao atualizar professor' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const item = await db.Professor.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Professor não encontrado' });

    await item.destroy();

    broadcast({ type: 'professor_deletado', id: item.id });

    res.status(204).send();
  } catch {
    res.status(500).json({ error: 'Erro ao deletar professor' });
  }
});

export default router;
