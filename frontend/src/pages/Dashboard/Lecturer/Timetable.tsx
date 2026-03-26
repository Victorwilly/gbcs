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
  
    const allCoursesRes = await fetch("http://localhost:5000/api/users/my-courses", { headers });
    const allCourses = await allCoursesRes.json();
  
    // Map the student's IDs to actual Course Codes
    const registeredCourseCodes = allCourses
      .filter((c: any) => userData.courses.includes(c._id))
      .map((c: any) => c.courseCode);
  
    // 3. Fetch Timetable
    const response = await fetch(`http://localhost:5000/api/users/timetable?level=${encodeURIComponent(userData.level)}`, { headers });
    const flatData: ITimetableRecord[] = await response.json();
  
if (response.ok) {
    const grouped: TimeTableData = {
        Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: []
    };

    // 1. Convert all registered course IDs to strings immediately to avoid Object vs String issues
    const registeredIdsAsStrings = (userData.courses || []).map((id: any) => id.toString());
    console.log("Student Registered IDs:", userData.name);
    console.log("Student Registered IDs:", userData.courses);
    console.log("Timetable Data Received:", flatData);

    flatData.forEach((record) => {
        // 2. Ensure the timetable's courseId is also a string
        const timetableCourseId = record.courseId?.toString();

        // 3. Perform the check and push to the correct day
        if (timetableCourseId && registeredIdsAsStrings.includes(timetableCourseId)) {
            // Check if the record.day is a valid key in our grouped object
            if (grouped[record.day]) {
                grouped[record.day].push(record);
            }
        }
    });

    setSchedule(grouped);
}
  };

  useEffect(() => {
    fetchTimeTables();
  }, [selectedLevel, user?.courses?.length]);

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
      <section className="mt-8 bg-white rounded-[1rem] p-4">
      <h2 className="text-[15px] font-bold text-gray-800 mb-4">Office Hours</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Consultation Card */}
        <div className="bg-[#FFF9E6] p-4 rounded-2xl border border-[#F3E5AB] relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-bold text-gray-800">Student Consultation</h3>
          </div>
          
          <div className="space-y-2">
            <p className="text-[10px] text-gray-700">Tuesday & Thursday</p>
            <p className="text-[10px] text-gray-600">10:00 AM - 12:00 PM</p>
            <p className="text-[8px] text-[#6B7280] mt-2 uppercase tracking-wider">
              Office: Faculty Block, Room 205
            </p>
          </div>
        </div>

        {/* Research & Preparation Card */}
        <div className="bg-[#F8F9FA] p-4 rounded-2xl border border-gray-100 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-bold text-gray-800">Research & Preparation</h3>
          </div>
          
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-gray-700">Monday, Wednesday, Friday</p>
            <p className="text-[10px] text-gray-600">2:00 PM - 4:00 PM</p>
            <p className="text-[8px] text-gray-400 font-medium mt-2">
              By appointment only
            </p>
          </div>
        </div>
      </div>
    </section>
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