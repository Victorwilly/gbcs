import React, { useState, useEffect, useMemo } from 'react';
import { LuTrendingUp, LuDownload, LuChevronDown } from 'react-icons/lu';

const ResultsPage = () => {
  const [results, setResults] = useState<any[]>([]);
  const [selectedSemester, setSelectedSemester] = useState("1st Semester");
  const [loading, setLoading] = useState(true);

  // 1. Fetch Results
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = { "Authorization": `Bearer ${token}` };
        
        // Fetch results for this specific user and semester
        const res = await fetch(`http://localhost:5000/api/users/my-results?semester=${selectedSemester}`, { headers });
        const data = await res.json();
        setResults(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchResults();
  }, [selectedSemester]);

  // 2. Helper: Grading Logic
  const getGradeInfo = (score: number) => {
    if (score >= 70) return { grade: 'A', point: 4.0, color: 'text-green-600', bg: 'bg-green-50' };
    if (score >= 60) return { grade: 'B', point: 3.0, color: 'text-blue-600', bg: 'bg-blue-50' };
    if (score >= 50) return { grade: 'C', point: 2.0, color: 'text-yellow-600', bg: 'bg-yellow-50' };
    if (score >= 45) return { grade: 'D', point: 1.0, color: 'text-orange-600', bg: 'bg-orange-50' };
    return { grade: 'F', point: 0.0, color: 'text-red-600', bg: 'bg-red-50' };
  };

  // 3. Analytics Calculations
  const stats = useMemo(() => {
    let totalPoints = 0;
    let totalUnits = 0;

    results.forEach(res => {
      const { point } = getGradeInfo(res.score);
      const units = Number(res.courseUnit);
      totalPoints += (point * units);
      totalUnits += units;
    });

    const gpa = totalUnits > 0 ? (totalPoints / totalUnits).toFixed(2) : "0.00";
    return { gpa, totalUnits };
  }, [results]);

  if (loading) return <div className="p-10 text-gray-400">Loading Academic Records...</div>;

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-1xl font-bold text-gray-800">Results & GPA</h1>
          <p className="text-[.8rem] text-gray-500">View your academic performance and grades</p>
        </div>
        <button className="flex items-center gap-2 bg-[#D4AF37] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:bg-[#b8962e] transition-all">
          <LuDownload size={18} />
          Download Transcript
        </button>
      </div>

      {/* 1. Top Cards (Stats) */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard label="Current Semester GPA" value={stats.gpa} sub="2024/2025 - 2nd" bg="bg-[#800020]" />
        <StatCard label="Cumulative GPA" value="3.57" sub="Overall Performance" bg="bg-[#D4AF37]" />
        <StatCard label="Total Credits" value={stats.totalUnits} sub="Units Earned" bg="bg-[#2D5016]" />
      </div>

      {/* 2. Filter Section */}
      <div className="bg-white p-6 rounded-[1rem] mb-6">
        <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">Select Semester</label>
        <div className="relative w-72">
          <select 
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#D4AF37]"
          >
            <option>1st Semester</option>
            <option>2nd Semester</option>
            <option>3rd Semester</option>
          </select>
          <LuChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* 3. Results Table */}
      <div className="bg-white rounded-[1rem] overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-50">
          <h2 className="font-bold text-gray-800">Semester Results</h2>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 text-[11px] uppercase font-bold text-gray-400 tracking-wider">
              <th className="px-6 py-4">Course Code</th>
              <th className="px-6 py-4">Course Title</th>
              <th className="px-6 py-4">Units</th>
              <th className="px-6 py-4">Score</th>
              <th className="px-6 py-4 text-center">Grade</th>
              <th className="px-6 py-4">GP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {results.map((res, idx) => {
              const { grade, point, bg, color } = getGradeInfo(res.score);
              return (
                <tr key={idx} className="text-sm text-gray-700 hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5 font-bold">{res.courseCode}</td>
                  <td className="px-6 py-5">{res.courseTitle}</td>
                  <td className="px-6 py-5">{res.courseUnit}</td>
                  <td className="px-6 py-5 font-semibold text-[#800020]">{res.score}%</td>
                  <td className="px-6 py-5 text-center">
                    <span className={`${bg} ${color} px-3 py-1 rounded-md text-xs font-black`}>{grade}</span>
                  </td>
                  <td className="px-6 py-5 font-medium">{point.toFixed(1)}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50/30 font-bold border-t-2 border-gray-100">
              <td colSpan={2} className="px-6 py-5 text-gray-800">Semester GPA</td>
              <td className="px-6 py-5 text-gray-500">{stats.totalUnits} Units</td>
              <td colSpan={2}></td>
              <td className="px-6 py-5 text-xl text-[#800020]">{stats.gpa}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* 4. Grading Scale Info */}
      <div className='bg-white rounded-[1rem] p-5'>
      <h2 className="font-bold text-gray-700 mb-4 ml-1 uppercase text-xs tracking-widest">Grading Scale</h2>
      <div className="grid grid-cols-5 gap-4">
        {[
          { l: 'A', r: '70-100', p: '4.0' },
          { l: 'B', r: '60-69', p: '3.0' },
          { l: 'C', r: '50-59', p: '2.0' },
          { l: 'D', r: '45-49', p: '1.0' },
          { l: 'F', r: '0-44', p: '0.0' }
        ].map(scale => (
          <div key={scale.l} className="bg-[#F9FAFB] p-5 rounded-[.5rem] text-center">
            <h4 className="text-xl font-black text-gray-800 mb-1">{scale.l}</h4>
            <p className="text-[10px] text-gray-400 font-bold mb-2 uppercase">{scale.r}</p>
            <p className="text-sm font-bold text-[#D4AF37]">{scale.p}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, sub, bg }: any) => (
  <div className={`${bg} p-7 rounded-[1rem] text-white relative overflow-hidden shadow-lg`}>
    <LuTrendingUp className="absolute right-6 top-6" size={20} />
    <p className="text-[.8rem] font-medium opacity-80 mb-1">{label}</p>
    <h3 className="text-2xl font-black mb-4">{value}</h3>
    <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">{sub}</p>
  </div>
);

export default ResultsPage;