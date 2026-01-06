export default function Education() {
  const education = [
    {
      degree: 'MBA – Marketing',
      institution: 'Cardiff Metropolitan University | Universal Business School',
      period: '2020 – 2022',
      highlights: [
        'Brand Ambassador, Campus Reporter, Class Representative',
        'Led brand marketing initiatives and live projects',
      ],
    },
    {
      degree: 'BBM – Business Administration',
      institution: 'Davan Institute of Advanced Management Studies',
      period: '2016 – 2019',
      highlights: [
        'Merit Scholarship recipient',
        'Recognized for a high-impact Social Entrepreneurship project',
        'Led college-level marketing and engagement events',
      ],
    },
  ]

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-primary-50 to-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-primary-600 font-semibold mt-1">
                    {edu.institution}
                  </p>
                </div>
                <p className="text-gray-600 font-medium mt-2 md:mt-0">
                  {edu.period}
                </p>
              </div>
              <ul className="space-y-2 mt-4">
                {edu.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-primary-600 mt-1.5 flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

