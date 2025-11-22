import express from 'express';
import db from '../../database/models/index.js';

const router = express.Router();

// GET /pagamentos - lista todos os pagamentos
router.get('/', async (req, res) => {
  try {
    const pagamentos = await db.Pagamento.findAll();
    res.json(pagamentos);
  } catch (error) {
    console.error('Erro ao buscar pagamentos:', error);
    res.status(500).json({ error: 'Erro ao buscar pagamentos', details: error.message });
  }
});

// GET /pagamentos/:id - busca pagamento por ID
router.get('/:id', async (req, res) => {
  try {
    const pagamento = await db.Pagamento.findByPk(req.params.id);
    if (pagamento) {
      res.json(pagamento);
    } else {
      res.status(404).json({ error: 'Pagamento não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar pagamento por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar pagamento', details: error.message });
  }
});

// POST /pagamentos - cria novo pagamento
router.post('/', async (req, res) => {
  try {
    const novoPagamento = await db.Pagamento.create(req.body);
    res.status(201).json(novoPagamento);
  } catch (error) {
    console.error('Erro ao criar pagamento:', error);
    res.status(400).json({ error: 'Erro ao criar pagamento', details: error.message });
  }
});

// PUT /pagamentos/:id - atualiza pagamento
router.put('/:id', async (req, res) => {
  try {
    const pagamento = await db.Pagamento.findByPk(req.params.id);
    if (pagamento) {
      await pagamento.update(req.body);
      res.json(pagamento);
    } else {
      res.status(404).json({ error: 'Pagamento não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao atualizar pagamento:', error);
    res.status(400).json({ error: 'Erro ao atualizar pagamento', details: error.message });
  }
});

// DELETE /pagamentos/:id - remove pagamento
router.delete('/:id', async (req, res) => {
  try {
    const pagamento = await db.Pagamento.findByPk(req.params.id);
    if (pagamento) {
      await pagamento.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Pagamento não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao deletar pagamento:', error);
    res.status(500).json({ error: 'Erro ao deletar pagamento', details: error.message });
  }
});

export default router;
