import React, { useState, useEffect } from "react";
import { LuPlus, LuFileText, LuClock, LuMapPin, LuX, LuChevronDown } from "react-icons/lu";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


const TimetablePage = () => {
    // This represents ONE row in your Database
interface ITimetableRecord {
    _id: string;
    course: string;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [schedule, setSchedule] = useState<TimeTableData>({
    Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: []
  });

const exportToPDF = () => {
  const doc = new jsPDF();
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // Add Title & Brand to PDF
  doc.setFontSize(18);
  doc.setTextColor(128, 0, 32); // That Burgundy color (#800020)
  doc.text("GRACE BIBLE INSTITUTE", 14, 15);
  
  doc.setFontSize(12);
  doc.setTextColor(100);
  doc.text(`Academic Timetable - ${selectedLevel}`, 14, 22);

  // Prepare data for the table
  // We need to find the day with the most classes to set our row count
  const tableData: string[][] = [];
  
  // Logic: Each row in the PDF will be a time slot or we list by Day
  days.forEach((day) => {
    const slots = schedule[day as keyof TimeTableData];
    slots.forEach((slot) => {
      tableData.push([
        day,
        slot.course,
        slot.lecturer,
        slot.time,
        slot.room
      ]);
    });
  });

  // Generate the Table
  autoTable(doc, {
    startY: 30,
    head: [["Day", "Course", "Lecturer", "Time", "Venue"]],
    body: tableData,
    headStyles: { fillColor: [128, 0, 32] }, // Burgundy Header
    alternateRowStyles: { fillColor: [255, 249, 230] }, // Light Yellow rows
    margin: { top: 30 },
  });

  // Save the PDF
  doc.save(`Timetable_${selectedLevel.replace(" ", "_")}.pdf`);
};
  
  const fetchTimeTables = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:5000/api/admin/timetable?level=${encodeURIComponent(selectedLevel)}`, {
      headers: { "Authorization": `Bearer ${token}` }
    });
    const flatData: ITimetableRecord[] = await response.json();
  
    if (response.ok) {
      // 1. Create a fresh empty container
      const grouped: TimeTableData = {
        Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: []
      };
  
      // 2. Sort the flat DB records into the day-specific arrays
      flatData.forEach((record) => {
        if (grouped[record.day]) {
          grouped[record.day].push(record);
        }
      });
  
      // 3. Set the state with the organized data
      setSchedule(grouped);
    }
  };

  useEffect(() => {
    fetchTimeTables();
  }, [selectedLevel]);

  const handleDeleteTimeTable = async (id: string, course: string) => {
    if (!window.confirm(`Are you sure you want to remove ${course} from the timetable?`)) return;
  
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:5000/api/admin/timetable/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Logic for updating the grouped object state
        setSchedule((prev) => {
          const newSchedule = { ...prev };
          
          // Loop through each day (Monday, Tuesday, etc.)
          (Object.keys(newSchedule) as Array<keyof TimeTableData>).forEach((day) => {
            // Filter out the deleted ID from that specific day's array
            newSchedule[day] = newSchedule[day].filter((slot) => slot._id !== id);
          });
  
          return newSchedule;
        });
  
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("A network error occurred.");
    }
  };

  const days: (keyof TimeTableData)[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Timetables Management</h1>
        <p className="text-sm text-gray-500">Create and manage class schedules</p>
      </div>

      {/* Filter and Action Bar */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Select Level</label>
          <div className="relative">
            <select 
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="appearance-none bg-white border border-gray-200 pl-4 pr-10 py-2 rounded-xl focus:outline-none text-gray-700 font-medium min-w-[160px]"
            >
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
            </select>
            <LuChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-4">
          <button onClick={exportToPDF} className="flex items-center gap-2 px-4 py-2 text-gray-600 font-semibold border border-gray-200 rounded-xl hover:bg-gray-50 transition">
            <LuFileText size={18} />
            Export PDF
          </button>
          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-6 py-2 bg-[#D4AF37] hover:bg-[#b8962e] text-white font-bold rounded-xl transition shadow-sm">
            <LuPlus size={18} />
            Add course
          </button>
        </div>
      </div>

      {/* Timetable Grid */}
      <div className="flex gap-0 overflow-x-auto rounded-3xl border border-gray-100 shadow-sm bg-white min-w-[1000px]">
        {days.map((day) => (
          <div key={day} className="flex-1 border-r border-gray-100 last:border-r-0 min-h-[600px]">
            {/* Day Header */}
            <div className="bg-[#800020] text-white py-4 text-center font-bold tracking-wide">
              {day}
            </div>
            
            {/* Classes Container */}
            <div className="p-4 space-y-4">
            {schedule[day].map((slot) => (
                <div key={slot._id} className="bg-[#FFF9E6] p-4 rounded-2xl relative group border border-[#F3E5AB]">
                  <button onClick={() => handleDeleteTimeTable(slot._id, slot.course)} className="absolute top-3 right-3 text-red-400 hover:text-red-600 transition-colors">
                    <LuX size={14} />
                  </button>
                  
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
      <AddTimeTable 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchTimeTables} 
      />
    </div>
  );
};


const AddTimeTable = ({ isOpen, onClose, onSuccess }: any) => {
    const [lecturers, setLecturers] = useState<any[]>([]);
    const [courses, setCourses] = useState<any[]>([]);
    const [formData, setFormData] = useState({
      day: "",
      time: "",
      lecturer: "",
      room: "",
      course: "",
      courseId: "",
      level: "",
    });
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
          const token = localStorage.getItem("token");
          const response = await fetch("http://localhost:5000/api/admin/timetable", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                onSuccess(); // Refresh the table
                onClose();   // Close modal
                const data = await response.json();
                alert(data.message);
            } else {
              const error = await response.json();
              alert(error.message);
            }
      } catch (err) {
        console.error("Submit Error:", err);
      }
    };

     // Fetch Lecturers for the dropdown
     useEffect(() => {
        const fetchLecturers = async () => {
          const token = localStorage.getItem("token");
          const res = await fetch("http://localhost:5000/api/admin/staffs", {
              headers: { "Authorization": `Bearer ${token}` }
          });
          const data = await res.json();
          if (res.ok) {
              // Filter to ensure only lecturers/staff are shown
              setLecturers(data);
          }
        };
        if (isOpen) fetchLecturers();
      }, [isOpen]);

     // Fetch Courses for the dropdown
     useEffect(() => {
        const fetchCourses = async () => {
          const token = localStorage.getItem("token");
          const res = await fetch("http://localhost:5000/api/admin/course", {
              headers: { "Authorization": `Bearer ${token}` }
          });
          const data = await res.json();
          if (res.ok) {
              setCourses(data);
          }
        };
        if (isOpen) fetchCourses();
      }, [isOpen]);
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Add Time Table</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
  
            <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Day *</label>
                  <select className="w-full text-xs p-3 border border-gray-200 rounded-xl bg-white outline-none"
                    onChange={(e) => setFormData({...formData, day: e.target.value})}>
                    <option value="">Select day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Level *</label>
                  <select 
                    className="w-full text-xs p-3 border border-gray-200 rounded-xl bg-white outline-none"
                    value={formData.level}
                    onChange={(e) => setFormData({...formData, level: e.target.value})}>
                    <option value="">Select level</option>
                    <option value="100">100 level</option>
                    <option value="200">200 level</option>
                    <option value="300">300 level</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Time *</label>
                <input 
                  required
                  placeholder="12:00 PM - 5:00 PM"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
              </div>
  
              <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Select Lecturer *</label>
                  <select 
                className="w-full text-xs p-3 border border-gray-200 rounded-xl bg-white outline-none"
                value={formData.lecturer}
                onChange={(e) => setFormData({...formData, lecturer: e.target.value})}
                required
              >
                <option value="">Select Lecturer</option>
                {lecturers
                    .filter(l => l.role === 'lecturer' || l.role === 'senior lecturer' || l.role === 'associate professor')
                    .map(l => (
                    <option key={l._id} value={l.name}>
                        {l.name} ({l.role})
                    </option>
                    ))
                }
              </select>
                </div>
              <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Select Course *</label>
                  <select 
                className="w-full text-xs p-3 border border-gray-200 rounded-xl bg-white outline-none"
                onChange={(e) => {
                  const selectedCourse = courses.find(c => c._id === e.target.value);
                  setFormData({
                    ...formData,
                    courseId: selectedCourse?._id, 
                    course: selectedCourse?.courseTitle
                  });
                }} required>
                <option value="">Select Course</option>
                {courses.map(l => (
                    <option key={l._id} value={l._id}>
                        {l.courseTitle}
                    </option>
                    ))
                }
              </select>
                </div>
  
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Room *</label>
                <input 
                  placeholder="E.g Hall A"
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, room: e.target.value})}
                />
              </div>
  
              <button 
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#b8962e] text-white font-bold py-4 rounded-xl transition duration-200 shadow-md"
              >
                Add Time Table
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default TimetablePage;