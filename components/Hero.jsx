import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
    return (
        <header className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <motion.h1 
                        initial={{ y: 10, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.05 }} 
                        className="text-4xl md:text-5xl font-extrabold leading-tight"
                    >
                        Fayaj Nakib
                        <span className="block text-brand-accent text-2xl font-medium mt-2">Full-stack Software Engineer</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ y: 10, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.15 }}
                        className="mt-6 max-w-xl text-gray-700"
                    >
                        I build scalable web applications with Next.js, Laravel and PostgreSQL. I ship production-ready features, automate deployments, and optimize backend performance.
                    </motion.p>

                    <motion.div 
                        initial={{ y: 10, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.25 }}
                        className="mt-6 flex gap-4 flex-wrap"
                    >
                        <a 
                            href="/Md_Fayaj_Nakib.pdf" 
                            download 
                            className="px-6 py-3 rounded-lg bg-brand-primary text-white hover:opacity-90 transition-all duration-200 font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Resume
                        </a>
                        <a 
                            href="#projects" 
                            className="px-6 py-3 rounded-lg border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200 font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5"
                        >
                            See Projects
                        </a>
                    </motion.div>

                    <motion.div 
                        initial={{ y: 10, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.35 }}
                        className="mt-6 flex gap-3 text-sm text-gray-600 flex-wrap items-center"
                    >
                        <div className="flex items-center gap-1">📍 Dhaka, Bangladesh</div>
                        <div>•</div>
                        <div className="flex items-center gap-1">💼 Open to remote roles</div>
                    </motion.div>

                    <motion.div 
                        initial={{ y: 10, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.45 }}
                        className="mt-6 flex gap-4 items-center"
                    >
                        <a 
                            href="https://github.com/Fayaj-Nakib" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-brand-primary transition-colors"
                            aria-label="GitHub"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/fayaj-nakib/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-brand-primary transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a 
                            href="mailto:nakibfayaj99@gmail.com" 
                            className="text-gray-600 hover:text-brand-primary transition-colors"
                            aria-label="Email"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </motion.div>
                </div>

                <div className="flex flex-col items-center md:items-end gap-6">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white ring-offset-4 ring-offset-gray-50">
                            <Image
                                src="/profile1.jpg"
                                alt="Fayaj Nakib - Full-stack Software Engineer"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 256px, 320px"
                            />
                        </div>
                        {/* Decorative gradient overlay */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 pointer-events-none"></div>
                    </motion.div>

                    {/* Highlights Card */}
                    <motion.div 
                        initial={{ y: 10, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.3 }}
                        className="w-full md:w-auto p-6 bg-white rounded-2xl shadow-md"
                    >
                        <div className="text-sm text-gray-600 font-medium">Highlights</div>
                        <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                            <li>• Built production apps with Next.js & Laravel</li>
                            <li>• Deployed CI/CD pipelines on GitHub Actions</li>
                            <li>• Research: I-SORT IoT product sorting robot</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </header>
    )
}