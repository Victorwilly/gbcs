import React, { useState, useEffect } from 'react';
import { LuUpload, LuFileText, LuDownload, LuTrash2, LuBookOpen, LuClipboardList } from 'react-icons/lu';

const CourseMaterials = () => {
  const [lecturerCourses, setLecturerCourses] = useState<any[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [materials, setMaterials] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadData, setUploadData] = useState({ title: '', message:"", courseTitle:"", type: 'lecture', file: null as File | null });

  const token = localStorage.getItem("token");
  const headers = { "Authorization": `Bearer ${token}` };

  // 1. Fetch Lecturer Courses (Reusing previous logic)
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("http://localhost:5000/api/users/my-courses", { headers });
      const data = await res.json();
      setLecturerCourses(data);
      if (data.length > 0) setSelectedCourseId(data[0]._id);
    };
    fetchCourses();
  }, []);

  // 2. Fetch Materials based on selected Course ID
  useEffect(() => {
    if (!selectedCourseId) return;
    const fetchMaterials = async () => {
        try{
      const res = await fetch(`http://localhost:5000/api/users/materials?courseId=${selectedCourseId}`, { headers });
      const data = await res.json();
      if (res.ok && Array.isArray(data)) {
        setMaterials(data);
      } else {
        console.error("Backend did not return an array:", data);
        setMaterials([]); // Fallback to empty array to prevent crash
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setMaterials([]); // Fallback to empty array
    };
}
    fetchMaterials();
  }, [selectedCourseId]);

  // 3. Handlers
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadData.file) return;
    
    const currentCourse = lecturerCourses.find(c => c._id === selectedCourseId);
    const courseTitle = currentCourse ? currentCourse.courseTitle : "";
    
    const formData = new FormData();
    formData.append("title", uploadData.title);
    formData.append("type", uploadData.type);
    formData.append("message", uploadData.message || "No description provided");
    formData.append("courseTitle", courseTitle);
    formData.append("courseId", selectedCourseId);
    formData.append("file", uploadData.file);
    
    const res = await fetch("http://localhost:5000/api/users/materials", {
        method: "POST",
        headers: { "Authorization": `Bearer ${token}` },
        body: formData
    });
    console.log('s');

    if (res.ok) {
      setIsModalOpen(false);
      const data = await res.json();
       alert(data.message);
      const updated = await fetch(`http://localhost:5000/api/users/materials?courseId=${selectedCourseId}`, { headers });
      setMaterials(await updated.json());
    }
  };

  const handleDelete = async (materialId: string) => {
    if (!window.confirm("Delete this material?")) return;
    const res = await fetch(`http://localhost:5000/api/users/materials/${materialId}`, { method: "DELETE", headers });
    if (res.ok) setMaterials(materials.filter(m => m._id !== materialId));
  };

  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = `http://localhost:5000/${fileUrl}`;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="p-8 bg-[#FDFDFD] min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Course Materials</h1>
          <p className="text-xs text-gray-400">Upload and manage course materials</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#D4AF37] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-[#b8962d] transition-all shadow-md"
        >
          <LuUpload size={18} /> Upload Material
        </button>
      </div>

      {/* Select Course Dropdown */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Select Course</label>
        <select 
          value={selectedCourseId} 
          onChange={(e) => setSelectedCourseId(e.target.value)}
          className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:ring-1 focus:ring-amber-500"
        >
          {lecturerCourses.map(c => <option key={c._id} value={c._id}>{c.courseCode} - {c.courseTitle}</option>)}
        </select>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <MaterialStatCard label="Total Materials" value={materials.length} icon={<LuFileText />} />
        <MaterialStatCard label="Lecture Notes" value={materials.filter(m => m.type === 'lecture').length} icon={<LuBookOpen />} color="text-blue-500" />
        <MaterialStatCard label="Assignments" value={materials.filter(m => m.type === 'assignment').length} icon={<LuClipboardList />} color="text-orange-500" />
      </div>

      {/* Materials List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
        <h3 className="font-bold text-gray-800 mb-2">Uploaded Materials</h3>
        {materials.map((m) => (
          <div key={m._id} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-50 hover:bg-white hover:border-amber-100 transition-all group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-50 text-red-500 rounded-xl"><LuFileText size={24} /></div>
              <div>
                <h4 className="text-sm font-bold text-gray-800">{m.title}</h4>
                <div className="flex items-center gap-3 mt-1">
                  <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold uppercase ${
                    m.type === 'lecture' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                  }`}>{m.type}</span>
                  <span className="text-[10px] text-gray-400 font-medium">{new Date(m.createdAt).toLocaleDateString()}</span>
                  <span className="text-[10px] text-gray-400 font-medium">{(m.fileSize / 1024 / 1024).toFixed(1)} MB</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => handleDownload(m.fileUrl, m.title)} className="p-2 text-amber-500 hover:bg-amber-50 rounded-lg"><LuDownload /></button>
              <button onClick={() => handleDelete(m._id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><LuTrash2 /></button>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[500px] rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
            <h2 className="text-sm font-bold mb-6">Upload Course Material</h2>
            <form onSubmit={handleUpload} className="space-y-4">
            <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Title *</label>
                <input
                  className="w-full p-3 border border-gray-200 rounded-[.5rem] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={e => setUploadData({...uploadData, title: e.target.value})}
                />
              </div>
            <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Message *</label>
                <textarea
                  className="w-full p-3 border border-gray-200 rounded-[.5rem] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={e => setUploadData({...uploadData, message: e.target.value})}
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Material *</label>
              <input 
                type="file" required
                className="w-full p-4 border-2 border-dashed border-gray-200 rounded-[.5rem"
                onChange={e => setUploadData({...uploadData, file: e.target.files ? e.target.files[0] : null})}
              />
              </div>
              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-4 font-bold text-gray-400">Cancel</button>
                <button type="submit" className="flex-1 py-4 bg-[#800020] text-white rounded-xl font-bold">Upload</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const MaterialStatCard = ({ label, value, icon, color = "text-gray-800" }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">{label}</p>
      <h3 className={`text-2xl font-black ${color}`}>{value}</h3>
    </div>
    <div className="p-3 bg-gray-50 rounded-xl text-xl text-gray-300">{icon}</div>
  </div>
);

export default CourseMaterials;