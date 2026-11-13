'use client'

import { motion } from 'framer-motion'

export default function CallToAction() {
    return (
        <section aria-labelledby="opportunities-heading" className="max-w-6xl mx-auto px-6 pb-14 md:pb-20">
            <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.3 }}
                className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
            >
                <div className="max-w-2xl">
                    <h2 id="opportunities-heading" className="text-xl font-semibold text-gray-900 dark:text-white">Open to software engineering opportunities</h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">Interested in teams where I can contribute to production systems and keep learning alongside experienced engineers.</p>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 min-h-11 py-2 text-sm font-semibold text-brand-primary dark:text-brand-accent underline underline-offset-4 shrink-0">
                    Start a conversation <span aria-hidden="true">&rarr;</span>
                </a>
            </motion.div>
        </section>
    )
}
