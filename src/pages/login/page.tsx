import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login bem-sucedido!");
        console.log("Usuário autenticado:", data);

        // salvar dados no localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.tipo_usuario); // administrador | professor | aluno
        localStorage.setItem("nivel_acesso", data.nivel_acesso);

        // redirecionar para o dashboard correto
        if (data.tipo_usuario === "administrador") {
          navigate("/dashboard/admin");   // 👈 minúsculo
        } else if (data.tipo_usuario === "professor") {
          navigate("/dashboard/teacher"); // 👈 minúsculo
        } else if (data.tipo_usuario === "aluno") {
          navigate("/dashboard/student"); // 👈 minúsculo
        } else {
          navigate("/login"); // fallback
        }
      } else {
        alert(data.error || "Falha no login");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro de conexão com servidor");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md transform transition duration-500 hover:scale-105"
      >
        <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
          AdminSchool
        </h1>

        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Usuário</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Digite seu usuário"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-500 transform transition duration-300 hover:scale-105"
        >
          Entrar
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">
          Sistema de Gestão Escolar Infantil
        </p>
      </form>
    </div>
  );
}
