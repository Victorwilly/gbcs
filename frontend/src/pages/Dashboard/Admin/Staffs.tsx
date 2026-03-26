import React, { useState, useEffect } from "react";
import { LuSearch, LuPlus, LuTrash2, LuMail, LuPhone, LuBookOpen, LuChevronDown } from "react-icons/lu";

interface StaffMember {
  _id: string;
  name: string;
  staffId: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  courses?: string[]; // Assuming your backend might send this later
}

const StaffPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchStaff = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/admin/staffs", { // Ensure this matches your backend route
        headers: { "Authorization": `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok) setStaff(data);
    } catch (err) {
      console.error("Error fetching staff:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  // --- DELETE LOGIC ---
  const handleDeleteStaff = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to remove ${name}?`)) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:5000/api/admin/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });

      if (response.ok) {
        setStaff((prev) => prev.filter((member) => member._id !== id));
        alert("Staff deleted successfully");
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // --- SEARCH & FILTER LOGIC ---
  const filteredStaff = staff.filter((member) => {
    const searchStr = searchTerm.toLowerCase();
    const matchesSearch = 
      member.name?.toLowerCase().includes(searchStr) ||
      member.staffId?.toLowerCase().includes(searchStr) ||
      member.department?.toLowerCase().includes(searchStr);
    
    const matchesRole = roleFilter === "All Roles" || member.role === roleFilter.toLowerCase();
    
    return matchesSearch && matchesRole;
  });

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Staff & Lecturers</h1>
        <p className="text-sm text-gray-500">Manage academic and administrative staff</p>
      </div>

      <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
        <div className="flex gap-4 flex-1 max-w-2xl">
          <div className="relative flex-1">
            <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or Staff ID..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <select 
              className="appearance-none bg-white border border-gray-200 pl-4 pr-10 py-2.5 rounded-xl focus:outline-none text-gray-600 min-w-[140px]"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option>All Roles</option>
              <option value="lecturer">Lecturer</option>
              <option value="staff">Staff</option>
              <option value="associate professor">Associate Professor</option>
              <option value="senior lecturer">Senior Lecturer</option>
            </select>
            <LuChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#D4AF37] hover:bg-[#b8962e] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition shadow-sm"
        >
          <LuPlus /> Add Staff
        </button>
      </div>

      {loading ? (
        <div className="text-center py-20 font-bold text-[#D4AF37]">Loading staff records...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.map((member) => (
            <StaffCard 
              key={member._id}
              member={member}
              onDelete={() => handleDeleteStaff(member._id, member.name)}
            />
          ))}
        </div>
      )}

      {filteredStaff.length === 0 && !loading && (
        <div className="text-center py-20 text-gray-400">No staff members found.</div>
      )}

      <AddStaff 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchStaff} 
      />
    </div>
  );
};

// Sub-component for the Individual Cards
const StaffCard = ({ member, onDelete }: any) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group">
      <div className="absolute top-6 right-6 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
      
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
        <p className="text-xs font-medium text-gray-400 mt-0.5 uppercase tracking-wider">{member.staffId || "NO ID"}</p>
      </div>

      <div className="mb-6">
        <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-md uppercase">
          {member.role}
        </span>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-400 font-medium min-w-[80px]">Department:</span>
          <span className="text-gray-700">{member.department}</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <LuMail className="text-gray-400" />
          <span className="text-gray-600 truncate">{member.email}</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <LuPhone className="text-gray-400" />
          <span className="text-gray-600">{member.phone || "N/A"}</span>
        </div>
        <div className="flex items-start gap-3 text-sm">
          <LuBookOpen className="text-gray-400 mt-0.5" />
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-400 font-medium">Courses:</span>
            {member.courses?.length ? member.courses.map((c: string) => (
              <span key={c} className="text-gray-700 font-medium">{c}</span>
            )) : <span className="text-gray-500 italic">None assigned</span>}
          </div>
        </div>
      </div>

      <button 
        onClick={onDelete}
        className="absolute bottom-6 right-6 p-2 text-red-200 hover:text-red-500 transition-colors"
      >
        <LuTrash2 size={20} />
      </button>
    </div>
  );
};

const AddStaff = ({ isOpen, onClose, onSuccess }: any) => {
    const [formData, setFormData] = useState({
      name: "",
      matricNumber: "",
      email: "",
      staffId:"",
      phone: "", // Optional for backend, but in your UI
      department: "",
      level: "",
      role: "",
      password: "Password123", // Set a default password
    });
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
          const token = localStorage.getItem("token");
          const response = await fetch("http://localhost:5000/api/admin/create-user", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                onSuccess(); // Refresh the table
                onClose();   // Close modal frog@mail.com
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
              <h2 className="text-xl font-bold text-gray-800">Add New Staff</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
  
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                <input 
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
  
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Staff ID *</label>
                <input 
                  placeholder="2025/101038/BA-DM"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, staffId: e.target.value})}
                />
              </div>
  
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Role *</label>
                  <select className="w-full text-xs p-3 border border-gray-200 rounded-xl bg-white outline-none"
                    onChange={(e) => setFormData({...formData, role: e.target.value})}>
                    <option value="">Select Role</option>
                    <option value="staff">Staff</option>
                    <option value="lecturer">Lecturer</option>
                    <option value="associate professor">Associate Professor</option>
                    <option value="senior lecturer">Senior Lecturer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Department *</label>
                  <input
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, department: e.target.value})}/>
                </div>
              </div>

              <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Level *</label>
                  <select className="w-full text-xs p-3 border border-gray-200 rounded-xl bg-white outline-none"
                    onChange={(e) => setFormData({...formData, level: e.target.value})}>
                    <option value="">Select Level</option>
                    <option value="100">100 Level</option>
                    <option value="200">200 level</option>
                    <option value="300">300 level</option>
                    <option value="400">400 level</option>
                  </select>
                </div>

              <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email *</label>
                <input 
                  type="email"
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
  
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Phone *</label>
                <input 
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Password *</label>
                <input
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
  
              <button 
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#b8962e] text-white font-bold py-4 rounded-xl transition duration-200 shadow-md"
              >
                Add Staff Member
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default StaffPage;