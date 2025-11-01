// /src/pages/TeacherDashboardPage.tsx
import { Link } from "react-router-dom";
import TeacherSidebar from "./components/Layout/teacherSidebar";

export default function TeacherDashboardPage() {
  const user = {
    name: "Carlos Pereira",
    role: "Professor",
    avatar: "https://i.pravatar.cc/150?img=32",
  };

  const presenceSummary = {
    today: 18,
    totalStudents: 20,
    weekPercent: 90,
    monthPercent: 95,
  };

  const studentsSummary = {
    total: 20,
    absentsToday: 2,
  };

  const recentActivities = [
    { id: "t1", title: "Matemática - Frações", date: "2025-10-10" },
    { id: "t2", title: "Ciências - Plantas", date: "2025-10-08" },
    { id: "t3", title: "História do Brasil", date: "2025-10-05" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <TeacherSidebar user={user} />

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Bem-vindo, {user.name}</h1>
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
              <div className="mt-4">
                <span className="inline-block text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  Ver detalhes
                </span>
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
              <div className="mt-4">
                <span className="inline-block text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  Ver todas
                </span>
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
              <div className="mt-4">
                <span className="inline-block text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  Ver lista
                </span>
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
      </main>
    </div>
  );
}
