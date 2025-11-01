// /app/dashboard/teacher/components/Layout/TeacherSidebar.tsx
interface SidebarProps {
  user: { name: string; role: string; avatar: string };
}

export default function TeacherSidebar({ user }: SidebarProps) {
  if (!user) return null; // segurança

  const links = [
    { label: "Dashboard", href: "/dashboard/teacher" },
    { label: "Presenças", href: "/dashboard/teacher/attendance" },
    { label: "Atividades", href: "/dashboard/teacher/activities" },
    { label: "Alunos", href: "/dashboard/teacher/students" },
    { label: "ChatBot", href: "/dashboard/teacher/chatbot" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md p-6">
      <div className="flex flex-col items-center mb-8">
        <img src={user.avatar} alt="Avatar" className="w-20 h-20 rounded-full mb-4" />
        <h2 className="text-xl font-bold">{user.name}</h2>
        <span className="text-gray-500">{user.role}</span>
      </div>

      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="py-2 px-4 rounded hover:bg-blue-100"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
