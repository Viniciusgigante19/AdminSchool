// /src/pages/StudentDashboard.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StudentSidebar from "./components/Layout/StudentSidebar";

export default function StudentDashboard() {
  // Estado do usuário logado
  const [user, setUser] = useState<any>(null);

  // Estados para resumos
  const [presenceSummary, setPresenceSummary] = useState<any>(null);
  const [paymentsSummary, setPaymentsSummary] = useState<any>(null);
  const [recentActivities, setRecentActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect para buscar dados da API
  useEffect(() => {
    async function fetchDashboardData() {
      try {
        // Recupera usuário do localStorage (salvo no login)
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);

        // Exemplo de chamadas à API
        const [presRes, payRes, actRes] = await Promise.all([
          fetch(`http://localhost:3000/api/alunos/${storedUser.id}/presencas`),
          fetch(`http://localhost:3000/api/alunos/${storedUser.id}/pagamentos`),
          fetch(`http://localhost:3000/api/alunos/${storedUser.id}/atividades`),
        ]);

        const presData = await presRes.json();
        const payData = await payRes.json();
        const actData = await actRes.json();

        setPresenceSummary(presData);
        setPaymentsSummary(payData);
        setRecentActivities(actData);
      } catch (err) {
        console.error("Erro ao carregar dados do dashboard:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  if (loading) return <p className="p-8">Carregando dados...</p>;
  if (!user) return <p className="p-8">Usuário não encontrado</p>;

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
              <h3 className="text-lg font-semibold">Presenças</h3>
              <p>Hoje: {presenceSummary?.today}</p>
              <p>Semana: {presenceSummary?.weekPercent}%</p>
              <p>Mês: {presenceSummary?.monthPercent}%</p>
            </article>
          </Link>

          {/* Card: Atividades */}
          <Link to="/dashboard/student/activities" className="block">
            <article className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">Atividades</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                {recentActivities.slice(0, 3).map((a) => (
                  <li key={a.id} className="flex justify-between">
                    <span>{a.titulo}</span>
                    <span className="text-gray-400 text-xs">{a.data_entrega}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Link>

          {/* Card: Pagamentos */}
          <Link to="/dashboard/student/payments" className="block">
            <article className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">Pagamentos</h3>
              <p>Pendentes: {paymentsSummary?.pendentes}</p>
              <p>Último pagamento: {paymentsSummary?.ultimoPagamento}</p>
            </article>
          </Link>
        </section>
      </main>
    </div>
  );
}
