O servidor original utilizava:

app.listen(PORT);


Isso impedia o uso de WebSockets.
Para ativar WebSockets, foi necessário:

✔ Criar um servidor HTTP manualmente
import http from "http";
const server = http.createServer(app);

✔ Conectar o WebSocket ao servidor HTTP
import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ server });

✔ Iniciar o servidor usando server.listen()
server.listen(PORT, () => {
    console.log(`API + WebSocket rodando na porta ${PORT}`);
});


Agora a aplicação Express e o WebSocket compartilham a mesma porta.

🛰️ 2. Evento de conexão WebSocket

Foi adicionado:

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


Isso permite:

detectar novos clientes

receber mensagens

enviar mensagens diretas

logar desconexões

📢 3. Função broadcast() — Envio para todos os clientes

Criada para emitir eventos a todos os WebSockets conectados:

export const broadcast = (data) => {
    wss.clients.forEach((client) => {
        if (client.readyState === 1) {
            client.send(JSON.stringify(data));
        }
    });
};


Com isso, é possível:

enviar notificações

atualizar dashboards em tempo real

emitir eventos sempre que ocorrer algo no backend

⚠️ 4. Erro EADDRINUSE: address already in use :::3000

Esse erro aparece quando você tenta executar duas instâncias do servidor dentro do container.

Isso aconteceu quando você rodou:

await import("./server.js")


dentro do REPL (node).

🔎 Por quê?

Porque o Docker já estava rodando o servidor na porta 3000.
Quando o REPL tenta rodar o servidor novamente → porta já está em uso.

✔ Solução aplicada

O servidor agora só inicia se:

START_SERVER !== "false"


Assim, para testar dentro do container sem iniciar o servidor:

docker compose exec api-node env START_SERVER=false node


Isso permite acessar módulos, inclusive broadcast(), sem travar portas.

🧪 5. Como testar o WebSocket
✔ 1. Acesse o tester WebSocket:

https://piehost.com/websocket-tester

Use:

ws://localhost:3000


Se tudo estiver certo, receberá:

{
  "type": "connected",
  "message": "WebSocket conectado com sucesso!"
}

✔ 2. Envie uma mensagem de teste:
ola servidor


Verifique o Docker logs:

docker compose logs -f api-node


Você verá:

Mensagem recebida do cliente: ola servidor

🚀 6. Endpoint REST para testar broadcast

Criado endpoint especial:

GET /ws/test-broadcast


Código:

router.get("/ws/test-broadcast", (req, res) => {
    broadcast({
        type: "server-test",
        message: "Mensagem de broadcast enviada com sucesso!"
    });

    res.json({ ok: true, sent: true });
});

✔ Como testar

Abra no navegador ou Insomnia:

http://localhost:3000/ws/test-broadcast


O WebSocket recebe:

{
  "type": "server-test",
  "message": "Mensagem de broadcast enviada com sucesso!"
}

🛑 7. O que não fazer
❌ NÃO rode:
node
await import("./server.js")


Isso sempre causará:

EADDRINUSE

✔ Use o endpoint REST

Ou importe com o servidor desativado:

START_SERVER=false node

🐳 8. Comandos úteis (Docker)
Entrar no container
docker compose exec api-node sh

Ver logs em tempo real
docker compose logs -f api-node

Derrubar e subir tudo novamente
docker compose down
docker compose up --build -d