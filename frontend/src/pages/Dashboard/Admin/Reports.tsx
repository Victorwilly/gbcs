import React, { useState, useEffect } from 'react';
import { LuTrendingUp, LuUsers, LuBookOpen, LuDollarSign, LuCalendar, LuDownload, LuFileText } from 'react-icons/lu';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const ReportsPage = () => {
  const [selectedType, setSelectedType] = useState('Academic');
  const [fromDate, setFromDate] = useState('2025-01-01');
  const [toDate, setToDate] = useState('2025-01-31');
  const [recentReports, setRecentReports] = useState([]);

  // Fetch History on Load
  const fetchHistory = async () => {
    const res = await fetch("http://localhost:5000/api/admin/recent-reports");
    const data = await res.json();
    if (res.ok) setRecentReports(data);
  };

  useEffect(() => { fetchHistory(); }, []);

  const generatePDF = async (isDownloadOnly = false, reportData?: any) => {
    // 1. Fetch data from DB based on range (e.g., Financials)
    const res = await fetch(`http://localhost:5000/api/admin/reports?from=${fromDate}&to=${toDate}`);
    const data = await res.json();

    if (!res.ok) return alert("Failed to fetch data for report");

    // 2. PDF Creation Logic
    const doc = new jsPDF();
    doc.text(`${selectedType} Report`, 14, 15);
    doc.setFontSize(10);
    doc.text(`Range: ${fromDate} to ${toDate}`, 14, 22);

    autoTable(doc, {
      startY: 30,
      head: [Object.keys(data[0] || { NoData: "" })],
      body: data.map((obj: any) => Object.values(obj)),
      headStyles: { fillColor: [128, 0, 32] }
    });

    const fileName = `${selectedType}_Report_${fromDate}.pdf`;
    doc.save(fileName);

    // 3. Store in RecentReports (Only if it's a NEW generation)
    if (!isDownloadOnly) {
      await fetch("http://localhost:5000/api/admin/recent-reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `${selectedType} Performance Report - ${new Date(fromDate).toLocaleString('default', { month: 'long' })} ${new Date(fromDate).getFullYear()}`,
          type: selectedType,
          fromDate,
          toDate
        })
      });
      fetchHistory(); // Refresh list
    }
  };

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
        <p className="text-sm text-gray-500">Generate academic, financial, and attendance reports</p>
      </div>

      {/* Report Type Selection */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          { id: 'Academic', label: 'Academic Performance', icon: <LuTrendingUp />, desc: 'Student grades and metrics' },
          { id: 'Attendance', label: 'Attendance Report', icon: <LuUsers />, desc: 'Class attendance statistics' },
          { id: 'Enrollment', label: 'Enrollment Report', icon: <LuBookOpen />, desc: 'Registration data' },
          { id: 'Financial', label: 'Financial Report', icon: <LuDollarSign />, desc: 'Revenue analysis' },
        ].map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelectedType(item.id)}
            className={`p-6 rounded-[.5rem] cursor-pointer transition-all border-2 ${
              selectedType === item.id ? 'border-[#F3E5AB] bg-[#FFF9E6] shadow-md' : 'border-transparent bg-white shadow-sm'
            }`}
          >
            <div className={`w-10 h-10 rounded-[.5rem] flex items-center justify-center mb-4 ${selectedType === item.id ? 'bg-[#F3E5AB]' : 'bg-gray-100 text-gray-400'}`}>
              {item.icon}
            </div>
            <h3 className="font-bold text-gray-800 text-sm mb-1">{item.label}</h3>
            <p className="text-[11px] text-gray-400 leading-tight">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Configuration Card */}
      <div className="bg-white rounded-[.5rem] p-8 shadow-sm border border-gray-100 mb-8">
        <h2 className="font-bold text-gray-800 mb-6">Report Configuration</h2>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2">From Date</label>
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="w-full text-[11px] p-3 bg-gray-50 border border-gray-100 rounded-[.5rem] outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2">To Date</label>
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="w-full text-[11px] p-3 bg-gray-50 border border-gray-100 rounded-[.5rem] outline-none" />
          </div>
        </div>
        
        <div className="mb-8">
           <label className="block text-xs font-bold text-gray-500 mb-2">Format</label>
           <select className="w-full text-[15px] p-3 bg-white border border-gray-100 rounded-[.5rem] outline-none ">
              <option className='text-[15px] '>PDF Document</option>
           </select>
        </div>

        <button 
          onClick={() => generatePDF(false)}
          className="w-full bg-[#800020] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#600018] transition"
        >
          <LuDownload size={18} />
          Generate Report
        </button>
      </div>

      {/* Recent Reports List */}
      <div className="bg-white rounded-[.5rem] p-8 shadow-sm border border-gray-100">
        <h2 className="font-bold text-gray-800 mb-6">Recent Reports</h2>
        <div className="space-y-4">
          {recentReports.map((report: any) => (
            <div key={report._id} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-[.5rem] hover:bg-gray-50 transition">
              <div className="flex items-center gap-4">
                <div className="text-[#800020] bg-white p-3 rounded-[.5rem] shadow-sm"><LuFileText /></div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">{report.title}</h4>
                  <p className="text-[10px] text-gray-400">{new Date(report.createdAt).toLocaleDateString()} • {report.fileSize}</p>
                </div>
              </div>
              <button onClick={() => generatePDF(true)} className="text-[#D4AF37] text-sm font-bold hover:underline">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;