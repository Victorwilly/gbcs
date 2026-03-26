import React, { useState, useEffect } from "react";
import { LuSearch, LuPlus, LuTrash2, LuUsers, LuBook, LuChevronDown } from "react-icons/lu";

interface Course {
    _id: string;
    courseCode: string;
    courseTitle: string;
    courseUnit: number;
    courseLevel: string;
    program:string;
    semester: string;
    lecturer: string;
    lecturerId: string;
    enrolledStudents: number;
  }

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null); // Track user to edit
  const [courses, setCourses] = useState<Course[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/admin/course", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok) setCourses(data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    } finally {
      setLoading(false);
    }
  };

  // Mock data based on your image
  useEffect(() => {
    fetchCourses();
  }, []);

  // 2. FIXED: Delete Logic
  const handleDeleteCourse = async (id: string, code: string) => {
    if (!window.confirm(`Delete ${code}?`)) return;
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:5000/api/admin/course/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (response.ok) {
        setCourses(prev => prev.filter(c => c._id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditClick = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleAddClick = () => {
    setSelectedCourse(null);
    setIsModalOpen(true);
  };

  const filteredCourses = courses.filter(c => 
    c.courseTitle?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.courseCode?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Courses Management</h1>
        <p className="text-sm text-gray-500">Manage courses and assign lecturers</p>
      </div>

      <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
        <div className="relative flex-1 max-w-lg">
          <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by course code or title..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button 
          onClick={handleAddClick}
          className="bg-[#D4AF37] hover:bg-[#b8962e] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition shadow-sm"
        >
          <LuPlus /> Add course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard 
            key={course._id} 
            course={course} 
            onEdit={() => handleEditClick(course)} 
            onDelete={() => handleDeleteCourse(course._id, course.courseCode)}
          />
        ))}
      </div>

      <AddCourseModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchCourses} 
        editData={selectedCourse} 
      />
    </div>
  );
};

const CourseCard = ({ course, onEdit, onDelete }: { course: Course; onEdit: () => void; onDelete: () => void }) => {
    return (
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
        <div>
          <span className="bg-[#FFF9E6] text-[#D4AF37] text-[10px] font-bold px-3 py-1 rounded-md uppercase mb-4 inline-block">
            {course.courseCode}
          </span>
          <h3 className="text-lg font-bold text-gray-800 mb-1">{course.courseTitle}</h3>
          <p className="text-xs text-gray-500 mb-6">{course.courseUnit} Units • {course.courseLevel} Level</p>
  
          <div className="space-y-3 mb-8 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400 font-medium">Semester:</span>
              <span className="text-gray-700 font-semibold">{course.semester}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-medium">Lecturer:</span>
              <span className="text-gray-700 font-semibold">{course.lecturer || "Unassigned"}</span>
            </div>
          </div>
        </div>
  
        <div className="flex gap-3">
          <button onClick={onEdit} className="flex-1 py-2 px-4 border border-gray-100 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition">
            Edit
          </button>
          <button onClick={onDelete} className="p-2 text-red-100 hover:text-red-500 transition-colors">
            <LuTrash2 size={20} />
          </button>
        </div>
      </div>
    );
  };

const AddCourseModal = ({ isOpen, onClose, onSuccess, editData }: any) => {
    const [lecturers, setLecturers] = useState<any[]>([]);
    const [formData, setFormData] = useState({
      courseCode: "",
      courseTitle: "",
      program: "",
      courseUnit: "",
      day:"",
      time:"",
      lecturer: "", // Stores Name
      lecturerId: "", // Stores ID
      courseLevel: "",
      semester: "",
    });

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

    useEffect(() => {
      if (editData) {
        setFormData({ ...editData });
      } else {
        setFormData({
          courseCode: "", courseTitle: "", program: "", courseUnit: "",day:"",time:"",
          lecturer: "", lecturerId: "", courseLevel: "", semester: "",
        });
      }
    }, [editData, isOpen]);

    // Handle Lecturer Selection
    const handleLecturerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = e.target.value;
        const lecturerObj = lecturers.find(l => l._id === selectedId);
        setFormData({
            ...formData,
            lecturerId: selectedId,
            lecturer: lecturerObj ? lecturerObj.name : ""
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const isEdit = !!editData;
      const url = isEdit ? `http://localhost:5000/api/admin/course/${editData._id}` : "http://localhost:5000/api/admin/course";
      
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(url, {
          method: isEdit ? "PUT" : "POST",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            onSuccess();
            onClose();
        } else {
            alert(data.message);
        }
      } catch (err) { console.error(err); }
    };

    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">{editData ? "Update Course" : "Add Course"}</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
  
            <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Course code *</label>
                  <input 
                  value={formData.courseCode}
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, courseCode: e.target.value})}
                />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Units *</label>
                  <input 
                  value={formData.courseUnit}
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, courseUnit: e.target.value})}
                />
                </div>
              </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Course Title *</label>
                  <input 
                  value={formData.courseTitle}
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, courseTitle: e.target.value})}/>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Program *</label>
                  <select 
                    className="w-full p-3 text-xs border border-gray-200 rounded-xl bg-white outline-none"
                    value={formData.program}
                    onChange={(e) => setFormData({...formData, program: e.target.value})}>
                    <option value="">Select Program</option>
                    <option value="Theology">Theology</option>
                    <option value="Divinity">Divinity & Ministry</option>
                  </select>
                </div>
              </div>
  
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Level *</label>
                  <select 
                    className="w-full p-3 text-xs border border-gray-200 rounded-xl bg-white outline-none"
                    value={formData.courseLevel}
                    required
                    onChange={(e) => setFormData({...formData, courseLevel: e.target.value})}>
                    <option value="">Select level</option>
                    <option value="100">100 level</option>
                    <option value="200">200 level</option>
                    <option value="300">300 level</option>
                    <option value="400">400 level</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Semester *</label>
                  <select 
                className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none text-sm"
                value={formData.semester} 
                required
                onChange={(e) => setFormData({...formData, semester: e.target.value})}>
                <option value="">Select semester</option>
                <option value="1st">1st Semester</option>
                <option value="2nd">2nd Semester</option>
                <option value="3rd">3rd Semester</option>
                <option value="4th">4th Semester</option>
              </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Days *</label>
                  <input 
                  value={formData.day}
                  placeholder="Mon, Tue"
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, day: e.target.value})}/>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Time *</label>
                  <input 
                  value={formData.time}
                  placeholder="12:00 AM - 5:00 PM"
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, time: e.target.value})}/>
                </div>
              </div>

              <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Assign Lecturer *</label>
                  <select 
                className="w-full text-xs p-3 border border-gray-200 rounded-xl bg-white outline-none"
                value={formData.lecturerId}
                onChange={handleLecturerChange}
                required
              >
                <option value="">Select Lecturer</option>
                {lecturers
                    .filter(l => l.role === 'lecturer' || l.role === 'senior lecturer' || l.role === 'associate professor')
                    .map(l => (
                    <option key={l._id} value={l._id}>
                        {l.name} ({l.role})
                    </option>
                    ))
                }
              </select>
                </div>
  
              <button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#b8962e] text-white font-bold py-4 rounded-xl transition duration-200 shadow-md">
                {editData ? "Update Course" : "Add Course"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default CoursesPage;