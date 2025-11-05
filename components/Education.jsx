import { motion } from 'framer-motion'

export default function Education() {
    const education = [
        {
            degree: 'B.Sc.(Engg) in Computer Science and Engineering',
            institution: 'University of Asia Pacific',
            period: 'Jun 2020 - Jun 2024',
            location: 'Dhaka, Bangladesh',
            details: 'CGPA: 3.60/4.00'
        },
        {
            degree: 'H.S.C: Science',
            institution: 'Naogaon Govt. College',
            period: '2019',
            location: 'Rajshahi Board',
            details: 'Grade: 4.00/5.00'
        },
        {
            degree: 'S.S.C: Science',
            institution: 'Naogaon K.D. Govt. High School',
            period: '2017',
            location: 'Rajshahi Board',
            details: 'GPA: 5.00/5.00'
        }
    ]

    return (
        <section id="education" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Education</h2>
                <p className="text-gray-600 mb-10 text-lg">Academic background and achievements</p>
                <div className="space-y-6">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-brand-accent hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-start justify-between flex-wrap gap-2">
                                <div className="flex-1">
                                    <div className="font-bold text-xl text-gray-900">{edu.degree}</div>
                                    <div className="text-base text-gray-700 mt-1 font-medium">{edu.institution}</div>
                                    <div className="text-sm text-gray-600 mt-1">
                                        <span>{edu.period}</span>
                                        {edu.location && <span> • {edu.location}</span>}
                                    </div>
                                    {edu.details && (
                                        <div className="mt-2 text-sm font-medium text-brand-primary">{edu.details}</div>
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

