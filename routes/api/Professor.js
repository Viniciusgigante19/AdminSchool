import express from 'express';
import db from '../../database/models/index.js';

const router = express.Router();

// GET /professores - lista todos os professores
router.get('/', async (req, res) => {
  try {
    const professores = await db.Professor.findAll();
    res.json(professores);
  } catch (error) {
    console.error('Erro ao buscar professores:', error);
    res.status(500).json({ error: 'Erro ao buscar professores', details: error.message });
  }
});

// GET /professores/:id - busca professor por ID
router.get('/:id', async (req, res) => {
  try {
    const professor = await db.Professor.findByPk(req.params.id);
    if (professor) {
      res.json(professor);
    } else {
      res.status(404).json({ error: 'Professor não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar professor por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar professor', details: error.message });
  }
});

// POST /professores - cria novo professor
router.post('/', async (req, res) => {
  try {
    const novoProfessor = await db.Professor.create(req.body);
    res.status(201).json(novoProfessor);
  } catch (error) {
    console.error('Erro ao criar professor:', error);
    res.status(400).json({ error: 'Erro ao criar professor', details: error.message });
  }
});

// PUT /professores/:id - atualiza professor
router.put('/:id', async (req, res) => {
  try {
    const professor = await db.Professor.findByPk(req.params.id);
    if (professor) {
      await professor.update(req.body);
      res.json(professor);
    } else {
      res.status(404).json({ error: 'Professor não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao atualizar professor:', error);
    res.status(400).json({ error: 'Erro ao atualizar professor', details: error.message });
  }
});

// DELETE /professores/:id - remove professor
router.delete('/:id', async (req, res) => {
  try {
    const professor = await db.Professor.findByPk(req.params.id);
    if (professor) {
      await professor.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Professor não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao deletar professor:', error);
    res.status(500).json({ error: 'Erro ao deletar professor', details: error.message });
  }
});

export default router;
