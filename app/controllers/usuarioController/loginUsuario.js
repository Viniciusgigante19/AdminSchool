import express from 'express';
import db from '../../models/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'; // para comparar senha com hash

export default async function loginUsuario(req, res) {
  const { username, senha } = req.body;

  try {
    const usuario = await db.Usuario.findOne({ where: { username } });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // compara senha com hash
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    // gera token JWT
    const token = jwt.sign(
      { id: usuario.id, username: usuario.username, tipo_usuario: usuario.tipo_usuario },
      process.env.JWT_SECRET, // sempre usar variável de ambiente
      { expiresIn: '1h' }
    );

    return res.json({
      token,
      user: {
        id: usuario.id,
        username: usuario.username,
        tipo_usuario: usuario.tipo_usuario,
        nivel_acesso: usuario.nivel_acesso,
        status: usuario.status,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
