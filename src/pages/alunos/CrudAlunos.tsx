import { useEffect, useState } from "react";
import type { Aluno } from "./CrudAlunos.types" 

export default function CrudAlunos() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<Partial<Aluno>>({});
  const [editId, setEditId] = useState<number | null>(null);

  // Buscar alunos
  const fetchAlunos = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/alunos");
      const data = await res.json();
      setAlunos(data);
    } catch (err) {
      console.error("Erro ao buscar alunos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlunos();
  }, []);

  // Criar aluno
  const createAluno = async () => {
    try {
      await fetch("http://localhost:3000/api/alunos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setForm({});
      fetchAlunos();
    } catch (err) {
      console.error("Erro ao criar aluno:", err);
    }
  };

  // Atualizar aluno
  const updateAluno = async () => {
    if (!editId) return;
    try {
      await fetch(`http://localhost:3000/api/alunos/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setForm({});
      setEditId(null);
      fetchAlunos();
    } catch (err) {
      console.error("Erro ao atualizar aluno:", err);
    }
  };

  // Deletar aluno
  const deleteAluno = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/api/alunos/${id}`, {
        method: "DELETE",
      });
      fetchAlunos();
    } catch (err) {
      console.error("Erro ao deletar aluno:", err);
    }
  };

  if (loading) return <p className="p-6">Carregando alunos...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gerenciar Alunos</h1>

      {/* Formulário */}
      <div className="mb-6 space-x-2">
        <input
          placeholder="Nome"
          value={form.nome || ""}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Data de Nascimento (YYYY-MM-DD)"
          value={form.data_nascimento || ""}
          onChange={(e) => setForm({ ...form, data_nascimento: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="CPF"
          value={form.cpf || ""}
          onChange={(e) => setForm({ ...form, cpf: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Responsável"
          value={form.responsavel_nome || ""}
          onChange={(e) => setForm({ ...form, responsavel_nome: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Telefone"
          value={form.responsavel_telefone || ""}
          onChange={(e) =>
            setForm({ ...form, responsavel_telefone: e.target.value })
          }
          className="border p-2"
        />
        <input
          placeholder="Email"
          value={form.responsavel_email || ""}
          onChange={(e) =>
            setForm({ ...form, responsavel_email: e.target.value })
          }
          className="border p-2"
        />

        {editId ? (
          <button
            onClick={updateAluno}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Atualizar
          </button>
        ) : (
          <button
            onClick={createAluno}
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
            <th className="border border-gray-300 p-2">Nome</th>
            <th className="border border-gray-300 p-2">Nascimento</th>
            <th className="border border-gray-300 p-2">CPF</th>
            <th className="border border-gray-300 p-2">Responsável</th>
            <th className="border border-gray-300 p-2">Telefone</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((a) => (
            <tr key={a.id}>
              <td className="border border-gray-300 p-2">{a.id}</td>
              <td className="border border-gray-300 p-2">{a.nome}</td>
              <td className="border border-gray-300 p-2">{a.data_nascimento}</td>
              <td className="border border-gray-300 p-2">{a.cpf}</td>
              <td className="border border-gray-300 p-2">{a.responsavel_nome}</td>
              <td className="border border-gray-300 p-2">{a.responsavel_telefone}</td>
              <td className="border border-gray-300 p-2">{a.responsavel_email}</td>
              <td className="border border-gray-300 p-2 space-x-2">
                <button
                  onClick={() => {
                    setEditId(a.id);
                    setForm(a);
                  }}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteAluno(a.id)}
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
