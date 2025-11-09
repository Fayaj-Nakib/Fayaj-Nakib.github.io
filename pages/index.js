import dynamic from 'next/dynamic'
import Nav from '../components/Nav'
import Hero from '../components/Hero'

// Lazy load components below the fold for better performance
const WhatIDo = dynamic(() => import('../components/WhatIDo'), { ssr: true })
const Experience = dynamic(() => import('../components/Experience'), { ssr: true })
const Projects = dynamic(() => import('../components/Projects'), { ssr: true })
const TechnicalOverview = dynamic(() => import('../components/TechnicalOverview'), { ssr: true })
const SkillsNew = dynamic(() => import('../components/SkillsNew'), { ssr: true })
const Education = dynamic(() => import('../components/Education'), { ssr: true })
const Certifications = dynamic(() => import('../components/Certifications'), { ssr: true })
const Contact = dynamic(() => import('../components/Contact'), { ssr: true })
const CallToAction = dynamic(() => import('../components/CallToAction'), { ssr: true })

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Nav />
      <main role="main">
        <Hero />
        <WhatIDo />
        <Experience />
        <Projects />
        <TechnicalOverview />
        <SkillsNew />
        <Education />
        <Certifications />
        <Contact />
        <CallToAction />
      </main>
      <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-bold text-brand-primary dark:text-brand-accent">&lt;FN/&gt;</span>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Fayaj Nakib</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Software Engineer specializing in scalable web applications, full-stack development, and production-ready backend systems.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Navigate</h3>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors">Home</a>
                <a href="#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors">Projects</a>
                <a href="#experience" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors">Experience</a>
                <a href="#skills" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors">Skills</a>
                <a href="#contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Connect</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <a href="mailto:nakibfayaj99@gmail.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors">Contact</a>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/Fayaj-Nakib" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors" aria-label="GitHub">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/fayaj-nakib/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="mailto:nakibfayaj99@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors" aria-label="Email">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Fayaj Nakib. All rights reserved.</p>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">Built with React, Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
