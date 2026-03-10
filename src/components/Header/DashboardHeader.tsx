import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <header className="flex justify-between border-b-[0.5px] border-[#C3C2C2] w-full items-center py-6 px-[14px] md:px-[32px] bg-white">
      <div className="flex flex-col">
        <h1 className="text-xl font-medium">Welcome back, John Doe!</h1>
        <p className="text-[#6B7280] pt-1 text-[12px]">Manage your academic journey</p>
      </div>

      <div className="flex items-center">
        <Link to="/home" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
        <div className="ml-4 w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default DashboardHeader;
