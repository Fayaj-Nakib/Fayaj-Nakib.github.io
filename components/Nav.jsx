import { useState } from 'react'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold">FN</div>
                <div className="text-lg font-semibold">Fayaj Nakib</div>
            </div>
            <div className="hidden md:flex gap-6 items-center text-sm">
                <a href="#projects" className="hover:text-brand-primary transition-colors font-medium">Projects</a>
                <a href="#experience" className="hover:text-brand-primary transition-colors font-medium">Experience</a>
                <a href="#skills" className="hover:text-brand-primary transition-colors font-medium">Skills</a>
                <a href="#education" className="hover:text-brand-primary transition-colors font-medium">Education</a>
                <a href="#contact" className="px-4 py-2 rounded-md border border-transparent bg-brand-primary text-white hover:opacity-90 transition-opacity font-medium">Contact</a>
            </div>
            <button 
                className="md:hidden p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50 border-t">
                    <div className="flex flex-col gap-4 p-6">
                        <a href="#projects" className="hover:text-brand-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>Projects</a>
                        <a href="#experience" className="hover:text-brand-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>Experience</a>
                        <a href="#skills" className="hover:text-brand-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>Skills</a>
                        <a href="#education" className="hover:text-brand-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>Education</a>
                        <a href="#contact" className="px-4 py-2 rounded-md border border-transparent bg-brand-primary text-white hover:opacity-90 transition-opacity text-center font-medium" onClick={() => setIsOpen(false)}>Contact</a>
                    </div>
                </div>
            )}
            </div>
        </nav>
    )
}