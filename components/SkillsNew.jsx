'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import skillsData from '@/data/skills.json'

export default function SkillsNew() {
    const skillCategories = skillsData

    // Split into two columns: even-indexed left, odd-indexed right
    const leftColumn  = skillCategories.filter((_, i) => i % 2 === 0)
    const rightColumn = skillCategories.filter((_, i) => i % 2 === 1)

    const CategoryCard = ({ category, delay }) => (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.4 }}
            className="mb-5"
        >
            <div className="p-5 bg-white dark:bg-gray-800/70 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-250">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3.5 pb-2.5 border-b border-gray-100 dark:border-gray-700">
                    {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.03 }}
                            className="flex items-center gap-2 px-2.5 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all cursor-default"
                        >
                            <i className={`${skill.icon} text-gray-500 dark:text-gray-400 text-sm flex-shrink-0`} aria-hidden="true" />
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-200 flex-1 leading-tight">
                                {skill.name}
                            </span>
                            {skill.pdf && (
                                <Link
                                    href={skill.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-brand-primary hover:text-brand-accent transition-colors flex-shrink-0"
                                    title="View certificate"
                                    aria-label={`View ${skill.name} certificate`}
                                >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )

    return (
        <section id="skills" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                {/* Section header */}
                <div className="mb-12">
                    <span className="section-label">04 &nbsp;·&nbsp; Skills</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        My Skills<span className="text-brand-accent">.</span>
                    </h2>
                    <p className="mt-3 text-gray-500 dark:text-gray-400 text-base max-w-2xl">
                        Technical expertise I&apos;ve developed across languages, frameworks, and tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
                    <div>
                        {leftColumn.map((category, idx) => (
                            <CategoryCard key={idx} category={category} delay={idx * 0.08} />
                        ))}
                    </div>
                    <div>
                        {rightColumn.map((category, idx) => (
                            <CategoryCard key={idx} category={category} delay={idx * 0.08} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
