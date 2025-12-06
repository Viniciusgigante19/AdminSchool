import express from 'express';
import db from '../../models/index.js';

const router = express.Router();

// POST /usuarios - cria novo usuário
router.post('/', async (req, res) => {
  try {
    const novoUsuario = await db.Usuario.create(req.body);
    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(400).json({ error: 'Erro ao criar usuário', details: error.message });
  }
});

export default router;