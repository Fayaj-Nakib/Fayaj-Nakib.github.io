'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    key="back-to-top"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.25 }}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-brand-primary dark:bg-brand-accent text-white shadow-lg shadow-brand-primary/30 dark:shadow-brand-accent/20 hover:bg-brand-accent dark:hover:bg-blue-400 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    )
}
