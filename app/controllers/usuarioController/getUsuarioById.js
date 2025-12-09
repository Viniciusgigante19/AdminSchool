import db from '../../models/index.js';

export default async function getUsuarioById(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const usuario = await db.Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.json(usuario);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
}
