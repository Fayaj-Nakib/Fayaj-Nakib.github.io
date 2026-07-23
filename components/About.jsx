'use client'

import { motion } from 'framer-motion'

const facts = [
    {
        label: 'Based in',
        value: 'Dhaka, Bangladesh',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        label: 'Education',
        value: 'BSc in CSE — University of Asia Pacific',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
        ),
    },
    {
        label: 'Competitive Programming',
        value: '4× ICPC Asia Preliminary Participant',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
            </svg>
        ),
    },
    {
        label: 'Beyond Code',
        value: 'Photography · Film · Event Coordination',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
]

const values = [
    'Clean Architecture',
    'Observable Systems',
    'Test-Driven Development',
    'DevOps Culture',
    'Open Source',
    'Continuous Learning',
]

export default function About() {
    return (
        <section id="about" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-12">
                    <span className="section-label">01 &nbsp;·&nbsp; About</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        About Me<span className="text-brand-accent">.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-start">

                    {/* ── Left: Personal text (3/5) ── */}
                    <div className="md:col-span-3 space-y-6">

                        {/* Pull quote */}
                        <motion.div
                            initial={{ x: -16, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="pl-5 border-l-4 border-brand-accent"
                        >
                            <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white leading-relaxed">
                                I build systems designed to stay reliable — not just to ship fast, but to work flawlessly when things get complicated.
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.18, duration: 0.5 }}
                            className="text-gray-600 dark:text-gray-400 leading-relaxed text-base"
                        >
                            Working on Cassetex&apos;s IoT fleet platform taught me what &ldquo;production-ready&rdquo; really means. When GPS telemetry, real-time vehicle tracking, bKash payment webhooks, and multi-tenant access control all need to work together without failure, there&apos;s no room for shortcuts. That environment shaped how I think about architecture, error handling, and observability from day one.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.24, duration: 0.5 }}
                            className="text-gray-600 dark:text-gray-400 leading-relaxed text-base"
                        >
                            I started in competitive programming — four ICPC Asia Preliminary rounds trained me to break hard problems apart under pressure. That mindset carries into every system I design. Outside engineering, I coordinate film and photography events and shoot documentary work, which keeps me thinking about composition and clear storytelling — surprisingly useful when designing APIs.
                        </motion.p>

                        {/* Values */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                                What I care about
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {values.map((v) => (
                                    <span
                                        key={v}
                                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-semibold border border-gray-200 dark:border-gray-700"
                                    >
                                        {v}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* ── Right: Quick facts (2/5) ── */}
                    <div className="md:col-span-2 space-y-3">
                        {facts.map((fact, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                                className="flex items-start gap-3.5 p-4 bg-white dark:bg-gray-800/70 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                            >
                                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                                    {fact.icon}
                                </div>
                                <div className="min-w-0">
                                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                                        {fact.label}
                                    </div>
                                    <div className="text-sm font-semibold text-gray-900 dark:text-white mt-0.5 leading-snug">
                                        {fact.value}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
