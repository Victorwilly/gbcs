import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      color: "#800020",
      title: "Address",
      details: [
        "Grace Bible Institute & Seminary",
        "25 Hopng Estate Street",
        "P.O. Box 799, Calabar",
        "Cross River State, Nigeria",
      ],
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.832 16.568C14.0385 16.6628 14.2712 16.6845 14.4917 16.6294C14.7122 16.5744 14.9073 16.4458 15.045 16.265L15.4 15.8C15.5863 15.5516 15.8279 15.35 16.1056 15.2111C16.3833 15.0723 16.6895 15 17 15H20C20.5304 15 21.0391 15.2107 21.4142 15.5858C21.7893 15.9609 22 16.4696 22 17V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22C15.2261 22 10.6477 20.1036 7.27208 16.7279C3.89642 13.3523 2 8.7739 2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H7C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78929 2.96086 9 3.46957 9 4V7C9 7.31049 8.92771 7.61672 8.78885 7.89443C8.65 8.17214 8.44839 8.41371 8.2 8.6L7.732 8.951C7.54842 9.09118 7.41902 9.29059 7.36579 9.51535C7.31256 9.74012 7.33878 9.97638 7.44 10.184C8.80668 12.9599 11.0544 15.2048 13.832 16.568Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      color: "#D4AF37",
      title: "Phone",
      details: ["08033416792", "08130975458"],
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 7L13.009 12.727C12.7039 12.9042 12.3573 12.9976 12.0045 12.9976C11.6517 12.9976 11.3051 12.9042 11 12.727L2 7"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      color: "#D4AF37",

      title: "Email",
      details: ["info@gbis.edu.ng"],
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 2C9.43223 4.69615 8 8.27674 8 12C8 15.7233 9.43223 19.3038 12 22C14.5678 19.3038 16 15.7233 16 12C16 8.27674 14.5678 4.69615 12 2Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 12H22"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      color: "#6F4E37",
      title: "Website",
      details: ["www.wwomi.net"],
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 6V12L16 14"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      color: "#800020",
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 10:00 AM - 2:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const subjects = [
    "General Inquiry",
    "Admissions",
    "Academic Programs",
    "Financial Aid",
    "Campus Visit",
    "Other",
  ];

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main>
      {/* Header Section */}
      <section className="bg-linear-to-r from-[#6E4E36] to-amber-700 py-16 md:py-20 px-4 md:px-6 lg:px-8 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-amber-100 text-lg">
            We're here to answer your questions and guide you on your journey
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Get In Touch - Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl tracking-[-0.2px] font-bold mb-8 text-red-900">
                Get In Touch
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-[#FFF8E7] p-6 rounded-2xl">
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col md:flex-row gap-4 ">
                        <div
                          className={`bg-[${info.color}] w-12 h-12 rounded-full flex items-center justify-center`}
                        >
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-[#111827] mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p
                                key={detailIndex}
                                className="text-[#374151] text-sm"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Send a Message - Right Column */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-[#FAF6F0] p-8 rounded-2xl"
              >
                <h2 className="text-[20px] tracking-[-0.2px] font-bold mb-8 text-[#800020]">
                  Send Us a Message
                </h2>
                {/* Full Name */}
                <div className="mb-6">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-[#374151] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border bg-[#FFFFFF] border-[#FFFFFF] placeholder:text-[#CCCCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#374151] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border bg-[#FFFFFF] border-[#FFFFFF] placeholder:text-[#CCCCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-6">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-semibold text-[#374151] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="080XXXXXXXX"
                    className="w-full px-4 py-3 border bg-[#FFFFFF] border-[#FFFFFF] placeholder:text-[#CCCCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  />
                </div>

                {/* Subject */}
                <div className="mb-15">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-[#374151] mb-2"
                  >
                    Message *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border bg-[#FFFFFF] border-[#FFFFFF] placeholder:text-[#CCCCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subj, index) => (
                      <option key={index} value={subj}>
                        {subj}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#374151] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="w-full px-4 py-3 border bg-[#FFFFFF] border-[#FFFFFF] placeholder:text-[#CCCCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 text-sm py-4.5 bg-red-900 hover:bg-red-800 text-white font-bold rounded-lg hover:cursor-pointer transition flex items-center justify-center gap-2"
                >
                  <span aria-hidden>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1135 18.0716C12.1452 18.1505 12.2002 18.2179 12.2712 18.2646C12.3423 18.3113 12.4259 18.3352 12.5109 18.333C12.5959 18.3308 12.6781 18.3027 12.7467 18.2524C12.8152 18.2021 12.8668 18.1321 12.8943 18.0516L18.311 2.2183C18.3377 2.14446 18.3428 2.06455 18.3257 1.98793C18.3086 1.9113 18.27 1.84113 18.2145 1.78561C18.159 1.7301 18.0888 1.69154 18.0122 1.67446C17.9356 1.65737 17.8557 1.66246 17.7818 1.68913L1.9485 7.1058C1.86808 7.13338 1.79802 7.1849 1.74772 7.25344C1.69743 7.32199 1.66931 7.40428 1.66713 7.48926C1.66495 7.57425 1.68883 7.65787 1.73555 7.7289C1.78226 7.79993 1.84959 7.85497 1.9285 7.88663L8.53683 10.5366C8.74574 10.6203 8.93554 10.7453 9.0948 10.9043C9.25406 11.0633 9.37948 11.2529 9.4635 11.4616L12.1135 18.0716Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.2114 1.78906L9.09473 10.9049"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
