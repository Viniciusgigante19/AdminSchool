import { useEffect, useState } from "react";
import type { ChatMessage } from "../component/chat/Chat.types";

export function useWebSocket(url: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);
    setWs(socket);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "chat" || data.type === "system") {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            from: data.from,
            message: data.message,
            type: data.type,
          },
        ]);
      }
    };

    return () => socket.close();
  }, [url]);

  const sendMessage = (msg: Omit<ChatMessage, "id">) => {
    if (ws) {
      ws.send(JSON.stringify(msg));
    }
  };

  return { messages, sendMessage };
}
