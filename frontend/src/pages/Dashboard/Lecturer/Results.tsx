import React, { useState, useEffect } from 'react';
import { LuFileSpreadsheet, LuSave, LuUsers, LuTrendingUp, LuCalculator } from 'react-icons/lu';

const GradesManagement = () => {
  const [lecturerCourses, setLecturerCourses] = useState<any[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [assessmentType, setAssessmentType] = useState('Mid-Semester Exam');
  const [semester, setSemester] = useState('1st Semester');
  const [students, setStudents] = useState<any[]>([]);
  
  // Selection & Grade State
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [grades, setGrades] = useState<{ [key: string]: number | string }>({});
  const [scores, setScores] = useState<{ [key: string]: string | number }>({});
    const [letterGrades, setLetterGrades] = useState<{ [key: string]: string }>({});

  const token = localStorage.getItem("token");
  const headers = { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" };

  // Fetch existing results to pre-fill the table
useEffect(() => {
    if (!selectedCourseId || students.length === 0) return;
  
    const fetchExistingResults = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/users/results?courseId=${selectedCourseId}&semester=${semester}&assessmentType=${assessmentType}`,
          { headers }
        );
        const existingResults = await res.json();
  
        if (res.ok && Array.isArray(existingResults)) {
          const newScores: { [key: string]: string | number } = {};
          const newLetterGrades: { [key: string]: string } = {};
  
          existingResults.forEach((result: any) => {
            newScores[result.studentId] = result.score;
            newLetterGrades[result.studentId] = result.grade;
          });
  
          // Merge with existing state so we don't lose typed data for students without saved results
          setScores(prev => ({ ...prev, ...newScores }));
          setLetterGrades(prev => ({ ...prev, ...newLetterGrades }));
        }
      } catch (error) {
        console.error("Error fetching existing results:", error);
      }
    };
  
    fetchExistingResults();
  }, [selectedCourseId, semester, assessmentType, students]);

  // 1. Fetch Lecturer Courses
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("http://localhost:5000/api/users/my-courses", { headers });
      const data = await res.json();
      setLecturerCourses(data);
      if (data.length > 0) setSelectedCourseId(data[0]._id);
    };
    fetchCourses();
  }, []);

  // 2. Fetch Students for the selected course
  useEffect(() => {
    if (!selectedCourseId) return;
    const fetchStudents = async () => {
      const res = await fetch(`http://localhost:5000/api/users/students-by-course?courseId=${selectedCourseId}`, { headers });
      const data = await res.json();
      setStudents(data);
      
      // Initialize grades state if not already set
      const initialGrades: any = {};
      data.forEach((s: any) => initialGrades[s._id] = grades[s._id] || "");
      setGrades(initialGrades);
    };
    fetchStudents();
  }, [selectedCourseId]);

  // Logic to assign grade from the Scale to the Selected User
  const assignGradeToSelected = (letter: string) => {
    if (!selectedStudentId) {
      alert("Please select a student from the list first by clicking their row.");
      return;
    }
    setLetterGrades(prev => ({ ...prev, [selectedStudentId]: letter }));
  };
  
  // 3. Helper to get the color based on the Letter (since score is independent)
  const getGradeStyles = (letter: string) => {
    switch (letter) {
      case 'A': return 'bg-[#E1F9EB] text-[#1DB954]';
      case 'B': return 'bg-[#E1E9FF] text-[#0047FF]';
      case 'C': return 'bg-[#FFF9E1] text-[#FFD700]';
      case 'D': return 'bg-[#FFE9E1] text-[#FF6B00]';
      case 'F': return 'bg-[#FFE1E1] text-[#FF0000]';
      default: return 'bg-gray-100 text-gray-400';
    }
  };

  const getGradeDetails = (score: any) => {
    const s = parseInt(score);
    if (isNaN(s)) return { label: '-', color: 'bg-gray-100 text-gray-400' };
    if (s >= 70) return { label: 'A', color: 'bg-[#E1F9EB] text-[#1DB954]' };
    if (s >= 60) return { label: 'B', color: 'bg-[#E1E9FF] text-[#0047FF]' };
    if (s >= 50) return { label: 'C', color: 'bg-[#FFF9E1] text-[#FFD700]' };
    if (s >= 45) return { label: 'D', color: 'bg-[#FFE9E1] text-[#FF6B00]' };
    return { label: 'F', color: 'bg-[#FFE1E1] text-[#FF0000]' };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentCourse = lecturerCourses.find(c => c._id === selectedCourseId);
    
    // Construct records for bulk upsert
    const records = students.map(s => ({
        studentId: s._id,
        courseId: selectedCourseId,
        assessmentType,
        semester,
        level:s.level,
        score: scores[s._id] || 0, // From the input
        grade: letterGrades[s._id] || "F", // From the button click
        session: "2025/2026"
      }));

    const res = await fetch("http://localhost:5000/api/users/results", {
      method: "POST",
      headers,
      body: JSON.stringify({ records })
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
    } else {
      alert(data.message);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
    <div className="p-8 bg-[#F5F5F5] min-h-screen">
      <header className="mb-6">
        <h1 className="text-1xl">Grades Management</h1>
        <p className="text-xs text-gray-400">Upload and manage student grades</p>
      </header>

      {/* Filters */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 mb-8 grid grid-cols-3 gap-6">
        <FilterSelect label="Select Course" value={selectedCourseId} onChange={setSelectedCourseId} 
          options={lecturerCourses.map(c => ({ id: c._id, label: `${c.courseCode} - ${c.courseTitle}` }))} />
        <FilterSelect label="Assessment Type" value={assessmentType} onChange={setAssessmentType} 
          options={[{id: 'Mid-Semester Exam', label: 'Mid-Semester Exam'}, {id: 'Final Exam', label: 'Final Exam'}]} />
        <FilterSelect label="Semester" value={semester} onChange={setSemester} 
          options={[{id: '1st Semester', label: '1st Semester'}, {id: '2nd Semester', label: '2nd Semester'}]} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard label="Total Students" value={students.length} icon={<LuUsers />} />
        <StatCard label="Average Score" value="0%" icon={<LuTrendingUp />} color="text-red-500" />
        <StatCard label="Graded" value={`0/${students.length}`} icon={<LuCalculator />} color="text-amber-500" />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-8">
        <div className="p-5 flex justify-between items-center">
          <h2 className="text-sm font-bold text-gray-700">Enter Grades</h2>
          <button type='button' className="text-amber-600 text-xs font-bold flex items-center gap-1 hover:opacity-80">
            <LuFileSpreadsheet /> Import CSV
          </button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-[10px] uppercase text-gray-400 font-bold">
            <tr>
              <th className="px-6 py-4">Matric Number</th>
              <th className="px-6 py-4">Student Name</th>
              <th className="px-6 py-4">Score (%)</th>
              <th className="px-6 py-4">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
          {students.map(s => (
  <tr 
    key={s._id} 
    onClick={() => setSelectedStudentId(s._id)}
    className={`cursor-pointer border-b border-gray-50 ${selectedStudentId === s._id ? 'bg-[#FFF9E1]/40' : 'hover:bg-gray-50'}`}
  >
    <td className="px-6 py-4 text-xs font-bold text-gray-500">{s.matricNumber}</td>
    <td className="px-6 py-4 text-sm font-medium text-gray-800">{s.name}</td>
    <td className="px-6 py-4">
      <input 
        type="number" 
        required
        value={scores[s._id] || ""} 
        onChange={(e) => setScores({...scores, [s._id]: e.target.value})}
        className="w-20 p-2 border border-gray-200 rounded-lg text-center outline-none focus:border-[#800020]"
      />
    </td>
    <td className="px-6 py-4">
      <span className={`px-4 py-1.5 rounded-lg text-[11px] font-black inline-block w-12 text-center ${getGradeStyles(letterGrades[s._id] || '-')}`}>
        {letterGrades[s._id] || '-'}
      </span>
    </td>
  </tr>
))}
          </tbody>
        </table>
      </div>

      {/* Interactive Grading Scale */}
      <div className="mb-8">
        <h3 className="font-bold text-gray-800 mb-4">Grading Scale (Click to assign to selected student)</h3>
        <div className="grid grid-cols-5 gap-4">
        <GradeBtn label="A" range="70-100" bg="bg-[#E1F9EB]" text="text-[#1DB954]" onClick={() => assignGradeToSelected('A')} />
        <GradeBtn label="B" range="60-69" bg="bg-[#E1E9FF]" text="text-[#0047FF]" onClick={() => assignGradeToSelected('B')} />
        <GradeBtn label="C" range="50-59" bg="bg-[#FFF9E1]" text="text-[#FFD700]" onClick={() => assignGradeToSelected('C')} />
        <GradeBtn label="D" range="45-49" bg="bg-[#FFE9E1]" text="text-[#FF6B00]" onClick={() => assignGradeToSelected('D')} />
        <GradeBtn label="F" range="0-44" bg="bg-[#FFE1E1]" text="text-[#FF0000]" onClick={() => assignGradeToSelected('F')} />
        </div>
      </div>

      <button  className="w-full py-4 bg-[#800020] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#600018] shadow-lg transition-all">
        <LuSave size={18} /> Submit Grades
      </button>
    </div>
    </form>
  );
};

// UI Sub-components
const FilterSelect = ({ label, value, onChange, options }: any) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</label>
    <select value={value} onChange={(e) => onChange(e.target.value)} className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:ring-1 focus:ring-amber-500">
      {options.map((opt: any) => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
    </select>
  </div>
);

const StatCard = ({ label, value, icon, color = "text-gray-800" }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between">
    <div>
      <p className="text-[10px] font-bold text-gray-400 mb-1">{label}</p>
      <h3 className={`text-[1.5rem] font-black ${color}`}>{value}</h3>
    </div>
  </div>
);

const GradeBtn = ({ label, range, bg, text, onClick }: any) => (
  <button type='button' onClick={onClick} className={`${bg} ${text} p-6 rounded-2xl text-center transition-transform active:scale-95 border border-transparent hover:border-current/20`}>
    <h4 className="text-2xl font-black">{label}</h4>
    <p className="text-xs opacity-70">{range}</p>
  </button>
);

export default GradesManagement;