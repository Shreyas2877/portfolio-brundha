export default function Projects() {
  const projects = [
    {
      title: 'IRCTC User Onboarding',
      description:
        'Analyzed new user onboarding journey and recommended UX improvements to reduce friction.',
      link: 'https://drive.google.com/file/d/1UShHaMjnXvZxmzs8BwJfeNN_uInP3MxO/view?usp=drive_link',
    },
    {
      title: 'Zolo Market Expansion',
      description:
        'Conducted location and metric analysis to support market expansion in Ahmedabad.',
      link: 'https://drive.google.com/file/d/1dC20275Q4uu8aynhClyjQpX9GwXGtH39/view?usp=drive_link',
    },
    {
      title: 'Meesho User Engagement',
      description:
        'Evaluated app features to improve user engagement and retention.',
      link: 'https://drive.google.com/file/d/1dhbvkclV98RXNdQcMB67AUouOzFV3b5u/view?usp=drive_link',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 hover:-translate-y-1 block group border border-gray-700"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors flex-shrink-0 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

