import dynamic from 'next/dynamic'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import BackToTop from '../components/BackToTop'
import CursorGlow from '../components/CursorGlow'

// Lazy load below-fold components
const WhatIDo          = dynamic(() => import('../components/WhatIDo'),          { ssr: true })
const Experience       = dynamic(() => import('../components/Experience'),       { ssr: true })
const Projects         = dynamic(() => import('../components/Projects'),         { ssr: true })
const SkillsNew        = dynamic(() => import('../components/SkillsNew'),        { ssr: true })
const Education        = dynamic(() => import('../components/Education'),        { ssr: true })
const Certifications   = dynamic(() => import('../components/Certifications'),   { ssr: true })
const Contact          = dynamic(() => import('../components/Contact'),          { ssr: true })
const CallToAction     = dynamic(() => import('../components/CallToAction'),     { ssr: true })

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-300">
      <CursorGlow />
      <Nav />

      <main role="main">
        {/* Hero */}
        <Hero />

        {/* Alt bg: What I Do */}
        <div className="bg-[#F1F5F9] dark:bg-[#0B1120]/60">
          <WhatIDo />
        </div>

        {/* Experience */}
        <Experience />

        {/* Alt bg: Projects */}
        <div className="bg-[#F1F5F9] dark:bg-[#0B1120]/60">
          <Projects />
        </div>

        {/* Alt bg: Skills */}
        <div className="bg-[#F1F5F9] dark:bg-[#0B1120]/60">
          <SkillsNew />
        </div>

        {/* Education */}
        <Education />

        {/* Alt bg: Certifications + Awards */}
        <div className="bg-[#F1F5F9] dark:bg-[#0B1120]/60">
          <Certifications />
        </div>

        {/* Contact */}
        <Contact />

        {/* Call To Action */}
        <CallToAction />
      </main>

      <BackToTop />

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold text-brand-primary dark:text-brand-accent font-mono">&lt;FN/&gt;</span>
                <span className="font-bold text-gray-900 dark:text-white">Fayaj Nakib</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
                Software Engineer specializing in scalable web applications and production-ready backend systems.
              </p>
              <div className="flex gap-2.5 mt-4">
                {[
                  { href: 'https://github.com/Fayaj-Nakib', label: 'GitHub', path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', fill: true },
                  { href: 'https://www.linkedin.com/in/fayajnakib/', label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', fill: true },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent hover:border-brand-primary/40 dark:hover:border-brand-accent/40 transition-all">
                    <svg className="w-3.5 h-3.5" fill={s.fill ? 'currentColor' : 'none'} viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigate */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">Navigate</h3>
              <div className="flex flex-col gap-2.5">
                {[
                  { href: '#',               label: 'Home' },
                  { href: '#projects',       label: 'Projects' },
                  { href: '#experience',     label: 'Experience' },
                  { href: '#skills',         label: 'Skills' },
                  { href: '#certifications', label: 'Certifications' },
                  { href: '#contact',        label: 'Contact' },
                ].map(l => (
                  <a key={l.href} href={l.href} className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors w-fit">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">Contact</h3>
              <div className="flex flex-col gap-2.5">
                <a href="mailto:fayaj.nakib.dev@gmail.com" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors w-fit">
                  fayaj.nakib.dev@gmail.com
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-400">Dhaka, Bangladesh</span>
                <a
                  href="/Md_Fayaj_Nakib.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary dark:text-brand-accent hover:underline w-fit"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Resume
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-100 dark:border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-400 dark:text-gray-500">
              &copy; {new Date().getFullYear()} Fayaj Nakib. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Built with Next.js &amp; Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
