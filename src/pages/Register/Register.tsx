import { useState } from "react";
import RegisterHeader from "./RegisterHeader";

function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Personal Information
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    dateOfBirth: "",
    presentAddress: "",
    permanentAddress: "",
    village: "",
    localGovernmentArea: "",
    stateOfOrigin: "",
    citizenship: "",
    selectStatus: "",
    poBox: "",

    // Step 2 - Religious & Educational Background
    churchName: "",
    churchAddress: "",
    memberStatus: "",
    conversionDate: "",
    testimonyMessage: "",
    pastorName: "",
    pastorAddress: "",
    elementarySchool: "",
    elementaryYear: "",
    secondarySchool: "",
    secondarySchoolDates: "",
    secondarySchoolCertificates: "",
    collegeSchool: "",
    collegeSchoolDates: "",
    collegeSchoolCertificates: "",
    secondaryYear: "",
    seniorSecondary: "",

    // Step 3 - Academic Background
    startMonth: "",
    startYear: "",
    studyMode: "",
    programType: "",
    studentDiscipline: "",
    currentOccupation: "",
    studentSponsor: "",
    enrollPastorName: "",
    enrollPastorRelationship: "",
    enrollKinName: "",
    enrollKinRelationship: "",
    acceptTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  // step status
  const stepStage = [
    {
      name: "Personal Information",
    },
    {
      name: "Religion & Education",
    },
    {
      name: "Enrollment & References",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff8e7]">
      <RegisterHeader />

      <div className="max-w-250 mx-auto  py-8 px-4">
        <div className="bg-white rounded-lg  p-6 md:p-8">
          {/* form wrapper header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h1 className="text-2xl tracking-[-.3px] font-bold text-gray-900 mb-2">
                New Student Registration
              </h1>

              <p className="text-sm text-[#800020] font-semibold">
                Step {currentStep} of 3
              </p>
            </div>

            {/* step indicators */}
            <div className="flex items-center gap-2 justify-between mt-5">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex-1">
                  <div
                    className={`w-full h-2 rounded-full flex items-center justify-center font-semibold 
                    ${step <= currentStep ? "bg-[#D4AF37]" : "bg-[#E5E7EB]"}
                    `}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-2 mt-2.5">
              {stepStage.map((stage, index) => (
                <p
                  key={index}
                  className={`text-xs text-[#6B7280] font-medium ${currentStep === index + 1 ? "text-[#800020]" : ""}`}
                >
                  {stage.name}
                </p>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-[#D4AF371A] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.0312 21.0335V19.0303C19.0312 17.9678 18.6091 16.9487 17.8578 16.1974C17.1064 15.446 16.0874 15.0239 15.0248 15.0239H9.0152C7.95263 15.0239 6.93359 15.446 6.18224 16.1974C5.43089 16.9487 5.00879 17.9678 5.00879 19.0303V21.0335"
                        stroke="#D4AF37"
                        stroke-width="2.40385"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0201 11.0177C14.2328 11.0177 16.0265 9.22397 16.0265 7.01129C16.0265 4.79861 14.2328 3.00488 12.0201 3.00488C9.8074 3.00488 8.01367 4.79861 8.01367 7.01129C8.01367 9.22397 9.8074 11.0177 12.0201 11.0177Z"
                        stroke="#D4AF37"
                        stroke-width="2.40385"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Personal Information
                  </h2>
                </div>

                <div className="flex flex-col gap-5">
                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-1">
                      Full Name <span className="text-[#374151]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-1">
                      Email Address <span className="text-[#374151]">*</span>
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-[#374151] mb-1">
                        Phone Number <span className="text-[#374151]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="080XXXXXXXX"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#374151] mb-1">
                        Date of Birth <span className="text-[#374151]">*</span>
                      </label>
                      <input
                        placeholder="mm/dd/yyyy"
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-1">
                      Present Address <span className="text-[#374151]">*</span>
                    </label>
                    <input
                      type="text"
                      name="presentAddress"
                      value={formData.presentAddress}
                      onChange={handleInputChange}
                      placeholder="Type your address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-1">
                      Permanent Address (if different){" "}
                      <span className="text-[#374151]">*</span>
                    </label>
                    <input
                      type="text"
                      name="permanentAddress"
                      value={formData.permanentAddress}
                      onChange={handleInputChange}
                      placeholder="Type your permanent address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="village"
                        className="block text-sm font-bold text-[#374151] mb-1"
                      >
                        Village
                      </label>

                      <input
                        type="text"
                        id="village"
                        name="village"
                        value={formData.village}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="localGovernmentArea"
                        className="block text-sm font-bold text-[#374151] mb-1"
                      >
                        Local Government Area{" "}
                        <span className="text-[#374151]">*</span>
                      </label>

                      <input
                        type="text"
                        id="localGovernmentArea"
                        name="localGovernmentArea"
                        value={formData.localGovernmentArea}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="stateOfOrigin"
                        className="block text-sm font-bold text-[#374151] mb-1"
                      >
                        State of Origin{" "}
                        <span className="text-[#374151]">*</span>
                      </label>

                      <input
                        type="text"
                        id="stateOfOrigin"
                        name="stateOfOrigin"
                        value={formData.stateOfOrigin}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="citizenship"
                        className="block text-sm font-bold text-[#374151] mb-1"
                      >
                        Citizenship <span className="text-[#374151]">*</span>
                      </label>
                      <input
                        type="text"
                        id="citizenship"
                        name="citizenship"
                        placeholder="e.g Nigerian"
                        value={formData.citizenship}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-[#374151] mb-1">
                        Marital Status <span className="text-[#374151]">*</span>
                      </label>

                      <select
                        title="Select Marital status"
                        name="selectStatus"
                        value={formData.selectStatus}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      >
                        <option value="">Select status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="citizenship"
                        className="block text-sm font-bold text-[#374151] mb-1"
                      >
                        P.O Box
                      </label>
                      <input
                        type="text"
                        id="citizenship"
                        name="citizenship"
                        value={formData.poBox}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Religious & Educational Background */}
            {currentStep === 2 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-[#8000201A] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0156 9.01465H14.022"
                        stroke="#800020"
                        stroke-width="2.40385"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0186 7.01123V12.0192"
                        stroke="#800020"
                        stroke-width="2.40385"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.022 22.0355V18.0291C14.022 17.4978 13.811 16.9883 13.4353 16.6126C13.0596 16.2369 12.5501 16.0259 12.0188 16.0259C11.4875 16.0259 10.978 16.2369 10.6024 16.6126C10.2267 16.9883 10.0156 17.4978 10.0156 18.0291V22.0355"
                        stroke="#800020"
                        stroke-width="2.40385"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.028 22.0353V5.6271C18.0279 5.44114 17.9761 5.25888 17.8782 5.10073C17.7804 4.94258 17.6405 4.81479 17.4741 4.73167L12.9138 2.45102C12.6358 2.31208 12.3292 2.23975 12.0184 2.23975C11.7076 2.23975 11.401 2.31208 11.123 2.45102L6.56268 4.73167C6.39633 4.81479 6.25641 4.94258 6.15858 5.10073C6.06076 5.25888 6.00889 5.44114 6.00879 5.6271V22.0353"
                        stroke="#800020"
                        stroke-width="2.40385"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.0286 7.01123L21.4811 8.73799C21.6474 8.82112 21.7874 8.94891 21.8852 9.10706C21.983 9.26521 22.0349 9.44747 22.035 9.63343V20.0321C22.035 20.5633 21.8239 21.0729 21.4483 21.4485C21.0726 21.8242 20.5631 22.0353 20.0318 22.0353H4.00613C3.47485 22.0353 2.96533 21.8242 2.58965 21.4485C2.21398 21.0729 2.00293 20.5633 2.00293 20.0321V9.63343C2.00303 9.44747 2.0549 9.26521 2.15272 9.10706C2.25055 8.94891 2.39047 8.82112 2.55682 8.73799L6.00934 7.01123"
                        stroke="#800020"
                        stroke-width="2.40385"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h2 className="text-[18px] font-bold text-gray-900">
                    Religious Information
                  </h2>
                </div>

                <div className="flex flex-col gap-5 mb-8">
                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-3">
                      Church name <span className="text-[#374151]">*</span>
                    </label>

                    <input
                      type="text"
                      placeholder="Name of your local church"
                      name="religiousBelief"
                      value={formData.churchName}
                      onChange={handleInputChange}
                      className="w-full px-4.75 py-4.5 border border-[#D1D5DB] rounded-lg placeholder:text-[#CCCCCC] focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      required
                    ></input>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-3">
                      Church address <span className="text-[#374151]">*</span>
                    </label>
                    <textarea
                      name="churchAddress"
                      value={formData.churchAddress}
                      onChange={handleInputChange}
                      placeholder="e.g. St. Mary's Church"
                      className="w-full px-4 py-2 border h-22 border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-5 mb-8">
                    <div className="w-full">
                      <label className="block text-sm font-bold text-[#374151] mb-3">
                        Are you a member?{" "}
                        <span className="text-[#374151]">*</span>
                      </label>

                      <select
                        title="Member status"
                        name="memberStatus"
                        value={formData.memberStatus}
                        onChange={handleInputChange}
                        className="w-full px-4.75 py-4.5 border border-[#D1D5DB] rounded-lg placeholder:text-[#CCCCCC] focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <label className="block text-sm font-bold text-[#374151] mb-3">
                        Conversion Date
                        <span className="text-[#374151]">*</span>
                      </label>

                      <input
                        type="date"
                        title="Member status"
                        name="memberStatus"
                        value={formData.conversionDate}
                        onChange={handleInputChange}
                        className="w-full px-4.75 py-4.5 border border-[#D1D5DB] rounded-lg placeholder:text-[#CCCCCC] focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-3">
                      Brief Testimony of Conversion * (Max 50 words)
                    </label>
                    <textarea
                      name="testimonyMessage"
                      value={formData.testimonyMessage}
                      onChange={handleInputChange}
                      placeholder="Share your conversion experience..."
                      className="w-full px-4 py-2 border h-29 border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                    />
                    <span className="text-[12px] text-[#6B7280]">
                      {formData.testimonyMessage.length}/300 characters
                    </span>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-3">
                      Pastor/Superintendent Name *
                    </label>

                    <input
                      type="text"
                      name="pastorName"
                      placeholder="Pastor/Superintendent name"
                      value={formData.pastorName}
                      onChange={handleInputChange}
                      className="w-full px-4.75 py-4.5 border border-[#D1D5DB] rounded-lg placeholder:text-[#CCCCCC] focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-3">
                      Pastor's Complete Address *
                    </label>

                    <input
                      type="text"
                      name="pastorAddress"
                      placeholder="Pastor/Superintendent address"
                      value={formData.pastorAddress}
                      onChange={handleInputChange}
                      className="w-full px-4.75 py-4.5 border border-[#D1D5DB] rounded-lg placeholder:text-[#CCCCCC] focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>
                </div>

                <div className=" pt-8 md:pt-13.5">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 bg-[#2D50161A] rounded-full flex items-center justify-center">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.4548 10.9394C21.6341 10.8603 21.7863 10.7304 21.8925 10.5656C21.9986 10.4009 22.0541 10.2086 22.0521 10.0127C22.0501 9.8167 21.9906 9.62564 21.8811 9.46314C21.7715 9.30064 21.6167 9.17385 21.4358 9.09847L12.8511 5.18821C12.5901 5.06917 12.3066 5.00757 12.0197 5.00757C11.7329 5.00757 11.4494 5.06917 11.1884 5.18821L2.60466 9.09446C2.42635 9.17256 2.27465 9.30093 2.16813 9.46387C2.06161 9.62681 2.00488 9.81726 2.00488 10.0119C2.00488 10.2066 2.06161 10.3971 2.16813 10.56C2.27465 10.7229 2.42635 10.8513 2.60466 10.9294L11.1884 14.8437C11.4494 14.9627 11.7329 15.0243 12.0197 15.0243C12.3066 15.0243 12.5901 14.9627 12.8511 14.8437L21.4548 10.9394Z"
                          stroke="#2D5016"
                          stroke-width="2.40385"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M22.0342 10.0159V16.0255"
                          stroke="#2D5016"
                          stroke-width="2.40385"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.00879 12.52V16.0256C6.00879 16.8226 6.64194 17.5868 7.76896 18.1503C8.89599 18.7139 10.4246 19.0304 12.0184 19.0304C13.6123 19.0304 15.1408 18.7139 16.2678 18.1503C17.3949 17.5868 18.028 16.8226 18.028 16.0256V12.52"
                          stroke="#2D5016"
                          stroke-width="2.40385"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <h2 className="text-[24px] font-bold text-gray-900">
                      Educational Background
                    </h2>
                  </div>

                  <div className="flex bg-[#FFF8E7] p-2 md:p-5 rounded-lg flex-col gap-5">
                    <div>
                      <h3 className="block text-[20px] font-bold text-[#374151] mb-6">
                        Secondary School *
                      </h3>
                      <label
                        htmlFor="secondarySchool"
                        className="block text-[14px] font-medium text-[#374151] mb-3"
                      >
                        School Name
                      </label>
                      <input
                        type="text"
                        id="secondarySchool"
                        name="secondarySchool"
                        placeholder=" "
                        value={formData.secondarySchool}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 mb-8">
                      <div className="w-full">
                        <label className="block text-sm font-medium text-[#374151] mb-3">
                          Dates attended
                        </label>

                        <input
                          type="text"
                          title="Dates attended"
                          name="secondarySchoolDates"
                          placeholder="e.g., 2010-2016"
                          value={formData.secondarySchoolDates}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-[#D1D5DB]  bg-white rounded-lg placeholder:text-[#CCCCCC] focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <label className="block text-sm font-medium text-[#374151] mb-3">
                          Certificates
                        </label>

                        <input
                          type="text"
                          title="Certificates"
                          name="secondarySchoolCertificates"
                          placeholder="e.g., WAEC, NECO"
                          value={formData.secondarySchoolCertificates}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-[#D1D5DB] bg-white  rounded-lg placeholder:text-[#CCCCCC] focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" pt-8 md:pt-13.5">
                  <div className="flex bg-[#F9FAFB] p-2 md:p-5 rounded-lg flex-col gap-5">
                    <div>
                      <h3 className="block text-[20px] font-bold text-[#374151] mb-1">
                        College/University (Optional)
                      </h3>
                      <span className="block text-[14px] font-medium text-[#374151] mb-6">
                        Fill this section if applicable
                      </span>

                      <label
                        htmlFor="collegeSchool"
                        className="block text-[14px] font-semibold text-[#374151] mb-3"
                      >
                        School Name
                      </label>
                      <input
                        type="text"
                        name="collegeSchool"
                        placeholder=" "
                        id="collegeSchool"
                        value={formData.collegeSchool}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 mb-8">
                      <div className="w-full">
                        <label className="block text-sm font-semibold text-[#374151] mb-3">
                          Dates attended
                        </label>

                        <input
                          type="text"
                          title="Dates attended"
                          name="collegeSchoolDates"
                          placeholder="e.g., 2010-2016"
                          value={formData.collegeSchoolDates}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-[#D1D5DB]  bg-white rounded-lg placeholder:text-[#CCCCCC] focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <label className="block text-sm font-semibold text-[#374151] mb-3">
                          Certificates
                        </label>

                        <input
                          type="text"
                          title="Certificates"
                          name="collegeSchoolCertificates"
                          placeholder="e.g., WAEC, NECO"
                          value={formData.collegeSchoolCertificates}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-[#D1D5DB] bg-white  rounded-lg placeholder:text-[#CCCCCC] focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Academic Background */}
            {currentStep === 3 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-[#D4AF371A] rounded-full flex items-center justify-center">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.4548 10.9397C21.6341 10.8606 21.7863 10.7306 21.8925 10.5659C21.9986 10.4011 22.0541 10.2089 22.0521 10.0129C22.0501 9.81695 21.9906 9.62588 21.8811 9.46338C21.7715 9.30088 21.6167 9.17409 21.4358 9.09871L12.8511 5.18846C12.5901 5.06942 12.3066 5.00781 12.0197 5.00781C11.7329 5.00781 11.4494 5.06942 11.1884 5.18846L2.60466 9.09471C2.42635 9.17281 2.27465 9.30117 2.16813 9.46411C2.06161 9.62706 2.00488 9.81751 2.00488 10.0122C2.00488 10.2068 2.06161 10.3973 2.16813 10.5602C2.27465 10.7232 2.42635 10.8515 2.60466 10.9296L11.1884 14.8439C11.4494 14.9629 11.7329 15.0246 12.0197 15.0246C12.3066 15.0246 12.5901 14.9629 12.8511 14.8439L21.4548 10.9397Z"
                        stroke="#D4AF37"
                        stroke-width="2.40385"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22.0342 10.0161V16.0257"
                        stroke="#D4AF37"
                        stroke-width="2.40385"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.00879 12.5195V16.0251C6.00879 16.8221 6.64194 17.5863 7.76896 18.1499C8.89599 18.7134 10.4246 19.0299 12.0184 19.0299C13.6123 19.0299 15.1408 18.7134 16.2678 18.1499C17.3949 17.5863 18.028 16.8221 18.028 16.0251V12.5195"
                        stroke="#D4AF37"
                        stroke-width="2.40385"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h2 className="text-[18px] font-bold text-gray-900">
                    Enrollment Information
                  </h2>
                </div>

                <div className="flex flex-col gap-5 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-[#374151] mb-1">
                        Start Month *
                      </label>
                      <select
                        title="Select Marital status"
                        name="startMonth"
                        value={formData.startMonth}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border text-[#1F2937] border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      >
                        <option value="">Select status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="startYear"
                        className="block text-sm font-bold text-[#374151] mb-1"
                      >
                        Start Year *
                      </label>
                      <input
                        type="text"
                        id="startYear"
                        name="startYear"
                        placeholder="2025"
                        value={formData.startYear}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border text-[#1F2937] border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="studyMode"
                      className="block text-sm font-bold text-[#374151] mb-1"
                    >
                      Study Mode *
                    </label>
                    <select
                      id="studyMode"
                      title="Select study mode"
                      name="studyMode"
                      value={formData.studyMode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border text-[#1F2937] border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      required
                    >
                      <option value="">Select study mode</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="programType"
                      className="block text-sm font-bold text-[#374151] mb-1"
                    >
                      Program Type *
                    </label>
                    <select
                      id="programType"
                      title="Select program"
                      name="programType"
                      value={formData.programType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border text-[#1F2937] border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      required
                    >
                      <option value="">Select program</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="studentDiscipline"
                      className="block text-sm font-bold text-[#374151] mb-1"
                    >
                      Discipline/Specialization *
                    </label>
                    <select
                      id="studentDiscipline"
                      title="Select Discipline"
                      name="studentDiscipline"
                      value={formData.studentDiscipline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#D1D5DB] text-[#1F2937] rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      required
                    >
                      <option value="">Select discipline</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="currentOccupation"
                      className="block text-sm font-bold text-[#374151] mb-1"
                    >
                      Current Occupation
                    </label>
                    <input
                      type="text"
                      id="currentOccupation"
                      name="currentOccupation"
                      placeholder="e.g Engineer"
                      value={formData.currentOccupation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border text-[#1F2937] border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="studentSponsor"
                      className="block text-sm font-bold text-[#374151] mb-1"
                    >
                      Who will sponsor your studies? *
                    </label>
                    <input
                      type="text"
                      id="studentSponsor"
                      name="studentSponsor"
                      placeholder="Self, Church, Organization, etc."
                      value={formData.studentSponsor}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border text-[#1F2937] border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>

                  <div className="bg-[#FFF8E7] p-4 rounded-lg">
                    <h3 className="text-[18px] font-semibold text-[#111827] mb-5">
                      Referee 1: Your Pastor/Superintendent *
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label
                          htmlFor="enrollPastorName"
                          className="block text-sm font-medium text-[#374151] mb-1"
                        >
                          Full Name
                        </label>
                        <input
                          placeholder=""
                          type="text"
                          id="enrollPastorName"
                          name="enrollPastorName"
                          value={formData.enrollPastorName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border bg-white border-[#EFDB9A] rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="enrollPastorRelationship"
                          className="block text-sm font-medium text-[#374151] mb-1"
                        >
                          Relationship
                        </label>
                        <input
                          type="text"
                          id="enrollPastorRelationship"
                          name="enrollPastorRelationship"
                          value={formData.enrollPastorRelationship}
                          placeholder="Pastor/Superintendent"
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border bg-white border-[#EFDB9A] rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#F9FAFB] p-4 rounded-lg">
                    <h3 className="text-[18px] font-semibold text-[#111827] mb-5">
                      Referee 1: Your Pastor/Superintendent *
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label
                          htmlFor="enrollKinName"
                          className="block text-sm font-medium text-[#374151] mb-1"
                        >
                          Full Name
                        </label>
                        <input
                          placeholder=""
                          type="text"
                          id="enrollKinName"
                          name="enrollKinName"
                          value={formData.enrollKinName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border bg-white border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="enrollKinRelationship"
                          className="block text-sm font-medium text-[#374151] mb-1"
                        >
                          Relationship
                        </label>
                        <input
                          type="text"
                          id="enrollKinRelationship"
                          name="enrollKinRelationship"
                          value={formData.enrollKinRelationship}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border bg-white border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className=" gap-2 p-3 bg-[#8000200D] rounded-lg border-2 border-[#80002033]">
                    <span className="font-semibold text-[#111827]">
                      The Pledge
                    </span>

                    <p className="text-[14px] text-[#374151]  pt-5.5">
                      I affirm that the information given in this document is
                      correct. I also pledge to abide by additional rules and
                      regulations in addition to those in the GBIS prospectus
                      and student handbook as will be set forth by the
                      Seminary's Governing Council or Administrative Council
                      throughout my stay in the seminary.
                    </p>

                    <div className="flex gap-2 mt-10.5 items-center">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        id="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleInputChange}
                        required
                      />
                      <label
                        htmlFor="acceptTerms"
                        className="text-xs font-bold text-[#111827]"
                      >
                        I agree to the pledge and affirm that all information
                        provided is accurate *
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="px-6 flex items-center gap-2 py-2 text-sm font-bold hover:cursor-pointer text-[#6B7280] border-2 border-[#D1D5DB] rounded-lg hover:bg-gray-50  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.02 19.0305L5.00879 12.0193L12.02 5.00806"
                    stroke="#374151"
                    stroke-width="2.40385"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.0312 12.0193H5.00879"
                    stroke="#374151"
                    stroke-width="2.40385"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Previous
              </button>

              {currentStep === 3 ? (
                <button
                  type="submit"
                  className="pr-6 pl-4 py-2 flex items-center gap-2 bg-[#800020] hover:bg-red-800 hover:cursor-pointer text-white text-sm font-bold rounded-lg"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0315 6.00952L9.01387 17.0271L4.00586 12.0191"
                      stroke="white"
                      stroke-width="2.40385"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Submit Application
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    handleNext();
                    window.scrollTo({ top: 0 });
                  }}
                  className="px-6 py-2 flex items-center gap-2 bg-[#D4AF37] hover:bg-yellow-60 hover:cursor-pointer text-white text-sm font-medium rounded-lg"
                >
                  Next Step
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.00879 12.0193H19.0312"
                      stroke="white"
                      stroke-width="2.40385"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0195 5.0083L19.0307 12.0195L12.0195 19.0307"
                      stroke="white"
                      stroke-width="2.40385"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
