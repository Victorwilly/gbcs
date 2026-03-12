import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Programs from "./pages/Programs/Programs";
import Contact from "./pages/Contact/Contact";
import Admissions from "./pages/Admissions/Admissions";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import LoginStudent from "./pages/Login/LoginStudent";
import LoginLecturer from "./pages/Login/LoginLecturer";
import LoginAdministrator from "./pages/Login/LoginAdmistrator";
import DashboardLayout from "./components/Layout/DashboardLayout";
import AdminHome from "./pages/Dashboard/Admin/AdminHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />

        {/* login components */}
        <Route path="/login" element={<Login />} />
        <Route path="/login/administrator" element={<LoginAdministrator />} />
        <Route path="/login/student" element={<LoginStudent />} />
        <Route path="/login/lecturer" element={<LoginLecturer />} />
      </Route>

      {/* dashboard routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* admin routes */}
        <Route path="/dashboard/admin" element={<AdminHome />} />
        {/* <Route path="/dashboard/admin/students" element={<AdminHome />} /> */}
        {/* <Route path="/dashboard/admin/staffs" element={<DashboardLayout />} /> */}
        {/* <Route path="/dashboard/admin/courses" element={<DashboardLayout />} /> */}
        {/* <Route path="/dashboard/admin/timetables" element={<DashboardLayout />} /> */}
        {/* <Route path="/dashboard/admin/feesandpayments" element={<DashboardLayout />} /> */}
        {/* <Route path="/dashboard/admin/reports" element={<DashboardLayout />} /> */}
        {/* <Route path="/dashboard/admin/announcements" element={<DashboardLayout />} /> */}
        {/* <Route path="/dashboard/admin/hostelmanagement" element={<DashboardLayout />} /> */}
        {/* <Route path="/dashboard/admin/settings" element={<DashboardLayout />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
