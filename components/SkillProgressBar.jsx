'use client'

import { motion } from 'framer-motion'

export default function SkillProgressBar({ skill, percentage, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="mb-6"
        >
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{skill}</span>
                <span className="text-sm font-medium text-brand-primary dark:text-brand-accent">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
                />
            </div>
        </motion.div>
    )
}

