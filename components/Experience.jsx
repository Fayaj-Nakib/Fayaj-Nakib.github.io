import { motion } from 'framer-motion'
import experienceData from '@/data/experience.json'

export default function Experience() {
    const items = experienceData

    return (
        <section id="experience" className="max-w-6xl mx-auto px-6 py-16 md:py-24" aria-labelledby="experience-heading">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Section header */}
                <div className="mb-12">
                    <span className="section-label">03 &nbsp;·&nbsp; Experience</span>
                    <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Work Experience<span className="text-brand-accent">.</span>
                    </h2>
                    <p className="mt-3 text-gray-500 dark:text-gray-400 text-base max-w-2xl">
                        My professional journey building products and systems in production environments.
                    </p>
                </div>

                <div className="relative space-y-6">
                    {/* Vertical timeline line */}
                    <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-700 hidden md:block" />

                    {items.map((it, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="relative md:pl-14"
                        >
                            {/* Timeline dot */}
                            <div className="hidden md:flex absolute left-0 top-5 w-10 h-10 items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-brand-accent ring-4 ring-white dark:ring-gray-950 shadow-sm" />
                            </div>

                            <div className="p-6 bg-white dark:bg-gray-800/70 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-250">
                                {/* Header */}
                                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{it.title}</h3>
                                        <div className="text-brand-primary dark:text-brand-accent font-semibold text-sm mt-0.5">{it.org}</div>
                                    </div>
                                    <div className="text-right flex-shrink-0">
                                        <span className="inline-block text-xs font-semibold px-3 py-1 bg-blue-50 dark:bg-blue-950/40 text-brand-primary dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-900/50">
                                            {it.period}
                                        </span>
                                        {it.location && (
                                            <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 mt-1.5 justify-end">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {it.location}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Bullets */}
                                <ul className="space-y-2">
                                    {it.bullets.map((b, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            <span className="text-brand-accent mt-1.5 flex-shrink-0 text-xs">▸</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
