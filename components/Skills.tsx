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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30"
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


