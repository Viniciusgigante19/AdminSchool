import { useEffect, useState } from "react";
import type { Usuario } from "./CrudUsuarios.types";

export default function ListUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<Partial<Usuario>>({});
  const [editId, setEditId] = useState<number | null>(null);

  // Buscar usuários
  const fetchUsuarios = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/usuarios");
      const data = await res.json();
      setUsuarios(data);
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  // Criar usuário
  const createUsuario = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      alert(`Usuário criado!\nLogin: ${data.username}\nSenha: ${data.senha}`);
      setForm({});
      fetchUsuarios();
    } catch (err) {
      console.error("Erro ao criar usuário:", err);
    }
  };

  // Atualizar usuário
  const updateUsuario = async () => {
    if (!editId) return;
    try {
      await fetch(`http://localhost:3000/api/usuarios/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setForm({});
      setEditId(null);
      fetchUsuarios();
    } catch (err) {
      console.error("Erro ao atualizar usuário:", err);
    }
  };

  // Deletar usuário
  const deleteUsuario = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/api/usuarios/${id}`, {
        method: "DELETE",
      });
      fetchUsuarios();
    } catch (err) {
      console.error("Erro ao deletar usuário:", err);
    }
  };

  if (loading) return <p className="p-6">Carregando usuários...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gerenciar Usuários</h1>

      {/* Formulário */}
      <div className="mb-6 space-x-2">
        <input
          placeholder="Username"
          value={form.username || ""}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="border p-2"
        />
        <input
          type="password"
          placeholder="Senha"
          value={form.senha || ""}
          onChange={(e) => setForm({ ...form, senha: e.target.value })}
          className="border p-2"
        />

        <select
          value={form.tipo_usuario || ""}
          onChange={(e) => setForm({ ...form, tipo_usuario: e.target.value })}
          className="border p-2"
        >
          <option value="">Selecione o tipo</option>
          <option value="aluno">Aluno</option>
          <option value="professor">Professor</option>
          <option value="administrador">Administrador</option>
        </select>

        <select
          value={form.nivel_acesso || ""}
          onChange={(e) => setForm({ ...form, nivel_acesso: e.target.value })}
          className="border p-2"
        >
          <option value="">Selecione o nível</option>
          <option value="limitado">Limitado</option>
          <option value="moderado">Moderado</option>
          <option value="total">Total</option>
        </select>

        <select
          value={form.status || ""}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="border p-2"
        >
          <option value="">Selecione o status</option>
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
          <option value="transferido">Transferido</option>
        </select>

        {editId ? (
          <button
            onClick={updateUsuario}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Atualizar
          </button>
        ) : (
          <button
            onClick={createUsuario}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Criar
          </button>
        )}
      </div>

      {/* Tabela */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Usuário</th>
            <th className="border border-gray-300 p-2">Tipo</th>
            <th className="border border-gray-300 p-2">Nível</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td className="border border-gray-300 p-2">{u.id}</td>
              <td className="border border-gray-300 p-2">{u.username}</td>
              <td className="border border-gray-300 p-2">{u.tipo_usuario}</td>
              <td className="border border-gray-300 p-2">{u.nivel_acesso}</td>
              <td className="border border-gray-300 p-2">{u.status}</td>
              <td className="border border-gray-300 p-2 space-x-2">
                <button
                  onClick={() => {
                    setEditId(u.id);
                    setForm(u);
                  }}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteUsuario(u.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
