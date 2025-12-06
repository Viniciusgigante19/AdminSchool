import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TeacherSidebar from "./components/Layout/teacherSidebar";
import Chat from "../../component/chat/Chat";

export default function TeacherDashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [presenceSummary, setPresenceSummary] = useState<any>(null);
  const [studentsSummary, setStudentsSummary] = useState<any>(null);
  const [recentActivities, setRecentActivities] = useState<any[]>([]);

  // Buscar dados da API
  useEffect(() => {
    // Usuário logado
    fetch("http://localhost:3000/api/usuarios/me") // ajuste o endpoint conforme seu backend
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Erro ao buscar usuário:", err));

    // Presenças
    fetch("http://localhost:3000/api/teacher/presence-summary")
      .then((res) => res.json())
      .then((data) => setPresenceSummary(data))
      .catch((err) => console.error("Erro ao buscar presenças:", err));

    // Alunos
    fetch("http://localhost:3000/api/teacher/students-summary")
      .then((res) => res.json())
      .then((data) => setStudentsSummary(data))
      .catch((err) => console.error("Erro ao buscar alunos:", err));

    // Atividades
    fetch("http://localhost:3000/api/teacher/recent-activities")
      .then((res) => res.json())
      .then((data) => setRecentActivities(data))
      .catch((err) => console.error("Erro ao buscar atividades:", err));
  }, []);

  if (!user || !presenceSummary || !studentsSummary) {
    return <p className="p-8">Carregando dados...</p>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <TeacherSidebar user={user} />

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Bem-vindo, {user.username || user.name}</h1>
          <p className="text-gray-600">Resumo rápido das suas turmas</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card: Presenças */}
          <Link to="/dashboard/teacher/attendance" className="block">
            <article className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Presenças</h3>
                <span className="text-sm text-gray-500">Hoje</span>
              </div>
              <div className="mt-4 space-y-1">
                <p className="text-sm text-gray-600">
                  Alunos presentes:{" "}
                  <span className="font-medium">{presenceSummary.today}</span> /{" "}
                  {presenceSummary.totalStudents}
                </p>
                <p className="text-sm text-gray-600">
                  Semana: <span className="font-medium">{presenceSummary.weekPercent}%</span>
                </p>
                <p className="text-sm text-gray-600">
                  Mês: <span className="font-medium">{presenceSummary.monthPercent}%</span>
                </p>
              </div>
            </article>
          </Link>

          {/* Card: Atividades */}
          <Link to="/dashboard/teacher/activities" className="block">
            <article className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Atividades</h3>
                <span className="text-sm text-gray-500">{recentActivities.length} recentes</span>
              </div>
              <div className="mt-4">
                <ul className="text-sm text-gray-700 space-y-2">
                  {recentActivities.slice(0, 3).map((a) => (
                    <li key={a.id} className="flex justify-between">
                      <span>{a.title}</span>
                      <span className="text-gray-400 text-xs">{a.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Link>

          {/* Card: Alunos */}
          <Link to="/dashboard/teacher/students" className="block">
            <article className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Alunos</h3>
                <span className="text-sm text-gray-500">Resumo</span>
              </div>
              <div className="mt-4 space-y-1">
                <p className="text-sm text-gray-600">
                  Total de alunos: <span className="font-medium">{studentsSummary.total}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Ausências hoje:{" "}
                  <span className="font-medium text-red-600">{studentsSummary.absentsToday}</span>
                </p>
              </div>
            </article>
          </Link>
        </section>

        {/* ChatBot */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold mb-2">ChatBot</h3>
            <Link to="/dashboard/teacher/chatbot" className="text-sm text-blue-600">
              Abrir
            </Link>
          </div>
          <p className="text-gray-500 mt-2">
            Tire dúvidas rápidas sobre presenças, atividades e informações da turma.
          </p>
        </div>

        {/* Chat integrado */}
        <div className="mt-10">
          <Chat user={user} />
        </div>
      </main>
    </div>
  );
}
