import express from 'express';
import dotenv from 'dotenv';
import http from "http";               // <-- IMPORTANTE
import { WebSocketServer } from "ws";   // <-- IMPORTANTE
import { sequelize } from './config/sequelize.js';
import routes from './routes/index.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(routes);

// --- CRIAR SERVIDOR HTTP (necessário para WebSocket) ---
const server = http.createServer(app);

// --- CRIAR SERVIDOR WEBSOCKET ---
const wss = new WebSocketServer({ server });

// Evento quando alguém conecta
wss.on("connection", (ws) => {
    console.log("Cliente WebSocket conectado!");

    ws.send(JSON.stringify({
        type: "connected",
        message: "WebSocket conectado com sucesso!"
    }));

    ws.on("message", (msg) => {
        console.log("Mensagem recebida do cliente:", msg.toString());
    });

    ws.on("close", () => {
        console.log("Cliente WebSocket desconectado");
    });
});

// --- FUNÇÃO BROADCAST PARA ENVIAR EVENTOS A TODOS OS CLIENTES ---
export const broadcast = (data) => {
    wss.clients.forEach((client) => {
        if (client.readyState === 1) {
            client.send(JSON.stringify(data));
        }
    });
};

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com banco estabelecida.');

        const PORT = process.env.NODE_PORT || 3000;

        // --- IMPORTANTE: USAR "server.listen" E NÃO "app.listen" ---
        server.listen(PORT, () => {
            console.log(`API + WebSocket rodando na porta ${PORT}`);
        });

    } catch (error) {
        console.error('Erro ao criar servidor:', error.message);
    }
}

startServer();
