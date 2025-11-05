'use client'

import { motion } from 'framer-motion'

export default function CallToAction() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                    Ready to Start Your Next Project?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
                    Let's collaborate to build something amazing together. I specialize in scalable web applications and production-ready backend systems.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <a 
                        href="#contact" 
                        className="px-6 py-3 rounded-lg bg-brand-primary dark:bg-brand-accent text-white hover:bg-brand-accent dark:hover:bg-blue-500 transition-all duration-300 font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Start a Project
                    </a>
                    <a 
                        href="#projects" 
                        className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-medium flex items-center gap-2"
                    >
                        <span>View My Work</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </motion.div>
        </section>
    )
}

