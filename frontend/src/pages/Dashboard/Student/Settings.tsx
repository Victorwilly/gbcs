import React, { useEffect, useState } from "react";
import { LuGlobe, LuCalendar, LuBell, LuSave } from 'react-icons/lu';

const SettingsPage = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    emailNotifications: true,
    smsNotifications: false,
    automaticBackup: true
  });

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const fetchSettings = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { "Authorization": `Bearer ${token}` };
  
      const userRes = await fetch("http://localhost:5000/api/users/me", { headers });
      const userData = await userRes.json();
      
      setUser(userData);
      
      // Sync formData with the fetched user data so inputs are editable
      setFormData({
        name: userData.name || '',
        email: userData.email || '',
        phone: userData.phone || '',
        address: userData.address || '',
        dob: userData.dob || '',
        emailNotifications: userData.emailNotifications ?? true,
        smsNotifications: userData.smsNotifications ?? false,
        automaticBackup: userData.automaticBackup ?? true
      });
  
      setLoading(false);
    } catch (err) {
      console.error("Fetch Error:", err);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSettings();
  }, [setUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // This is why the form is crucial!
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/users/settings", {
        method: "PUT", // Backend handles Upsert (Create if null, else Update)
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      if (response.ok){
        const data = await response.json();
        alert(data.message);
      }
    } catch (err) {
      console.error("Save error:", err);
    }
  };

   // At the top of your component's return
if (loading) {
    return (
      <div className="p-8 bg-[#F8F9FA] min-h-screen flex items-center justify-center">
        <div className="text-gray-400 font-medium animate-pulse">
          Initializing hostel portal...
        </div>
      </div>
    );
  }
  
  // Add an extra check for the user object
  if (!user) {
    return <div className="p-8 text-red-500">Error: User session not found. Please log in again.</div>;
  }

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen pb-24">
      <div className="mb-8">
        <h1 className="text-[1rem] text-gray-800">Profile settings</h1>
        <p className="text-[10px] text-gray-500">Configure system settings and preferences</p>
      </div>

      {/* WRAPPING EVERYTHING IN A FORM */}
      <form onSubmit={handleSubmit} className="space-y-6 max-w-5xl">
        
        {/* Institution Information */}
        <div className="bg-white p-8 rounded-[1rem] shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-50 p-2 rounded-lg text-orange-500"><LuGlobe size={20}/></div>
            <h2 className="font-bold text-gray-800">Personal Information</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Full Name</label>
              <input 
                required
                className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#D4AF37]"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Email</label>
                <input 
                  type="email"
                  required
                  className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Phone</label>
                <input 
                  required
                  className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Address</label>
              <input 
                required
                className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">date of birth</label>
              <input 
                required
                className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none"
                value={formData.dob}
                onChange={(e) => setFormData({...formData, dob: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* Academic Session */}
        <div className="bg-white p-8 rounded-[1rem] shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-50 p-2 rounded-lg text-red-500"><LuCalendar size={20}/></div>
            <h2 className="font-bold text-gray-800">Security</h2>
          </div>
          <button type="button" onClick={handleAddClick} className="bg-[#800020] hover:bg-[#800020] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition shadow-sm"> Change password
        </button>
        </div>

        {/* Notifications */}
        <div className="bg-white p-8 rounded-[1rem] shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-50 p-2 rounded-lg text-green-600"><LuBell size={20}/></div>
            <h2 className="font-bold text-gray-800">Notifications</h2>
          </div>

          <div className="space-y-6">
            {[
              { id: 'emailNotifications', title: 'Email Notifications', desc: 'Receive notifications via email' },
              { id: 'smsNotifications', title: 'SMS Notifications', desc: 'Receive notifications via SMS' },
              { id: 'automaticBackup', title: 'Automatic Backup', desc: 'Enable daily automatic backups' }
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between py-2">
                <div>
                  <h3 className="text-sm font-bold text-gray-800">{item.title}</h3>
                  <p className="text-[11px] text-gray-400">{item.desc}</p>
                </div>
                <input 
                  type="checkbox"
                  className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
                  checked={formData[item.id as keyof typeof formData] as boolean}
                  onChange={(e) => setFormData({ ...formData, [item.id]: e.target.checked })}
                />
              </div>
            ))}
          </div>
        </div>

        {/* The submit button must be INSIDE the form */}
        <button 
          type="submit"
          className="w-full bg-[#800020] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#600018] transition shadow-lg"
        >
          <LuSave size={20}/>
          Save All Settings
        </button>
      </form>
      <PasswordModal
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchSettings}/>
    </div>
  );
};

const PasswordModal = ({ isOpen, onClose, onSuccess }: any) => {
    const [formData, setFormData] = useState({
      oldPassword: "",
      password: "",
      conPassword: "",
    });
  
    useEffect(() => {
          setFormData({
            oldPassword: "",
            password: "",
            conPassword: "",
          });
      }, [isOpen]);
  
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.conPassword) {
            return alert("New passwords do not match!");
        }
      
        try {
          const token = localStorage.getItem("token");
          const response = await fetch("http://localhost:5000/api/users/password", {
            method: "PUT",
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
              <h2 className="text-xl font-bold text-gray-800">Change Password</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
  
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Current Password *</label>
                <input
                type='password'
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, oldPassword: e.target.value})}/>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">New Password *</label>
                <input
                type='password'
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}/>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Confirm Password *</label>
                <input
                type='password'
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/20 outline-none"
                  onChange={(e) => setFormData({...formData, conPassword: e.target.value})}/>
              </div>
  
              <button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#b8962e] text-white font-bold py-4 rounded-xl transition duration-200 shadow-md">
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default SettingsPage;