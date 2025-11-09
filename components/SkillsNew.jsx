'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SkillsNew() {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: [
                { name: 'Python', icon: 'fa-brands fa-python' },
                { name: 'JavaScript', icon: 'fa-brands fa-js' },
                { name: 'C/C++', icon: 'devicon-cplusplus-plain' },
                { name: 'Java', icon: 'fa-brands fa-java' }
            ]
        },
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React.js', icon: 'fa-brands fa-react' },
                { name: 'Next.js', icon: 'fa-solid fa-code' },
                { name: 'TailwindCSS', icon: 'fa-solid fa-paintbrush' },
                { name: 'HTML/CSS', icon: 'fa-brands fa-html5' }
            ]
        },
        {
            title: 'Backend Development',
            skills: [
                { name: 'Laravel', icon: 'fa-brands fa-laravel' },
                { name: 'Django', icon: 'fa-brands fa-python' },
                { name: 'REST APIs', icon: 'fa-solid fa-server' }
            ]
        },
        {
            title: 'Databases',
            skills: [
                { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
                { name: 'MySQL', icon: 'devicon-mysql-plain' },
                { name: 'SQLite', icon: 'devicon-sqlite-plain' },
                { name: 'Firebase', icon: 'fa-solid fa-fire' }
            ]
        },
        {
            title: 'Data Science & Machine Learning',
            skills: [
                { name: 'TensorFlow', icon: 'devicon-tensorflow-original' },
                { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain' },
                { name: 'Pandas', icon: 'devicon-pandas-original' },
                { name: 'NumPy', icon: 'devicon-numpy-original' },
                { name: 'Matplotlib', icon: 'fa-solid fa-chart-line' },
                { name: 'Support Vector Machine (SVM)', icon: 'fa-solid fa-brain' }
            ]
        },
        {
            title: 'Tools & Platforms',
            skills: [
                { name: 'Git', icon: 'fa-brands fa-git-alt' },
                { name: 'Docker', icon: 'fa-brands fa-docker' },
                { name: 'VS Code', icon: 'fa-solid fa-code' },
                { name: 'Postman', icon: 'fa-solid fa-paper-plane' },
                { name: 'Vercel', icon: 'fa-solid fa-rocket' },
                { name: 'GitHub Actions', icon: 'fa-brands fa-github' },
                { name: 'Linux', icon: 'fa-brands fa-linux' },
                { name: 'Taiga', icon: 'fa-solid fa-tasks' }
            ]
        },
        {
            title: 'Language',
            skills: [
                { name: 'English (Fluent)', icon: 'fa-solid fa-language' },
                { name: 'Bengali (Native)', icon: 'fa-solid fa-language' }
            ]
        },
        {
            title: 'Soft Skills',
            skills: [
                { name: 'Problem-Solving', icon: 'fa-solid fa-lightbulb' },
                { name: 'Teamwork', icon: 'fa-solid fa-people-group' },
                { name: 'Communication', icon: 'fa-solid fa-comments' },
                { name: 'Critical Thinking', icon: 'fa-solid fa-brain' }
            ]
        }
    ]

    // Organized into two columns for better visual balance
    const leftColumn = [
        skillCategories[0], // Programming Languages (4 skills)
        skillCategories[2], // Backend Development (3 skills)
        skillCategories[4], // Data Science & Machine Learning (6 skills)
        skillCategories[7], // Soft Skills (4 skills)
    ]

    const rightColumn = [
        skillCategories[1], // Frontend Development (4 skills)
        skillCategories[3], // Databases (4 skills)
        skillCategories[5], // Tools & Platforms (8 skills)
        skillCategories[6], // Language (2 skills)
    ]

    const CategoryCard = ({ category, delay }) => (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
        >
            <div className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 mb-6">
                <h3 className="font-semibold text-lg mb-4 text-brand-primary dark:text-brand-accent">{category.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="p-3 bg-white dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-brand-primary dark:hover:border-brand-accent transition-all cursor-pointer flex items-center gap-2"
                        >
                            <i className={`${skill.icon} text-brand-primary dark:text-brand-accent flex-shrink-0`}></i>
                            <span className="text-xs font-medium text-gray-900 dark:text-white flex-1">{skill.name}</span>
                            {skill.pdf && (
                                <Link
                                    href={skill.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-brand-primary hover:text-brand-accent transition-colors flex-shrink-0"
                                    title="View IELTS TRF"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <section id="skills" className="max-w-6xl mx-auto px-6 py-16 md:py-20 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">
                    My Skills<span className="text-brand-accent">.</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">Technical expertise I&apos;ve developed over the years</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-0">
                        {leftColumn.map((category, idx) => (
                            <CategoryCard key={idx} category={category} delay={idx * 0.1} />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-0">
                        {rightColumn.map((category, idx) => (
                            <CategoryCard key={idx} category={category} delay={idx * 0.1} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

