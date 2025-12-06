import express from 'express';
import db from '../../models/index.js';
import { defaultAllowedOrigins } from 'vite';

const router = express.Router();

// update /alunos/:id
router.put('/:id', async (req, res) => {
  try {
    const aluno = await db.Aluno.findByPk(req.params.id);
    if (aluno) {
      await aluno.update(req.body);

      broadcast({
        type: "aluno_atualizado",
        data: aluno
      });

      res.json(aluno);
    } else {
      res.status(404).json({ error: 'Aluno não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao atualizar aluno:', error);
    res.status(400).json({ error: 'Erro ao atualizar aluno', details: error.message });
  }
});

export default router;