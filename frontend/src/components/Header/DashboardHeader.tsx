import { LuBell, LuHouse } from "react-icons/lu";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between py-6 px-8 bg-white border-b border-gray-100">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          Manage your institution
        </p>
      </div>

      <div className="flex items-center gap-6">
        <a 
          href="/" 
          className="flex items-center gap-2 text-gray-700 hover:text-[#800020] transition-colors text-sm font-semibold"
        >
          <LuHouse size={18} />
          Back to Website
        </a>
        
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <LuBell size={22} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;