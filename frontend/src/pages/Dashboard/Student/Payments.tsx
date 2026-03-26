import React, { useState, useEffect, useMemo } from 'react';
import { LuWallet, LuCircleCheck, LuClock, LuDownload, LuDollarSign } from 'react-icons/lu';

const FeesAndPayments = ({ user }: any) => {
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = { "Authorization": `Bearer ${token}` };
        
        // Fetching payments where userId = user._id on the backend
        const res = await fetch(`http://localhost:5000/api/payments/my-payments`, { headers });
        const data = await res.json();
        setPayments(data);
        setLoading(false);
      } catch (err) {
        console.error("Payment Fetch Error:", err);
        setLoading(false);
      }
    };
    fetchPayments();
  }, []);

  // Logical Derivations
  const stats = useMemo(() => {
    const paidPayments = payments.filter(p => p.status?.toLowerCase() === 'paid');
    const pendingPayments = payments.filter(p => p.status?.toLowerCase() === 'pending');

    const totalPaidAmount = paidPayments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
    const nextPaymentAmount = pendingPayments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);

    return {
      totalPaidAmount,
      paidCount: paidPayments.length,
      nextPaymentAmount,
      hasPending: pendingPayments.length > 0
    };
  }, [payments]);

  if (loading) return <div className="p-10 text-gray-400 font-medium">Fetching financial records...</div>;

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Fees & Payments</h1>
        <p className="text-sm text-gray-500">Manage your tuition fees and payment history</p>
      </div>

      {/* 1. Summary Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Current Balance */}
        <div className="bg-white p-6 rounded-[.5rem]">
           <div className="flex justify-between items-start mb-4">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Current Balance</p>
             <LuDollarSign className="text-[#9CA3AF]" size={20} />
           </div>
           <h3 className="text-2xl font-black text-gray-800 mb-2">₦{user?.bal || 0}</h3>
           <div className="flex items-center gap-1.5 text-[11px] font-bold text-green-600">
             {user?.payment_status ? (
               <><LuCircleCheck size={14}/> Fully Paid</>
             ) : (
               <span className="text-orange-500">Payment Required</span>
             )}
           </div>
        </div>

        {/* Total Paid */}
        <div className="bg-white p-6 rounded-[.5rem]">
           <div className="flex justify-between items-start mb-4">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Paid</p>
             <LuCircleCheck className="text-green-500" size={20} />
           </div>
           <h3 className="text-2xl font-black text-green-600 mb-2">₦{stats.totalPaidAmount.toLocaleString()}</h3>
           <p className="text-[11px] font-bold text-gray-400">{stats.paidCount} payments</p>
        </div>

        {/* Next Payment */}
        <div className="bg-white p-6 rounded-[.5rem]">
           <div className="flex justify-between items-start mb-4">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Next Payment</p>
             <LuClock className="text-orange-400" size={20} />
           </div>
           <h3 className="text-2xl font-black text-gray-800 mb-2">₦{stats.nextPaymentAmount.toLocaleString()}</h3>
           <p className="text-[11px] font-bold text-gray-400">
             {stats.hasPending ? "Upcoming fee" : "No pending fees"}
           </p>
        </div>
      </div>

      {/* 2. Payment History Table */}
      <div className="bg-white rounded-2xl mb-8">
        <div className="p-6 border-b border-gray-50">
          <h2 className="font-bold text-gray-800">Payment History</h2>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 text-[10px] uppercase font-bold text-gray-400 tracking-wider">
              <th className="px-6 py-4">Reference</th>
              <th className="px-6 py-4">Semester</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {payments.map((payment, idx) => (
              <tr key={idx} className="text-[13px] text-gray-700 hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-5 font-bold uppercase">{payment.reference || `PAY-${idx}`}</td>
                <td className="px-6 py-5">{payment.semester}</td>
                <td className="px-6 py-5 font-bold">₦ {Number(payment.amount).toLocaleString()}</td>
                <td className="px-6 py-5 text-gray-500">{new Date(payment.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-5">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                    payment.status === 'paid' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                  }`}>
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="text-[#D4AF37] hover:text-[#800020] inline-flex items-center gap-1 font-bold">
                    <LuDownload size={14} /> Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 3. Fee Breakdown (Static) */}
      <div className="bg-white rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <h2 className="font-bold text-gray-800">Fee Breakdown (Per Semester)</h2>
        </div>
        <div className="p-2">
          <BreakdownRow label="Tuition Fee" amount="35,000" />
          <BreakdownRow label="Library Fee" amount="5,000" />
          <BreakdownRow label="Laboratory Fee" amount="3,000" />
          <BreakdownRow label="Sports & Recreation" amount="2,000" />
          <BreakdownRow label="Development Levy" amount="5,000" />
          
          <div className="mt-4 bg-[#800020] p-5 rounded-xl flex justify-between items-center text-white">
            <span className="font-bold">Total</span>
            <span className="text-xl font-black">₦ 50,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BreakdownRow = ({ label, amount }: any) => (
  <div className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
    <span className="text-sm text-gray-600">{label}</span>
    <span className="text-sm font-bold text-gray-800">₦ {amount}</span>
  </div>
);

export default FeesAndPayments;