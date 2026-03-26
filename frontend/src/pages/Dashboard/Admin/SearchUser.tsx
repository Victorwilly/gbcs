import React, { useEffect, useState } from "react";
import { LuSearch, LuPlus, LuEye, LuPencil, LuTrash2, LuChevronDown } from "react-icons/lu";

const StudentsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // Track user to edit

  // Open modal for Adding
  const handleAddClick = () => {
    setSelectedUser(null); // Clear selected user
    setIsModalOpen(true);
  };

  // Open modal for Editing
  const handleEditClick = (user: User) => {
    setSelectedUser(user); // Set the user info
    setIsModalOpen(true);
  };
    interface User {
        _id: string;
        name: string;
        department: string;
        program: string;
        level: string;
        status: string;
        matricNumber: string;
        role: string;
      }
      
      // Then use it in your state:
      const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/admin/students", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok) setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  // --- DELETE LOGIC ---
  const handleDeleteUser = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete ${name}? This action cannot be undone.`)) {
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:5000/api/admin/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (response.ok) {
        // Optimistically update state: remove user from the current list
        setUsers((prev) => prev.filter((u) => u._id !== id));
        alert("Student deleted successfully");
      } else {
        const errData = await response.json();
        alert(errData.message || "Failed to delete student");
      }
    } catch (err) {
      console.error("Delete Error:", err);
      alert("An error occurred while trying to delete the student.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // --- SEARCH LOGIC ---
  const filteredUsers = users.filter((user) => {
    const searchStr = searchTerm.toLowerCase();
    return (
      user.name?.toLowerCase().includes(searchStr) ||
      user.matricNumber?.toLowerCase().includes(searchStr) ||
      user.department?.toLowerCase().includes(searchStr)
    );
  });

  if (loading) return <div className="p-10 text-center">Loading Students...</div>;

  return (
    <div className="p-8 bg-white min-h-screen">
      {/* Header Area */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Students Management</h1>
          <p className="text-sm text-gray-500">Manage student records and admissions</p>
        </div>
      </div>

      {/* Controls: Search, Filter, and Add Button */}
      <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
        <div className="flex gap-4 flex-1 max-w-2xl">
          {/* Search Bar */}
          <div className="relative flex-1">
            <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or matric number..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020]/20 focus:border-[#800020]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Filter Dropdown */}
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-200 pl-4 pr-10 py-2 rounded-lg focus:outline-none text-gray-600">
              <option>All Levels</option>
              <option>100 Level</option>
              <option>200 Level</option>
            </select>
            <LuChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <button onClick={handleAddClick} className="bg-[#D4AF37] hover:bg-[#b8962e] text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition shadow-sm">
          <LuPlus /> Add Student
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Matric Number</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Name</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Program</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Level</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">Status</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredUsers.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50 transition">
                <td className="p-4 text-sm text-gray-700 font-medium">{user.matricNumber || '2025/101038'}</td>
                <td className="p-4 text-sm text-gray-800 font-bold">{user.name}</td>
                <td className="p-4 text-sm text-gray-600">{user.program || 'Divinity & Ministry'}</td>
                <td className="p-4 text-sm text-gray-600">{user.level || '100'} Level</td>
                <td className="p-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                    user.status === 'Inactive' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
                  }`}>
                    {user.status || 'Active'}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-500 hover:text-blue-700"><LuEye /></button>
                    <button onClick={() => handleEditClick(user)}className="text-orange-400 hover:text-orange-600"><LuPencil /></button>
                    <button onClick={() => handleDeleteUser(user._id, user.name)} className="text-red-500 hover:text-red-700"><LuTrash2 /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredUsers.length === 0 && (
          <div className="p-10 text-center text-gray-400">No students found matching your search.</div>
        )}
      </div>

      {/* The Modal Component */}
      <AddStudentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchUsers} 
        editData={selectedUser} // Pass the data here
      />
    </div>
  );
};

const AddStudentModal = ({ isOpen, onClose, onSuccess, editData }: any) => {
    const [formData, setFormData] = useState({
      name: "",
      matricNumber: "",
      email: "",
      phone: "", // Optional for backend, but in your UI
      program: "",
      department: "",
      level: "100",
      role: "student",
      password: "Password123", // Set a default password
    });
  
    useEffect(() => {
        if (editData) {
          setFormData({
            name: editData.name || "",
            matricNumber: editData.matricNumber || "",
            department: editData.department || "",
            email: editData.email || "",
            program: editData.program || "",
            level: editData.level || "100",
            role: "student",
            password: "", // Leave blank for updates
            phone: editData.phone || "",
          });
        } else {
          // Reset for "Add New"
          setFormData({
            name: "",
            matricNumber: "",
            email: "",
            department: "",
            program: "",
            level: "100",
            role: "student",
            password: "Password123",
            phone: "",
          });
        }
      }, [editData, isOpen]);
  
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isEdit = !!editData;
        
        const url = isEdit 
          ? `http://localhost:5000/api/admin/${editData._id}` 
          : "http://localhost:5000/api/admin/create-user";
      
        try {
          const token = localStorage.getItem("token");
          const response = await fetch(url, {
            method: isEdit ? "PUT" : "POST",
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
          console.error("Network Error:", err);
          alert("Could not connect to the server.");
        }
      };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">{editData ? "Update Student" : "Add New Student"}</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
  
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                <input 
                  value={formData.name}
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
  
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Matriculation Number *</label>
                <input 
                  placeholder="2025/101038/BA-DM"
                  value={formData.matricNumber}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, matricNumber: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Department *</label>
                <input 
                  value={formData.department}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                />
              </div>
  
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Program *</label>
                  <select 
                    className="w-full p-3 border border-gray-200 rounded-xl bg-white outline-none"
                    value={formData.program}
                    onChange={(e) => setFormData({...formData, program: e.target.value})}
                  >
                    <option value="">Select Program</option>
                    <option value="Theology">Theology</option>
                    <option value="Divinity">Divinity & Ministry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Level *</label>
                  <select 
                    className="w-full p-3  border border-gray-200 rounded-xl bg-white outline-none"
                    value={formData.level}  
                    onChange={(e) => setFormData({...formData, level: e.target.value})}
                  >
                    <option value="100">100 level</option>
                    <option value="200">200 level</option>
                    <option value="300">300 level</option>
                  </select>
                </div>
              </div>
  
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email *</label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
  
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Phone *</label>
                <input 
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Password *</label>
                <input
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
  
              <button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#b8962e] text-white font-bold py-4 rounded-xl transition duration-200 shadow-md">
                {editData ? "Update Student" : "Add Student"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default StudentsPage;