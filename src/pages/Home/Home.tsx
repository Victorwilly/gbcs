export default function Home() {
  const stats = [
    { number: '30+', label: 'Years of Academic Excellence' },
    { number: '98%', label: 'Student Success Rate' },
    { number: '1,500+', label: 'Alumni Worldwide' },
    { number: '15+', label: 'Degree Programs' },
  ]

  const missions = [
    { title: 'Our Vision', icon: '👁️' },
    { title: 'Our Mission', icon: '🎯' },
    { title: 'Core Values', icon: '⭐' },
    { title: 'Our Commitments', icon: '✋' },
  ]

  const programs = [
    { name: 'Certificate Programs', description: 'Short-term focused training' },
    { name: 'Diploma Programs', description: 'Comprehensive professional training' },
    { name: 'Undergraduate Degree', description: 'Bachelor of Theology' },
    { name: 'Postgraduate Programs', description: 'Advanced theological studies' },
  ]

  const admissionPaths = [
    { title: 'Direct Entry', description: 'Start immediately' },
    { title: 'Foundation Program', description: 'Prepare for studies' },
    { title: 'Special Program', description: 'Customize your path' },
    { title: 'Online Learning', description: 'Study remotely' },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-480 mx-auto">
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-gray-300 h-48 md:h-64 rounded-lg"></div>
            <div className="bg-gray-300 h-48 md:h-64 rounded-lg"></div>
            <div className="bg-gray-300 h-48 md:h-64 rounded-lg"></div>
          </div>

          {/* Hero Content */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Training the <span className="text-red-600">Whole Man</span> for the <span className="text-red-600">Whole Man</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Experience transformative education that develops your spiritual, intellectual, and professional potential. Our holistic approach prepares you for meaningful service and leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded">
                Explore Programs
              </button>
              <button className="px-6 py-3 border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <p className="text-gray-700 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-linear-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">About Grace Bible Institute & Seminary</h2>
          <p className="text-gray-600 text-center text-base md:text-lg max-w-3xl mx-auto mb-8">
            Founded on the principles of biblical excellence, Grace Bible Institute & Seminary has been transforming lives through rigorous theological education and practical ministry training. We believe in equipping leaders who are committed to serving God and humanity with integrity, compassion, and wisdom.
          </p>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((mission, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{mission.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{mission.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Academic Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="bg-gray-300 h-40"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{program.name}</h3>
                  <p className="text-gray-600 text-sm">{program.description}</p>
                  <button className="mt-4 text-red-600 hover:text-red-700 font-semibold text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Spotlight Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-linear-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Faculty Spotlight</h2>
          <div className="bg-gray-700 h-64 md:h-80 rounded-lg"></div>
        </div>
      </section>

      {/* Start Your Journey Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Start Your Journey</h2>
          <p className="text-lg text-red-100 mb-12 max-w-2xl">
            Ready to transform your life through faith-based education? Explore our admission pathways and find the program that fits your calling.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {admissionPaths.map((path, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition">
                <h3 className="text-lg font-semibold mb-2">{path.title}</h3>
                <p className="text-red-100 text-sm">{path.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-white text-red-900 font-semibold rounded hover:bg-red-50">
              Apply Now
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:bg-opacity-10">
              Request Information
            </button>
          </div>
        </div>
      </section>

      {/* Student Portal Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Portal Image */}
            <div className="bg-gray-400 h-64 md:h-80 rounded-lg"></div>

            {/* Portal Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Student Portal Access</h2>
              <p className="text-gray-600 text-lg mb-8">
                Access your grades, course materials, and communicate with instructors all in one place.
              </p>
              <div className="space-y-4">
                <button className="w-full px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded">
                  Student Login
                </button>
                <button className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded">
                  Faculty Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
