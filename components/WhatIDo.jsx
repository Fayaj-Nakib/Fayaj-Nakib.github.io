'use client'

import { motion } from 'framer-motion'

export default function WhatIDo() {
    const services = [
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Full-stack Web Development',
            description: 'Build scalable, production-ready web applications from UI to database using modern frameworks and best practices.',
            tags: ['Next.js', 'Laravel', 'React', 'PostgreSQL'],
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            title: 'Backend Architecture',
            description: 'Design and implement robust REST APIs and microservices built to handle high traffic with security and reliability.',
            tags: ['REST APIs', 'PostgreSQL', 'Laravel', 'Node.js'],
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'CI/CD & DevOps',
            description: 'Automated deployment pipelines and Linux VPS infrastructure for consistent, zero-downtime production releases.',
            tags: ['GitHub Actions', 'Docker', 'Linux', 'Vercel'],
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: 'Database Design & Optimization',
            description: 'Efficient schemas, query optimization, and indexing strategies for fast and reliable data operations.',
            tags: ['PostgreSQL', 'MySQL', 'Database Design', 'SQL'],
        },
    ]

    return (
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Section header */}
                <div className="mb-12">
                    <span className="section-label">01 &nbsp;·&nbsp; Services</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        What I Do<span className="text-brand-accent">.</span>
                    </h2>
                    <p className="mt-3 text-gray-500 dark:text-gray-400 text-base max-w-2xl">
                        Specialized services and solutions I deliver to bring your ideas to production.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08, duration: 0.5 }}
                            className="group relative p-6 bg-white dark:bg-gray-800/60 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-[3px] border-l-brand-accent overflow-hidden"
                        >
                            {/* Decorative background number */}
                            <div className="absolute -bottom-3 right-3 text-[88px] font-black leading-none select-none pointer-events-none text-gray-100 dark:text-gray-700/50 group-hover:text-blue-100 dark:group-hover:text-blue-900/40 transition-colors duration-300">
                                {String(idx + 1).padStart(2, '0')}
                            </div>

                            {/* Icon */}
                            <div className="relative w-10 h-10 mb-4 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/50 text-brand-primary dark:text-brand-accent border border-blue-100 dark:border-blue-900/40 group-hover:bg-brand-primary dark:group-hover:bg-brand-accent group-hover:text-white dark:group-hover:text-white group-hover:border-transparent transition-all duration-300">
                                {service.icon}
                            </div>

                            <h3 className="relative font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="relative text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                                {service.description}
                            </p>

                            <div className="relative flex flex-wrap gap-1.5">
                                {service.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2.5 py-1 text-xs bg-gray-50 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 rounded-lg font-medium border border-gray-200 dark:border-gray-600"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
