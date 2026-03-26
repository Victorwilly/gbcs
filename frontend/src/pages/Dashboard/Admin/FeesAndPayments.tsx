import React, { useState, useEffect, useMemo } from 'react';
import { 
    LuSearch, LuChevronDown, LuDollarSign, 
    LuCheck, LuClock, LuX, 
    LuCircleCheck,
    LuCircleX
  } from 'react-icons/lu';

const FeesPage = () => {
  const [payments, setPayments] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  interface StatCardProps {
    label: string;
    value: string;
    icon?: React.ReactNode;
    color: string;
    bgColor?: string;
  }
  
  const StatCard = ({ label, value, icon, bgColor = "bg-blue-50", color}: StatCardProps) => (
    <div className="bg-white p-6 rounded-[1rem] shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{label}</p>
        <h3 className={`text-xl font-bold ${color}`}>{value}</h3>
      </div>
      <div className={`${bgColor} p-3 rounded-[0.5rem]`}>
        {icon}
      </div>
    </div>
  );

  // 1. Fetch from Database
  useEffect(() => {
    const fetchPayments = async () => {
      const res = await fetch("http://localhost:5000/api/admin/payments", {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      const data = await res.json();
      if (res.ok) setPayments(data);
    };
    fetchPayments();
  }, []);

  // 2. WORKING SEARCH & FILTER LOGIC
  const filteredPayments = useMemo(() => {
    return payments.filter(p => {
      const matchesSearch = p.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            p.matricNumber.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || p.status === statusFilter.toLowerCase();
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter, payments]);

  // 3. CALCULATED STATS (Based on filtered results or total data)
  const stats = useMemo(() => {
    return {
      totalExpected: payments
        .filter(p => p.status === 'pending')
        .reduce((sum, p) => sum + p.amount, 0),
      
      totalPaid: payments
        .filter(p => p.status === 'paid')
        .reduce((sum, p) => sum + p.amount, 0),
      
      pendingCount: payments.filter(p => p.status === 'pending').length,
      overdueCount: payments.filter(p => p.status === 'overdue').length
    };
  }, [payments]);

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid': 
        return 'bg-green-100 text-green-700 border-green-200';
      case 'pending': 
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'overdue': 
        return 'bg-red-100 text-red-700 border-red-200';
      default: 
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="p-8 bg-[#F8F9FA]">
      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard color='text-black-600' icon={<LuDollarSign className="text-blue-600" size={20} />} label="Total Expected" value={`₦ ${stats.totalExpected.toLocaleString()}`} />
        <StatCard color='text-green-600' icon={<LuCircleCheck className="text-green-600" size={20} />} bgColor="bg-green-50" label="Total Paid" value={`₦ ${stats.totalPaid.toLocaleString()}`} />
        <StatCard color='text-orange-600' label="Pending" icon={<LuClock className="text-orange-600" size={20} />} bgColor="bg-orange-50" value={stats.pendingCount.toString()} />
        <StatCard color='text-red-600' label="Overdue" icon={<LuCircleX className="text-red-600" size={20} />} bgColor="bg-red-50" value={stats.overdueCount.toString()} />
      </div>

      {/* Search Bar - NOW WORKING */}
      <div className="flex rounded-[.5rem] bg-white p-3 gap-4 mb-5">
        <input 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name or matric number..."
          className="flex-1 w-1/2 p-3 rounded-2xl border border-gray-100 outline-none"
        />
        <select 
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-3 w-1/2 rounded-2xl border border-gray-100"
        >
          <option>All Status</option>
          <option>Paid</option>
          <option>Pending</option>
          <option>Overdue</option>
        </select>
      </div>

      {/* Table - Fetching from filteredPayments */}
      <div className="bg-white rounded-[.5rem] overflow-hidden shadow-sm">
        <table className="w-full">
           {/* ... Table Headers ... */}
           <tbody>
  {filteredPayments.length > 0 ? (
    filteredPayments.map((p) => (
      <tr key={p._id} className="hover:bg-gray-50/50 transition-colors border-b border-gray-50">
        <td className="px-6 py-4 text-sm font-semibold text-gray-700">{p.studentName}</td>
        <td className="px-6 py-4 text-sm text-gray-500">{p.matricNumber}</td>
        <td className="px-6 py-4 text-sm font-bold text-gray-800">₦ {p.amount.toLocaleString()}</td>
        <td className="px-6 py-4 text-sm text-gray-500">{p.semester}</td>
        <td className="px-6 py-4">
          <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase border ${getStatusStyle(p.status)}`}>
            {p.status}
          </span>
        </td>
        <td className="px-6 py-4 text-sm text-gray-500">{p.datePaid || "-"}</td>
      </tr>
    ))
  ) : (
    // Empty State Row
    <tr>
      <td colSpan={6} className="px-6 py-12 text-center">
        <div className="flex flex-col items-center justify-center text-gray-400">
          <div className="bg-gray-50 p-4 rounded-full mb-3">
             <LuDollarSign size={24} />
          </div>
          <p className="text-sm font-medium">No payment records found</p>
          <p className="text-xs">Try adjusting your search or filter</p>
        </div>
      </td>
    </tr>
  )}
</tbody>
        </table>
      </div>
    </div>
  );
};

export default FeesPage;