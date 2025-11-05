import { motion } from 'framer-motion'

export default function Certifications() {
    const certifications = [
        {
            title: 'Neural Networks and Deep Learning',
            issuer: 'DeepLearning.AI by Coursera',
            year: '2024'
        },
        {
            title: 'Supervised Machine Learning: Regression and Classification',
            issuer: 'DeepLearning.AI by Coursera',
            year: '2024'
        },
        {
            title: 'Foundation of Project Management',
            issuer: 'Google by Coursera',
            year: '2023'
        },
        {
            title: 'Technical Support Fundamentals',
            issuer: 'Google by Coursera',
            year: '2023'
        }
    ]

    const awards = [
        {
            title: 'Vice Chancellor\'s and Dean\'s Awards',
            description: 'Recognizing academic excellence and discipline',
            year: 'Fall 2022, Fall 2020'
        },
        {
            title: 'Intra-UAP Programming Contest',
            description: 'Secured fourth runner-up position, solving algorithmic challenges in C++ and Python',
            year: '2022'
        },
        {
            title: 'Photography Awards',
            description: 'Won 1st Prize in Mobile Category (Bangladesh Youth Club) and Champion in UAP Diary Segment',
            year: '2022'
        }
    ]

    return (
        <section id="certifications" className="max-w-6xl mx-auto px-6 py-16 md:py-20 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Certifications */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">
                        Certifications<span className="text-brand-accent">.</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">Professional certifications and courses</p>
                    <div className="space-y-4">
                        {certifications.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-0.5"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1">
                                        <div className="font-semibold text-lg text-gray-900 dark:text-white">{cert.title}</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{cert.issuer}</div>
                                    </div>
                                    <span className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                                        {cert.year}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Awards */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">
                        Honors & Awards<span className="text-brand-accent">.</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">Recognition and achievements</p>
                    <div className="space-y-4">
                        {awards.map((award, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-brand-accent hover:-translate-y-0.5"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1">
                                        <div className="font-semibold text-lg text-gray-900 dark:text-white">{award.title}</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{award.description}</div>
                                    </div>
                                    <span className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                                        {award.year}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

