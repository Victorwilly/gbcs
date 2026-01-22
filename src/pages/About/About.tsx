export default function About() {
  const institutionalGoals = [
    { title: 'Students', description: 'Develop spiritually mature and academically excellent graduates' },
    { title: 'Believers', description: 'Foster deepening faith and Christian commitment' },
    { title: 'Leaders', description: 'Equip leaders for meaningful service in the church and society' },
  ]

  const philosophy = [
    { icon: '📚', title: 'Content', description: 'Scriptural biblical and theological foundations' },
    { icon: '⚙️', title: 'Application', description: 'Practically applicable to life and ministry' },
    { icon: '💭', title: 'Reflection', description: 'Encouraging personal integration of learning' },
  ]

  const distinctives = [
    { icon: '📖', title: 'Bible-Based', description: 'Scripture at the foundation of all teaching and life' },
    { icon: '✝️', title: 'Christ-Centered', description: 'Focus on Jesus in all we study, believe, and serve' },
    { icon: '👥', title: 'People-Oriented', description: 'Ministry-focused training and servant leadership' },
  ]

  const aims = [
    { icon: '1️⃣', description: 'To prepare men and women for effective Christian service' },
    { icon: '2️⃣', description: 'To provide systematic and intellectual mastery of Scripture and doctrine' },
    { icon: '3️⃣', description: 'To equip servants, leaders, evangelists, missionaries, pastors, and teachers for ministry' },
    { icon: '4️⃣', description: 'To develop spiritually mature leaders among Christians denominations' },
  ]

  const accreditations = [
    {
      title: 'International Affiliations',
      items: [
        'Accredits from various international bodies',
        'Partnership with mission organizations across continents',
        'Recognition from professional theological associations',
        'Collaboration with leading theological institutions Worldwide',
      ],
    },
    {
      title: 'Local Affiliation',
      items: [
        'Affiliated with national Christian organizations',
        'Recognized by Department of Education, State Agents',
        'Partnership with local church denominations',
        'Engagement with community development initiatives',
      ],
    },
  ]

  return (
    <main>
      {/* Header Section */}
      <section className="bg-linear-to-r from-red-900 to-red-700 py-12 md:py-16 px-4 md:px-6 lg:px-8 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">About GBIS</h1>
          <p className="text-red-100 text-lg">Training the Whole Man for the Whole Man since 1994</p>
        </div>
      </section>

      {/* Who We Are & Institutional Goals */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-linear-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Who We Are */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <p className="text-gray-600 text-lg mb-4">
                Grace Bible Institute & Seminary is a faith-based institution devoted to the integration of biblical theology and practical ministry training.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Established in 1994 with a vision to produce Bible-based leaders and workers for the body of Christ in Africa and beyond, GBIS has maintained its commitment to training Whole Men for the Whole Man.
              </p>
              <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded">
                LEARN MORE
              </button>
            </div>

            {/* Institutional Goals */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Institutional Goals</h2>
              <div className="space-y-6">
                {institutionalGoals.map((goal, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-pink-200 rounded-full shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{goal.title}</h3>
                      <p className="text-gray-600 text-sm">{goal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-pink-50 p-8 rounded-lg border border-pink-200">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600">
                To be a center of excellence in theological education, producing leaders of character and competence committed to spiritual transformation and societal development.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600">
                To provide comprehensive biblical education and practical ministry training that develops spiritually mature, intellectually competent, and socially responsible leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Educational Philosophy</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-lg">
            Our approach to education integrates three essential pillars
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Distinctives */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-yellow-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Educational Distinctives</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {distinctives.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 text-center hover:shadow-lg transition">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aims & Objectives */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Aims & Objectives</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aims.map((aim, index) => (
              <div key={index} className="flex gap-6 items-start bg-yellow-50 p-6 rounded-lg">
                <div className="text-3xl shrink-0">{aim.icon}</div>
                <p className="text-gray-600 text-lg">{aim.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation & Affiliations */}
      <section className="bg-linear-to-r from-red-900 to-red-700 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Accreditation & Affiliations</h2>
          <p className="text-center text-red-100 max-w-2xl mx-auto mb-12 text-lg">
            GBIS is recognized and affiliated with various local, national, and international organizations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {accreditations.map((section, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-3xl">📌</span>
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3 items-start">
                      <span className="text-yellow-400 text-xl mt-1">✓</span>
                      <span className="text-red-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
