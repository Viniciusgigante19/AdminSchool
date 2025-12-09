import { useState } from "react";
import type { User } from "./Chat.types";
import { useWebSocket } from "../../hooks/useWebSocket";

export default function Chat({ user }: { user: User }) {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useWebSocket("ws://localhost:3000"); // ajuste a porta conforme seu backend

  const handleSend = () => {
    if (input.trim()) {
      sendMessage({
        from: user.username,
        message: input,
        type: "chat",
      });
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
          onClick={handleSend}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}