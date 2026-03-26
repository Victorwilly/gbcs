import React, { useState, useEffect } from 'react';
import { LuUsers, LuUserCheck, LuCalendar, LuSave } from 'react-icons/lu';

const AttendanceManagement = ({ lecturer }: any) => {
  const [lecturerCourses, setLecturerCourses] = useState<any[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [students, setStudents] = useState<any[]>([]);
  const [attendanceData, setAttendanceData] = useState<{ [key: string]: boolean }>({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    courseId:"",
    courseTitle:"",
    studentId:"",
    student:"",
    date:""
  });
  const token = localStorage.getItem("token");
  const headers = { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const currentCourse = lecturerCourses.find(c => c._id === selectedCourseId);
    const today = new Date().toISOString().split('T')[0];
  
    // Construct the array of all students
    const records = students.map(student => ({
      courseId: selectedCourseId,
      courseTitle: currentCourse?.courseTitle || "Unknown Course",
      studentId: student._id,
      studentName: student.name,
      status: attendanceData[student._id] ? "Present" : "Absent",
      date: formData.date || today
    }));
  
    try {
      const response = await fetch("http://localhost:5000/api/users/attendance", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ attendanceRecords: records }), // Wrap in the key the backend expects
      });
  
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 1. Fetch the full course details for the lecturer's assigned courses
  useEffect(() => {
    const fetchLecturerCourses = async () => {
      const res = await fetch("http://localhost:5000/api/users/my-courses", { headers });
      const data = await res.json();
      setLecturerCourses(data);
      if (data.length > 0) setSelectedCourseId(data[0]._id);
    };
    fetchLecturerCourses();
  }, []);

  // 2. Fetch students who are registered for the selected course
  useEffect(() => {
    if (!selectedCourseId) return;

    const fetchEligibleStudents = async () => {
      setLoading(true);
      try {
        // We call a specific endpoint that filters students by course ID
        const res = await fetch(`http://localhost:5000/api/users/students-by-course?courseId=${selectedCourseId}`, { headers });
        const data = await res.json();
        setStudents(data);
        
        // Initialize all as present by default
        const initialAttendance: any = {};
        data.forEach((s: any) => initialAttendance[s._id] = true);
        setAttendanceData(initialAttendance);
      } finally {
        setLoading(false);
      }
    };
    fetchEligibleStudents();
  }, [selectedCourseId]);

  const toggleAttendance = (studentId: string) => {
    setAttendanceData(prev => ({ ...prev, [studentId]: !prev[studentId] }));
  };

  const markAll = (status: boolean) => {
    const updated = { ...attendanceData };
    students.forEach(s => updated[s._id] = status);
    setAttendanceData(updated);
  };

  const totalPresent = Object.values(attendanceData).filter(v => v).length;

  return (
    <form onSubmit={handleSubmit} >
    <div className="p-8 bg-[#F8F9FA] min-h-screen">
      <header className="mb-8">
        <h1 className="text-1xl text-black">Attendance Management</h1>
        <p className="text-[10px] text-gray-500">Record and manage student attendance</p>
      </header>

      {/* Filters Section */}
      <div className="bg-white p-6 rounded-[.5rem] border border-gray-100 mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase mb-2 block">Select Course</label>
          <select 
            className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium focus:ring-2 focus:ring-green-500 outline-none"
            value={selectedCourseId}
            onChange={(e) => {
                const newId = e.target.value;
                setSelectedCourseId(newId);
                
                // Find the course object that matches the selected ID
                const selectedCourse = lecturerCourses.find(c => c._id === newId);
                
                setFormData({
                ...formData, 
                courseId: newId,
                courseTitle: selectedCourse ? selectedCourse.courseTitle : "" 
                });
            }}
            >
            {lecturerCourses.map(c => (
                <option key={c._id} value={c._id}>{c.courseCode} - {c.courseTitle}</option>
            ))}
            </select>
        </div>
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase mb-2 block">Date</label>
          <div className="relative">
            <input type="date" onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none" defaultValue={new Date().toISOString().split('T')[0]} />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard label="Total Students" value={students.length} icon={<LuUsers className="text-gray-400" />} />
        <StatCard label="Present" value={totalPresent} icon={<LuUserCheck className="text-green-500" />} />
        <StatCard label="Attendance Rate" value={students.length ? `${Math.round((totalPresent / students.length) * 100)}%` : '0%'} icon={<LuCalendar className="text-amber-500" />} />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button type='button' onClick={() => markAll(true)} className="px-6 py-2 bg-green-600 text-white rounded-lg text-[11px] hover:bg-green-700 transition-colors">Mark All Present</button>
        <button type='button' onClick={() => markAll(false)} className="px-6 py-2 bg-red-600 text-white rounded-lg text-[11px] hover:bg-red-700 transition-colors">Mark All Absent</button>
      </div>

      {/* Student List */}
      <div className="bg-white rounded-[.5rem] border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <h2 className="font-bold text-gray-800">Student List</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {students.map(student => (
            <div key={student._id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <input 
                  type="checkbox" 
                  checked={attendanceData[student._id]} 
                  onChange={() => {toggleAttendance(student._id);setFormData({...formData, studentId: student._id});setFormData({...formData, student: student.name});}}
                  className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-800">{student.name}</h4>
                  <p className="text-[11px] text-gray-400">{student.matricNumber || 'No Matric'} • {student.department}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${attendanceData[student._id] ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {attendanceData[student._id] ? 'Present' : 'Absent'}
              </span>
            </div>
          ))}
        </div>
        
        <div className="p-6 bg-gray-50">
          <button className="w-full py-4 bg-[#800020] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#600018] transition-all">
            <LuSave size={18} /> Save Attendance
          </button>
        </div>
      </div>
    </div>
    </form>
  );
};

const StatCard = ({ label, value, icon }: any) => (
  <div className="bg-white p-6 rounded-[.5rem] border border-gray-100">
    <div>
      <div className='flex items-center justify-between'><p className="text-[10px] font-bold text-gray-400 tracking-widest">{label}</p>    <div className="p-3 bg-gray-50 rounded-xl text-xl">{icon}</div></div>
      <h3 className="text-1xl font-black text-gray-800 mt-1">{value}</h3>
    </div>
 
  </div>
);

export default AttendanceManagement;