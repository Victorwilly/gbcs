import React, { useState, useEffect } from 'react';
import { LuGlobe, LuCalendar, LuBell, LuSave } from 'react-icons/lu';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    currentSession: '',
    currentSemester: '1st',
    emailNotifications: true,
    smsNotifications: false,
    automaticBackup: true
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/admin/institution-info", {
          headers: { "Authorization": `Bearer ${token}` }
        });
        const data = await res.json();
        if (res.ok && data) setFormData(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchSettings();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // This is why the form is crucial!
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/admin/institution-info", {
        method: "POST", // Backend handles Upsert (Create if null, else Update)
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

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen pb-24">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-sm text-gray-500">Configure system settings and preferences</p>
      </div>

      {/* WRAPPING EVERYTHING IN A FORM */}
      <form onSubmit={handleSubmit} className="space-y-6 max-w-5xl">
        
        {/* Institution Information */}
        <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-50 p-2 rounded-lg text-orange-500"><LuGlobe size={20}/></div>
            <h2 className="font-bold text-gray-800">Institution Information</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Institution Name</label>
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
          </div>
        </div>

        {/* Academic Session */}
        <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-50 p-2 rounded-lg text-red-500"><LuCalendar size={20}/></div>
            <h2 className="font-bold text-gray-800">Academic Session</h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Current Session</label>
              <input 
                className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none"
                value={formData.currentSession}
                onChange={(e) => setFormData({...formData, currentSession: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Current Semester</label>
              <select 
                className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none text-sm"
                value={formData.currentSemester} 
                onChange={(e) => setFormData({...formData, currentSemester: e.target.value})}>
                <option value="1st">1st Semester</option>
                <option value="2nd">2nd Semester</option>
                <option value="3rd">3rd Semester</option>
                <option value="4th">4th Semester</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-gray-100">
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
    </div>
  );
};

export default SettingsPage;