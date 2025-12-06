import express from 'express';
import db from '../../database/models/index.js';
import { broadcast } from '../../server.js';

const router = express.Router();

/*
 EXPLICAÇÃO:
 Aqui gerenciamos CRUD do administrador.
 Cada vez que um administrador é criado/atualizado/deletado,
 enviamos um evento WebSocket para atualizar o frontend automaticamente.
*/

// GET /administrador
router.get('/', async (req, res) => {
  try {
    const admins = await db.Administrador.findAll();
    res.json(admins);
  } catch (error) {
    console.error('Erro ao buscar administradores:', error);
    res.status(500).json({ error: 'Erro ao buscar administradores' });
  }
});

// GET /administrador/:id
router.get('/:id', async (req, res) => {
  try {
    const admin = await db.Administrador.findByPk(req.params.id);
    admin ? res.json(admin) : res.status(404).json({ error: 'Administrador não encontrado' });
  } catch (error) {
    console.error('Erro ao buscar administrador:', error);
    res.status(500).json({ error: 'Erro ao buscar administrador' });
  }
});

// POST /administrador
router.post('/', async (req, res) => {
  try {
    const novo = await db.Administrador.create(req.body);

    // Envia evento WebSocket
    broadcast({
      type: 'administrador_criado',
      data: novo,
    });

    res.status(201).json(novo);
  } catch (error) {
    console.error('Erro ao criar administrador:', error);
    res.status(400).json({ error: 'Erro ao criar administrador' });
  }
});

// PUT /administrador/:id
router.put('/:id', async (req, res) => {
  try {
    const admin = await db.Administrador.findByPk(req.params.id);
    if (!admin) return res.status(404).json({ error: 'Administrador não encontrado' });

    await admin.update(req.body);

    broadcast({
      type: 'administrador_atualizado',
      data: admin,
    });

    res.json(admin);
  } catch (error) {
    console.error('Erro ao atualizar administrador:', error);
    res.status(400).json({ error: 'Erro ao atualizar administrador' });
  }
});

// DELETE /administrador/:id
router.delete('/:id', async (req, res) => {
  try {
    const admin = await db.Administrador.findByPk(req.params.id);
    if (!admin) return res.status(404).json({ error: 'Administrador não encontrado' });

    await admin.destroy();

    broadcast({
      type: 'administrador_deletado',
      id: admin.id,
    });

    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar administrador:', error);
    res.status(500).json({ error: 'Erro ao deletar administrador' });
  }
});

export default router;
