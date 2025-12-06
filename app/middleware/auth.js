// middleware/auth.js
import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "segredo123");
    req.user = decoded; // adiciona dados do usuário na requisição
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido ou expirado" });
  }
}