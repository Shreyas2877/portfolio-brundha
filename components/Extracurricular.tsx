export default function Extracurricular() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Extracurricular & Interests
        </h2>
        <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-md p-8 border border-gray-700">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-primary-400 mt-1 flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              <p className="text-gray-300 text-lg leading-relaxed">
                <span className="font-semibold text-white">Community & Wellness:</span>{' '}
                Isha Volunteer; Participant in Cyclothons, Walkathon and Event
                initiatives, Yoga practitioner
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary-400 mt-1 flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </span>
              <p className="text-gray-300 text-lg leading-relaxed">
                <span className="font-semibold text-white">Arts & Performance:</span> Folk
                Dance performer – National, State, and District-level
                competitions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


