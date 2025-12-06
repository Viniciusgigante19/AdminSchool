// src/pages/chat/Chat.tsx
import { useEffect, useState } from "react";
import type { User, ChatMessage } from "./Chat.types";

export default function Chat({ user }: { user: User }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000"); // ajuste porta conforme backend
    setWs(socket);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

  

      if (data.type === "chat") {
        setMessages((prev) => [
          ...prev,
          { id: Date.now(), from: data.from, message: data.message, type: "chat" },
        ]);
      }
    };

    return () => socket.close();
  }, []);

  const sendMessage = () => {
    if (ws && input.trim()) {
      ws.send(
        JSON.stringify({
          type: "chat",
          from: user.username,
          message: input,
        })
      );
      setInput("");
    }
  };

  return (
    <div className="border p-4 rounded bg-white shadow-md w-96">
      <h3 className="text-lg font-bold mb-2">Chat</h3>
      <div className="h-48 overflow-y-scroll border rounded p-2 mb-2">
        {messages.map((msg) => (
          <p key={msg.id}>
            <strong>{msg.from}:</strong> {msg.message}
          </p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={sendMessage}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
