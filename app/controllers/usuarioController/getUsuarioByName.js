import express from 'express';
import db from '../../models/index.js';

const router = express.Router();

// GET /usuarios/:name - busca usuário por ID
router.get('/:name', async (req, res) => {
  try {
    const usuario = await db.Usuario.findByPk(req.params.name);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar usuário por nome:', error);
    res.status(500).json({ error: 'Erro ao buscar usuário', details: error.message });
  }
});

export default router;