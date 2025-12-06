export type User = {
  username: string;
  role?: string;
  avatar?: string;
};

export type ChatMessage = {
  id: number;
  from: string;
  message: string;
  type: "chat" | "system";
};
