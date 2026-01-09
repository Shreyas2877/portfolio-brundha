export default function WorkExperience() {
  const experiences = [
    {
      company: 'Nivabupa',
      role: 'Digital Partnership Manager',
      period: '2024 - Current',
      achievements: [
        'Owned end-to-end digital partner portfolio, driving 55% business growth through operational optimization, partner enablement, and escalation management.',
        'Led customer journey deep-dives using user research and funnel analysis, improving policy persistency by 20%+ through customer-centric enhancements.',
        'Identified and closed 30% cancellation leakage by launching targeted feature improvements and integrating underwriting logic directly into the digital flow.',
        'Designed and executed onboarding for 5 new digital partners, covering legal agreements, operational workflows, product integration, and training, ensuring on-time go-lives.',
        'Acted as single-threaded owner for partner relationships, conducting performance reviews, resolving blockers, and improving partner productivity and satisfaction.',
        'Recognized as Top Performer of the Year – 2025 for consistently delivering high-impact outcomes.',
      ],
    },
    {
      company: 'TATA AIG',
      role: 'Product & Strategy',
      period: '2022 - 2024',
      achievements: [
        'Owned delivery of a D2C insurance product launch, simplifying UX and customer flows to improve conversion rate from 2% to 10%.',
        'Defined product requirements, collaborated with engineering and business teams, and launched custom features that reduced manual effort and accelerated sales closures.',
        'Drove cross-functional execution across 40+ stakeholders, including product, engineering, underwriting, sales, and external partners, ensuring timely delivery.',
        'Conducted root-cause analysis on critical journey defects and implemented scalable process and feature fixes, improving efficiency for 1,000+ sales representatives.',
        'Partnered with leadership to translate business goals into executable product and operational roadmaps.',
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-8 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 border border-gray-700"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-primary-400 font-semibold mt-1">
                    {exp.company}
                  </p>
                </div>
                <p className="text-gray-400 font-medium mt-2 md:mt-0">
                  {exp.period}
                </p>
              </div>
              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-primary-400 mt-1.5 flex-shrink-0">
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
                    <span className="leading-relaxed">{achievement}</span>
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


