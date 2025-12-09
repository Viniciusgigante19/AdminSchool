import express from 'express';
import db from '../../models/index.js';
import bcrypt from 'bcryptjs';

export default async function insertUsuario(req, res) {
  try {
    const { username, senha, tipo_usuario, nivel_acesso, status } = req.body;

    if (!username) {
      return res.status(400).json({ error: "Username é obrigatório" });
    }

    // Se não vier senha, gera uma aleatória
    const senhaFinal = senha && senha.trim() !== ""
      ? senha
      : Math.random().toString(36).slice(-8);

    // Gera hash da senha antes de salvar
    const senhaHash = await bcrypt.hash(senhaFinal, 10);

    const novoUsuario = await db.Usuario.create({
      username,
      senha: senhaHash, // salva hash, não texto puro
      tipo_usuario,
      nivel_acesso,
      status,
    });

    // Retorna usuário + senha em texto puro (sem expor hash)
    res.status(201).json({
      id: novoUsuario.id,
      username: novoUsuario.username,
      tipo_usuario: novoUsuario.tipo_usuario,
      nivel_acesso: novoUsuario.nivel_acesso,
      status: novoUsuario.status,
      senha: senhaFinal, // senha que o admin deve entregar ao usuário
    });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(400).json({ error: "Erro ao criar usuário", details: error.message });
  }
}