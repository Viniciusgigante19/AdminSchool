import express from 'express';
import db from '../../database/models/index.js';

const router = express.Router();

// GET /usuarios - lista todos os usuários
router.get('/', async (req, res) => {
  try {
    const usuarios = await db.Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários', details: error.message });
  }
});

// GET /usuarios/:id - busca usuário por ID
router.get('/:id', async (req, res) => {
  try {
    const usuario = await db.Usuario.findByPk(req.params.id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar usuário por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar usuário', details: error.message });
  }
});

// POST /usuarios - cria novo usuário
router.post('/', async (req, res) => {
  try {
    const novoUsuario = await db.Usuario.create(req.body);
    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(400).json({ error: 'Erro ao criar usuário', details: error.message });
  }
});

// PUT /usuarios/:id - atualiza usuário
router.put('/:id', async (req, res) => {
  try {
    const usuario = await db.Usuario.findByPk(req.params.id);
    if (usuario) {
      await usuario.update(req.body);
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(400).json({ error: 'Erro ao atualizar usuário', details: error.message });
  }
});

// DELETE /usuarios/:id - remove usuário
router.delete('/:id', async (req, res) => {
  try {
    const usuario = await db.Usuario.findByPk(req.params.id);
    if (usuario) {
      await usuario.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    res.status(500).json({ error: 'Erro ao deletar usuário', details: error.message });
  }
});

export default router;
