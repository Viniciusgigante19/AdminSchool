import express from 'express';
import db from '../../database/models/index.js';
import { broadcast } from '../../server.js';

const router = express.Router();

// LISTAR
router.get('/', async (req, res) => {
  try {
    const itens = await db.Pagamento.findAll();
    res.json(itens);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pagamentos' });
  }
});

// LISTAR POR ID
router.get('/:id', async (req, res) => {
  try {
    const item = await db.Pagamento.findByPk(req.params.id);
    item ? res.json(item) : res.status(404).json({ error: 'Pagamento não encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pagamento' });
  }
});

// CRIAR
router.post('/', async (req, res) => {
  try {
    const novo = await db.Pagamento.create(req.body);

    broadcast({ type: 'pagamento_criado', data: novo });

    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar pagamento' });
  }
});

// ATUALIZAR
router.put('/:id', async (req, res) => {
  try {
    const item = await db.Pagamento.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Pagamento não encontrado' });

    await item.update(req.body);

    broadcast({ type: 'pagamento_atualizado', data: item });

    res.json(item);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar pagamento' });
  }
});

// DELETAR
router.delete('/:id', async (req, res) => {
  try {
    const item = await db.Pagamento.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Pagamento não encontrado' });

    await item.destroy();

    broadcast({ type: 'pagamento_deletado', id: item.id });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar pagamento' });
  }
});

export default router;
