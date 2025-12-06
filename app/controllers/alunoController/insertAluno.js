import express from 'express';
import db from '../../models/index.js';

const router = express.Router();

// POST /alunos
router.post('/', async (req, res) => {
  try {
    const novoAluno = await db.Aluno.create(req.body);

    // 🔥 ENVIA PARA TODOS NO WEBSOCKET
    broadcast({
      type: "aluno_criado",
      data: novoAluno
    });

    res.status(201).json(novoAluno);
  } catch (error) {
    console.error('Erro ao criar aluno:', error);
    res.status(400).json({ error: 'Erro ao criar aluno', details: error.message });
  }
});

export default router;