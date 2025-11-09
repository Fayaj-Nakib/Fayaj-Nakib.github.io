'use client'

import { motion } from 'framer-motion'

export default function SkillsNew() {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: [
                { name: 'Python', icon: 'fa-brands fa-python' },
                { name: 'JavaScript', icon: 'fa-brands fa-js' },
                { name: 'TypeScript', icon: 'fa-brands fa-js-square' },
                { name: 'C/C++', icon: 'devicon-cplusplus-plain' },
                { name: 'Java', icon: 'fa-brands fa-java' }
            ]
        },
        {
            title: 'Frontend Technologies',
            skills: [
                { name: 'React', icon: 'fa-brands fa-react' },
                { name: 'Next.js', icon: 'fa-solid fa-code' },
                { name: 'Tailwind CSS', icon: 'fa-solid fa-paintbrush' },
                { name: 'HTML/CSS', icon: 'fa-brands fa-html5' }
            ]
        },
        {
            title: 'Backend Frameworks',
            skills: [
                { name: 'Laravel', icon: 'fa-brands fa-laravel' },
                { name: 'Django', icon: 'fa-brands fa-python' },
                { name: 'FastAPI', icon: 'fa-solid fa-bolt' },
                { name: 'Node.js', icon: 'fa-brands fa-node-js' },
                { name: 'Express.js', icon: 'fa-solid fa-server' }
            ]
        },
        {
            title: 'Databases',
            skills: [
                { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
                { name: 'MySQL', icon: 'devicon-mysql-plain' },
                { name: 'SQLite', icon: 'devicon-sqlite-plain' },
                { name: 'Firebase', icon: 'fa-solid fa-fire' },
                { name: 'Redis', icon: 'fa-solid fa-database' }
            ]
        },
        {
            title: 'DevOps & Tools',
            skills: [
                { name: 'Git', icon: 'fa-brands fa-git-alt' },
                { name: 'Docker', icon: 'fa-brands fa-docker' },
                { name: 'GitHub Actions', icon: 'fa-brands fa-github' },
                { name: 'VS Code', icon: 'fa-solid fa-code' },
                { name: 'Linux', icon: 'fa-brands fa-linux' }
            ]
        },
        {
            title: 'Data Science & ML',
            skills: [
                { name: 'TensorFlow', icon: 'devicon-tensorflow-original' },
                { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain' },
                { name: 'Pandas', icon: 'devicon-pandas-original' },
                { name: 'NumPy', icon: 'devicon-numpy-original' }
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
                                            <i className={`${skill.icon} text-brand-primary dark:text-brand-accent flex-shrink-0`}></i>
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

