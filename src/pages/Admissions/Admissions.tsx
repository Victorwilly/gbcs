export default function Admissions() {
  const admissionSessions = [
    {
      icon: '📅',
      title: 'January Semester',
      color: 'bg-yellow-50 border-yellow-300',
      description: 'Application deadline for January intake sessions. Get started on your academic journey this semester.',
    },
    {
      icon: '📋',
      title: 'August Semester',
      color: 'bg-red-50 border-red-300',
      description: 'Application deadline for August intake sessions. Plan ahead for the mid-year academic program.',
    },
  ]

  const requirements = [
    { icon: '✓', title: 'High School Certificate', description: 'Or equivalent qualification' },
    { icon: '✓', title: 'Academic Transcripts', description: 'Official records required' },
    { icon: '✓', title: 'Personal Statement', description: 'Essay on your calling and goals' },
    { icon: '✓', title: 'Recommendation Letters', description: 'Two academic or pastoral references' },
    { icon: '✓', title: 'Medical Clearance', description: 'Health screening form' },
    { icon: '✓', title: 'Application Fee', description: 'Non-refundable processing fee' },
  ]

  const tuitionPrograms = [
    { program: 'Certificate Program', amount: '₦50k' },
    { program: 'Diploma Program', amount: '₦120k' },
    { program: 'Bachelor\'s Degree', amount: '₦250k' },
    { program: 'Master\'s Program', amount: '₦350k' },
    { program: 'PhD Program', amount: '₦500k' },
    { program: 'Online Programs', amount: '₦80k' },
  ]

  const tuitionBySemester = [
    { program: 'Full-Time', amount: '₦150k' },
    { program: 'Part-Time', amount: '₦90k' },
    { program: 'Weekend Classes', amount: '₦100k' },
    { program: 'Online (Full)', amount: '₦80k' },
    { program: 'Online (Part)', amount: '₦50k' },
  ]

  const readyToApply = [
    { icon: '📝', title: 'Download Application Form', description: 'Get the official admission form' },
    { icon: '💻', title: 'Online Application', description: 'Apply through our portal' },
    { icon: '📧', title: 'Email Application', description: 'Submit via email to admissions' },
    { icon: '☎️', title: 'Contact Admissions', description: 'Speak with our team directly' },
  ]

  return (
    <main>
      {/* Header Section */}
      <section className="bg-linear-to-r from-green-800 via-green-700 to-yellow-600 py-16 md:py-20 px-4 md:px-6 lg:px-8 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Admissions</h1>
          <p className="text-green-50 text-lg">Start your transformative journey with us today</p>
        </div>
      </section>

      {/* Admission Sessions Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Admission Sessions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {admissionSessions.map((session, index) => (
              <div key={index} className={`p-8 rounded-lg border-2 ${session.color} hover:shadow-lg transition`}>
                <div className="text-5xl mb-4">{session.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{session.title}</h3>
                <p className="text-gray-600">{session.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Requirements Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
            General Requirements
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            What you need to know for your application
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-green-600 flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{req.title}</h3>
                    <p className="text-gray-600 text-sm">{req.description}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Tuition & Fees
          </h2>

          {/* Tuition by Program */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white bg-red-900 p-4 rounded-t-lg mb-0">
              Application Form from Each Sem Plan Chosen
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-red-900 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Program</th>
                    <th className="px-6 py-4 text-right font-semibold">Amount (₦)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-yellow-50">
                  {tuitionPrograms.map((item, index) => (
                    <tr key={index} className="hover:bg-yellow-100">
                      <td className="px-6 py-4 text-gray-900">{item.program}</td>
                      <td className="px-6 py-4 text-right text-gray-900 font-semibold">{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tuition by Semester */}
          <div>
            <h3 className="text-2xl font-bold text-white bg-yellow-500 p-4 rounded-t-lg mb-0">
              Tuition Plan (Per Semester)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-yellow-500 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Program</th>
                    <th className="px-6 py-4 text-right font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tuitionBySemester.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900">{item.program}</td>
                      <td className="px-6 py-4 text-right text-red-900 font-semibold">{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-600 mt-4 px-6">
              *Additional fees may apply. Register with the bursar's office for final amounts. Fees are subject to change without prior notice.
            </p>
          </div>
        </div>
      </section>

      {/* Ready to Apply Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Ready to Apply?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {readyToApply.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 text-center hover:shadow-lg transition">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg mr-4 mb-3 md:mb-0">
              Start Application
            </button>
            <button className="px-8 py-3 border-2 border-green-700 text-green-700 hover:bg-green-50 font-semibold rounded-lg">
              Request Information
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
