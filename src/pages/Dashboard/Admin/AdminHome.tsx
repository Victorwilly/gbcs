const stats = [
  {
    label: "Total Students",
    value: "1,247",
    change: "+12% this month",
    iconBg: "bg-[#D4AF371A]",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8338 23.4065V21.1774C17.8338 19.9949 17.364 18.8609 16.5279 18.0248C15.6918 17.1887 14.5578 16.719 13.3754 16.719H6.68786C5.50542 16.719 4.37142 17.1887 3.53532 18.0248C2.69921 18.8609 2.22949 19.9949 2.22949 21.1774V23.4065" stroke="#D4AF37" stroke-width="2.22918" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.8335 3.48633C18.7895 3.73418 19.6362 4.29247 20.2407 5.07357C20.8451 5.85468 21.173 6.81437 21.173 7.80202C21.173 8.78967 20.8451 9.74937 20.2407 10.5305C19.6362 11.3116 18.7895 11.8699 17.8335 12.1177" stroke="#D4AF37" stroke-width="2.22918" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.521 23.4064V21.1772C24.5203 20.1894 24.1915 19.2298 23.5863 18.4491C22.9811 17.6683 22.1337 17.1107 21.1772 16.8638" stroke="#D4AF37" stroke-width="2.22918" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0311 12.2607C12.4934 12.2607 14.4895 10.2646 14.4895 7.80236C14.4895 5.34007 12.4934 3.34399 10.0311 3.34399C7.56883 3.34399 5.57275 5.34007 5.57275 7.80236C5.57275 10.2646 7.56883 12.2607 10.0311 12.2607Z" stroke="#D4AF37" stroke-width="2.22918" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
  },
  {
    label: "Active Staff",
    value: "87",
    change: "+5 new this month",
    iconBg: "bg-[#8000201A]",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.8745 12.1738C24.074 12.0857 24.2434 11.9411 24.3615 11.7578C24.4797 11.5745 24.5414 11.3605 24.5392 11.1425C24.5369 10.9244 24.4707 10.7118 24.3488 10.5309C24.2269 10.3501 24.0546 10.209 23.8533 10.1251L14.3002 5.77378C14.0098 5.64131 13.6943 5.57275 13.3751 5.57275C13.0559 5.57275 12.7404 5.64131 12.45 5.77378L2.89791 10.1207C2.69948 10.2076 2.53067 10.3504 2.41213 10.5318C2.2936 10.7131 2.23047 10.925 2.23047 11.1416C2.23047 11.3583 2.2936 11.5702 2.41213 11.7515C2.53067 11.9329 2.69948 12.0757 2.89791 12.1626L12.45 16.5184C12.7404 16.6509 13.0559 16.7195 13.3751 16.7195C13.6943 16.7195 14.0098 16.6509 14.3002 16.5184L23.8745 12.1738Z" stroke="#800020" stroke-width="2.22918" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.521 11.1458V17.8333" stroke="#800020" stroke-width="2.22918" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.6875 13.9326V17.8337C6.6875 18.7205 7.39208 19.571 8.64624 20.1981C9.90039 20.8252 11.6014 21.1775 13.375 21.1775C15.1487 21.1775 16.8497 20.8252 18.1039 20.1981C19.358 19.571 20.0626 18.7205 20.0626 17.8337V13.9326" stroke="#800020" stroke-width="2.22918" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
  },
  {
    label: "Total Courses",
    value: "156",
    iconBg: "bg-[#2D50161A]",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.375 7.802V23.4063" stroke="#2D5016" stroke-width="2.22918" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.34359 20.0629C3.04799 20.0629 2.76449 19.9454 2.55546 19.7364C2.34643 19.5274 2.229 19.2439 2.229 18.9483V4.45858C2.229 4.16298 2.34643 3.87948 2.55546 3.67045C2.76449 3.46142 3.04799 3.34399 3.34359 3.34399H8.91655C10.099 3.34399 11.233 3.81371 12.0691 4.64982C12.9052 5.48592 13.3749 6.61993 13.3749 7.80236C13.3749 6.61993 13.8446 5.48592 14.6807 4.64982C15.5168 3.81371 16.6508 3.34399 17.8333 3.34399H23.4062C23.7018 3.34399 23.9853 3.46142 24.1944 3.67045C24.4034 3.87948 24.5208 4.16298 24.5208 4.45858V18.9483C24.5208 19.2439 24.4034 19.5274 24.1944 19.7364C23.9853 19.9454 23.7018 20.0629 23.4062 20.0629H16.7187C15.8319 20.0629 14.9814 20.4151 14.3543 21.0422C13.7272 21.6693 13.3749 22.5198 13.3749 23.4066C13.3749 22.5198 13.0226 21.6693 12.3955 21.0422C11.7685 20.4151 10.918 20.0629 10.0311 20.0629H3.34359Z" stroke="#2D5016" stroke-width="2.22918" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
  {
    label: "Revenue (This Month)",
    value: "₦8.5M",
    change: "+18% from last month",
    iconBg: "bg-[#EFF6FF]",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3755 2.22925V24.5211" stroke="#2563EB" stroke-width="2.22918" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9485 5.573H10.5891C9.55443 5.573 8.56218 5.984 7.83058 6.71559C7.09899 7.44719 6.68799 8.43944 6.68799 9.47407C6.68799 10.5087 7.09899 11.5009 7.83058 12.2325C8.56218 12.9641 9.55443 13.3751 10.5891 13.3751H16.162C17.1966 13.3751 18.1889 13.7861 18.9205 14.5177C19.6521 15.2493 20.0631 16.2416 20.0631 17.2762C20.0631 18.3108 19.6521 19.3031 18.9205 20.0347C18.1889 20.7663 17.1966 21.1773 16.162 21.1773H6.68799" stroke="#2563EB" stroke-width="2.22918" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
  },
];

const quickActions = [
  {
    label: "Add New Student",
    bg: "bg-[#D4AF37]",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.7413 23.4061V21.1769C17.7413 19.9944 17.274 18.8604 16.4422 18.0243C15.6105 17.1882 14.4824 16.7185 13.3061 16.7185H6.6534C5.47713 16.7185 4.34904 17.1882 3.51728 18.0243C2.68553 18.8604 2.21826 19.9944 2.21826 21.1769V23.4061"
          stroke="white"
          stroke-width="2.22918"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.7407 3.48608C18.6918 3.73394 19.5341 4.29223 20.1353 5.07333C20.7366 5.85443 21.0629 6.81413 21.0629 7.80178C21.0629 8.78943 20.7366 9.74912 20.1353 10.5302C19.5341 11.3113 18.6918 11.8696 17.7407 12.1175"
          stroke="white"
          stroke-width="2.22918"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24.3933 23.4059V21.1767C24.3925 20.1889 24.0654 19.2293 23.4634 18.4486C22.8613 17.6679 22.0184 17.1102 21.0669 16.8633"
          stroke="white"
          stroke-width="2.22918"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.97958 12.2605C12.429 12.2605 14.4147 10.2644 14.4147 7.80211C14.4147 5.33983 12.429 3.34375 9.97958 3.34375C7.53011 3.34375 5.54443 5.33983 5.54443 7.80211C5.54443 10.2644 7.53011 12.2605 9.97958 12.2605Z"
          stroke="white"
          stroke-width="2.22918"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Register Staff",
    bg: "bg-[#800020]",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.8745 12.1735C24.074 12.0855 24.2434 11.9409 24.3615 11.7576C24.4797 11.5742 24.5414 11.3603 24.5392 11.1422C24.5369 10.9242 24.4707 10.7115 24.3488 10.5307C24.2269 10.3499 24.0546 10.2088 23.8533 10.1249L14.3002 5.77353C14.0098 5.64106 13.6943 5.57251 13.3751 5.57251C13.0559 5.57251 12.7404 5.64106 12.45 5.77353L2.89791 10.1204C2.69948 10.2073 2.53067 10.3502 2.41213 10.5315C2.2936 10.7128 2.23047 10.9248 2.23047 11.1414C2.23047 11.358 2.2936 11.57 2.41213 11.7513C2.53067 11.9326 2.69948 12.0755 2.89791 12.1624L12.45 16.5182C12.7404 16.6507 13.0559 16.7192 13.3751 16.7192C13.6943 16.7192 14.0098 16.6507 14.3002 16.5182L23.8745 12.1735Z"
          stroke="white"
          stroke-width="2.22918"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24.5215 11.1458V17.8333"
          stroke="white"
          stroke-width="2.22918"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.68799 13.9321V17.8332C6.68799 18.72 7.39257 19.5705 8.64672 20.1976C9.90088 20.8247 11.6019 21.177 13.3755 21.177C15.1492 21.177 16.8502 20.8247 18.1043 20.1976C19.3585 19.5705 20.0631 18.72 20.0631 17.8332V13.9321"
          stroke="white"
          stroke-width="2.22918"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Create Course",
    bg: "bg-[#2D5016]",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.375 7.80176V23.406"
          stroke="white"
          stroke-width="2.22918"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.34311 20.0626C3.0475 20.0626 2.764 19.9452 2.55497 19.7362C2.34595 19.5271 2.22852 19.2436 2.22852 18.948V4.45834C2.22852 4.16273 2.34595 3.87923 2.55497 3.67021C2.764 3.46118 3.0475 3.34375 3.34311 3.34375H8.91606C10.0985 3.34375 11.2325 3.81347 12.0686 4.64957C12.9047 5.48568 13.3744 6.61968 13.3744 7.80211C13.3744 6.61968 13.8441 5.48568 14.6802 4.64957C15.5164 3.81347 16.6504 3.34375 17.8328 3.34375H23.4057C23.7013 3.34375 23.9848 3.46118 24.1939 3.67021C24.4029 3.87923 24.5203 4.16273 24.5203 4.45834V18.948C24.5203 19.2436 24.4029 19.5271 24.1939 19.7362C23.9848 19.9452 23.7013 20.0626 23.4057 20.0626H16.7182C15.8314 20.0626 14.9809 20.4149 14.3538 21.042C13.7267 21.6691 13.3744 22.5196 13.3744 23.4064C13.3744 22.5196 13.0221 21.6691 12.3951 21.042C11.768 20.4149 10.9175 20.0626 10.0307 20.0626H3.34311Z"
          stroke="white"
          stroke-width="2.22918"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Send Announcement",
    bg: "bg-[#2563EB]",
    icon: (
      <svg
        width="23"
        height="27"
        viewBox="0 0 23 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.71582 23.406C9.88193 23.7449 10.1208 24.0262 10.4085 24.2219C10.6962 24.4175 11.0225 24.5205 11.3547 24.5205C11.6869 24.5205 12.0132 24.4175 12.3009 24.2219C12.5886 24.0262 12.8275 23.7449 12.9936 23.406"
          stroke="white"
          stroke-width="2.22918"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.08609 17.082C2.96248 17.2416 2.8809 17.4401 2.85129 17.6533C2.82167 17.8665 2.84529 18.0852 2.91927 18.2829C2.99326 18.4806 3.11442 18.6487 3.26801 18.7667C3.42161 18.8848 3.60102 18.9477 3.78442 18.9479H18.9243C19.1077 18.9479 19.2871 18.8853 19.4408 18.7674C19.5945 18.6496 19.7158 18.4817 19.79 18.2841C19.8642 18.0866 19.888 17.8679 19.8586 17.6547C19.8293 17.4415 19.7479 17.2429 19.6245 17.0832C18.366 15.5551 17.0318 13.9311 17.0318 8.91655C17.0318 7.1429 16.4336 5.4419 15.3689 4.18774C14.3042 2.93358 12.8601 2.229 11.3543 2.229C9.84859 2.229 8.40451 2.93358 7.33978 4.18774C6.27506 5.4419 5.6769 7.1429 5.6769 8.91655C5.6769 13.9311 4.34175 15.5551 3.08609 17.082Z"
          stroke="white"
          stroke-width="2.22918"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

const recentRegistrations = [
  {
    name: "John Doe",
    dept: "Theology",
    time: "2 hours ago",
    initials: "J",
    color: "bg-[#D4AF3733]",
  },
  {
    name: "Jane Smith",
    dept: "Divinity & Ministry",
    time: "5 hours ago",
    initials: "J",
    color: "bg-[#D4AF3733]",
  },
  {
    name: "Michael Brown",
    dept: "Education",
    time: "1 day ago",
    initials: "M",
    color: "bg-[#D4AF3733]",
  },
  {
    name: "Sarah Johnson",
    dept: "Chaplaincy",
    time: "1 day ago",
    initials: "S",
    color: "bg-[#D4AF3733]",
  },
];

const systemAlerts = [
  {
    text: "Fee payment deadline approaching (3 days)",
    time: "1 hour ago",
    border: "border-[#F97316]",
    bg: "bg-[#FFF7ED]",
  },
  {
    text: "New semester registration opens next week",
    time: "8 hours ago",
    border: "border-[#3B82F6]",
    bg: "bg-[#EFF6FF]",
  },
  {
    text: "Exam timetable published successfully",
    time: "1 day ago",
    border: "border-[#22C55E]",
    bg: "bg-[#F0FDF4]",
  },
  {
    text: "15 students pending hostel allocation",
    time: "2 days ago",
    border: "border-[#F97316]",
    bg: "bg-[#FFF7ED]",
  },
];

const upcomingEvents = [
  {
    tag: "Registration",
    title: "Semester Registration",
    date: "Jan 15, 2025",
  },
  {
    tag: "Examination",
    title: "Mid-Semester Exams",
    date: "Feb 20–25, 2025",
  },
  {
    tag: "Training",
    title: "Staff Training Workshop",
    date: "Jan 22, 2025",
  },
];

export default function AdminHome() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div>
        <h1 className="text-[21px] font-bold text-[#111827]">Overview</h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl p-4 border border-white shadow-sm flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500">
                {stat.label}
              </span>
              <div className={`w-10 h-10 p-1 rounded-lg ${stat.iconBg} flex items-center justify-center text-sm`}>
                {stat.icon}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#111827] leading-none">
                {stat.value}
              </p>
              <p className="text-xs mt-1.5 text-[#16A34A] pt-3 font-medium">{stat.change}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <button
              key={action.label}
              className={`${action.bg} text-white rounded-xl px-4 py-4 md:p-7 flex items-center gap-3 `}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0">
                {action.icon}
              </div>
              <span className="text-sm font-semibold text-left leading-tight">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-between px-4 py-3 ">
            <h2 className="text-sm font-semibold text-[#111827]">
              Recent Registrations
            </h2>
            <button
              role="button"
              aria-labelledby="view all"
              className="text-xs text-[#800020] hover:cursor-pointer font-medium hover:underline"
            >
              <span id="view all">View All</span>
            </button>
          </div>

          <ul className="divide-y flex flex-col  gap-4 divide-gray-50">
            {recentRegistrations.map((student) => (
              <li
                key={student.name}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white"
              >
                <div
                  className={`w-9 h-9 rounded-full ${student.color} flex items-center justify-center text-[#D4AF37] text-sm font-bold shrink-0`}
                >
                  {student.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">
                    {student.name}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {student.dept}
                  </p>
                </div>
                <span className="text-xs text-gray-400 shrink-0">
                  {student.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center justify-between px-4 py-3">
            <h2 className="text-sm font-semibold text-gray-800">
              System Alerts
            </h2>
            <div className="w-5 h-5 rounded-full flex items-center justify-center">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_164_4040)">
                  <path
                    d="M10.6973 19.6121C15.6207 19.6121 19.6119 15.6209 19.6119 10.6975C19.6119 5.77416 15.6207 1.78296 10.6973 1.78296C5.77391 1.78296 1.78271 5.77416 1.78271 10.6975C1.78271 15.6209 5.77391 19.6121 10.6973 19.6121Z"
                    stroke="#F97316"
                    stroke-width="2.1395"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6973 7.13184V10.6977"
                    stroke="#F97316"
                    stroke-width="2.1395"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6973 14.2632H10.7056"
                    stroke="#F97316"
                    stroke-width="2.1395"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_164_4040">
                    <rect width="21.395" height="21.395" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="p-3 flex flex-col gap-3 space-y-2">
            {systemAlerts.map((alert) => (
              <div
                key={alert.text}
                className={`${alert.bg} border-l-4 ${alert.border} rounded-lg px-3 py-2.5`}
              >
                <p className="text-xs font-medium text-gray-700 leading-snug">
                  {alert.text}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{alert.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-800">
            Upcoming Events
          </h2>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_164_4069)">
                <path
                  d="M7.13135 1.78296V5.3488"
                  stroke="#9CA3AF"
                  stroke-width="2.1395"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.2637 1.78296V5.3488"
                  stroke="#9CA3AF"
                  stroke-width="2.1395"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.9377 3.56567H4.45723C3.47256 3.56567 2.67432 4.36391 2.67432 5.34859V17.829C2.67432 18.8137 3.47256 19.6119 4.45723 19.6119H16.9377C17.9223 19.6119 18.7206 18.8137 18.7206 17.829V5.34859C18.7206 4.36391 17.9223 3.56567 16.9377 3.56567Z"
                  stroke="#9CA3AF"
                  stroke-width="2.1395"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.67432 8.91431H18.7206"
                  stroke="#9CA3AF"
                  stroke-width="2.1395"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_164_4069">
                  <rect width="21.395" height="21.395" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {upcomingEvents.map((event) => (
            <div key={event.title} className="bg-[#FFF8E7] rounded-xl p-4">
              <span
                className={`text-xs font-semibold px-4 py-1 text-[#800020] rounded-sm bg-[#8000201A]`}
              >
                {event.tag}
              </span>
              <p className="text-sm font-medium mt-6">{event.title}</p>
              <p className="text-xs text-[#4B5563] mt-1">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
