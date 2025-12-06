import express from 'express';
import db from '../../models/index.js';

const router = express.Router()

// DELETE /alunos/:id
router.delete('/:id', async (req, res) => {
  try {
    const aluno = await db.Aluno.findByPk(req.params.id);
    if (aluno) {
      await aluno.destroy();

      // 🔥 AVISA QUE FOI DELETADO
      broadcast({
        type: "aluno_deletado",
        id: aluno.id
      });

      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Aluno não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao deletar aluno:', error);
    res.status(500).json({ error: 'Erro ao deletar aluno', details: error.message });
  }
});

export default router;