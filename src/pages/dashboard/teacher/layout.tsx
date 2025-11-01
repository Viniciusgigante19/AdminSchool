// /app/dashboard/teacher/layout.tsx
import TeacherSidebar from "./components/Layout/teacherSidebar";

const user = {
  name: "Carlos Pereira",
  role: "Professor",
  avatar: "https://i.pravatar.cc/150?img=32",
};

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <TeacherSidebar user={user} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
