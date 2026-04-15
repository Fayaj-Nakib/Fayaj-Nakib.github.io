'use client'

import { motion } from 'framer-motion'
import SkillProgressBar from './SkillProgressBar'

export default function TechnicalOverview() {
    const coreSkills = [
        { skill: 'Next.js',           percentage: 90 },
        { skill: 'Laravel',           percentage: 85 },
        { skill: 'PostgreSQL',        percentage: 88 },
        { skill: 'React.js',          percentage: 90 },
        { skill: 'Python',            percentage: 85 },
        { skill: 'JavaScript',        percentage: 92 },
        { skill: 'Git / GitHub Actions', percentage: 88 },
        { skill: 'Docker',            percentage: 75 },
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
                    <span className="section-label">04 &nbsp;·&nbsp; Proficiency</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Technical Overview<span className="text-brand-accent">.</span>
                    </h2>
                    <p className="mt-3 text-gray-500 dark:text-gray-400 text-base max-w-2xl">
                        Core technologies and hands-on proficiency levels from daily production use.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                        { label: 'Frontend & Full-stack', slice: [0, 4] },
                        { label: 'Backend & Tools',       slice: [4, 8] },
                    ].map(({ label, slice }, ci) => (
                        <motion.div
                            key={ci}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: ci * 0.1, duration: 0.5 }}
                            className="p-6 bg-white dark:bg-gray-800/70 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm"
                        >
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-5 pb-3 border-b border-gray-100 dark:border-gray-700 uppercase tracking-wider">
                                {label}
                            </h3>
                            {coreSkills.slice(...slice).map((item, idx) => (
                                <SkillProgressBar
                                    key={idx}
                                    skill={item.skill}
                                    percentage={item.percentage}
                                    delay={idx * 0.08}
                                />
                            ))}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
