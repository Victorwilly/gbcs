import React, { useState, useEffect, useMemo } from 'react';
import { LuInfo, LuTriangleAlert, LuCheckCheck, LuTrash2 } from 'react-icons/lu';

const NotificationsPage = () => {
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [filter, setFilter] = useState<'all' | 'unread'>('unread');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = { "Authorization": `Bearer ${token}` };

        // 1. Fetch THE USER first to get the latest read/deleted arrays
        const userRes = await fetch(`http://localhost:5000/api/users/me`, { headers });
        const userData = await userRes.json();
        if (userRes.ok) {
            setUser(userData); // Update the global/parent state
        }

        // 1. Fetch announcements targeted at students or everyone
        const res = await fetch(`http://localhost:5000/api/users/announcements`, { headers });
        const data = await res.json();
        
        // Filter by target (Student or Everyone)
        const targeted = data.filter((a: any) => 
          a.target?.toLowerCase() === 'student' || a.target?.toLowerCase() === 'everyone'
        );
        
        setAnnouncements(targeted);
        setLoading(false);
      } catch (err) {
        console.error("Fetch Error:", err);
        setLoading(false);
      }
    };
    fetchNotifications();
  }, [setUser]);

  const visibleNotifications = useMemo(() => {
    // 1. Ensure we are checking against strings
    const deletedIds = (user?.deleted_notifications || []).map((id: any) => id.toString());
    const readIds = (user?.read_notifications || []).map((id: any) => id.toString());
  
    // 2. Filter out deleted
    const nonDeleted = announcements.filter(a => !deletedIds.includes(a._id.toString()));
  
    if (filter === 'unread') {
      // 3. Show only those NOT in the read list
      return nonDeleted.filter(a => !readIds.includes(a._id.toString()));
    }
    
    return nonDeleted;
  }, [announcements, user, filter]);

  // Handle Mark as Read
  const handleMarkRead = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      
      // 1. Tell the database to add this ID to read_notifications
      const res = await fetch(`http://localhost:5000/api/users/notifications/read`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ notificationId: id })
      });
  
      if (res.ok) {
        // 2. ONLY update local state if the database update was successful
        setUser({ 
          ...user, 
          read_notifications: [...user.read_notifications, id] 
        });
      }
    } catch (err) {
      console.error("Failed to mark as read:", err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/users/notifications/delete`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ notificationId: id })
      });
  
      if (res.ok) {
        setUser({ 
          ...user, 
          deleted_notifications: [...user.deleted_notifications, id] 
        });
      }
    } catch (err) {
      console.error("Failed to delete notification:", err);
    }
  };

  if (loading) return <div className="p-10 text-gray-400">Loading notifications...</div>;

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen">
      {/* Header Area */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
          <p className="text-sm text-gray-500">{visibleNotifications.length} notifications available</p>
        </div>
        <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all">
          Mark All as Read
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 bg-white p-1.5 w-fit rounded-xl border border-gray-100 shadow-sm">
        <button 
          onClick={() => setFilter('all')}
          className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${filter === 'all' ? 'bg-[#D4AF37] text-white' : 'text-gray-400 hover:text-gray-600'}`}
        >
          All ( {announcements.length - (user?.deleted_notifications?.length || 0)} )
        </button>
        <button 
          onClick={() => setFilter('unread')}
          className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${filter === 'unread' ? 'bg-[#D4AF37] text-white' : 'text-gray-400 hover:text-gray-600'}`}
        >
          Unread ( {visibleNotifications.filter(a => !user?.read_notifications?.includes(a._id)).length} )
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4 max-w-5xl">
        {visibleNotifications.length > 0 ? visibleNotifications.map((note) => {
          const isRead = user?.read_notifications?.some(
            (readId: any) => readId.toString() === note._id.toString()
          );
          const isWarning = note.type === 'warning' || note.title.toLowerCase().includes('deadline');

          return (
            <div key={note._id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-5 relative group transition-all hover:border-[#D4AF37]/20">
              {/* Icon Container */}
              <div className={`p-3 rounded-xl ${isWarning ? 'bg-orange-50 text-orange-500' : 'bg-blue-50 text-blue-500'}`}>
                {isWarning ? <LuTriangleAlert size={20}/> : <LuInfo size={20}/>}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-800 mb-1">{note.title}</h3>
                  {/* Status Dot */}
                  <div className={`w-2.5 h-2.5 rounded-full ${isRead ? 'bg-gray-200' : 'bg-[#D4AF37]'}`} />
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{note.message}</p>
                
                <div className="flex justify-between items-center">
                   <span className="text-[11px] font-medium text-gray-400 uppercase tracking-tight">
                     {new Date(note.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                   </span>
                   <div className="flex items-center gap-6">
                     <button 
                       onClick={() => handleMarkRead(note._id)}
                       className="text-[11px] font-bold text-[#D4AF37] hover:text-[#b8962e] flex items-center gap-1.5"
                     >
                       <LuCheckCheck size={14}/> Mark as Read
                     </button>
                     <button 
                       onClick={() => handleDelete(note._id)}
                       className="text-gray-300 hover:text-red-500 transition-colors"
                     >
                       <LuTrash2 size={16}/>
                     </button>
                   </div>
                </div>
              </div>
            </div>
          );
        }) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200 text-gray-400">
            No notifications found.
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;