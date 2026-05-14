import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [progress, setProgress] = useState(0)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            setScrolled(scrollY > 20)
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const sectionIds = ['projects', 'experience', 'skills', 'education', 'certifications']
        const observers = []

        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (!el) return
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
                { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
            )
            obs.observe(el)
            observers.push(obs)
        })

        return () => observers.forEach((o) => o.disconnect())
    }, [])

    const navLinks = [
        { href: '#projects',       label: 'Projects',       id: 'projects' },
        { href: '#experience',     label: 'Experience',     id: 'experience' },
        { href: '#skills',         label: 'Skills',         id: 'skills' },
        { href: '#education',      label: 'Education',      id: 'education' },
        { href: '#certifications', label: 'Certifications', id: 'certifications' },
    ]

    const linkClass = (id) =>
        `px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-1 ${
            activeSection === id
                ? 'text-brand-primary dark:text-brand-accent bg-blue-50 dark:bg-blue-950/30'
                : 'text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent hover:bg-blue-50 dark:hover:bg-blue-950/30'
        }`

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm'
                    : 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-900'
            }`}
        >
            {/* Scroll progress bar */}
            <div
                className="absolute bottom-0 left-0 h-[2px] bg-brand-accent transition-all duration-100"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={Math.round(progress)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Page scroll progress"
            />

            <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 rounded-lg"
                    aria-label="Home — Fayaj Nakib"
                >
                    <span className="text-lg font-bold text-brand-primary dark:text-brand-accent group-hover:opacity-80 transition-opacity font-mono">
                        &lt;FN/&gt;
                    </span>
                    <span className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                        Fayaj Nakib
                    </span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={linkClass(link.id)}>
                            {link.label}
                        </a>
                    ))}

                    <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-2" />

                    <a
                        href="/Md_Fayaj_Nakib.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 hover:border-brand-primary dark:hover:border-brand-accent hover:text-brand-primary dark:hover:text-brand-accent transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-1"
                    >
                        Resume
                    </a>
                    <a
                        href="#contact"
                        className="ml-1 px-4 py-1.5 rounded-lg bg-brand-primary dark:bg-brand-accent text-white text-sm font-semibold hover:bg-brand-accent dark:hover:bg-blue-400 hover:-translate-y-px shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent focus:ring-offset-1"
                    >
                        Contact
                    </a>
                    <ThemeToggle />
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isOpen}
                >
                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-xl overflow-hidden"
                        role="menu"
                        aria-label="Navigation menu"
                    >
                        <div className="flex flex-col p-4 gap-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04, duration: 0.2 }}
                                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                        activeSection === link.id
                                            ? 'text-brand-primary dark:text-brand-accent bg-blue-50 dark:bg-blue-950/30'
                                            : 'text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent hover:bg-blue-50 dark:hover:bg-blue-950/30'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <div className="h-px bg-gray-100 dark:bg-gray-800 my-2" />
                            <a
                                href="/Md_Fayaj_Nakib.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-center text-gray-700 dark:text-gray-300 hover:border-brand-primary dark:hover:border-brand-accent hover:text-brand-primary dark:hover:text-brand-accent transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                Resume
                            </a>
                            <a
                                href="#contact"
                                className="px-4 py-2.5 rounded-lg bg-brand-primary dark:bg-brand-accent text-white text-sm font-semibold text-center hover:opacity-90 transition-opacity"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </a>
                            <div className="pt-1">
                                <ThemeToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
