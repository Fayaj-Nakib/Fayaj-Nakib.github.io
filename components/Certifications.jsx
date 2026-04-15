import { motion } from 'framer-motion'
import Link from 'next/link'
import certificationsData from '@/data/certifications.json'

export default function Certifications() {
    const certifications = certificationsData.certifications
    const awards         = certificationsData.awards

    return (
        <>
            {/* ── Certifications ── */}
            <section id="certifications" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Section header */}
                    <div className="mb-12">
                        <span className="section-label">06 &nbsp;·&nbsp; Certifications</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white" id="certifications-heading">
                            Certifications<span className="text-brand-accent">.</span>
                        </h2>
                        <p className="mt-3 text-gray-500 dark:text-gray-400 text-base max-w-2xl">
                            Professional certifications and courses from leading institutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {certifications.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.07, duration: 0.5 }}
                                className="group p-5 bg-white dark:bg-gray-800/70 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-250 flex items-start gap-4"
                            >
                                {/* Certificate icon */}
                                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/50 text-brand-primary dark:text-brand-accent border border-blue-100 dark:border-blue-900/40">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="font-semibold text-sm text-gray-900 dark:text-white leading-snug group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                                            {cert.title}
                                        </div>
                                        <span className="flex-shrink-0 text-[11px] font-semibold text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 px-2 py-0.5 rounded-full border border-gray-100 dark:border-gray-700">
                                            {cert.year}
                                        </span>
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cert.issuer}</div>
                                    {cert.description && (
                                        <div className="text-xs text-brand-primary dark:text-brand-accent font-medium mt-1">{cert.description}</div>
                                    )}
                                    <div className="flex gap-3 mt-2.5">
                                        {cert.verifyUrl && (
                                            <Link
                                                href={cert.verifyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent flex items-center gap-1 transition-colors"
                                                aria-label={`Verify ${cert.title}`}
                                            >
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Verify
                                            </Link>
                                        )}
                                        {cert.pdfPath && (
                                            <Link
                                                href={cert.pdfPath}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent flex items-center gap-1 transition-colors"
                                                aria-label={`View ${cert.title} PDF`}
                                            >
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                </svg>
                                                PDF
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── Awards ── */}
            <section id="awards" className="max-w-6xl mx-auto px-6 pb-16 md:pb-24">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-10">
                        <span className="section-label">07 &nbsp;·&nbsp; Awards</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white" id="awards-heading">
                            Honors &amp; Awards<span className="text-brand-accent">.</span>
                        </h2>
                        <p className="mt-3 text-gray-500 dark:text-gray-400 text-base max-w-2xl">
                            Recognition received for academic excellence and extracurricular achievements.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {awards.map((award, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08, duration: 0.5 }}
                                className="p-5 bg-white dark:bg-gray-800/70 rounded-2xl border border-gray-100 dark:border-gray-700 border-l-[3px] border-l-brand-accent shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-250"
                            >
                                <div className="text-lg mb-1">🏆</div>
                                <div className="font-bold text-sm text-gray-900 dark:text-white mb-1.5">{award.title}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{award.description}</div>
                                <span className="text-[11px] font-semibold text-brand-primary dark:text-brand-accent bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-full border border-blue-100 dark:border-blue-900/50">
                                    {award.year}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </>
    )
}
