import React, { useState, useEffect, useMemo } from 'react';
import { LuBookOpen, LuCalendar, LuGraduationCap, LuCircleCheck, LuCircleX, LuChartLine } from 'react-icons/lu';

const StudentDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [courses, setCourses] = useState<any[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [announcements, setAnnouncements] = useState<any[]>([]);

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

      // 2. Fetch Results
      const resultRes = await fetch("http://localhost:5000/api/users/results", { headers });
      setResults(await resultRes.json());

      // 3. Fetch Announcements
      const announceRes = await fetch("http://localhost:5000/api/users/announcements", { headers });
      const announceData = await announceRes.json();
      // Filter for target: Everyone or Student
      setAnnouncements(announceData.filter((a: any) => a.target === 'everyone' || a.target === 'student').slice(0, 3));
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
        <StatCard label="Avg Attedance" value={user?.cgpa?.toFixed(2) || "0.00"} icon={<LuChartLine className="text-red-500"/>} />
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: My Courses */}
        <div className="col-span-8 space-y-8">
          <section className="bg-white p-6 rounded-[.5rem] border border-gray-100 shadow-sm">
            <h2 className="font-bold text-gray-800 mb-6 flex justify-between">My Courses <span className="text-xs text-gray-400">2024/2025 Session</span></h2>
            <div className="space-y-4">
              {courses.map(course => (
                <div key={course._id} className="p-4 border border-gray-50 rounded-[.5rem] flex justify-between items-center group hover:bg-gray-50 transition-all">
                  <div>
                    <span className="text-[10px] font-bold px-2 py-1 bg-orange-50 text-orange-600 rounded-md uppercase">{course.courseCode} • {course.courseUnit} Units</span>
                    <h3 className="font-bold mb-1 text-gray-800 mt-1">{course.courseTitle}</h3>
                    <p className="text-xs mb-2 text-gray-400">{course.lecturer}</p>
                    <p className="text-xs mb-1 text-gray-400">{course.day}, {course.time}</p>
                  </div>
                  <button className="bg-[#800020] text-white px-4 py-2 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">Materials</button>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Results */}
          <section className="bg-white p-6 rounded-[.5rem] border border-gray-100 shadow-sm">
             <h2 className="font-bold text-gray-800 mb-6">Recent Results</h2>
             <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-gray-400 text-[11px] uppercase tracking-wider border-b border-gray-50">
                    <th className="pb-4">Course</th>
                    <th className="pb-4">Assessment</th>
                    <th className="pb-4">Score</th>
                    <th className="pb-4">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {results.map((res, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 font-bold text-gray-700">{res.courseCode}</td>
                      <td className="py-4 text-gray-500">{res.assessmentType}</td>
                      <td className="py-4 font-bold text-[#800020]">{res.score}%</td>
                      <td className="py-4"><span className="px-2 py-1 bg-blue-50 text-blue-500 rounded-md font-bold text-xs">{res.grade}</span></td>
                    </tr>
                  ))}
                </tbody>
             </table>
          </section>
        </div>

        {/* Right Column: Today's Classes & Notifications */}
        <div className="col-span-4 space-y-8">
           <section className="bg-white p-6 rounded-[.5rem] border border-gray-100 shadow-sm">
             <h2 className="font-bold text-gray-800 mb-4 tracking-tight">Today's Classes</h2>
             <div className="space-y-3">
                {todaysClasses.length > 0 ? todaysClasses.map((c, i) => (
                   <div key={i} className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-gray-800">{c.courseCode}</span>
                        <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-bold">upcoming</span>
                      </div>
                      <p className="text-[10px] text-gray-500 mt-2 flex items-center gap-1"><LuCalendar size={12}/> {c.time} • {c.room || 'Hall A'}</p>
                   </div>
                )) : <p className="text-xs text-gray-400 italic">No classes scheduled for today.</p>}
             </div>
           </section>

           <section className="bg-white p-6 rounded-[.5rem] border border-gray-100 shadow-sm">
             <h2 className="font-bold text-gray-800 mb-4 tracking-tight">Pending tasks</h2>
             <div className="space-y-4">
                {announcements.map((a, i) => (
                  <div key={i} className="pb-3 border-b border-gray-50 last:border-0">
                    <h4 className="text-xs font-bold text-gray-700">{a.title}</h4>
                    <p className="text-[10px] text-gray-400 mt-1">{new Date(a.createdAt).toLocaleDateString()}</p>
                  </div>
                ))}
             </div>
           </section>
        </div>
      </div>
    </div>
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

export default StudentDashboard;