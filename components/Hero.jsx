'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import TypingEffect from './TypingEffect'
import { useState } from 'react'

export default function Hero() {
    const roles = ['Full-stack Developer', 'Software Engineer', 'Problem Solver']
    const [imageError, setImageError] = useState(false)
    
    return (
        <header className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left Column - Profile & Info */}
                <div className="order-2 md:order-1">
                    <motion.div
                        initial={{ y: 10, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.05 }}
                        className="mb-8"
                    >
                        {/* Profile Picture with Availability Badge */}
                        <div className="relative inline-block mb-6">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                className="relative"
                            >
                                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800 ring-offset-4 ring-offset-gray-50 dark:ring-offset-gray-900 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20">
                                    {!imageError ? (
                                        <Image
                                            src="/profile.jpg"
                                            alt="Fayaj Nakib"
                                            fill
                                            className="object-cover"
                                            priority
                                            sizes="(max-width: 768px) 128px, 160px"
                                            unoptimized
                                            onError={() => setImageError(true)}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-white dark:text-gray-200 font-bold text-2xl bg-gradient-to-br from-brand-primary to-brand-accent">
                                            FN
                                        </div>
                                    )}
                                </div>
                                {/* Availability Badge */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3, type: "spring" }}
                                    className="absolute -bottom-2 -right-2 px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white text-xs font-semibold rounded-full shadow-lg"
                                >
                                    Available for hire
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Social Icons */}
                        <motion.div 
                            initial={{ y: 10, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ delay: 0.2 }}
                            className="flex gap-4 mb-8"
                        >
                            <a 
                                href="https://github.com/Fayaj-Nakib" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-brand-primary dark:hover:text-brand-accent transition-all"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/fayaj-nakib/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-brand-primary dark:hover:text-brand-accent transition-all"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a 
                                href="mailto:nakibfayaj99@gmail.com" 
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-brand-primary dark:hover:text-brand-accent transition-all"
                                aria-label="Email"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </motion.div>

                        {/* Greeting & Name */}
                        <motion.div
                            initial={{ y: 10, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ delay: 0.15 }}
                            className="mb-4"
                        >
                            <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2">
                                Hello, I'm
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-3">
                                <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent dark:from-brand-accent dark:via-blue-400 dark:to-brand-accent">
                                    Fayaj Nakib
                                </span>
                            </h1>
                            <div className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
                                And I'm a <TypingEffect words={roles} speed={100} />
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p 
                            initial={{ y: 10, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ delay: 0.25 }}
                            className="mb-8 max-w-xl text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
                        >
                            Software Engineer specializing in scalable web applications, full-stack development, and production-ready backend systems. I build with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono text-brand-primary dark:text-brand-accent">Next.js</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono text-brand-primary dark:text-brand-accent">Laravel</code>, and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono text-brand-primary dark:text-brand-accent">PostgreSQL</code>.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div 
                            initial={{ y: 10, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ delay: 0.35 }}
                            className="flex gap-4 flex-wrap"
                        >
                            <a 
                                href="#contact" 
                                className="px-6 py-3 rounded-lg bg-brand-primary dark:bg-brand-accent text-white hover:bg-brand-accent dark:hover:bg-blue-500 transition-all duration-300 font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                Contact Me
                            </a>
                            <a 
                                href="#projects" 
                                className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-medium"
                            >
                                View My Work
                            </a>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div 
                            initial={{ y: 10, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ delay: 0.45 }}
                            className="mt-12 md:hidden flex flex-col items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                        >
                            <span>Scroll to explore</span>
                            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Column - Terminal */}
                <div className="order-1 md:order-2 flex flex-col items-center md:items-start md:justify-center">
                    {/* Terminal Window */}
                    <motion.div 
                        initial={{ y: 10, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.3 }}
                        className="w-full md:w-auto md:max-w-md p-6 bg-gray-900 dark:bg-gray-950 rounded-lg border border-gray-800 dark:border-gray-700 font-mono shadow-2xl"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-gray-400 text-sm ml-2">terminal</span>
                        </div>
                        
                        {/* Terminal Content */}
                        <div className="space-y-2 text-gray-300 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">&gt;</span>
                                <span>Fayaj Nakib</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">&gt;</span>
                                <span>Specializing in Full-stack Development</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">&gt;</span>
                                <span>Next.js | Laravel | PostgreSQL | React</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">&gt;</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Indicator */}
                    <motion.div 
                        initial={{ y: 10, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.5 }}
                        className="mt-6 text-center md:text-left"
                    >
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                            &lt;&gt; 3+ years of coding experience
                        </div>
                    </motion.div>
                </div>
            </div>
        </header>
    )
}