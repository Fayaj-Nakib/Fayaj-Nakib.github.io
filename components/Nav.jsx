import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    const navLinks = [
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#skills', label: 'Skills' },
        { href: '#education', label: 'Education' },
        { href: '#certifications', label: 'Certifications' }
    ]
    
    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-md' 
                : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm'
        }`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">
                <a href="#" className="flex items-center gap-2 group" aria-label="Home - Fayaj Nakib">
                    <div className="text-xl font-bold text-brand-primary dark:text-brand-accent group-hover:text-brand-accent dark:group-hover:text-blue-400 transition-colors">
                        &lt;FN/&gt;
                    </div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                        Fayaj Nakib
                    </div>
                </a>
                
                <div className="hidden md:flex gap-1 items-center">
                    {navLinks.map((link) => (
                        <a 
                            key={link.href}
                            href={link.href} 
                            className="px-4 py-2 rounded-lg hover:text-brand-primary dark:hover:text-brand-accent hover:bg-brand-primary/5 dark:hover:bg-brand-accent/10 transition-all duration-200 font-medium text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent focus:ring-offset-2"
                            aria-label={`Navigate to ${link.label} section`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a 
                        href="/Md_Fayaj_Nakib.pdf" 
                        download="Md_Fayaj_Nakib.pdf"
                        className="ml-2 px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent focus:ring-offset-2"
                        aria-label="Download resume PDF"
                    >
                        Resume
                    </a>
                    <a 
                        href="#contact" 
                        className="ml-2 px-5 py-2 rounded-lg bg-brand-primary dark:bg-brand-accent text-white hover:bg-brand-accent dark:hover:bg-blue-500 transition-all duration-200 font-semibold text-sm hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent focus:ring-offset-2"
                        aria-label="Navigate to contact section"
                    >
                        Contact
                    </a>
                    <ThemeToggle />
                </div>
                
                <button 
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                >
                    <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
                
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-xl md:hidden z-50 border-t border-gray-200 dark:border-gray-800 animate-in slide-in-from-top duration-200" role="menu" aria-label="Navigation menu">
                        <div className="flex flex-col p-4">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.href}
                                    href={link.href} 
                                    className="px-4 py-3 rounded-lg hover:text-brand-primary dark:hover:text-brand-accent hover:bg-brand-primary/5 dark:hover:bg-brand-accent/10 transition-colors font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent"
                                    onClick={() => setIsOpen(false)}
                                    aria-label={`Navigate to ${link.label} section`}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a 
                                href="/Md_Fayaj_Nakib.pdf" 
                                download="Md_Fayaj_Nakib.pdf"
                                className="mt-2 mx-4 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-center font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent"
                                onClick={() => setIsOpen(false)}
                                aria-label="Download resume PDF"
                            >
                                Resume
                            </a>
                            <a 
                                href="#contact" 
                                className="mt-2 mx-4 px-4 py-3 rounded-lg bg-brand-primary dark:bg-brand-accent text-white hover:opacity-90 transition-opacity text-center font-semibold focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent"
                                onClick={() => setIsOpen(false)}
                                aria-label="Navigate to contact section"
                            >
                                Contact
                            </a>
                            <div className="mt-2 mx-4">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}