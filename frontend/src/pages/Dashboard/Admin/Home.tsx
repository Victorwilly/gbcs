import React, { useEffect, useState } from "react";
import { LuUsers, LuCircleUser, LuBookOpen, LuDollarSign, LuSpeaker, LuCalendar } from "react-icons/lu";

// Helper function to format the "time ago" (Simple version)
const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  };

const AdminHome = () => {
  // Define state for the dynamic numbers
  const [data, setData] = useState({
    totalStudents: 0,
    activeStaff: 0,
    totalCourses: 0,
    revenue: 0,
    recentRegistrations: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token"); 
        const response = await fetch("http://localhost:5000/api/admin/stats", {
          headers: { "Authorization": `Bearer ${token}` }
        });
        const result = await response.json();
  
        if (response.ok) {
          setData(result); 
        }
      } catch (err) {
        console.error(err);
      }finally {
        // THIS IS THE KEY: It must run regardless of success or failure
        setLoading(false); 
      }
    };
    fetchStats();
  }, []);


  // Map the fetched data into your UI format
  const statsItems = [
    { 
      title: "Total Students", 
      value: data.totalStudents.toLocaleString(), 
      icon: <LuUsers />, 
      color: "bg-orange-50", 
      iconColor: "text-orange-600" 
    },
    { 
      title: "Active Staff", 
      value: data.activeStaff.toLocaleString(), 
      icon: <LuCircleUser />, 
      color: "bg-red-50", 
      iconColor: "text-red-600" 
    },
    { 
      title: "Total Courses", 
      value: data.totalCourses.toLocaleString(), 
      icon: <LuBookOpen />, 
      color: "bg-green-50", 
      iconColor: "text-green-600" 
    },
    { 
      title: "Revenue (This Month)", 
      value: `₦${(data.revenue / 1000000).toFixed(1)}M`, // Formats to 8.5M style
      icon: <LuDollarSign />, 
      color: "bg-blue-50", 
      iconColor: "text-blue-600" 
    },
  ];

  if (loading) return <div className="p-8">Loading dashboard...</div>;

  return (
    <div className="p-8 bg-[#F9FAFB] min-h-screen">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Overview</h2>
      
      {/* Stats Grid rendering dynamic statsItems */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsItems.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-xl ${stat.color} ${stat.iconColor} text-xl`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rest of your components like QuickActions, etc. */}
      <QuickActions />
      <BottomSection registrations={data.recentRegistrations} />
      <UpcomingEvents />
    </div>
  );
};

// --- 2. Quick Actions Component ---
const QuickActions = () => (
  <div className="mb-10">
    <h2 className="text-lg font-bold mb-4 text-gray-800">Quick Actions</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <button className="flex items-center justify-center gap-3 p-6 bg-[#D4AF37] text-white rounded-xl font-bold hover:opacity-90 transition shadow-sm">
        <LuUsers /> Add New Student
      </button>
      <button className="flex items-center justify-center gap-3 p-6 bg-[#800020] text-white rounded-xl font-bold hover:opacity-90 transition shadow-sm">
        <LuCircleUser /> Register Staff
      </button>
      <button className="flex items-center justify-center gap-3 p-6 bg-[#2D5A27] text-white rounded-xl font-bold hover:opacity-90 transition shadow-sm">
        <LuBookOpen /> Create Course
      </button>
      <button className="flex items-center justify-center gap-3 p-6 bg-[#2563EB] text-white rounded-xl font-bold hover:opacity-90 transition shadow-sm">
        <LuSpeaker /> Send Announcement
      </button>
    </div>
  </div>
);

// --- 3. Bottom Section (Registrations & Alerts) ---
const AlertBox = ({ color, text, time }: { color: string, text: string, time: string }) => (
  <div className={`p-4 rounded-xl border-l-4 ${color} border shadow-sm`}>
    <p className="text-sm font-semibold text-gray-800">{text}</p>
    <p className="text-[10px] text-gray-500 mt-1">{time}</p>
  </div>
);

// This component now receives the list of registrations from the parent
const BottomSection = ({ registrations }: { registrations: any[] }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
    
    {/* Recent Registrations Card */}
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-gray-800">Recent Registrations</h2>
        <button className="text-xs text-[#800020] font-bold hover:underline">View All</button>
      </div>
      
      {/* --- THIS IS THE PART YOU ASKED FOR --- */}
      <div className="space-y-4">
        {registrations && registrations.length > 0 ? (
          registrations.map((user: any, i: number) => (
            <div key={user._id || i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FAF6F0] text-[#800020] rounded-lg flex items-center justify-center font-bold">
                  {/* Pulls from the personalInfo object we saw in your Compass screenshot */}
                  {user.personalInfo?.fullName?.charAt(0) || "U"}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{user.personalInfo?.fullName}</p>
                  <p className="text-xs text-gray-500">{user.enrollmentInfo?.department}</p>
                </div>
              </div>
              <span className="text-[10px] text-gray-400">
                {getTimeAgo(user.createdAt)}
              </span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 py-4 text-sm">No recent registrations found.</p>
        )}
      </div>
      {/* --- END OF MAPPING LOGIC --- */}
      
    </div>
  
      {/* System Alerts Card (You can leave this static for now or fetch it later) */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="font-bold text-gray-800">System Alerts</h2>
          <span className="text-orange-500">⚠️</span>
        </div>
        <div className="space-y-3">
          <AlertBox color="border-orange-200 bg-orange-50" text="Fee payment deadline approaching (3 days)" time="1 hour ago" />
          <AlertBox color="border-blue-200 bg-blue-50" text="New semester registration opens next week" time="3 hours ago" />
          <AlertBox color="border-green-200 bg-green-50" text="Exam timetable published successfully" time="1 day ago" />
        </div>
      </div>
    </div>
  );

// --- 4. Upcoming Events ---
const UpcomingEvents = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">Upcoming Events</h2>
        <LuCalendar className="text-gray-400" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#FFF8F0] p-4 rounded-xl border border-orange-100">
           <span className="text-[10px] font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded mb-2 inline-block">Registration</span>
           <h4 className="text-sm font-bold">Semester Registration</h4>
           <p className="text-xs text-gray-500 mt-1">Jan 15, 2025</p>
        </div>
        <div className="bg-[#F0F7FF] p-4 rounded-xl border border-blue-100">
           <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded mb-2 inline-block">Examination</span>
           <h4 className="text-sm font-bold">Mid-Semester Exams</h4>
           <p className="text-xs text-gray-500 mt-1">Feb 20-25, 2025</p>
        </div>
        <div className="bg-[#FDF2F2] p-4 rounded-xl border border-red-100">
           <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-1 rounded mb-2 inline-block">Training</span>
           <h4 className="text-sm font-bold">Staff Training Workshop</h4>
           <p className="text-xs text-gray-500 mt-1">Jan 22, 2025</p>
        </div>
      </div>
    </div>
)

export default AdminHome;