import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <header className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <motion.h1 
                        initial={{ y: 10, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.05 }} 
                        className="text-4xl md:text-5xl font-extrabold leading-tight"
                    >
                        Fayaj Nakib
                        <span className="block text-brand-accent text-2xl font-medium mt-2">Full-stack Software Engineer</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ y: 10, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.15 }}
                        className="mt-6 max-w-xl text-gray-700"
                    >
                        I build scalable web applications with Next.js, Laravel and PostgreSQL. I ship production-ready features, automate deployments, and optimize backend performance.
                    </motion.p>

                    <motion.div 
                        initial={{ y: 10, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.25 }}
                        className="mt-6 flex gap-4 flex-wrap"
                    >
                        <a href="/Md_Fayaj_Nakib.pdf" download className="px-4 py-2 rounded-md bg-brand-primary text-white hover:opacity-90 transition-opacity">Download Resume</a>
                        <a href="#projects" className="px-4 py-2 rounded-md border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">See Projects</a>
                    </motion.div>

                    <motion.div 
                        initial={{ y: 10, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.35 }}
                        className="mt-6 flex gap-3 text-sm text-gray-600 flex-wrap"
                    >
                        <div>📍 Dhaka, Bangladesh</div>
                        <div>•</div>
                        <div>💼 Open to remote roles</div>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ y: 10, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ delay: 0.2 }}
                    className="p-6 bg-white rounded-2xl shadow-md"
                >
                    <div className="text-sm text-gray-600 font-medium">Highlights</div>
                    <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                        <li>• Built production apps with Next.js & Laravel</li>
                        <li>• Deployed CI/CD pipelines on GitHub Actions</li>
                        <li>• Research: I-SORT IoT product sorting robot</li>
                    </ul>
                </motion.div>
            </div>
        </header>
    )
}