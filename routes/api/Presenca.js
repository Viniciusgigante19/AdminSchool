import express from 'express';
import db from '../../database/models/index.js';

const router = express.Router();

// GET /presencas - lista todas as presenças
router.get('/', async (req, res) => {
  try {
    const presencas = await db.Presenca.findAll();
    res.json(presencas);
  } catch (error) {
    console.error('Erro ao buscar presenças:', error);
    res.status(500).json({ error: 'Erro ao buscar presenças', details: error.message });
  }
});

// GET /presencas/:id - busca presença por ID
router.get('/:id', async (req, res) => {
  try {
    const presenca = await db.Presenca.findByPk(req.params.id);
    if (presenca) {
      res.json(presenca);
    } else {
      res.status(404).json({ error: 'Presença não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao buscar presença por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar presença', details: error.message });
  }
});

// POST /presencas - cria nova presença
router.post('/', async (req, res) => {
  try {
    const novaPresenca = await db.Presenca.create(req.body);
    res.status(201).json(novaPresenca);
  } catch (error) {
    console.error('Erro ao criar presença:', error);
    res.status(400).json({ error: 'Erro ao criar presença', details: error.message });
  }
});

// PUT /presencas/:id - atualiza presença
router.put('/:id', async (req, res) => {
  try {
    const presenca = await db.Presenca.findByPk(req.params.id);
    if (presenca) {
      await presenca.update(req.body);
      res.json(presenca);
    } else {
      res.status(404).json({ error: 'Presença não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao atualizar presença:', error);
    res.status(400).json({ error: 'Erro ao atualizar presença', details: error.message });
  }
});

// DELETE /presencas/:id - remove presença
router.delete('/:id', async (req, res) => {
  try {
    const presenca = await db.Presenca.findByPk(req.params.id);
    if (presenca) {
      await presenca.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Presença não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao deletar presença:', error);
    res.status(500).json({ error: 'Erro ao deletar presença', details: error.message });
  }
});

export default router;
