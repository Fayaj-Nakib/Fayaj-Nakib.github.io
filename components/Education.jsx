import { motion } from 'framer-motion'
import educationData from '@/data/education.json'

export default function Education() {
    const education = educationData

    return (
        <section id="education" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Section header */}
                <div className="mb-12">
                    <span className="section-label">05 &nbsp;·&nbsp; Education</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Education<span className="text-brand-accent">.</span>
                    </h2>
                    <p className="mt-3 text-gray-500 dark:text-gray-400 text-base max-w-2xl">
                        Academic qualifications and the institutions that shaped my foundation.
                    </p>
                </div>

                <div className="space-y-4">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="p-6 bg-white dark:bg-gray-800/70 rounded-2xl border border-gray-100 dark:border-gray-700 border-l-[3px] border-l-brand-accent shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-250"
                        >
                            <div className="flex items-start justify-between flex-wrap gap-3">
                                <div className="flex-1">
                                    <h3 className="font-bold text-base text-gray-900 dark:text-white">{edu.degree}</h3>
                                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium mt-1">{edu.institution}</div>
                                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-1.5 flex items-center gap-2">
                                        <span>{edu.period}</span>
                                        {edu.location && (
                                            <>
                                                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                                                <span>{edu.location}</span>
                                            </>
                                        )}
                                    </div>
                                    {edu.details && (
                                        <div className="mt-2.5 inline-block text-xs font-semibold px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700">
                                            {edu.details}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
