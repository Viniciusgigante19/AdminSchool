import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/page";
import DashboardAdmin from "./pages/dashboard/admin/page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Dashboard/Admin" element={<DashboardAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}
