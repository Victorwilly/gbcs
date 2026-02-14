import { useState } from "react";

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

    // Step 2 - Religious & Educational Background
    religiousBelief: "",
    churchName: "",
    denominationalAffiliation: "",
    elementarySchool: "",
    elementaryYear: "",
    secondarySchool: "",
    secondaryYear: "",
    colligJss: "",
    jssYear: "",
    seniorSecondary: "",
    seniorSecondaryYear: "",

    // Step 3 - Academic Background
    examNumber: "",
    examYear: "",
    englishLanguage: "",
    mathematics: "",
    integratedScience: "",
    socialStudies: "",
    furthestEducation: "",
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
    <div className="min-h-screen bg-yellow-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h1 className="text-2xl tracking-[-.3px] md:text-3xl font-bold text-gray-900 mb-2">
                New Student Registration
              </h1>

              <p className="text-sm text-gray-600">Step {currentStep} of 3</p>
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
                  className={`text-xs text-[#6B7280] ${currentStep === index + 1 ? "font-semibold text-[#800020]" : ""}`}
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
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    📝
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Personal Information
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date of Birth <span className="text-red-500">*</span>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Present Address <span className="text-red-500">*</span>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Permanent Address (if different){" "}
                      <span className="text-red-500">*</span>
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
                        className="block text-sm font-medium text-gray-700 mb-1"
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
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Local Government Area{" "}
                        <span className="text-red-500">*</span>
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
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        State of Origin <span className="text-red-500">*</span>
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
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Citizenship <span className="text-red-500">*</span>
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Marital Status <span className="text-red-500">*</span>
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
                </div>
              </div>
            )}

            {/* Step 2: Religious & Educational Background */}
            {currentStep === 2 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    📖
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Religious Information
                  </h2>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Religious Belief <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="religiousBelief"
                      value={formData.religiousBelief}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      required
                    >
                      <option value="">Select belief</option>
                      <option value="Christianity">Christianity</option>
                      <option value="Islam">Islam</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Church Name
                    </label>
                    <input
                      type="text"
                      name="churchName"
                      value={formData.churchName}
                      onChange={handleInputChange}
                      placeholder="e.g. St. Mary's Church"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Denominational Affiliation (if different from above)
                    </label>
                    <input
                      type="text"
                      name="denominationalAffiliation"
                      value={formData.denominationalAffiliation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      🎓
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Educational Background
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Elementary School{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="elementarySchool"
                        value={formData.elementarySchool}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Year attended
                        </label>
                        <input
                          type="text"
                          name="elementaryYear"
                          value={formData.elementaryYear}
                          onChange={handleInputChange}
                          placeholder="e.g. 2010-2015"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Secondary School <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="secondarySchool"
                        value={formData.secondarySchool}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Year attended
                        </label>
                        <input
                          type="text"
                          name="secondaryYear"
                          value={formData.secondaryYear}
                          onChange={handleInputChange}
                          placeholder="e.g. 2010-2015"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        College/JSS (Optional)
                      </label>
                      <input
                        type="text"
                        name="colligJss"
                        value={formData.colligJss}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Year attended
                        </label>
                        <input
                          type="text"
                          name="jssYear"
                          value={formData.jssYear}
                          onChange={handleInputChange}
                          placeholder="e.g. 2010-2015"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Senior Secondary <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="seniorSecondary"
                        value={formData.seniorSecondary}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Year attended
                        </label>
                        <input
                          type="text"
                          name="seniorSecondaryYear"
                          value={formData.seniorSecondaryYear}
                          onChange={handleInputChange}
                          placeholder="e.g. 2010-2015"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
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
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    📚
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Academic Background
                  </h2>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Exam Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="examNumber"
                        value={formData.examNumber}
                        onChange={handleInputChange}
                        placeholder="WAEC/NECO"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Exam Year <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="examYear"
                        value={formData.examYear}
                        onChange={handleInputChange}
                        placeholder="e.g. 2022"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Exam Results
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          English Language
                        </label>
                        <input
                          type="text"
                          name="englishLanguage"
                          value={formData.englishLanguage}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Mathematics
                        </label>
                        <input
                          type="text"
                          name="mathematics"
                          value={formData.mathematics}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Integrated Science
                        </label>
                        <input
                          type="text"
                          name="integratedScience"
                          value={formData.integratedScience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Social Studies
                        </label>
                        <input
                          type="text"
                          name="socialStudies"
                          value={formData.socialStudies}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      What is the furthest level of education you attained?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="furthestEducation"
                      value={formData.furthestEducation}
                      onChange={handleInputChange}
                      placeholder="Describe your furthest level of education attained..."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none resize-none"
                      required
                    />
                  </div>

                  <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      id="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      className="mt-1"
                      required
                    />
                    <label
                      htmlFor="acceptTerms"
                      className="text-xs text-gray-700"
                    >
                      I have reviewed and accept the above information to be
                      correct and complies with the admission and registration
                      policy. I promise to uphold the rules and regulations of
                      the school.
                    </label>
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
                className="px-6 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              {currentStep === 3 ? (
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-700 hover:bg-red-800 text-white text-sm font-medium rounded-lg"
                >
                  Submit Application
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded-lg"
                >
                  Next Step
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
