import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import projectsData from '@/data/projects.json'

export default function Projects() {
    const projects = projectsData
    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-16 md:py-24" aria-labelledby="projects-heading">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-12">
                    <span className="section-label">02 &nbsp;·&nbsp; Projects</span>
                    <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Featured Work<span className="text-brand-accent">.</span>
                    </h2>
                    <p className="mt-3 text-gray-500 dark:text-gray-400 text-base max-w-2xl">
                        A selection of projects I've built — from web applications to research work and systems design.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <ProjectCard {...p} index={i} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}