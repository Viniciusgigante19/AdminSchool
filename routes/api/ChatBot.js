import express from 'express';
import db from '../../database/models/index.js';

const router = express.Router();

// GET /chatbot - lista todas as interações
router.get('/', async (req, res) => {
  try {
    const mensagens = await db.ChatBot.findAll();
    res.json(mensagens);
  } catch (error) {
    console.error('Erro ao buscar mensagens do chatbot:', error);
    res.status(500).json({ error: 'Erro ao buscar mensagens', details: error.message });
  }
});

// GET /chatbot/:id - busca interação por ID
router.get('/:id', async (req, res) => {
  try {
    const mensagem = await db.ChatBot.findByPk(req.params.id);
    if (mensagem) {
      res.json(mensagem);
    } else {
      res.status(404).json({ error: 'Mensagem não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao buscar mensagem por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar mensagem', details: error.message });
  }
});

// POST /chatbot - cria nova interação
router.post('/', async (req, res) => {
  try {
    const novaMensagem = await db.ChatBot.create(req.body);
    res.status(201).json(novaMensagem);
  } catch (error) {
    console.error('Erro ao criar mensagem do chatbot:', error);
    res.status(400).json({ error: 'Erro ao criar mensagem', details: error.message });
  }
});

// PUT /chatbot/:id - atualiza interação
router.put('/:id', async (req, res) => {
  try {
    const mensagem = await db.ChatBot.findByPk(req.params.id);
    if (mensagem) {
      await mensagem.update(req.body);
      res.json(mensagem);
    } else {
      res.status(404).json({ error: 'Mensagem não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao atualizar mensagem:', error);
    res.status(400).json({ error: 'Erro ao atualizar mensagem', details: error.message });
  }
});

// DELETE /chatbot/:id - remove interação
router.delete('/:id', async (req, res) => {
  try {
    const mensagem = await db.ChatBot.findByPk(req.params.id);
    if (mensagem) {
      await mensagem.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Mensagem não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao deletar mensagem:', error);
    res.status(500).json({ error: 'Erro ao deletar mensagem', details: error.message });
  }
});

export default router;
