import { useState } from "react";

const programs = [
  "Divinity & Ministry",
  "Theology",
  "Education",
  "Business Studies",
  "Psychology",
  "Art History",
  "English Literature",
];
const levels = [
  "100 Level",
  "200 Level",
  "300 Level",
  "400 Level",
  "470 Level",
  "500 Level",
];

const initialStudents = [
  {
    id: 1,
    matric: "2025/101038/BA-DM",
    name: "John Doe",
    program: "Divinity & Ministry",
    level: "200 Level",
    status: "active",
    email: "john.doe@school.edu",
    phone: "+234 801 234 5678",
  },
  {
    id: 2,
    matric: "2025/101039/BA-TH",
    name: "Jane Smith",
    program: "Theology",
    level: "300 Level",
    status: "active",
    email: "jane.smith@school.edu",
    phone: "+234 802 345 6789",
  },
  {
    id: 3,
    matric: "2025/101040/BA-ED",
    name: "Michael Brown",
    program: "Education",
    level: "100 Level",
    status: "active",
    email: "m.brown@school.edu",
    phone: "+234 803 456 7890",
  },
  {
    id: 4,
    matric: "2025/101041/BA-DM",
    name: "Sarah Johnson",
    program: "Divinity & Ministry",
    level: "400 Level",
    status: "active",
    email: "s.johnson@school.edu",
    phone: "+234 804 567 8901",
  },
  {
    id: 5,
    matric: "2025/101043/BA-BS",
    name: "Emily Davis",
    program: "Business Studies",
    level: "500 Level",
    status: "active",
    email: "e.davis@school.edu",
    phone: "+234 805 678 9012",
  },
  {
    id: 6,
    matric: "2025/101044/BA-PSY",
    name: "James Wilson",
    program: "Psychology",
    level: "470 Level",
    status: "inactive",
    email: "j.wilson@school.edu",
    phone: "+234 806 789 0123",
  },
  {
    id: 7,
    matric: "2025/101045/BA-ART",
    name: "Olivia Brown",
    program: "Art History",
    level: "390 Level",
    status: "active",
    email: "o.brown@school.edu",
    phone: "+234 807 890 1234",
  },
  {
    id: 8,
    matric: "2025/101046/BA-ENG",
    name: "Liam Jones",
    program: "English Literature",
    level: "420 Level",
    status: "active",
    email: "l.jones@school.edu",
    phone: "+234 808 901 2345",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}
function getAvatarColor(name: string) {
  const colors = [
    "bg-violet-400",
    "bg-sky-400",
    "bg-amber-400",
    "bg-rose-400",
    "bg-emerald-400",
    "bg-pink-400",
    "bg-indigo-400",
    "bg-teal-400",
  ];

  return colors[name.charCodeAt(0) % colors.length];
}

type Student = (typeof initialStudents)[0];

export default function AdminStudents() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("All Levels");
  const [viewStudent, setViewStudent] = useState<Student | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<Student | null>(null);
  const [editStudent, setEditStudent] = useState<Student | null>(null);

  const [form, setForm] = useState({
    name: "",
    matric: "",
    program: programs[0],
    level: levels[0],
    email: "",
    phone: "",
  });

  const filtered = students.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.matric.toLowerCase().includes(search.toLowerCase());
    const matchLevel = levelFilter === "All Levels" || s.level === levelFilter;
    return matchSearch && matchLevel;
  });

  function handleAdd() {
    const newId = students.length
      ? Math.max(...students.map((s) => s.id)) + 1
      : 1;
    setStudents([...students, { ...form, id: newId, status: "active" }]);
    setShowAddModal(false);
    setForm({
      name: "",
      matric: "",
      program: programs[0],
      level: levels[0],
      email: "",
      phone: "",
    });
  }

  function handleDelete(id: number) {
    setStudents(students.filter((s) => s.id !== id));
    setDeleteConfirm(null);
  }

  function handleEdit() {
    if (!editStudent) return;
    setStudents(
      students.map((s) => (s.id === editStudent.id ? editStudent : s)),
    );
    setEditStudent(null);
  }

  const Overlay = ({
    children,
    onClose,
  }: {
    children: React.ReactNode;
    onClose: () => void;
  }) => (
    <div
      className="fixed inset-0 z-50 flex items-center bg-black/30 justify-center p-4"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold text-[#111827]">
              Students Management
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Manage student records and admissions.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:justify-between sm:flex-row gap-3 mb-5">
          <div className="relative flex w-full flex-col gap-1 md:flex-row md:items-center">
            <div className="relative flex-1 max-w-lg">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1165 17.1165L13.5791 13.5791"
                    stroke="#9CA3AF"
                    stroke-width="1.95617"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.96588 15.4865C12.5671 15.4865 15.4865 12.5671 15.4865 8.96588C15.4865 5.36467 12.5671 2.44531 8.96588 2.44531C5.36467 2.44531 2.44531 5.36467 2.44531 8.96588C2.44531 12.5671 5.36467 15.4865 8.96588 15.4865Z"
                    stroke="#9CA3AF"
                    stroke-width="1.95617"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or matric number..."
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>
            <select
              title="Filter by level"
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 text-gray-600"
            >
              <option>All Levels</option>
              {levels.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>

          <button
            role="button"
            aria-labelledby="Add Student"
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 w-max bg-[#D4AF37] hover:cursor-pointer text-white text-sm font-semibold px-4 py-2.5 rounded-md"
          >
            <div
              aria-hidden
              className="w-5 h-5 flex items-center justify-center text-base font-bold leading-none"
            >
              +
            </div>
            <span id="Add Student" className="text-[12px]">
              Add Student
            </span>
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-[#F9FAFB]">
                  {[
                    "Matric Number",
                    "Name",
                    "Program",
                    "Level",
                    "Status",
                    "Actions",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left text-xs font-semibold text-gray-400 px-4 py-3 whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((student) => (
                  <tr
                    key={student.id}
                    className="hover:bg-amber-50/30 transition-colors group"
                  >
                    <td className="px-4 py-3.5 text-xs text-gray-500">
                      {student.matric}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="font-medium text-gray-800 whitespace-nowrap">
                        {student.name}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-gray-500 whitespace-nowrap">
                      {student.program}
                    </td>
                    <td className="px-4 py-3.5 text-gray-500 whitespace-nowrap">
                      {student.level}
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${student.status === "active" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-500"}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${student.status === "active" ? "bg-emerald-500" : "bg-rose-400"}`}
                        />
                        {student.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setViewStudent(student)}
                          title="View"
                          className="w-7 h-7   flex items-center justify-center"
                        >
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.72616 10.339C1.65638 10.151 1.65638 9.94418 1.72616 9.75619C2.4058 8.10827 3.55944 6.69926 5.04083 5.70778C6.52222 4.7163 8.26465 4.18701 10.0472 4.18701C11.8298 4.18701 13.5722 4.7163 15.0536 5.70778C16.535 6.69926 17.6886 8.10827 18.3683 9.75619C18.4381 9.94418 18.4381 10.151 18.3683 10.339C17.6886 11.9869 16.535 13.3959 15.0536 14.3874C13.5722 15.3788 11.8298 15.9081 10.0472 15.9081C8.26465 15.9081 6.52222 15.3788 5.04083 14.3874C3.55944 13.3959 2.4058 11.9869 1.72616 10.339Z"
                              stroke="#2563EB"
                              stroke-width="2.23279"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.0475 12.5592C11.4348 12.5592 12.5594 11.4346 12.5594 10.0473C12.5594 8.66001 11.4348 7.5354 10.0475 7.5354C8.66026 7.5354 7.53564 8.66001 7.53564 10.0473C7.53564 11.4346 8.66026 12.5592 10.0475 12.5592Z"
                              stroke="#2563EB"
                              stroke-width="2.23279"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => setEditStudent({ ...student })}
                          title="Edit"
                          className="w-7 h-7  flex items-center justify-center"
                        >
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_205_287)">
                              <path
                                d="M10.0484 2.51147H4.18729C3.74316 2.51147 3.31722 2.6879 3.00317 3.00195C2.68913 3.316 2.5127 3.74194 2.5127 4.18607V15.9082C2.5127 16.3524 2.68913 16.7783 3.00317 17.0923C3.31722 17.4064 3.74316 17.5828 4.18729 17.5828H15.9094C16.3536 17.5828 16.7795 17.4064 17.0936 17.0923C17.4076 16.7783 17.584 16.3524 17.584 15.9082V10.0471"
                                stroke="#D4AF37"
                                stroke-width="2.23279"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M15.3856 2.19772C15.7187 1.86462 16.1705 1.67749 16.6416 1.67749C17.1126 1.67749 17.5644 1.86462 17.8975 2.19772C18.2306 2.53082 18.4177 2.98259 18.4177 3.45366C18.4177 3.92474 18.2306 4.37651 17.8975 4.70961L10.351 12.257C10.1521 12.4556 9.90652 12.6011 9.63674 12.6798L7.23118 13.3832C7.15913 13.4042 7.08276 13.4054 7.01006 13.3868C6.93736 13.3682 6.871 13.3304 6.81793 13.2773C6.76486 13.2242 6.72704 13.1579 6.70841 13.0852C6.68978 13.0125 6.69104 12.9361 6.71206 12.864L7.41539 10.4585C7.49453 10.1889 7.64023 9.9436 7.83906 9.74511L15.3856 2.19772Z"
                                stroke="#D4AF37"
                                stroke-width="2.23279"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_205_287">
                                <rect
                                  width="20.0951"
                                  height="20.0951"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(student)}
                          title="Delete"
                          className="w-7 h-7  flex items-center justify-center"
                        >
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_205_321)">
                              <path
                                d="M2.51123 5.02417H17.5826"
                                stroke="#DC2626"
                                stroke-width="2.23279"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M15.9082 5.02417V16.7463C15.9082 17.5836 15.0709 18.4209 14.2336 18.4209H5.86063C5.02333 18.4209 4.18604 17.5836 4.18604 16.7463V5.02417"
                                stroke="#DC2626"
                                stroke-width="2.23279"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M6.69775 5.02424V3.34964C6.69775 2.51235 7.53505 1.67505 8.37235 1.67505H11.7215C12.5588 1.67505 13.3961 2.51235 13.3961 3.34964V5.02424"
                                stroke="#DC2626"
                                stroke-width="2.23279"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.37256 9.21045V14.2342"
                                stroke="#DC2626"
                                stroke-width="2.23279"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M11.7217 9.21045V14.2342"
                                stroke="#DC2626"
                                stroke-width="2.23279"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_205_321">
                                <rect
                                  width="20.0951"
                                  height="20.0951"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-12 text-gray-400 text-sm"
                    >
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-2.5 border-t border-gray-100 text-xs text-gray-400">
            Showing {filtered.length} of {students.length} students
          </div>
        </div>
      </div>

      {/* View Modal */}
      {viewStudent && (
        <Overlay onClose={() => setViewStudent(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-xl ${getAvatarColor(viewStudent.name)} flex items-center justify-center text-white text-lg font-bold`}
                >
                  {getInitials(viewStudent.name)}
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 text-base">
                    {viewStudent.name}
                  </h2>
                  <p className="text-xs text-gray-400 font-mono">
                    {viewStudent.matric}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setViewStudent(null)}
                className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-sm"
              >
                ✕
              </button>
            </div>
            <div className="border-t border-gray-100 pt-4 grid grid-cols-2 gap-3">
              {[
                { label: "Program", value: viewStudent.program },
                { label: "Level", value: viewStudent.level },
                { label: "Status", value: viewStudent.status },
                { label: "Email", value: viewStudent.email },
                { label: "Phone", value: viewStudent.phone },
              ].map(({ label, value }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                  <p
                    className={`text-sm font-semibold truncate ${label === "Status" ? (value === "active" ? "text-emerald-600" : "text-rose-500") : "text-gray-800"}`}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Overlay>
      )}

      {/* Add Student Modal */}
      {showAddModal && (
        <Overlay onClose={() => setShowAddModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-gray-900 text-base">
                Add New Student
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-sm"
              >
                ✕
              </button>
            </div>
            <div className="border-t border-gray-100" />
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">
                  Full Name *
                </label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border-b border-gray-200 focus:border-amber-400 outline-none py-1.5 text-sm text-gray-800 bg-transparent transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">
                  Matriculation Number **
                </label>
                <input
                  value={form.matric}
                  onChange={(e) => setForm({ ...form, matric: e.target.value })}
                  placeholder="2025/101038/BA-DM"
                  className="w-full border-b border-gray-200 focus:border-amber-400 outline-none py-1.5 text-sm text-gray-400 bg-transparent placeholder-gray-300 transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">
                    Program *
                  </label>
                  <select
                    value={form.program}
                    onChange={(e) =>
                      setForm({ ...form, program: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                  >
                    {programs.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">
                    Level *
                  </label>
                  <select
                    value={form.level}
                    onChange={(e) =>
                      setForm({ ...form, level: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                  >
                    {levels.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">
                  Email *
                </label>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-b border-gray-200 focus:border-amber-400 outline-none py-1.5 text-sm text-gray-800 bg-transparent transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">
                  Phone *
                </label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border-b border-gray-200 focus:border-amber-400 outline-none py-1.5 text-sm text-gray-800 bg-transparent transition-colors"
                />
              </div>
            </div>
            <button
              onClick={handleAdd}
              disabled={!form.name || !form.matric}
              className="w-full bg-amber-400 hover:bg-amber-500 disabled:opacity-40 text-white font-semibold py-2.5 rounded-xl text-sm transition-all active:scale-95 mt-2"
            >
              Add Student
            </button>
          </div>
        </Overlay>
      )}

      {/* Edit Modal */}
      {editStudent && (
        <Overlay onClose={() => setEditStudent(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-gray-900 text-base">
                Edit Student
              </h2>
              <button
                onClick={() => setEditStudent(null)}
                className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-sm"
              >
                ✕
              </button>
            </div>
            <div className="border-t border-gray-100" />
            <div className="space-y-3">
              {(["name", "email", "phone"] as const).map((field) => (
                <div key={field}>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block capitalize">
                    {field} *
                  </label>
                  <input
                    value={editStudent[field]}
                    onChange={(e) =>
                      setEditStudent({
                        ...editStudent,
                        [field]: e.target.value,
                      })
                    }
                    className="w-full border-b border-gray-200 focus:border-amber-400 outline-none py-1.5 text-sm text-gray-800 bg-transparent transition-colors"
                  />
                </div>
              ))}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">
                    Program
                  </label>
                  <select
                    value={editStudent.program}
                    onChange={(e) =>
                      setEditStudent({
                        ...editStudent,
                        program: e.target.value,
                      })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                  >
                    {programs.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">
                    Level
                  </label>
                  <select
                    value={editStudent.level}
                    onChange={(e) =>
                      setEditStudent({ ...editStudent, level: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                  >
                    {levels.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">
                  Status
                </label>
                <select
                  value={editStudent.status}
                  onChange={(e) =>
                    setEditStudent({ ...editStudent, status: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleEdit}
              className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2.5 rounded-xl text-sm transition-all active:scale-95"
            >
              Save Changes
            </button>
          </div>
        </Overlay>
      )}

      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <Overlay onClose={() => setDeleteConfirm(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-2xl mx-auto">
              🗑
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-base">
                Delete Student?
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                This will permanently remove{" "}
                <span className="font-semibold text-gray-700">
                  {deleteConfirm.name}
                </span>{" "}
                from the records.
              </p>
            </div>
            <div className="flex gap-3 pt-1">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm.id)}
                className="flex-1 bg-rose-500 hover:bg-rose-600 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors active:scale-95"
              >
                Delete
              </button>
            </div>
          </div>
        </Overlay>
      )}
    </div>
  );
}
