// /src/pages/StudentDashboard.tsx
import { Link } from "react-router-dom";
import StudentSidebar from "./components/Layout/StudentSidebar"; // ajuste o caminho conforme Vite

export default function StudentDashboard() {
  const user = {
    name: "Ana Souza Bueno",
    role: "Student",
    avatar: "https://i.pravatar.cc/150?img=15",
  };

  const presenceSummary = {
    today: "Presente",
    weekPercent: 92,
    monthPercent: 95,
  };

  const paymentsSummary = {
    pending: 1,
    lastPaymentDate: "2025-09-05",
  };

  const recentActivities = [
    { id: "a1", title: "Desenho: Animais da fazenda", date: "2025-10-10" },
    { id: "a2", title: "Atividade: Contar até 20", date: "2025-10-08" },
    { id: "a3", title: "Trabalho em grupo: Plantas", date: "2025-10-02" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar fixa */}
      <StudentSidebar user={user} />

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Bem-vindo, {user.name}</h1>
          <p className="text-gray-600">Resumo rápido das suas informações</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card: Presenças */}
          <Link to="/dashboard/student/attendance" className="block">
            <article className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Presenças</h3>
                <span className="text-sm text-gray-500">Último</span>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">
                  Hoje: <span className="font-medium">{presenceSummary.today}</span>
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
          <Link to="/dashboard/student/activities" className="block">
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

          {/* Card: Pagamentos */}
          <Link to="/dashboard/student/payments" className="block">
            <article className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Pagamentos</h3>
                <span className="text-sm text-gray-500">Status</span>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-1">
                  Pendentes:{" "}
                  <span className="font-medium text-red-600">{paymentsSummary.pending}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Último pagamento:{" "}
                  <span className="font-medium">{paymentsSummary.lastPaymentDate}</span>
                </p>
              </div>

              <div className="mt-4">
                <span className="inline-block text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  Ver boletos
                </span>
              </div>
            </article>
          </Link>
        </section>

        {/* ChatBot */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold mb-2">ChatBot</h3>
            <Link to="/dashboard/student/chatbot" className="text-sm text-blue-600">
              Abrir
            </Link>
          </div>
          <p className="text-gray-500 mt-2">
            Tire dúvidas rápidas sobre pagamentos, presença e atividades.
          </p>
        </div>
      </main>
    </div>
  );
}
