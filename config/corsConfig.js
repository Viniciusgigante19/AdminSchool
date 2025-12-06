// permitir que o frontend (porta 5173) acesse o backend (porta 3000)
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:5173", // libera apenas seu frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

export default cors(corsOptions);
