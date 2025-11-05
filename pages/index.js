import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="mt-12 border-t py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Fayaj Nakib — Built with Next.js & Tailwind
        </div>
      </footer>
    </div>
  )
}
