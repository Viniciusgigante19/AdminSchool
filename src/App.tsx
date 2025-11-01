import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/page";
import DashboardAdmin from "./pages/dashboard/admin/page";
import DashboardStudent from "./pages/dashboard/student/page"
import DashboardTeacher from "./pages/dashboard/teacher/page"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Dashboard/Admin" element={<DashboardAdmin />} />
        <Route path="/Dashboard/student" element={<DashboardStudent />} />
        <Route path="/Dashboard/teacher" element={<DashboardTeacher />} />
      </Routes>
    </BrowserRouter>
  );
}
