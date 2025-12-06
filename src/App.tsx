import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login/page";
import DashboardAdmin from "./pages/dashboard/admin/page";
import DashboardStudent from "./pages/dashboard/student/page";
import DashboardTeacher from "./pages/dashboard/teacher/page";
import ListUsuarios from "./pages/usuarios/ListUsuarios";
import Chat from "./pages/component/chat/Chat"; // importa o chat

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Dashboard/Admin" element={<DashboardAdmin />} />
        <Route path="/Dashboard/student" element={<DashboardStudent />} />
        <Route path="/Dashboard/teacher" element={<DashboardTeacher />} />
        <Route path="/dashboard/users" element={<ListUsuarios />} />
        <Route path="/chat" element={<Chat user={{ username: "Jefferson" }} />} />
      </Routes>
    </BrowserRouter>
  );
}
