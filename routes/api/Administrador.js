import express from 'express';
import db from '../../database/models/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const admins = await db.Administrador.findAll();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar administradores', details: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const novo = await db.Administrador.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar administrador', details: error.message });
  }
});

export default router;
