import React, { useState, useEffect, useMemo } from 'react';
import { LuHotel, LuBed, LuUsers, LuCircleCheck, LuTrash2 } from 'react-icons/lu';

const HostelManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState<any[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
    const ROOM_DATA = [
        { id: "101", name: "Male Hostel A", roomNumber: "101", capacity: 4 },
        { id: "102", name: "Male Hostel A", roomNumber: "102", capacity: 4 },
        { id: "201", name: "Female Hostel B", roomNumber: "201", capacity: 4 },
        { id: "202", name: "Female Hostel B", roomNumber: "202", capacity: 4 },
      ];

      interface StatCardProps {
        label: string;
        value: string;
        icon: React.ReactNode;
        bgColor: string;
      }
      
      const StatCard = ({ label, value, icon, bgColor }: StatCardProps) => (
        <div className="bg-white p-6 rounded-[.5rem] shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{label}</p>
            <h3 className="text-xl font-bold text-gray-800">{value}</h3>
          </div>
          <div className={`${bgColor} p-3 rounded-2xl flex items-center justify-center`}>
            {icon}
          </div>
        </div>
      );


  // 1. Fetch Students to determine occupancy
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/api/admin/students", {
          headers: { "Authorization": `Bearer ${token}` }
        });
        const data = await response.json();
        if (response.ok) setStudents(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchStudents();
  }, []);

  // 2. Calculate Stats
  const stats = useMemo(() => {
    const totalCapacity = ROOM_DATA.reduce((acc, room) => acc + room.capacity, 0);
    // Occupied = Students with a non-empty room field
    const occupied = students.filter(s => s.room && s.room !== "").length;
    const available = totalCapacity - occupied;

    return { totalRooms: ROOM_DATA.length, totalCapacity, occupied, available };
  }, [students]);

  // 3. Remove Student from Room Function
  const handleRemoveFromRoom = async (studentId: string, name: string) => {
    if (!window.confirm(`Remove ${name} from this room?`)) return;

    try {
      const res = await fetch(`http://localhost:5000/api/admin/remove/${studentId}`, {
        method: "PUT", // Updating the user record to clear the room field
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });

      if (res.ok) {
        // Update local state to reflect the change
        setStudents(prev => prev.map(s => s._id === studentId ? { ...s, room: "" } : s));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Hostel Management</h1>
        <p className="text-sm text-gray-500">Manage hostel allocation and accommodation</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard label="Total Rooms" value={stats.totalRooms.toString()} icon={<LuHotel className="text-blue-600"/>} bgColor="bg-blue-50" />
        <StatCard label="Total Capacity" value={stats.totalCapacity.toString()} icon={<LuBed className="text-purple-600"/>} bgColor="bg-purple-50" />
        <StatCard label="Occupied" value={stats.occupied.toString()} icon={<LuUsers className="text-green-600"/>} bgColor="bg-green-50" />
        <StatCard label="Available" value={stats.available.toString()} icon={<LuCircleCheck className="text-orange-600"/>} bgColor="bg-orange-50" />
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ROOM_DATA.map((room) => {
          const occupants = students.filter(s => s.room === room.roomNumber);
          const isFull = occupants.length >= room.capacity;

          return (
            <div key={room.id} className="bg-white rounded-[.5rem] p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-gray-800">{room.name} </h3>
                  <p className="text-xs text-gray-400 font-medium tracking-wide">Room {room.roomNumber}</p>
                </div>
                <span className={`px-2 py-1 rounded-[.2rem] text-[10px] font-bold ${isFull ? 'bg-red-50 text-red-500' : 'bg-orange-50 text-orange-500'}`}>
                  {occupants.length} / {room.capacity}
                </span>
              </div>

              {/* Occupants List */}
              <div className="space-y-3 mb-6">
                {occupants.map((student) => (
                  <div key={student._id} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#F3E5AB] flex items-center justify-center text-[10px] font-bold text-gray-700">
                        {student.name.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{student.name}</span>
                    </div>
                    <button 
                       onClick={() => handleRemoveFromRoom(student._id, student.name)}
                       className="text-red-300 hover:text-red-500 transition-colors"
                    >
                      <LuTrash2 size={14} />
                    </button>
                  </div>
                ))}
                {occupants.length < room.capacity && (
                  <p className="text-[11px] text-gray-400 italic">
                    {room.capacity - occupants.length} space(s) available
                  </p>
                )}
              </div>

              <button 
                onClick={() => {
                  setSelectedRoom(room.roomNumber);
                  setIsModalOpen(true);
                }}
                className={`w-full py-3 rounded-[.5rem] border font-bold text-xs transition-colors ${
                  isFull ? 'bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed' : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white'
                }`}
                disabled={isFull}
              >
                {isFull ? 'Room Full' : 'Allocate Student'}
              </button>
            </div>
          );
        })}
      </div>
      <AllocateStudents 
  isOpen={isModalOpen} 
  onClose={() => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  }}
  // We only pass students who don't have a room yet
  students={students.filter(s => !s.room || s.room === "")}
  roomNumber={selectedRoom}
  setStudents={setStudents}
/>
    </div>
  );
};


const AllocateStudents = ({ isOpen, onClose, students, roomNumber, setStudents }: any) => {
  const [formData, setFormData] = useState({
    studentId: "",
    roomNumber: "",
  });
  interface Student {
    _id: string;
    name: string; // Ensure this matches your backend field name (you used name in your snippet)
    room?: string;
  }

  useEffect(() => {
    if (roomNumber) {
      setFormData(prev => ({ ...prev, roomNumber: roomNumber }));
    }
  }, [roomNumber]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/api/admin/allocate-room", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
              },
              body: JSON.stringify(formData),
          });
          if (response.ok) {
              onClose();
              const data = await response.json();
              // Update parent state so the UI reflects the change immediately
              setStudents((prev: any[]) => prev.map(s => 
                s._id === formData.studentId ? { ...s, room: formData.roomNumber } : s
              ));
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
            <h2 className="text-xl font-bold text-gray-800">Allocate Student</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Select student *</label>
                <select 
                className="w-full text-xs p-3 border border-gray-200 rounded-xl bg-white outline-none"
                onChange={(e) => setFormData({...formData, studentId: e.target.value})}
                required
              >
                <option value="">Select Student</option>
                {students
                    .map((l:Student )=> (
                    <option key={l._id} value={l._id}>
                        {l.name}
                    </option>
                    ))
                }
              </select>
              </div>

            <button  type="submit" className="w-full bg-[#D4AF37] hover:bg-[#b8962e] text-white font-bold py-4 rounded-xl transition duration-200 shadow-md">
              Allocate Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HostelManagement;