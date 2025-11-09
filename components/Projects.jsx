import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function Projects() {
    const projects = [
        { 
            title: 'IELTS Preparation App', 
            desc: 'Developed an application with reading, writing, and vocabulary modules; implemented Firebase authentication and database for seamless user experience.', 
            tags: ['React.js', 'Tailwind CSS', 'Firebase'], 
            github: 'https://github.com/Fayaj-Nakib/IELTS-prep',
            year: '2025'
        },
        { 
            title: 'I-SORT (Research)', 
            desc: 'An IoT-enhanced autonomous product sorting robot for eCommerce. Designed an automated sortation system for warehouse operations, improving sorting accuracy and throughput. Reduced manual labor requirements and optimized space usage while providing real-time product tracking.', 
            tags: ['IoT', 'Python', 'Embedded Systems', 'Research'], 
            github: '',
            year: '2024'
        },
        { 
            title: 'Car Dealer Web App', 
            desc: 'Developed an online car inventory and sales management platform with comprehensive features for managing vehicle listings, sales transactions, and customer interactions.', 
            tags: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript'], 
            github: 'https://github.com/sanjanaoythi/car_dealer',
            year: '2023'
        },
        { 
            title: 'Human Disease Prediction', 
            desc: 'Built an SVM-based system predicting diseases with 85% accuracy from symptom input. Utilized machine learning algorithms to provide accurate medical predictions.', 
            tags: ['Machine Learning', 'Python', 'SVM', 'HTML'], 
            github: 'https://github.com/Apurba0012/multiple_disease_prediction_webapp',
            year: '2023'
        },
        { 
            title: 'Self Portfolio', 
            desc: 'Created a personal portfolio website to showcase skills and projects with modern design and responsive layout.', 
            tags: ['JavaScript', 'CSS', 'HTML', 'PHP', 'Django'], 
            github: '',
            year: '2023'
        },
        { 
            title: 'Automobile Shop Database', 
            desc: 'Designed a comprehensive database system for inventory and transaction management, supporting real-time updates and efficient data operations.', 
            tags: ['SQL', 'Database Design'], 
            github: '',
            year: '2022'
        },
        { 
            title: 'Library Management System', 
            desc: 'Developed a system for library operations, streamlining book lending and member registration processes with an intuitive interface.', 
            tags: ['Java', 'CSS'], 
            github: '',
            year: '2022'
        }
    ]
    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-16 md:py-20 bg-gradient-to-b from-transparent to-gray-50/30" aria-labelledby="projects-heading">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">
                    Featured Projects<span className="text-brand-accent">.</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">A selection of my recent work building scalable web applications and innovative solutions</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <ProjectCard {...p} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}