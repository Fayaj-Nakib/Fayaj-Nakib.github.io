'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
        setIsDark(shouldBeDark)
        setMounted(true)
        if (shouldBeDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = !isDark
        setIsDark(newTheme)
        if (newTheme) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    // Render placeholder during SSR to avoid hydration mismatch
    if (!mounted) {
        return <div className="w-[52px] h-[26px] rounded-full bg-gray-200 dark:bg-gray-700" />
    }

    return (
        <button
            onClick={toggleTheme}
            role="switch"
            aria-checked={isDark}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="relative inline-flex items-center w-[52px] h-[26px] rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-1 flex-shrink-0"
        >
            {/* Sliding pill */}
            <span
                className={`absolute top-[3px] left-[3px] w-5 h-5 rounded-full bg-white dark:bg-brand-accent shadow-sm transition-transform duration-300 ${
                    isDark ? 'translate-x-[26px]' : 'translate-x-0'
                } flex items-center justify-center`}
            >
                {isDark ? (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                ) : (
                    <svg className="w-3 h-3 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                )}
            </span>
        </button>
    )
}
