import db from '../../models/index.js';

export default async function getUsuarios(req, res) {
  try {
    const usuarios = await db.Usuario.findAll({
      attributes: { exclude: ['senha'] } // não expõe senha
    });
    res.json(usuarios);
  } catch (error) {
    console.error('Erro ao buscar usuarios:', error);
    res.status(500).json({ error: 'Erro ao buscar usuarios', details: error.message });
  }
}