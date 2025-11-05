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
                <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">
                    Work Experience<span className="text-brand-accent">.</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">My professional journey building innovative solutions</p>
                <div className="mt-6 space-y-8 relative">
                    {/* Timeline Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
                    
                    {items.map((it, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="relative pl-12 md:pl-16"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-6 top-2 w-4 h-4 bg-brand-primary dark:bg-brand-accent rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                            
                            <div className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                <div className="mb-3">
                                    <div className="font-bold text-xl text-gray-900 dark:text-white">{it.title}</div>
                                    <div className="text-base text-brand-primary dark:text-brand-accent mt-1 font-semibold">{it.org}</div>
                                    <div className="flex flex-wrap items-center gap-2 mt-2">
                                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{it.period}</span>
                                        {it.location && (
                                            <>
                                                <span className="text-gray-400">•</span>
                                                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span>{it.location}</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <ul className="mt-4 text-sm text-gray-700 dark:text-gray-300 space-y-2.5">
                                    {it.bullets.map((b, i) => (
                                        <li key={i} className="flex items-start gap-2 leading-relaxed">
                                            <span className="text-brand-primary dark:text-brand-accent mt-1.5 flex-shrink-0">▸</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}