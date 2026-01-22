export default function Programs() {
  const programCards = [
    {
      icon: '📜',
      title: 'Certificate Programs',
      color: 'bg-blue-50 border-blue-200',
      items: [
        'Biblical Studies Certificate',
        'Christian Leadership Certificate',
        'Completing 3 courses in major areas of Study',
      ],
    },
    {
      icon: '🎓',
      title: 'Diploma Programs',
      color: 'bg-green-50 border-green-200',
      items: [
        'Diploma in Theology',
        'Diploma in Christian Leadership',
        'Completing 9 semesters and Ministry Studies',
      ],
    },
    {
      icon: '🏫',
      title: 'Undergraduate Programs',
      color: 'bg-purple-50 border-purple-200',
      items: [
        'Bachelor of Theology',
        'Bachelor of Ministry',
        'Completing 8 semesters and Field Ministry',
      ],
    },
    {
      icon: '📚',
      title: 'Postgraduate Programs',
      color: 'bg-yellow-50 border-yellow-200',
      items: [
        'Master of Theology',
        'Master of Divinity',
        'Doctoral Program and Advanced Degrees',
      ],
    },
  ]

  const studyModes = [
    {
      icon: '⏱️',
      title: 'Full-Time',
      description: 'Immerse yourself in comprehensive education with on-campus residency and intensive learning programs',
    },
    {
      icon: '🕐',
      title: 'Part-Time',
      description: 'Flexible schedule for working professionals and students with other commitments',
    },
    {
      icon: '💻',
      title: 'Distance Learning',
      description: 'Study from anywhere in the world while maintaining quality and rigorous academic standards',
    },
  ]

  const wycliffePrograms = [
    { program: 'Bachelor Degree', duration: '2 Years', tuition: 'NGN,000 / year' },
    { program: "Master's Programs", duration: '2 Years', tuition: 'NGN,000 / year' },
    { program: "Bachelor's Degree", duration: '4 Years', tuition: 'NGN,000 / year' },
    { program: 'PhD in Education', duration: '1 Year', tuition: 'NGN,000 / year' },
  ]

  return (
    <main>
      {/* Header Section */}
      <section className="bg-linear-to-r from-red-900 to-red-700 py-12 md:py-16 px-4 md:px-6 lg:px-8 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Academic Programs
          </h1>
          <p className="text-red-100 text-lg">
            Comprehensive theological training for every level of ministry service
          </p>
        </div>
      </section>

      {/* Program Cards Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programCards.map((program, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 ${program.color} hover:shadow-lg transition`}
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <ul className="space-y-2">
                  {program.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Study Modes Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">
            Flexible Study Modes
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Choose the learning format to suit your schedule
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studyModes.map((mode, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 text-center hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{mode.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {mode.title}
                </h3>
                <p className="text-gray-600">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wycliffe University Programs Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Wycliffe University Programs
          </h2>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-red-900 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Program</th>
                  <th className="px-6 py-4 text-left font-semibold">Duration</th>
                  <th className="px-6 py-4 text-left font-semibold">Tuition Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {wycliffePrograms.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">{item.program}</td>
                    <td className="px-6 py-4 text-gray-600">{item.duration}</td>
                    <td className="px-6 py-4 text-gray-600">{item.tuition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-red-900 to-red-700 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Start your transformation and join thousands of our alumni making a difference worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded">
              Unlock Admission Process
            </button>
            <button className="px-8 py-3 bg-white text-red-900 hover:bg-gray-100 font-semibold rounded">
              Contact Admission Office
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
