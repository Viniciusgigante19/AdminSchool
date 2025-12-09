import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login/page";
import DashboardAdmin from "./pages/dashboard/admin/page";
import DashboardStudent from "./pages/dashboard/student/page";
import DashboardTeacher from "./pages/dashboard/teacher/page";
import ListUsuarios from "./pages/usuarios/CrudUsuarios";
import Chat from "./pages/component/chat/Chat";

export default function App() {
  const username = localStorage.getItem("username") || "Anônimo";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/admin" element={<DashboardAdmin />} />
        <Route path="/dashboard/student" element={<DashboardStudent />} />
        <Route path="/dashboard/teacher" element={<DashboardTeacher />} />
        <Route path="/dashboard/users" element={<ListUsuarios />} />
        <Route path="/chat" element={<Chat user={{ username }} />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}
