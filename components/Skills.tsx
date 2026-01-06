export default function Skills() {
  const skillCategories = [
    {
      category: 'Product & Program Management',
      skills: [
        'Product Management',
        'User Research',
        'Problem Framing',
        'Roadmapping',
        'Funnel Optimization',
        'Metrics & KPI Tracking',
        'System Thinking',
      ],
    },
    {
      category: 'Tools & Analytics',
      skills: ['MS Excel', 'Google Analytics', 'Jira'],
    },
    {
      category: 'UX & Design',
      skills: [
        'Wireframing',
        'UX/UI Principles',
        'Figma',
        'Whimsical',
        'Canva',
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

