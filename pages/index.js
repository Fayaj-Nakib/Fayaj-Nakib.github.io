import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer className="mt-16 border-t border-gray-200 py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Fayaj Nakib — Built with Next.js & Tailwind CSS</p>
          <p className="mt-2 text-xs text-gray-500">Full-stack Software Engineer based in Dhaka, Bangladesh</p>
        </div>
      </footer>
    </div>
  )
}
