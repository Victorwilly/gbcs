import React, { useState, useEffect } from 'react';
import { LuPlus, LuTrash2, LuUsers, LuGraduationCap } from 'react-icons/lu';

const AnnouncementsPage = () => {
    interface Announcement {
        _id: string;
        title: string;
        content: string;
        target: string;
        createdAt: string;
      }
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  // 1. Fetch Announcements
  const fetchAnnouncements = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/announcements", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      const data = await res.json();

      // CRITICAL: Only set if the data is actually an array
      console.log(data);
      if (res.ok && Array.isArray(data)) {
        setAnnouncements(data);
      } else {
        console.error("Backend returned an object, not an array:", data);
        setAnnouncements([]); // Fallback to prevent .map crash
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setAnnouncements([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchAnnouncements(); }, []);

  // 2. Delete Announcement
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this announcement?")) return;
    const res = await fetch(`http://localhost:5000/api/admin/announcements/${id}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${token}` }
    });
    if (res.ok) setAnnouncements(prev => prev.filter(a => a._id !== id));
  };

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Announcements</h1>
          <p className="text-sm text-gray-500">Send notifications to students and staff</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#D4AF37] hover:bg-[#B8962E] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition shadow-sm"
        >
          <LuPlus size={20} />
          Create Announcement
        </button>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {announcements.map((ann) => (
          <div key={ann._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative group">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-bold text-gray-800">{ann.title}</h3>
              <span className={`flex items-center gap-1 px-3 py-1 rounded-lg text-[10px] font-bold uppercase border ${
                ann.target === 'students' 
                ? 'bg-blue-50 text-blue-600 border-blue-100' 
                : 'bg-green-50 text-green-600 border-green-100'
              }`}>
                {ann.target === 'students' ? <LuUsers size={12}/> : <LuGraduationCap size={12}/>}
                {ann.target}
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">{ann.content}</p>
            <div className="text-[11px] text-gray-400">
              Sent on {new Date(ann.createdAt).toLocaleDateString()}
            </div>
            
            <button 
              onClick={() => handleDelete(ann._id)}
              className="absolute top-6 right-6 text-red-400 hover:text-red-600 transition-colors"
            >
              <LuTrash2 size={18} />
            </button>
          </div>
        ))}
      </div>
      
      <AddAnncouncement 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchAnnouncements} 
      />
    </div>
  );
};

const AddAnncouncement = ({ isOpen, onClose, onSuccess }: any) => {
    const [formData, setFormData] = useState({
      title: "",
      content: "",
      target: "everyone",
    });
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
          const token = localStorage.getItem("token");
          const response = await fetch("http://localhost:5000/api/admin/announcements", {
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
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Add Announcement</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
  
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Title *</label>
                <input 
                  required
                  className="w-full p-3 border border-gray-200 rounded-[.2rem] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>
  
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Message *</label>
                < textarea
                rows={6}
                  placeholder="type message.."
                  className="w-full p-3 border border-gray-200 rounded-[.2rem] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                ></textarea>
              </div>
  
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Send to *</label>
                  <select className="w-full text-xs p-3 border border-gray-200 rounded-[.2rem] bg-white outline-none"
                    onChange={(e) => setFormData({...formData, target: e.target.value})}>
                    <option value="everyone">Everyone Students and Staff</option>
                    <option value="student">Student</option>
                    <option value="staff">Staff</option>
                    <option value="lecturer">Lecturer</option>
                    <option value="associate professor">Associate Professor</option>
                    <option value="senior lecturer">Senior Lecturer</option>
                  </select>
                </div>
  
              <button  type="submit" className="w-full bg-[#D4AF37] hover:bg-[#b8962e] text-white font-bold py-4 rounded-xl transition duration-200 shadow-md">
                Send Announcement
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };


export default AnnouncementsPage;