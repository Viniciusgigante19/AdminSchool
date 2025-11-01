// src/app/dashboard/page.tsx
export default function DashboardPage() {
  // Usuário mock
  const user = {
    name: "Maria Oliveira",
    role: "Admin",
    avatar: "https://i.pravatar.cc/150?img=32",
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Menu lateral */}
      <aside className="w-64 bg-white shadow-md p-6">
        <div className="flex flex-col items-center mb-8">
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h2 className="text-xl font-bold">{user.name}</h2>
          <span className="text-gray-500">{user.role}</span>
        </div>

        <nav className="flex flex-col gap-3">
          <a href="/dashboard" className="py-2 px-4 rounded bg-blue-100">
            Dashboard
          </a>
          <a href="/dashboard/payments" className="py-2 px-4 rounded hover:bg-blue-100">
            Pagamentos
          </a>
          <a href="/dashboard/attendance" className="py-2 px-4 rounded hover:bg-blue-100">
            Presenças
          </a>
          <a href="/dashboard/activities" className="py-2 px-4 rounded hover:bg-blue-100">
            Atividades
          </a>
          {user.role === "Admin" && (
            <a href="/dashboard/users" className="py-2 px-4 rounded hover:bg-blue-100">
              Usuários
            </a>
          )}
          <a href="/dashboard/chatbot" className="py-2 px-4 rounded hover:bg-blue-100">
            ChatBot
          </a>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Bem-vindo ao Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Selecione um módulo para acessar detalhes de pagamentos, presenças ou atividades.
        </p>

        {/* Cards de módulos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/dashboard/payments"
            className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">Pagamentos</h3>
            <p className="text-gray-500">Registre e acompanhe pagamentos e boletos.</p>
          </a>

          <a
            href="/dashboard/attendance"
            className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">Presenças</h3>
            <p className="text-gray-500">Registre e visualize frequência dos alunos.</p>
          </a>

          <a
            href="/dashboard/activities"
            className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">Atividades</h3>
            <p className="text-gray-500">Cadastre e acompanhe atividades pedagógicas.</p>
          </a>

          {user.role === "Admin" && (
            <a
              href="/dashboard/users"
              className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Usuários</h3>
              <p className="text-gray-500">Gerencie contas e permissões de usuários.</p>
            </a>
          )}

          <a
            href="/dashboard/chatbot"
            className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">ChatBot</h3>
            <p className="text-gray-500">Suporte e informações para pais e responsáveis.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
