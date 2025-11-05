'use client'

import { motion } from 'framer-motion'
import SkillProgressBar from './SkillProgressBar'

export default function TechnicalOverview() {
    const coreSkills = [
        { skill: 'Next.js', percentage: 90 },
        { skill: 'Laravel', percentage: 85 },
        { skill: 'PostgreSQL', percentage: 88 },
        { skill: 'React.js', percentage: 90 },
        { skill: 'Python', percentage: 85 },
        { skill: 'JavaScript', percentage: 92 },
        { skill: 'Git/GitHub Actions', percentage: 88 },
        { skill: 'Docker', percentage: 75 }
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
                    Technical Overview<span className="text-brand-accent">.</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">Core technologies and proficiency levels</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                    >
                        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Frontend & Full-stack</h3>
                        {coreSkills.slice(0, 4).map((item, idx) => (
                            <SkillProgressBar 
                                key={idx}
                                skill={item.skill} 
                                percentage={item.percentage}
                                delay={idx * 0.1}
                            />
                        ))}
                    </motion.div>
                    
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                    >
                        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Backend & Tools</h3>
                        {coreSkills.slice(4).map((item, idx) => (
                            <SkillProgressBar 
                                key={idx}
                                skill={item.skill} 
                                percentage={item.percentage}
                                delay={idx * 0.1}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

