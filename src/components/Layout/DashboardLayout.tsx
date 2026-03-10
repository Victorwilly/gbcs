import { Outlet } from "react-router-dom";
import DashboardHeader from "../Header/DashboardHeader";
import SideBar from "../SideBar/SideBar";

const DashboardLayout = () => {
  return (
    <main className="md:flex md:flex-row">
      <SideBar />
      
      <div className="w-full">
        <DashboardHeader />
        <Outlet />
      </div>
    </main>
  );
};

export default DashboardLayout;
