import { Outlet } from "react-router-dom";
import DashboardHeader from "../Header/DashboardHeader";
import SideBar from "../SideBar/SideBar";

const DashboardLayout = () => {
  return (
    <main className="md:flex md:flex-row md:gap-3">
      <SideBar />
      
      <div>
        <DashboardHeader />
        <Outlet />
      </div>
    </main>
  );
};

export default DashboardLayout;
