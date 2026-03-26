import React, { useState, useEffect, useMemo } from 'react';
import { LuBookPlus, LuTrash2, LuPlus, LuCircleAlert, LuCircleCheck } from 'react-icons/lu';

const CourseRegistration = () => {
  const [user, setUser] = useState<any>(null);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = { "Authorization": `Bearer ${token}` };

        // 1. Fetch User
        const userRes = await fetch("http://localhost:5000/api/users/me", { headers });
        const userData = await userRes.json();
        setUser(userData);

        if (userData && userData.courses) {
          setSelectedIds(userData.courses); 
      }

        // 2. Fetch All Courses from DB
        const coursesRes = await fetch("http://localhost:5000/api/users/courses?program=", { headers });
        const coursesData = await coursesRes.json();
        setAllCourses(coursesData);
        
        setLoading(false);
      } catch (err) {
        console.error("Registration Fetch Error:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Remove Course
  const handleRemove = async (courseId: string) => {
    try {
      const token = localStorage.getItem("token");
      const headers = { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json" 
      };
  
      // 1. Call Backend to remove from DB
      const res = await fetch(`http://localhost:5000/api/users/remove-course`, {
        method: "DELETE",
        headers,
        body: JSON.stringify({ courseId })
      });
  
      if (res.ok) {
        // 2. Update local state so the course disappears from the top list
        setSelectedIds(prev => prev.filter(id => id !== courseId));
        
        // 3. Update the user object so availableCourses useMemo works correctly
        setUser((prevUser: any) => ({
          ...prevUser,
          courses: prevUser.courses.filter((id: string) => id !== courseId)
        }));
      }
    } catch (err) {
      console.error("Error removing course:", err);
    }
  };
  // Add Course
  const handleAdd = (id: string) => {
    if (!selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Logical Derived States
  const registeredCourses = useMemo(() => {
    if (!allCourses.length) return [];
    // Use selectedIds to filter so the list updates instantly
    return allCourses.filter(course => selectedIds.includes(course._id));
  }, [selectedIds, allCourses]);;

  const availableCourses = useMemo(() => {
    if (!allCourses.length) return [];
  
    return allCourses.filter(course => {
      // Check against selectedIds so they disappear from "Available" as soon as you add them
      const isNotSelected = !selectedIds.includes(course._id);
  
      const matchesSearch = 
        course.courseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.courseCode.toLowerCase().includes(searchQuery.toLowerCase());
  
      return isNotSelected && matchesSearch;
    });
  }, [selectedIds, allCourses, searchQuery]);

  // Calculate current units based on LOCAL selection
  const currentSelection = allCourses.filter(c => selectedIds.includes(c._id));
  const totalUnits = useMemo(() => {
    // Use the registeredCourses we just calculated above
    return registeredCourses.reduce((sum, course) => {
      const unit = parseInt(course.courseUnit) || 0;
      return sum + unit;
    }, 0);
  }, [registeredCourses]);
  const isBelowMinimum = totalUnits < 15;
  const noChanges = useMemo(() => {
    const dbCourses = user?.courses || [];
    if (selectedIds.length !== dbCourses.length) return false;
    
    const s1 = [...selectedIds].sort();
    const s2 = [...dbCourses].map(id => id.toString()).sort();
    return JSON.stringify(s1) === JSON.stringify(s2);
  }, [selectedIds, user?.courses]);

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:5000/api/users/register-courses", {
      method: "PUT",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      },
      body: JSON.stringify({ courseIds: selectedIds })
    });
    
    const data = await res.json();
    
    if (res.ok) {
      // Update the local user state so availableCourses/registeredCourses update
      setUser((prev: any) => ({
        ...prev,
        courses: data.courses // Use the IDs returned from the server
      }));
      alert(data.message);
    } else {
      alert(data.message);
    }
  };

  if (loading) return <div className="p-8 text-gray-500">Loading curriculum...</div>;

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-[1rem] font-bold text-gray-800">Course Registration</h1>
        <p className="text-[.8rem] text-gray-500">Register for courses - 2024/2025 Session, {user?.semester} Semester</p>
      </div>

      {/* 1. Registration Summary Cards */}
      <div className='bg-white rounded-[.5rem] p-3'>
        <div className='flex items-center justify-between my-2'>
            <h1>Registration Summary</h1>
             <div className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded">{totalUnits} / 24 Units</div>
        </div>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <SummaryCard label="Courses Registered" value={registeredCourses.length} />
        <SummaryCard label="Total Units" value={`${totalUnits} / 24`} />
        <SummaryCard 
          label="Status" 
          value={isBelowMinimum ? "Below Minimum" : "Good to go"} 
          color={isBelowMinimum ? "text-red-500" : "text-green-600"}
        />
      </div>
      {/* Minimum Units Alert */}
      {isBelowMinimum && (
        <div className="p-4 bg-orange-50 border border-orange-100 rounded-[.5rem] flex items-center gap-3 text-orange-700 text-sm">
          <LuCircleAlert size={18} />
          <p>You need at least <strong>15 units</strong> to register. Add <strong>{15 - totalUnits} more unit(s)</strong>.</p>
        </div>
      )}
      </div>

      {/* 2. Registered Courses List */}
      <section className="my-10">
        <h2 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider">Registered Courses</h2>
        <div className="space-y-3">
          {registeredCourses.length > 0 ? registeredCourses.map(course => (
            <div key={course._id} className="bg-[#FFFBF2] border border-[#F3E8D2] p-5 rounded-2xl flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded uppercase">
                  {course.courseCode} • {course.courseUnit} Units
                </span>
                <h3 className="font-bold text-gray-800 mt-2">{course.courseTitle}</h3>
                <p className="text-xs text-gray-500 mt-1">{course.lecturer}</p>
              </div>
              <button onClick={() => handleRemove(course._id)} className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-colors">
                <LuTrash2 size={20} />
              </button>
            </div>
          )) : (
            <div className="text-center py-10 bg-white rounded-2xl border border-dashed border-gray-200 text-gray-400">
              No courses added yet. Select from available courses below.
            </div>
          )}
        </div>
      </section>

      {/* 3. Available Courses Grid */}
      <section className="mb-24 bg-white p-3 rounded[.8rem]">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Available Courses</h2>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search courses..." className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs outline-none focus:border-[#D4AF37] w-64" />
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {availableCourses.map(course => (
            <div key={course._id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center group hover:border-[#D4AF37]/30 transition-all">
              <div>
                <div className='flex items-center justify-between'>
                <span className="text-[10px] bg-[#F3F4F6] font-bold text-black rounded-[.2rem] px-2 py-.5 mr-2 uppercase">{course.courseCode}</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase">{course.courseUnit} Units</span>
                </div>
                
                <h3 className="font-bold text-gray-800 mt-1">{course.courseTitle}</h3>
                <p className="text-xs text-gray-500">{course.lecturer}</p>
              </div>
              <button 
                onClick={() => handleAdd(course._id)} 
                className={`p-3 text-white rounded-xl transition-all group-hover:shadow-lg ${selectedIds.includes(course._id) ? "bg-[#2D5016]": "bg-[#D4AF37] hover:bg-[#b8962e]" }`}>
                {selectedIds.includes(course._id) ? <LuCircleCheck size={20} /> : <LuPlus size={20} />}
            </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Submit Action disabled={isBelowMinimum} */}
      <div className="flex justify-center">
        <button
        onClick={handleSubmit}
        disabled={noChanges}
          className={`w-full max-w-4xl py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
            noChanges 
              ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
              : "bg-[#800020] text-white hover:bg-[#600018]" }`}>
          <LuCircleCheck size={20} />
          Submit Course Registration
        </button>
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

export default CourseRegistration;