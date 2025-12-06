import express from 'express';
import db from '../../models/index.js';

const router = express.Router();

// GET /alunos/:id
router.get('/:id', async (req, res) => {
  try {
    const aluno = await db.Aluno.findByPk(req.params.id);
    if (aluno) {
      res.json(aluno);
    } else {
      res.status(404).json({ error: 'Aluno não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar aluno por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar aluno', details: error.message });
  }
});

export default router;