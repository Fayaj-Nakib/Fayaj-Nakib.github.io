'use client'

import { useSyncExternalStore } from 'react'

function getSnapshot() { return document.documentElement.classList.contains('dark') }
function getServerSnapshot() { return false }
function subscribe(callback) {
    const observer = new MutationObserver(callback)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const sync = () => {
        let saved
        try { saved = localStorage.getItem('theme') } catch {}
        document.documentElement.classList.toggle('dark', saved === 'dark' || (!saved && media.matches))
        callback()
    }
    window.addEventListener('storage', sync)
    media.addEventListener('change', sync)
    return () => {
        observer.disconnect()
        window.removeEventListener('storage', sync)
        media.removeEventListener('change', sync)
    }
}

export default function ThemeToggle() {
    const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
    const toggleTheme = () => {
        const next = !getSnapshot()
        document.documentElement.classList.toggle('dark', next)
        try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch {}
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
