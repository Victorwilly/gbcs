import { NavLink } from "react-router-dom";
import { 
  LuLayoutDashboard, LuBook, LuCalendar, LuClipboardCheck, 
  LuTrendingUp, LuFileText, LuMegaphone, LuUser, LuLogOut 
} from "react-icons/lu";

const LecturerSidebar = ({ user }: any) => {
  // Navigation items specific to lecturers
  const navItems = [
    { name: "Dashboard", icon: <LuLayoutDashboard />, path: "/dashboard/staff" },
    { name: "My Courses", icon: <LuBook />, path: "/dashboard/staff/courses" },
    { name: "Timetable", icon: <LuCalendar />, path: "/dashboard/staff/timetable" },
    { name: "Attendance", icon: <LuClipboardCheck />, path: "/dashboard/staff/attendance" },
    { name: "Grades & Results", icon: <LuTrendingUp />, path: "/dashboard/staff/grades" },
    { name: "Course Materials", icon: <LuFileText />, path: "/dashboard/staff/materials" },
    { name: "Announcements", icon: <LuMegaphone />, path: "/dashboard/staff/announcements" },
    { name: "Profile Settings", icon: <LuUser />, path: "/dashboard/staff/profile" },
  ];

  return (
    <aside className="w-72 bg-white min-h-screen flex flex-col border-r border-gray-100">
      {/* Brand Header */}
      <div className="p-6 flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
        <div>
          <h2 className="text-sm font-bold leading-tight text-gray-800 uppercase">Grace Bible</h2>
          <p className="text-[10px] text-gray-500 italic">Institute & Seminary</p>
        </div>
      </div>

      {/* Lecturer Profile Section - Keeping your Gold Theme */}
      <div className="mx-4 mb-6 p-4 bg-[#D4AF37] rounded-xl flex items-center gap-3 text-white">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg uppercase">
          {user?.name?.charAt(0)}
        </div>
        <div>
          <h3 className="text-sm font-bold truncate w-32">{user?.name}</h3>
          <p className="text-[11px] opacity-80 font-light">Lecturer</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/dashboard/staff"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                isActive 
                  ? "bg-[#FAF6F0] text-[#D4AF37] font-bold border-l-4 border-[#D4AF37]" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Logout Footer */}
      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          <LuLogOut className="text-lg" /> Logout
        </button>
      </div>
    </aside>
  );
};

export default LecturerSidebar;