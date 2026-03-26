import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home.tsx";
import Layout from "./components/Layout/Layout.tsx";
import About from "./pages/About/About.tsx";
import Programs from "./pages/Programs/Programs.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Admissions from "./pages/Admissions/Admissions.tsx";
import Register from "./pages/Register/Register.tsx";
import Login from "./pages/Login/Login.tsx";
import LoginStudent from "./pages/Login/LoginStudent.tsx";
import LoginLecturer from "./pages/Login/LoginLecturer.tsx";
import LoginAdministrator from "./pages/Login/LoginAdmistrator.tsx";
import DashboardLayout from "./components/Layout/DashboardLayout.tsx";
import AdminHome from "./pages/Dashboard/Admin/Home.tsx";
import AdminSearchUser from "./pages/Dashboard/Admin/SearchUser.tsx";
import AdminStaffs from "./pages/Dashboard/Admin/Staffs.tsx";
import AdminAddCourses from "./pages/Dashboard/Admin/Courses.tsx";
import AdminTimeTables from "./pages/Dashboard/Admin/TimeTables.tsx";
import AdminFeesAndPayments from "./pages/Dashboard/Admin/FeesAndPayments.tsx";
import AdminReports from "./pages/Dashboard/Admin/Reports.tsx";
import AdminAnnouncements from "./pages/Dashboard/Admin/Announcements.tsx";
import AdminHostelManagement from "./pages/Dashboard/Admin/HostelManagements.tsx";
import AdminSettings from "./pages/Dashboard/Admin/Settings.tsx";
import StudentHome from "./pages/Dashboard/Student/Home.tsx";
import StudentCourseReg from "./pages/Dashboard/Student/RegisteredCourses.tsx";
import StudentTimeTable from "./pages/Dashboard/Student/TimeTable.tsx";
import StudentResults from "./pages/Dashboard/Student/Results.tsx";
import StudentPayments from "./pages/Dashboard/Student/Payments.tsx";
import StudentNotifications from "./pages/Dashboard/Student/Notifications.tsx";
import StudentHostelManagement from "./pages/Dashboard/Student/HostelManagement.tsx";
import StudentSettings from "./pages/Dashboard/Student/Settings.tsx";
import StaffHome from "./pages/Dashboard/Lecturer/Home.tsx";
import StaffCourses from "./pages/Dashboard/Lecturer/Courses.tsx";
import StaffTimeTable from "./pages/Dashboard/Lecturer/Timetable.tsx";
import StaffAttendance from "./pages/Dashboard/Lecturer/Attendance.tsx";
import StaffGrades from "./pages/Dashboard/Lecturer/Results.tsx";
import StaffMaterials from "./pages/Dashboard/Lecturer/Materials.tsx";
import StaffAnnouncement from "./pages/Dashboard/Lecturer/Announcements.tsx";
import StaffSettings from "./pages/Dashboard/Lecturer/Settings.tsx";

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
      {/* Admin Dashboard Group */}
      <Route path="/dashboard/admin" element={<DashboardLayout role="admin" />}>
        <Route index element={<AdminHome />} />
        <Route path="/dashboard/admin/students" element={<AdminSearchUser/>} />
        <Route path="/dashboard/admin/staffs" element={<AdminStaffs />} />
        <Route path="/dashboard/admin/courses" element={<AdminAddCourses />} />
        <Route path="/dashboard/admin/timetable" element={<AdminTimeTables />} />
        <Route path="/dashboard/admin/feesandpayments" element={<AdminFeesAndPayments />} />
        <Route path="/dashboard/admin/reports" element={<AdminReports />} />
        <Route path="/dashboard/admin/announcements" element={<AdminAnnouncements />} />
        <Route path="/dashboard/admin/hostelmanagement" element={<AdminHostelManagement />} />
        <Route path="/dashboard/admin/settings" element={<AdminSettings />} />
      </Route>
      {/* Student Dashboard Group */}
      <Route path="/dashboard/users" element={<DashboardLayout role="student" />}>
      <Route index element={<StudentHome />} />
      <Route path="/dashboard/users/registration" element={<StudentCourseReg />} />
      <Route path="/dashboard/users/timetable" element={<StudentTimeTable />} />
      <Route path="/dashboard/users/results" element={<StudentResults />} />
      <Route path="/dashboard/users/payments" element={<StudentPayments />} />
      <Route path="/dashboard/users/notifications" element={<StudentNotifications />} />
      <Route path="/dashboard/users/hostel" element={<StudentHostelManagement />} />
      <Route path="/dashboard/users/profile" element={<StudentSettings />} />
      </Route>
      {/* Student Dashboard Group */}
      <Route path="/dashboard/staff" element={<DashboardLayout role="staff" />}>
      <Route index element={<StaffHome />} />
      <Route path="/dashboard/staff/courses" element={<StaffCourses />} />
      <Route path="/dashboard/staff/timetable" element={<StaffTimeTable />} />
      <Route path="/dashboard/staff/attendance" element={<StaffAttendance />} />
      <Route path="/dashboard/staff/grades" element={<StaffGrades />} />
      <Route path="/dashboard/staff/materials" element={<StaffMaterials />} />
      <Route path="/dashboard/staff/announcements" element={<StaffAnnouncement />} />
      <Route path="/dashboard/staff/profile" element={<StaffSettings />} />
      </Route>
    </Routes>
  );
}

export default App;
