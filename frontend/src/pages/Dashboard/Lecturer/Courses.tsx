import React, { useState, useEffect, useMemo } from 'react';
import {LuClipboardCheck,LuTrendingUp,LuFileText,LuMegaphone, LuGraduationCap, LuCircleCheck, LuCircleX, LuChartLine } from 'react-icons/lu';

const CoursesPage = () => {
  const [user, setUser] = useState<any>(null);
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
      const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");
      const headers = { "Authorization": `Bearer ${token}` };

      const userRes = await fetch("http://localhost:5000/api/users/me", { headers });
      const userData = await userRes.json();
      setUser(userData);
      
      if (!userRes.ok) throw new Error("Failed to fetch user");

      const courseRes = await fetch("http://localhost:5000/api/users/my-courses", { headers });
      const courseData = await courseRes.json();
      setCourses(courseData);
    };

    fetchDashboardData();
  }, [user]);

  // Logic: Filter courses whose 'day' matches today (e.g., "Monday")
  const todaysClasses = useMemo(() => {
    // 1. Get current day short (e.g., "Mon")
    const todayShort = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(new Date());
  
    return courses.filter(c => {
      if (!c.day) return false;
  
      // 2. Split "Mon, Tue" into ["Mon", "Tue"]
      const dayArray = c.day.split(',').map((d: string) => d.trim().toLowerCase());
  
      // 3. Check if today's day is in that array
      return dayArray.includes(todayShort.toLowerCase());
    });
  }, [courses]);

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen">
      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard label="My Courses" value={user?.courses?.length.toString() || "0"} icon={<LuGraduationCap className="text-green-500"/>} />
        <StatCard label="Total Students" value={user?.cgpa?.toFixed(2) || "0.00"} icon={<LuChartLine className="text-red-500"/>} />
        <StatCard label="Pending Grades" 
          value={user?.payment_status ? "Paid" : "Pending"} 
          icon={user?.payment_status ? <LuCircleCheck className="text-blue-500"/> : <LuCircleX className="text-red-500"/>} 
        />
        <StatCard label="Avg Attedance" value={user?.cgpa?.toFixed(2) || "0.00"} icon={<LuTrendingUp className="text-red-500"/>} />
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: My Courses */}
        <div className="col-span-12 space-y-8">
  <section className="p-6">
    <h2 className="font-bold text-gray-800 mb-6 flex justify-between">
      My Courses <span className="text-xs text-gray-400">2024/2025 Session</span>
    </h2>
    
    {/* Updated from space-y-4 to a grid layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {courses.map(course => (
        <div 
          key={course._id} 
          className="p-4 border bg-white border-gray-50 rounded-[.5rem] flex justify-between items-center group hover:bg-gray-50 transition-all"
        >
          <div>
            <span className="text-[10px] font-bold px-2 py-1 bg-orange-50 text-orange-600 rounded-md uppercase">
              {course.courseCode} • {course.courseUnit} Units
            </span>
            <h3 className="font-bold mb-1 text-gray-800 mt-1">{course.courseTitle}</h3>
            <p className="text-xs mb-2 text-gray-400">{course.lecturer}</p>
            <p className="text-xs mb-1 text-gray-400">{course.day}, {course.time}</p>
          </div>
          <button className="bg-[#800020] text-white px-4 py-2 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
            Materials
          </button>
        </div>
      ))}
    </div>
  </section>
</div>

      </div>
<QuickActions/>
    </div>
  );
};

const QuickActions = () => {
  const actions = [
    { 
      label: 'Record Attendance', 
      icon: <LuClipboardCheck size={28} />, 
      color: 'text-amber-500', 
      bg: 'bg-amber-50' 
    },
    { 
      label: 'Upload Grades', 
      icon: <LuTrendingUp size={28} />, 
      color: 'text-red-700', 
      bg: 'bg-red-50' 
    },
    { 
      label: 'Course Materials', 
      icon: <LuFileText size={28} />, 
      color: 'text-green-800', 
      bg: 'bg-green-50' 
    },
    { 
      label: 'Announcements', 
      icon: <LuMegaphone size={28} />, 
      color: 'text-blue-600', 
      bg: 'bg-blue-50' 
    },
  ];

  return (
    <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <h2 className="text-sm font-bold text-gray-800 mb-8">Quick Actions</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {actions.map((action, index) => (
          <button 
            key={index} 
            className="flex flex-col items-center justify-center gap-1 group transition-transform hover:scale-105"
          >
            {/* Icon Container */}
            <div className={`p-2 ${action.color} rounded-2xl transition-colors group-hover:shadow-md`}>
              {action.icon}
            </div>
            
            {/* Label */}
            <span className="text-[10px] font-bold text-gray-700 text-center">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

const StatCard = ({ label, value, icon }: any) => (
  <div className="bg-white p-6 rounded-[.5rem] border border-gray-50 flex items-center justify-between shadow-sm">
    <div>
      <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
      <h3 className="text-l font-extrabold text-gray-800 mt-1">{value}</h3>
    </div>
    <div className="p-3 bg-gray-50 rounded-[.2rem] text-xl">{icon}</div>
  </div>
);

export default CoursesPage;