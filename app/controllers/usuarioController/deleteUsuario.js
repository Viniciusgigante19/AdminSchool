import express from 'express';
import db from '../../models/index.js';

const router = express.Router();

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
