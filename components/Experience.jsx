import { motion } from 'framer-motion'

export default function Experience() {
    const items = [
        { 
            title: 'Associate Software Engineer', 
            org: 'Cassetex', 
            location: 'Mohakhali DOHS, Dhaka-1212',
            period: 'Feb 2025 - Present', 
            bullets: [
                'Built and deployed scalable web applications using Next.js, Laravel and PostgreSQL backends', 
                'Designed and integrated secure RESTful APIs, improving system interoperability',
                'Deployed and maintained production systems on Linux VPS using GitHub Actions and secure SSH pipelines',
                'Collaborated with cross-functional teams to enhance system performance and user experience'
            ] 
        },
        { 
            title: 'Junior Software Engineer', 
            org: 'Eutropia-IT', 
            location: 'Mohammadpur, Dhaka-1212',
            period: 'Jul 2024 - Dec 2024', 
            bullets: [
                'Developed websites with Laravel & Next.js, improving feature delivery speed', 
                'Optimized API endpoints, reduced response time',
                'Contributed to performance tuning and bug fixes in production environments'
            ] 
        }
    ]
    return (
        <section id="experience" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Experience</h2>
                <p className="text-gray-600 mb-10 text-lg">Professional journey and achievements</p>
                <div className="mt-6 space-y-6">
                    {items.map((it, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group p-6 bg-white rounded-xl shadow-sm border-l-4 border-brand-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-start justify-between flex-wrap gap-2">
                                <div className="flex-1">
                                    <div className="font-bold text-xl text-gray-900">{it.title}</div>
                                    <div className="text-base text-gray-700 mt-1 font-medium">{it.org}</div>
                                    <div className="text-sm text-gray-600 mt-1">
                                        <span>{it.period}</span>
                                        {it.location && <span> • {it.location}</span>}
                                    </div>
                                </div>
                            </div>
                            <ul className="mt-4 text-sm text-gray-700 space-y-2 ml-4">
                                {it.bullets.map((b, i) => (
                                    <li key={i} className="list-disc list-inside leading-relaxed">{b}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}