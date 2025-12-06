import express from 'express';
import db from '../../database/models/index.js';
import { broadcast } from '../../server.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const itens = await db.Presenca.findAll();
    res.json(itens);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar presenças' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await db.Presenca.findByPk(req.params.id);
    item ? res.json(item) : res.status(404).json({ error: 'Presença não encontrada' });
  } catch {
    res.status(500).json({ error: 'Erro ao buscar presença' });
  }
});

router.post('/', async (req, res) => {
  try {
    const novo = await db.Presenca.create(req.body);

    broadcast({ type: 'presenca_criada', data: novo });

    res.status(201).json(novo);
  } catch {
    res.status(400).json({ error: 'Erro ao criar presença' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const item = await db.Presenca.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Presença não encontrada' });

    await item.update(req.body);

    broadcast({ type: 'presenca_atualizada', data: item });

    res.json(item);
  } catch {
    res.status(400).json({ error: 'Erro ao atualizar presença' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const item = await db.Presenca.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Presença não encontrada' });

    await item.destroy();

    broadcast({ type: 'presenca_deletada', id: item.id });

    res.status(204).send();
  } catch {
    res.status(500).json({ error: 'Erro ao deletar presença' });
  }
});

export default router;