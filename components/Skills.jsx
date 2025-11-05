import { motion } from 'framer-motion'

export default function Skills() {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: ['Python', 'JavaScript', 'C/C++', 'Java']
        },
        {
            title: 'Frontend Development',
            skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML/CSS']
        },
        {
            title: 'Backend Development',
            skills: ['Laravel', 'Django', 'REST APIs', 'Node.js']
        },
        {
            title: 'Databases',
            skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Firebase']
        },
        {
            title: 'Data Science & ML',
            skills: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'SVM', 'Matplotlib']
        },
        {
            title: 'Tools & Platforms',
            skills: ['Git', 'Docker', 'GitHub Actions', 'VS Code', 'Postman', 'Vercel', 'Linux']
        }
    ]

    return (
        <section id="skills" className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-b from-transparent to-gray-50/50">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Skills</h2>
                <p className="text-gray-600 mb-10 text-lg">Technologies and tools I work with</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="font-semibold text-lg mb-4 text-brand-primary">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 text-sm bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 text-brand-primary rounded-lg font-medium border border-brand-primary/20"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

