import express from 'express';
import corsConfig from "./config/corsConfig.js";
import dotenv from 'dotenv';
import http from "http";
import { WebSocketServer } from "ws";
import { sequelize } from './config/sequelize.js';
import routes from './routes/routes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(corsConfig);
app.use(routes);

// --- CRIAR SERVIDOR HTTP (necessário para WebSocket) ---
const server = http.createServer(app);

// --- CRIAR SERVIDOR WEBSOCKET ---
const wss = new WebSocketServer({ server });

// Função broadcast
export const broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on("connection", (ws) => {
  console.log("Cliente conectado");

  // Notifica entrada (sem histórico, apenas broadcast)
  broadcast({
    type: "system",
    message: "Um usuário entrou no chat",
    from: "Sistema",
    id: Date.now(),
  });

  ws.on("message", (msg) => {
    const data = JSON.parse(msg.toString());

    if (data.type === "chat") {
      // Mensagem de usuário
      broadcast({
        type: "chat",
        from: data.from,
        message: data.message,
        id: Date.now(),
      });
    }
  });

  ws.on("close", () => {
    // Notifica saída
    broadcast({
      type: "system",
      message: "Um usuário saiu do chat",
      from: "Sistema",
      id: Date.now(),
    });
  });
});

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com banco estabelecida.');

    const PORT = process.env.NODE_PORT || 3000;
    server.listen(PORT, () => {
      console.log(`API + WebSocket rodando na porta ${PORT}`);
    });

  } catch (error) {
    console.error('Erro ao criar servidor:', error.message);
  }
}

startServer();
