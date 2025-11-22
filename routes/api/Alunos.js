import express from 'express';
import db from '../../database/models/index.js';

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

// POST /alunos
router.post('/', async (req, res) => {
  try {
    const novoAluno = await db.Aluno.create(req.body);
    res.status(201).json(novoAluno);
  } catch (error) {
    console.error('Erro ao criar aluno:', error);
    res.status(400).json({ error: 'Erro ao criar aluno', details: error.message });
  }
});

// PUT /alunos/:id
router.put('/:id', async (req, res) => {
  try {
    const aluno = await db.Aluno.findByPk(req.params.id);
    if (aluno) {
      await aluno.update(req.body);
      res.json(aluno);
    } else {
      res.status(404).json({ error: 'Aluno não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao atualizar aluno:', error);
    res.status(400).json({ error: 'Erro ao atualizar aluno', details: error.message });
  }
});

// DELETE /alunos/:id
router.delete('/:id', async (req, res) => {
  try {
    const aluno = await db.Aluno.findByPk(req.params.id);
    if (aluno) {
      await aluno.destroy();
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
