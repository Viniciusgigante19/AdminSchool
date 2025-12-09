import db from '../../models/index.js';

export default async function getUsuarioByName(req, res) {
  try {
    const { name } = req.params;

    const usuario = await db.Usuario.findOne({
      where: { username: name },
      attributes: [
        'id',
        'username',
        'tipo_usuario',
        'nivel_acesso',
        'status',
        'senha'
      ] // retorna senha por enquanto
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    return res.json(usuario);
  } catch (error) {
    console.error('Erro ao buscar usuário por nome:', error);
    return res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
}