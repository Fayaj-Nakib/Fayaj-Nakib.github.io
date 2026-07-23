'use client'

import { motion } from 'framer-motion'

export default function CallToAction() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-14 text-center shadow-lg shadow-brand-primary/10"
            >
                {/* Background */}
                <div className="absolute inset-0 bg-brand-primary dark:bg-emerald-950" />
                {/* Dot overlay */}
                <div
                    className="absolute inset-0 opacity-[0.07] pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                />

                <div className="relative z-10">
                    <span className="inline-block text-emerald-200 text-xs font-bold tracking-[0.18em] uppercase mb-4">
                        Open to Opportunities
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                        Ready to build something great?
                    </h2>
                    <p className="text-emerald-50 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                        I specialize in scalable web applications and production-ready systems.
                        Let&apos;s collaborate and bring your vision to life.
                    </p>
                    <div className="flex gap-3 justify-center flex-wrap">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-brand-primary font-bold text-sm rounded-xl shadow-lg hover:bg-gray-100 hover:-translate-y-0.5 transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            Start a Conversation
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 border border-white/30 text-white font-semibold text-sm rounded-xl hover:bg-white/20 hover:-translate-y-0.5 transition-all"
                        >
                            View My Work
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
