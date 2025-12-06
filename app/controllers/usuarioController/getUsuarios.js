import express from 'express';
import db from '../../models/index.js';

const router = express.Router();


// GET /usuarios - lista todos os usuários
router.get('/', async (req, res) => {
  try {
    const usuario = await db.Usuario.findAll();
    res.json(usuario);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários', details: error.message });
  }
});

export default router;