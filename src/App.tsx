import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login/page";
import DashboardAdmin from "./pages/dashboard/admin/page";
import DashboardStudent from "./pages/dashboard/student/page";
import DashboardTeacher from "./pages/dashboard/teacher/page";
import ListUsuarios from "./pages/usuarios/CrudUsuarios";
import Chat from "./pages/component/chat/Chat";

export default function App() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username") || "Anônimo";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard/admin" element={token && role==="admin" ? <DashboardAdmin/> : <Navigate to="/login"/>}/>
        <Route path="/dashboard/student" element={token && role==="student" ? <DashboardStudent/> : <Navigate to="/login"/>}/>
        <Route path="/dashboard/teacher" element={token && role==="teacher" ? <DashboardTeacher/> : <Navigate to="/login"/>}/>
        <Route path="/dashboard/users" element={token && role==="admin" ? <ListUsuarios/> : <Navigate to="/login"/>}/>
        <Route path="/chat" element={token ? <Chat user={{username}}/> : <Navigate to="/login"/>}/>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}
