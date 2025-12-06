import express from 'express';
import db from '../../models/index.js';

const router = express.Router();

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

export default router;