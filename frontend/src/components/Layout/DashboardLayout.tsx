import { Outlet } from "react-router-dom";
import DashboardHeader from "../Header/DashboardHeader.tsx";
import AdminSidebar from "../SideBar/AdminSidebar.tsx";
import LecturerSidebar from "../SideBar/LecturerSidebar";
import StudentSidebar from "../SideBar/StudentSidebar";

interface Props {
  role: 'admin' | 'student' | 'staff';
}

const DashboardLayout = ({ role }: Props) => {
  return (
    <main className="md:flex md:flex-row md:gap-3">
      {/* Conditionally render the correct sidebar */}
      {role === 'admin' && <AdminSidebar />}
      {role === 'student' && <StudentSidebar />}
      {role === 'staff' && <LecturerSidebar />}
      
      <div className="flex-1"> {/* Added flex-1 to make content take remaining space */}
        <DashboardHeader />
        <Outlet />
      </div>
    </main>
  );
};
export default DashboardLayout;