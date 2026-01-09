export default function Certification() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Certification
        </h2>
        <div className="bg-gray-800 rounded-lg shadow-md p-8 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 border border-gray-700">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center border border-primary-500/30">
                <svg
                  className="w-8 h-8 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                NextLeap Product Management Fellowship
              </h3>
              <p className="text-primary-400 font-semibold mb-4">2024</p>
              <p className="text-gray-300 leading-relaxed">
                Hands-on experience in user research, problem discovery, UX
                design, analytics, and system design
              </p>
              <a
                href="https://docs.google.com/document/d/1ihIDDrCQrbnpfdRZpnvfnW14I0rF1vPJYbZmIctUmC4/edit?tab=t.0#heading=h.yyt2ztuz1yhu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-primary-400 hover:text-primary-300 font-medium transition-colors"
              >
                My Product Portfolio
                <svg
                  className="w-4 h-4"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

