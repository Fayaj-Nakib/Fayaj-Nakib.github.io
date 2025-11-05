'use client'

import { motion } from 'framer-motion'

export default function SkillsNew() {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: [
                { name: 'Python', icon: '🐍' },
                { name: 'JavaScript', icon: '📜' },
                { name: 'TypeScript', icon: '📘' },
                { name: 'C/C++', icon: '⚙️' },
                { name: 'Java', icon: '☕' }
            ]
        },
        {
            title: 'Frontend Technologies',
            skills: [
                { name: 'React', icon: '⚛️' },
                { name: 'Next.js', icon: '▲' },
                { name: 'Tailwind CSS', icon: '🎨' },
                { name: 'HTML/CSS', icon: '🌐' }
            ]
        },
        {
            title: 'Backend Frameworks',
            skills: [
                { name: 'Laravel', icon: '🔴' },
                { name: 'Django', icon: '🐍' },
                { name: 'FastAPI', icon: '⚡' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'Express.js', icon: '🚂' }
            ]
        },
        {
            title: 'Databases',
            skills: [
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'MySQL', icon: '🐬' },
                { name: 'SQLite', icon: '💾' },
                { name: 'Firebase', icon: '🔥' },
                { name: 'Redis', icon: '📦' }
            ]
        },
        {
            title: 'DevOps & Tools',
            skills: [
                { name: 'Git', icon: '📚' },
                { name: 'Docker', icon: '🐳' },
                { name: 'GitHub Actions', icon: '⚙️' },
                { name: 'VS Code', icon: '💻' },
                { name: 'Linux', icon: '🐧' }
            ]
        },
        {
            title: 'Data Science & ML',
            skills: [
                { name: 'TensorFlow', icon: '🧠' },
                { name: 'Scikit-learn', icon: '🔬' },
                { name: 'Pandas', icon: '🐼' },
                { name: 'NumPy', icon: '🔢' }
            ]
        }
    ]

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
                <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">Technical expertise I've developed over the years</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <div className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                <h3 className="font-semibold text-lg mb-4 text-brand-primary dark:text-brand-accent">{category.title}</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {category.skills.map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.05 }}
                                            className="p-3 bg-white dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-brand-primary dark:hover:border-brand-accent transition-all cursor-pointer flex items-center gap-2"
                                        >
                                            <span className="text-lg">{skill.icon}</span>
                                            <span className="text-xs font-medium text-gray-900 dark:text-white">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

