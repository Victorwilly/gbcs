import download from "/icons/download.svg";
import papers from "/icons/papers.svg";
import dollars from "/icons/dollars.svg";
import calls from "/icons/calls.svg";

export default function Admissions() {
  const admissionSessions = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.459 2.86426V8.59342"
            stroke="white"
            stroke-width="2.45536"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.918 2.86426V8.59342"
            stroke="white"
            stroke-width="2.45536"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.2135 5.72852H7.16146C5.57939 5.72852 4.29688 7.01103 4.29688 8.5931V28.6452C4.29688 30.2272 5.57939 31.5098 7.16146 31.5098H27.2135C28.7956 31.5098 30.0781 30.2272 30.0781 28.6452V8.5931C30.0781 7.01103 28.7956 5.72852 27.2135 5.72852Z"
            stroke="white"
            stroke-width="2.45536"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.29688 14.3228H30.0781"
            stroke="white"
            stroke-width="2.45536"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      color: "#D4AF37",
      text: "January – May",

      title: "January Semester",
      description:
        "Applications open in November for the January intake. Early application is encouraged.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.459 2.86426V8.59342"
            stroke="white"
            stroke-width="2.45536"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.918 2.86426V8.59342"
            stroke="white"
            stroke-width="2.45536"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.2135 5.72852H7.16146C5.57939 5.72852 4.29688 7.01103 4.29688 8.5931V28.6452C4.29688 30.2272 5.57939 31.5098 7.16146 31.5098H27.2135C28.7956 31.5098 30.0781 30.2272 30.0781 28.6452V8.5931C30.0781 7.01103 28.7956 5.72852 27.2135 5.72852Z"
            stroke="white"
            stroke-width="2.45536"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.29688 14.3228H30.0781"
            stroke="white"
            stroke-width="2.45536"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      color: "#800020",
      text: "August – December",
      title: "August Semester",
      description:
        "Applications open in June for the August intake. Rolling admissions available.",
    },
  ];

  const requirements = [
    {
      description: "Completed application form",
    },
    {
      description: "Academic credentials",
    },
    {
      description: "3 passport photographs",
    },
    {
      description: "Written testimony of conversion",
    },
    {
      description: "Pastoral recommendation",
    },
    {
      description: "Birth certificate or age declaration",
    },
  ];

  const tuitionPrograms = [
    { program: "Certificate", amount: "₦3000" },
    { program: "Diploma ", amount: "₦3000" },
    { program: "Degree", amount: "₦5000" },
    { program: "PGD", amount: "₦5000" },
    { program: "Masters", amount: "₦7000" },
    { program: "phD", amount: "₦10,000" },
  ];

  const tuitionBySemester = [
    { program: "Certificate", amount: "₦15,000" },
    { program: "Diploma ", amount: "₦20,000" },
    { program: "Degree", amount: "₦25,000" },
    { program: "PGD", amount: "₦30,000" },
    { program: "Masters", amount: "₦45,000" },
    { program: "phD", amount: "₦65,000" },
  ];

  const readyToApply = [
    {
      icon: download,
      title: "Download Application Form",
    },
    {
      icon: papers,
      title: "View Full Requirements",
    },
    {
      icon: dollars,
      title: "Payment Information",
    },
    {
      icon: calls,
      title: "Contact Admissions",
    },
  ];

  return (
    <main>
      {/* Header Section */}
      <section className="bg-linear-to-r from-green-800 via-green-700 to-yellow-600 py-16 md:py-20 px-4 md:px-6 lg:px-8 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Admissions</h1>
          <p className="text-green-50 text-lg">
            Start your transformative journey with us today
          </p>
        </div>
      </section>

      {/* Admission Sessions Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#6F4E37]">
            Admission Sessions
          </h2>

          <p className="text-center text-[#6F4E37]">
            Admissions are conducted twice yearly
          </p>

          <div className="grid grid-cols-1 mt-7.5 md:mt-12.5 md:grid-cols-2 gap-8">
            {admissionSessions.map((session, index) => (
              <div
                key={index}
                className={`p-4 md:p-8 rounded-2xl border-2 border-[${session.color}] bg-[#FFF8E7]`}
              >
                <div className="flex flex-col gap-2 md:flex-row">
                  <div
                    className={`text-5xl w-12 h-12 flex items-center justify-center rounded-full mb-4 bg-[${session.color}]`}
                  >
                    {session.icon}
                  </div>

                  <div className="flex flex-col gap-1 mb-6">
                    <h3 className="text-2xl font-bold leading-tight text-[#800020] ">
                      {session.title}
                    </h3>
                    <p className="text-[#4B5563]">{session.text}</p>
                  </div>
                </div>
                <p className="text-gray-600 w-full max-w-95">
                  {session.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Requirements Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-[#FBF7F0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#6F4E37]">
            General Requirements
          </h2>
          <p className="text-center text-[#6F4E37] mb-12 text-lg">
            Documents needed for admission
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex justify-center rounded-full shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_11_1721)">
                        <path
                          d="M18.1673 8.33357C18.5479 10.2013 18.2767 12.1431 17.3989 13.8351C16.5211 15.527 15.0897 16.8669 13.3436 17.6313C11.5975 18.3957 9.64203 18.5384 7.80342 18.0355C5.96482 17.5327 4.35417 16.4147 3.24007 14.8681C2.12597 13.3214 1.57577 11.4396 1.68123 9.53639C1.78668 7.63318 2.5414 5.82364 3.81955 4.40954C5.09769 2.99545 6.82199 2.06226 8.70489 1.76561C10.5878 1.46897 12.5155 1.82679 14.1665 2.7794"
                          stroke="#2D5016"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.5 9.16683L10 11.6668L18.3333 3.3335"
                          stroke="#2D5016"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_11_1721">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#374151] font-semibold text-sm">
                      {req.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition & Fees Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-center mb-2.5 text-[#800020]">
            Tuition & Fees
          </h2>

          <p className="text-center text-[#6F4E37] mb-12 text-lg">
            GBIS Regular Programs Fee Structure
          </p>

          {/* Tuition by Program */}
          <div className="mb-12">
            <h3 className="text-[20px] font-bold text-[Heading/H6/fontSize] py-4 rounded-t-lg mb-0">
              Application Form from Each Sem Plan Chosen
            </h3>
            <div className="overflow-x-auto rounded-2xl">
              <table className="w-full">
                <thead>
                  <tr className="bg-red-900 rounded-t-2xl text-white">
                    <th className="px-6 py-4 text-[24px] text-left font-semibold">
                      Program
                    </th>
                    <th className="px-6 py-4 text-[24px] text-right font-semibold">
                      Amount (₦)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#fff8e7] bg-[#fff8e7]">
                  {tuitionPrograms.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-2 text-gray-900">
                        {item.program}
                      </td>
                      <td className="px-6 py-4 text-right text-[#800020] font-semibold">
                        {item.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tuition by Semester */}
          <div>
            <h3 className="text-[20px] font-bold text-[#111827] py-4 mb-0">
              Tuition Plan (Per Semester)
            </h3>
            <div className="overflow-x-auto rounded-2xl">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#D4AF37] text-white">
                    <th className="px-6 py-4 text-left text-[24px] font-semibold">
                      Program
                    </th>
                    <th className="px-6 py-4 text-right text-[24px] font-semibold">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-[#fff8e7] bg-[#fff8e7]">
                  {tuitionBySemester.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-gray-900">
                        {item.program}
                      </td>
                      <td className="px-6 py-4 text-right text-red-900 font-semibold">
                        {item.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-600 mt-4 px-6">
              Additional fees include: Registration (₦5,000-10,000), Program
              Development (₦5,000-10,000), and Examination (₦2,000-3,000) per
              semester
            </p>
          </div>
        </div>
      </section>

      {/* Ready to Apply Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#800020]">
            Ready to Apply?
          </h2>

          <p className="text-center text-[#6F4E37] mb-12 text-lg">
            Take the next step in your ministry journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {readyToApply.map((item, index) => (
              <div
                key={index}
                className="bg-white px-4 py-6 rounded-lg border flex flex-col justify-center items-center gap-3 border-gray-200 text-center shadow-lg "
              >
                <div className="bg-[#FAF6F0] rounded-full w-12 h-12 flex items-center justify-center">
                  <img src={item.icon} className="w-4 h-4" aria-hidden alt="" />
                </div>


                <h3 className="text-base font-bold text-[#111827] mb-2">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

  
        </div>
      </section>
    </main>
  );
}
