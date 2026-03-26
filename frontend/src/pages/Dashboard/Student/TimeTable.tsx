import React, { useState, useEffect } from "react";
import { LuPlus, LuFileText, LuClock, LuMapPin, LuX, LuChevronDown } from "react-icons/lu";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


const TimetablePage = () => {
    // This represents ONE row in your Database
interface ITimetableRecord {
    _id: string;
    course: string;
    courseId: string;
    lecturer: string;
    time: string;
    room: string;
    day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday"; // The key field
    level: string;
  }
  
  // This represents your UI State (What you wanted)
  interface TimeTableData {
    Monday: ITimetableRecord[];
    Tuesday: ITimetableRecord[];
    Wednesday: ITimetableRecord[];
    Thursday: ITimetableRecord[];
    Friday: ITimetableRecord[];
  }
        
  const [selectedLevel, setSelectedLevel] = useState("100");
  const [schedule, setSchedule] = useState<TimeTableData>({
    Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: []
  });
  const [user, setUser] = useState<any>(null);
  
  const fetchTimeTables = async () => {
    const token = localStorage.getItem("token");
    const headers = { "Authorization": `Bearer ${token}` };
  
    // 1. Fetch User to get their registered courses
    const userRes = await fetch("http://localhost:5000/api/users/me", { headers });
    const userData = await userRes.json();
    setUser(userData);
  
    const allCoursesRes = await fetch("http://localhost:5000/api/users/courses?program=", { headers });
    const allCourses = await allCoursesRes.json();
  
    // Map the student's IDs to actual Course Codes
    const registeredCourseCodes = allCourses
      .filter((c: any) => userData.courses.includes(c._id))
      .map((c: any) => c.courseCode);
  
    // 3. Fetch Timetable
    const response = await fetch(`http://localhost:5000/api/users/timetable?level=${encodeURIComponent(userData.level)}`, { headers });
    const flatData: ITimetableRecord[] = await response.json();
  
    // Inside fetchTimeTables...
if (response.ok) {
    const grouped: TimeTableData = {
      Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: []
    };
  
    flatData.forEach((record) => {
      // 1. Get the list of IDs the student registered for (these are strings in your DB)
      const registeredIds = userData.courses || [];
  
      // 2. Force the timetable record's courseId to be a string
      // record.courseId might be an ObjectID object or a string; .toString() handles both.
      const timetableCourseId = record.courseId?.toString();
  
      // 3. Check for a match
      if (registeredIds.includes(timetableCourseId) && grouped[record.day]) {
        grouped[record.day].push(record);
      }
    });
  
    setSchedule(grouped);
  }
  };

  useEffect(() => {
    fetchTimeTables();
  }, [selectedLevel]);

  const days: (keyof TimeTableData)[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const totalClasses = days.reduce((acc, day) => acc + schedule[day].length, 0);

    const totalRegisteredCourses = user?.courses?.length || 0;

    const totalContactHours = totalClasses * 2;

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">My Timetable</h1>
        {/* <p className="text-sm text-gray-500">Create and manage class schedules</p> */}
      </div>

      {/* Timetable Grid */}
      <div className="flex gap-0 overflow-x-auto rounded-[1rem] border border-gray-100 shadow-sm mb-5 bg-white min-w-[1000px]">
        {days.map((day) => (
          <div key={day} className="flex-1 border-r border-gray-100 last:border-r-0 min-h-[500px]">
            {/* Day Header */}
            <div className="bg-[#D4AF37] text-white py-4 text-center font-bold tracking-wide">
              {day}
            </div>
            
            {/* Classes Container */}
            <div className="p-4 space-y-4">
            {schedule[day].map((slot) => (
                <div key={slot._id} className="bg-[#FFF9E6] p-4 rounded-2xl relative group border border-[#F3E5AB]">
                  
                  <h4 className="text-[#800020] text-xs font-bold mb-3 uppercase tracking-tighter">
                    {slot.course}
                  </h4>
                  
                  <div className="space-y-2">
                    <p className="text-[13px] font-bold text-gray-800">{slot.lecturer}</p>
                    
                    <div className="flex items-center gap-2 text-[11px] text-gray-500">
                      <LuClock size={12} className="text-[#D4AF37]" />
                      <span>{slot.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-[11px] text-gray-500">
                      <LuMapPin size={12} className="text-[#D4AF37]" />
                      <span>{slot.room}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* 1. Registration Summary Cards */}
      <div className='bg-white rounded-[1rem] p-3'>
        <div className='flex items-center justify-between my-2'>
            <h1>Weekly Summary</h1>
             <div className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded"> / 24 Units</div>
        </div>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <SummaryCard label="Total classes" value={`${totalClasses}`} />
        <SummaryCard label="Courses" value={`${totalRegisteredCourses}`} />
        <SummaryCard 
          label="Contact hours" 
        />
      </div>
      </div>
    </div>
  );
};


const SummaryCard = ({ label, value, color = "text-gray-800" }: any) => (
    <div className="bg-[#F9FAFB] p-6 rounded-[.5rem] border border-gray-50 relative overflow-hidden">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <h3 className={`text-[1rem] font-black`}>{value}</h3>
    </div>
  );
export default TimetablePage;