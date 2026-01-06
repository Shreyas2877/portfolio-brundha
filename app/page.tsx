import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Certification from '@/components/Certification'
import Extracurricular from '@/components/Extracurricular'
import Projects from '@/components/Projects'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Certification />
      <Education />
      <Projects />
      <Extracurricular />
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Brundha S V. All rights reserved.
        </p>
      </footer>
    </main>
  )
}

