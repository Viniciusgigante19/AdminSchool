import express from 'express';
import db from '../../models/index.js';
import bcrypt from 'bcryptjs';

export default async function updateUsuario(req, res) {
  try {
    const { id } = req.params;
    const { username, senha, tipo_usuario, nivel_acesso, status } = req.body;

    // Busca usuário pelo ID
    const usuario = await db.Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Atualiza senha apenas se enviada
    if (senha && senha.trim() !== "") {
      const senhaHash = await bcrypt.hash(senha, 10);
      usuario.senha = senhaHash;
    }

    // Atualiza os outros campos se enviados
    if (username) usuario.username = username;
    if (tipo_usuario) usuario.tipo_usuario = tipo_usuario;
    if (nivel_acesso) usuario.nivel_acesso = nivel_acesso;
    if (status) usuario.status = status;

    // Salva alterações
    await usuario.save();

    // Retorna dados sem expor hash
    return res.json({
      id: usuario.id,
      username: usuario.username,
      tipo_usuario: usuario.tipo_usuario,
      nivel_acesso: usuario.nivel_acesso,
      status: usuario.status,
    });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    return res.status(400).json({ error: 'Erro ao atualizar usuário', details: error.message });
  }
}