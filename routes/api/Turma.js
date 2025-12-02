import express from 'express';
import db from '../../database/models/index.js';

const router = express.Router();

// GET /turmas - lista todas as turmas
router.get('/', async (req, res) => {
  try {
    const turmas = await db.Turma.findAll();
    res.json(turmas);
  } catch (error) {
    console.error('Erro ao buscar turmas:', error);
    res.status(500).json({ error: 'Erro ao buscar turmas', details: error.message });
  }
});

// GET /turmas/:id - busca turma por ID
router.get('/:id', async (req, res) => {
  try {
    const turma = await db.Turma.findByPk(req.params.id);
    if (turma) {
      res.json(turma);
    } else {
      res.status(404).json({ error: 'Turma não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao buscar turma por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar turma', details: error.message });
  }
});

// POST /turmas - cria nova turma
router.post('/', async (req, res) => {
  try {
    const novaTurma = await db.Turma.create(req.body);
    res.status(201).json(novaTurma);
  } catch (error) {
    console.error('Erro ao criar turma:', error);
    res.status(400).json({ error: 'Erro ao criar turma', details: error.message });
  }
});

// PUT /turmas/:id - atualiza turma
router.put('/:id', async (req, res) => {
  try {
    const turma = await db.Turma.findByPk(req.params.id);
    if (turma) {
      await turma.update(req.body);
      res.json(turma);
    } else {
      res.status(404).json({ error: 'Turma não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao atualizar turma:', error);
    res.status(400).json({ error: 'Erro ao atualizar turma', details: error.message });
  }
});

// DELETE /turmas/:id - remove turma
router.delete('/:id', async (req, res) => {
  try {
    const turma = await db.Turma.findByPk(req.params.id);
    if (turma) {
      await turma.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Turma não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao deletar turma:', error);
    res.status(500).json({ error: 'Erro ao deletar turma', details: error.message });
  }
});

export default router;
