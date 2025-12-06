import express from 'express';
import db from '../../models/index.js';

const router = express.Router();

// GET /alunos
router.get('/', async (req, res) => {
  try {
    const alunos = await db.Aluno.findAll();
    res.json(alunos);
  } catch (error) {
    console.error('Erro ao buscar alunos:', error);
    res.status(500).json({ error: 'Erro ao buscar alunos', details: error.message });
  }
});

export default router;
