import { NavLink } from "react-router-dom";
import { 
  LuLayoutDashboard, LuUsers, LuCircleUser, LuBookOpen, 
  LuCalendarDays, LuCircleDollarSign, LuFileText, LuMegaphone, 
  LuHotel, LuSettings, LuLogOut 
} from "react-icons/lu";

const AdminSidebar = () => {
  const navItems = [
    { name: "Dashboard", icon: <LuLayoutDashboard />, path: "/dashboard/admin" },
    { name: "Students", icon: <LuUsers />, path: "/dashboard/admin/students" },
    { name: "Staff & Lecturers", icon: <LuCircleUser />, path: "/dashboard/admin/staffs" },
    { name: "Courses", icon: <LuBookOpen />, path: "/dashboard/admin/courses" },
    { name: "Timetables", icon: <LuCalendarDays />, path: "/dashboard/admin/timetable" },
    { name: "Fees & Payments", icon: <LuCircleDollarSign />, path: "/dashboard/admin/feesandpayments" },
    { name: "Reports", icon: <LuFileText />, path: "/dashboard/admin/reports" },
    { name: "Announcements", icon: <LuMegaphone />, path: "/dashboard/admin/announcements" },
    { name: "Hostel Management", icon: <LuHotel />, path: "/dashboard/admin/hostelmanagement" },
    { name: "Settings", icon: <LuSettings />, path: "/dashboard/admin/settings" },
  ];

  return (
    <aside className="w-72 bg-white min-h-screen flex flex-col border-r border-gray-200">
      {/* Institution Logo/Name */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#2D5A27] rounded-full flex items-center justify-center text-white font-bold">
          GB
        </div>
        <div>
          <h2 className="text-sm font-bold leading-tight text-gray-800">GRACE BIBLE</h2>
          <p className="text-[10px] text-gray-500">Institute & Seminary</p>
        </div>
      </div>

      {/* Admin Profile Header */}
      <div className="mx-4 mb-6 p-4 bg-[#800020] rounded-xl flex items-center gap-3 text-white">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
          A
        </div>
        <div>
          <h3 className="text-sm font-bold">Admin User</h3>
          <p className="text-[11px] opacity-80 font-light">Administrator</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/dashboard/admin"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                isActive 
                  ? "bg-[#FAF6F0] text-[#800020] font-bold" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          <LuLogOut className="text-lg" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;