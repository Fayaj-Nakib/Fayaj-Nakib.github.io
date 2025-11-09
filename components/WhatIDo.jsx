'use client'

import { motion } from 'framer-motion'

export default function WhatIDo() {
    const services = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Full-stack Web Development',
            description: 'Build scalable web applications using modern frameworks and best practices.',
            metric: 'Production-ready deployments',
            metricIcon: 'fa-solid fa-bolt',
            tags: ['Next.js', 'Laravel', 'React', 'PostgreSQL']
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            title: 'Backend Architecture',
            description: 'Design and implement robust APIs and microservices that handle high traffic.',
            metric: 'Scalable & secure APIs',
            metricIcon: 'fa-solid fa-bolt',
            tags: ['REST APIs', 'PostgreSQL', 'Laravel', 'Node.js']
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'CI/CD & DevOps',
            description: 'Automated deployment pipelines and cloud infrastructure for optimal performance.',
            metric: '50% faster deployments',
            metricIcon: 'fa-solid fa-bolt',
            tags: ['GitHub Actions', 'Docker', 'Linux', 'Vercel']
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: 'Database Design & Optimization',
            description: 'Efficient database schemas and query optimization for performance.',
            metric: 'Optimized queries',
            metricIcon: 'fa-solid fa-bolt',
            tags: ['PostgreSQL', 'MySQL', 'Database Design', 'SQL']
        }
    ]

    return (
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">
                    What I Do<span className="text-brand-accent">.</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">Specialized services and solutions I provide to drive your business forward</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-brand-primary/10 dark:bg-brand-accent/20 text-brand-primary dark:text-brand-accent flex-shrink-0">
                                    <div className="w-6 h-6">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm leading-relaxed">{service.description}</p>
                                    <div className="flex items-center gap-2 mb-3 text-sm text-brand-primary dark:text-brand-accent font-medium">
                                        {service.metricIcon && <i className={`${service.metricIcon} flex-shrink-0`}></i>}
                                        <span>{service.metric}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs bg-brand-primary/10 dark:bg-brand-accent/20 text-brand-primary dark:text-brand-accent rounded-lg font-medium border border-brand-primary/20 dark:border-brand-accent/30"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

