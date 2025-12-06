//consome dados de usuarios em localhost:3000/api/usuarios
import { useEffect, useState } from "react";

interface Usuario {
  id: number;
  username: string;
  tipo_usuario: string;
  status: string;
}

export default function ListUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/usuarios")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao buscar usuários");
        }
        return res.json();
      })
      .then((data) => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="p-6">Carregando usuários...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Usuários</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Usuário</th>
            <th className="border border-gray-300 p-2">Tipo</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td className="border border-gray-300 p-2">{u.id}</td>
              <td className="border border-gray-300 p-2">{u.username}</td>
              <td className="border border-gray-300 p-2">{u.tipo_usuario}</td>
              <td className="border border-gray-300 p-2">{u.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
