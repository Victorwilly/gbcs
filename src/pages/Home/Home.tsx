import { Link } from "react-router-dom";

// who we are icons
import book from "/icons/book.svg";
import heart from "/icons/heart.svg";
import people from "/icons/people.svg";
import globe from "/icons/globe.svg";

// // academics icons
// import medal from "/icons/medal.svg";
// import paper from "/icons/paper.svg";
// import books from "/icons/books.svg";
// import graduate from "/icons/graduate.svg";

// student image
import download from "/icons/download.svg";
import papers from "/icons/papers.svg";
import dollars from "/icons/dollars.svg";
import calls from "/icons/calls.svg";

export default function Home() {
  const stats = [
    { number: "30+", label: "Years of Academic Excellence" },
    { number: "98%", label: "Student Success Rate" },
    { number: "1,500+", label: "Alumni Worldwide" },
    { number: "15+", label: "Degree Programs" },
  ];

  const missions = [
    {
      title: "Bible-Based Education",
      content: "Scripture-centered curriculum",
      icon: book,
      iconName: "book",
    },
    {
      title: "Christ-Centered Focus",
      content: "Transformative spiritual formation",
      icon: heart,
      iconName: " heart",
    },
    {
      title: "People-Oriented Ministry",
      content: "Practical service training",
      icon: people,
      iconName: "people",
    },
    {
      title: "Global Affiliations",
      content: "Internationally recognized programs",
      icon: globe,
      iconName: "globe",
    },
  ];

  const programCards = [
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.0567 15.0386L19.8242 24.9856C19.844 25.1027 19.8276 25.2231 19.7771 25.3306C19.7266 25.4382 19.6445 25.5277 19.5418 25.5873C19.439 25.647 19.3205 25.6738 19.2021 25.6642C19.0837 25.6547 18.9711 25.6092 18.8792 25.5339L14.7025 22.3991C14.5009 22.2484 14.256 22.167 14.0043 22.167C13.7526 22.167 13.5077 22.2484 13.306 22.3991L9.12236 25.5327C9.03057 25.6079 8.91804 25.6533 8.79978 25.6629C8.68151 25.6724 8.56315 25.6457 8.46047 25.5863C8.35779 25.5268 8.27569 25.4375 8.2251 25.3301C8.17452 25.2228 8.15787 25.1026 8.17736 24.9856L9.9437 15.0386"
            stroke="#2563EB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 16.3335C17.866 16.3335 21 13.1995 21 9.3335C21 5.4675 17.866 2.3335 14 2.3335C10.134 2.3335 7 5.4675 7 9.3335C7 13.1995 10.134 16.3335 14 16.3335Z"
            stroke="#2563EB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Certificate Programs",
      color: "bg-[#EFF6FF]",
      items: ["Practical Ministry", "Chaplaincy & Security Studies"],
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.1665 19.8333V5.83333C22.1665 5.21449 21.9207 4.621 21.4831 4.18342C21.0455 3.74583 20.452 3.5 19.8332 3.5H4.6665"
            stroke="#16A34A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.3335 24.5H23.3335C23.9523 24.5 24.5458 24.2542 24.9834 23.8166C25.421 23.379 25.6668 22.7855 25.6668 22.1667V21C25.6668 20.6906 25.5439 20.3938 25.3251 20.175C25.1063 19.9562 24.8096 19.8333 24.5002 19.8333H12.8335C12.5241 19.8333 12.2273 19.9562 12.0085 20.175C11.7897 20.3938 11.6668 20.6906 11.6668 21V22.1667C11.6668 22.7855 11.421 23.379 10.9834 23.8166C10.5458 24.2542 9.95233 24.5 9.3335 24.5ZM9.3335 24.5C8.71466 24.5 8.12116 24.2542 7.68358 23.8166C7.246 23.379 7.00016 22.7855 7.00016 22.1667V5.83333C7.00016 5.21449 6.75433 4.621 6.31675 4.18342C5.87916 3.74583 5.28567 3.5 4.66683 3.5C4.04799 3.5 3.4545 3.74583 3.01691 4.18342C2.57933 4.621 2.3335 5.21449 2.3335 5.83333V8.16667C2.3335 8.47609 2.45641 8.77283 2.6752 8.99162C2.894 9.21042 3.19074 9.33333 3.50016 9.33333H7.00016"
            stroke="#16A34A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Diploma Programs",
      color: "bg-[#F0FDF4]",
      items: ["Practical Ministry", "Chaplaincy & Security Studies"],
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.9898 12.7424C25.1986 12.6503 25.3759 12.4989 25.4995 12.307C25.6232 12.1152 25.6878 11.8912 25.6855 11.663C25.6831 11.4347 25.6138 11.2121 25.4862 11.0229C25.3586 10.8336 25.1783 10.6859 24.9676 10.5981L14.9681 6.04342C14.6641 5.90476 14.3339 5.83301 13.9998 5.83301C13.6656 5.83301 13.3354 5.90476 13.0314 6.04342L3.0331 10.5934C2.82539 10.6844 2.6487 10.8339 2.52463 11.0237C2.40055 11.2135 2.33447 11.4353 2.33447 11.6621C2.33447 11.8888 2.40055 12.1107 2.52463 12.3005C2.6487 12.4903 2.82539 12.6398 3.0331 12.7308L13.0314 17.2901C13.3354 17.4287 13.6656 17.5005 13.9998 17.5005C14.3339 17.5005 14.6641 17.4287 14.9681 17.2901L24.9898 12.7424Z"
            stroke="#9333EA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.6665 11.6665V18.6665"
            stroke="#9333EA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 14.5835V18.6668C7 19.5951 7.7375 20.4853 9.05025 21.1417C10.363 21.7981 12.1435 22.1668 14 22.1668C15.8565 22.1668 17.637 21.7981 18.9497 21.1417C20.2625 20.4853 21 19.5951 21 18.6668V14.5835"
            stroke="#9333EA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Undergraduate Programs",
      copy: "Bachelor's Degree (BA/BSc)",
      color: "bg-purple-50",
      items: ["Theology", "Divinity and Ministry", "Education"],
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 24.4998V8.1665"
            stroke="#EA580C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.6665 13.9998L20.9998 16.3332L25.6665 11.6665"
            stroke="#EA580C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.6668 7V4.66667C25.6668 4.35725 25.5439 4.0605 25.3251 3.84171C25.1063 3.62292 24.8096 3.5 24.5002 3.5H18.6668C17.4292 3.5 16.2422 3.99167 15.367 4.86683C14.4918 5.742 14.0002 6.92899 14.0002 8.16667C14.0002 6.92899 13.5085 5.742 12.6333 4.86683C11.7582 3.99167 10.5712 3.5 9.3335 3.5H3.50016C3.19074 3.5 2.894 3.62292 2.6752 3.84171C2.45641 4.0605 2.3335 4.35725 2.3335 4.66667V19.8333C2.3335 20.1428 2.45641 20.4395 2.6752 20.6583C2.894 20.8771 3.19074 21 3.50016 21H10.5002C11.4284 21 12.3187 21.3687 12.975 22.0251C13.6314 22.6815 14.0002 23.5717 14.0002 24.5C14.0002 23.5717 14.3689 22.6815 15.0253 22.0251C15.6817 21.3687 16.5719 21 17.5002 21H24.5002C24.8096 21 25.1063 20.8771 25.3251 20.6583C25.5439 20.4395 25.6668 20.1428 25.6668 19.8333V18.3167"
            stroke="#EA580C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Postgraduate Programs",
      copy: "PGD, Masters, PhD",
      color: "bg-[#FAF5FF]",
      items: ["Multiple specializations available"],
    },
  ];

  const admissionPaths = [
    { icon: download, description: "Download Application Form" },
    { icon: papers, description: "Admission Requirements" },
    { icon: dollars, description: "Tuition & Fees" },
    { icon: calls, description: "Contact Admissions Office" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-[#FBF7F0] lg:py-20 px-4 md:px-6 lg:px-8">
        <span className="flex items-center rounded-full gap-2 w-max bg-[#D4AF371A] text-[12px] md:text-[14px] mx-auto text-[#6F4E37] py-2 px-4">
          <div aria-hidden className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          Quality Theological Education Since 1994
        </span>

        <div className="max-w-480 mx-auto py-6.25">
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-gray-300 h-48 md:h-64 rounded-lg"></div>
            <div className="bg-gray-300 h-48 md:h-64 rounded-lg"></div>
            <div className="bg-gray-300 h-48 md:h-64 rounded-lg"></div>
          </div>

          {/* Hero Content */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl  mb-4">
              Training the{" "}
              <span className="text-[#800121] font-bold">Whole Man</span>{" "}
              <span className="italic">for the</span>{" "}
              <span className="text-[#D4AF37] font-bold">Whole Man</span>
            </h1>

            <span className="italic text-[#6F4E37]">"Anytime • Anywhere"</span>

            <p className="text-[#6F4E37] text-base md:text-lg max-w-2xl mt-12.5 mx-auto mb-8">
              Experience transformative education that develops your spiritual,
              intellectual, and professional potential. Our holistic approach
              prepares you for meaningful service and leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="px-6 py-3 bg-[#D4AF37] hover:bg-yellow-600 text-white font-semibold rounded"
              >
                Access Dashboard
              </Link>
              <Link
                to="/register"
                className="px-6 py-3 border-2 bg-[#800020] text-white hover:bg-red-900 font-semibold rounded"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:pt-12 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center shadow-sm rounded-lg p-12"
              >
                <div className="text-3xl md:text-4xl font-medium text-[#800020] mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-linear-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto">
          <span className="w-max text-[18px] mb-5 md:text-[24px] mx-auto text-[#D4AF37] flex">
            Who we are
          </span>
          <h2 className="text-3xl text-[#6F4E37] md:text-4xl font-bold text-center mb-5">
            About Grace Bible Institute & Seminary
          </h2>
          <p className="text-[#6F4E37] text-center text-base md:text-lg max-w-3xl mx-auto mb-8">
            Founded on the principles of biblical excellence, Grace Bible
            Institute & Seminary has been transforming lives through rigorous
            theological education and practical ministry training. We believe in
            equipping leaders who are committed to serving God and humanity with
            integrity, compassion, and wisdom.
          </p>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-4 gap-5">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="bg-white py-5 px-2.25 flex items-center w-full gap-2 rounded-lg border border-gray-200 hover:shadow-lg transition"
              >
                <div className="flex justify-center items-center rounded-full w-12 h-12 bg-(--light-shade)">
                  <img
                    src={mission.icon}
                    className="w-6 h-6"
                    aria-label={`${mission.iconName} icon`}
                    alt={mission.title}
                  />
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    {mission.title}
                  </h3>
                  <p className="text-[12px] text-(--text-secondary)">
                    {mission.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="w-max text-[18px] mb-5 md:text-[24px] mx-auto text-[#D4AF37] flex">
              Academics
            </span>
            <h2 className="text-3xl text-(--gray-text) md:text-4xl font-bold text-center">
              Academic Programs
            </h2>
            <p className="text-base pt-5 md:text-[18px] text-center text-(--gray-text)">
              Comprehensive theological training designed to equip you for every
              level of ministry service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programCards.map((program, index) => (
              <div key={index} className={`p-6 rounded-lg flex flex-col justify-between gap-16 shadow-md bg-white`}>
                <div>
                  <div
                    className={` mb-4 ${program.color} w-max p-3 rounded-2xl`}
                  >
                    {program.icon}
                  </div>
                  <h3 className="text-[24px] font-semibold text-gray-900">
                    {program.title}
                  </h3>
                  <p className="mb-4 text-[#800020]">{program.copy}</p>
                  <ul className="space-y-2">
                    {program.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-600 text-sm flex items-start gap-2"
                      >
                        <span className="text-[#6B7280] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button aria-label="view details button" role="button" className="border py-2 rounded-md border-[#E5E7EB]">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Your Journey Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-red-900 text-white">
        <div className="max-w-7xl flex flex-col items-center md:flex-row justify-between mx-auto">
          <div className="h-full">
            <p className="text-(--text-orange) pb-5">Join Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Start Your Journey
            </h2>
            <p className="text-base md:text-lg text-red-100 mb-12 w-full max-w-lg">
              Take the first step towards your calling. Our admissions process
              is designed to help you identify your path and prepare for your
              future ministry.
            </p>

            <div className="border p-6 border-white rounded-[20px]">
              <h3 className="text-[24px] flex items-center gap-2 md:text-[32px]">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2V6"
                      stroke="#D4AF37"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 2V6"
                      stroke="#D4AF37"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                      stroke="#D4AF37"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 10H21"
                      stroke="#D4AF37"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Admission Sessions
              </h3>

              <div className="px-8 py-4 flex-col flex gap-4">
                <span className="flex justify-between items-center pb-4 border-b">
                  <p>January Semester</p>
                  <p className="text-(--text-orange)">Jan – May</p>
                </span>
                <span className="flex justify-between  items-center">
                  <p>August Semester</p>
                  <p className="text-(--text-orange)">Aug – Dec</p>
                </span>
              </div>
            </div>
          </div>

          <div className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-8">
              {admissionPaths.map((path, index) => (
                <div
                  key={`admission-path-${index}`}
                  className="bg-white bg-opacity-10 flex flex-col justify-center items-center py-6 px-12 rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition"
                >
                  <div className="bg-[#FAF6F0] rounded-full w-12 h-12 flex items-center justify-center">
                    <img
                      src={path.icon}
                      className="w-4 h-4"
                      aria-hidden
                      alt=""
                    />
                  </div>
                  <p className="text-black text-center text-sm">
                    {path.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Portal Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Left panel (image + status) */}
            <div className="relative rounded-t-lg md:rounded-l-lg overflow-hidden bg-linear-to-b from-[#F7EDD9] to-[#F1E7DA] flex items-stretch">
              {/* decorative image area (replace URL if you add an image to /public) */}
              <div className="hidden md:block absolute inset-0 bg-[url('/images/portal-pic.png')] bg-cover bg-center opacity-95" />

              <div className="relative z-10 flex flex-col justify-between p-6 md:p-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    Student Portal
                  </h3>
                  <p className="mt-3 text-sm md:text-base max-w-md text-white">
                    Your central hub for academic resources, course management,
                    and administrative services.
                  </p>
                </div>

                <div className="mt-6">
                  <div className="inline-flex items-center gap-3 rounded-full bg-black bg-opacity-60 px-4 py-2 text-white text-sm">
                    <span
                      className="w-3 h-3 rounded-full bg-green-400 block"
                      aria-hidden
                    />
                    <span className="text-sm">System Status:</span>
                    <span className="font-semibold ml-1">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right panel (controls) */}
            <div className="flex flex-col py-6 md:py-12 px-3 md:px-6 justify-start">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Student Portal Access
                </h2>
                <span className="text-sm text-[#D4AF37] hidden md:inline">
                  Secure Access Area
                </span>
              </div>

              <div className="space-y-6">
                {/* big callout */}
                <div className="rounded-xl bg-[#D4AF37] text-white p-5 flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 17L15 12L10 7"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 12H3"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <div>
                      <div className="font-semibold text-lg">
                        Access Your Courses
                      </div>
                      <div className="text-sm opacity-90">
                        Login to dashboard
                      </div>
                    </div>
                  </div>

                  <div className="text-white opacity-90 text-2xl">→</div>
                </div>

                {/* small cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-[20px] border border-gray-200 p-5 flex items-start gap-3 transition">
                    <div className="w-10 h-10 rounded-full bg-[#F8F1E5] flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3334 17.5V15.8333C13.3334 14.9493 12.9822 14.1014 12.3571 13.4763C11.732 12.8512 10.8841 12.5 10.0001 12.5H5.00008C4.11603 12.5 3.26818 12.8512 2.64306 13.4763C2.01794 14.1014 1.66675 14.9493 1.66675 15.8333V17.5"
                          stroke="#6F4E37"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.50008 9.16667C9.34103 9.16667 10.8334 7.67428 10.8334 5.83333C10.8334 3.99238 9.34103 2.5 7.50008 2.5C5.65913 2.5 4.16675 3.99238 4.16675 5.83333C4.16675 7.67428 5.65913 9.16667 7.50008 9.16667Z"
                          stroke="#6F4E37"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.8333 6.66669V11.6667"
                          stroke="#6F4E37"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.3333 9.16669H13.3333"
                          stroke="#6F4E37"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[12px]">
                        New Student Registration
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Create account
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[20px] border border-gray-200 p-5 flex items-start gap-3 transition">
                    <div className="w-10 h-10 rounded-full bg-[#F8F1E5] flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6665 1.66669V5.00002C11.6665 5.44205 11.8421 5.86597 12.1547 6.17853C12.4672 6.49109 12.8911 6.66669 13.3332 6.66669H16.6665"
                          stroke="#6F4E37"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.55683 17.5C3.70275 17.7528 3.91249 17.9628 4.16505 18.109C4.41761 18.2553 4.70415 18.3326 4.996 18.3334H15.0002C15.4422 18.3334 15.8661 18.1578 16.1787 17.8452C16.4912 17.5326 16.6668 17.1087 16.6668 16.6667V5.83335L12.5002 1.66669H5.00016C4.55814 1.66669 4.13421 1.84228 3.82165 2.15484C3.50909 2.4674 3.3335 2.89133 3.3335 3.33335V5.83335"
                          stroke="#6F4E37"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.5 15L6.25 13.75"
                          stroke="#6F4E37"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.1665 14.1667C5.54722 14.1667 6.6665 13.0474 6.6665 11.6667C6.6665 10.286 5.54722 9.16669 4.1665 9.16669C2.78579 9.16669 1.6665 10.286 1.6665 11.6667C1.6665 13.0474 2.78579 14.1667 4.1665 14.1667Z"
                          stroke="#6F4E37"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[12px]">
                        Track Document Requests
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">Check status</p>
                    </div>
                  </div>

                  <div className="sm:col-span-2 rounded-[20px] border border-gray-200 p-5 flex items-start gap-3 transition">
                    <div className="w-10 h-10 rounded-full bg-[#F8F1E5] flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6667 4.16669H3.33341C2.41294 4.16669 1.66675 4.91288 1.66675 5.83335V14.1667C1.66675 15.0872 2.41294 15.8334 3.33341 15.8334H16.6667C17.5872 15.8334 18.3334 15.0872 18.3334 14.1667V5.83335C18.3334 4.91288 17.5872 4.16669 16.6667 4.16669Z"
                          stroke="#6F4E37"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.66675 8.33331H18.3334"
                          stroke="#6F4E37"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[12px]">
                        Make Payment
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Tuition & fees
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
