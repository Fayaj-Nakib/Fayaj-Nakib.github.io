'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

// ── Web3Forms config ─────────────────────────────────────────────────────────
// Get your free access key at https://web3forms.com (enter email → key arrives instantly)
const WEB3FORMS_KEY = '04fdcf87-8529-4c59-bbeb-ea35624d8abb'
// ─────────────────────────────────────────────────────────────────────────────

const EMAIL = 'fayaj.nakib.dev@gmail.com'

const contactDetails = [
    {
        label: 'Email',
        value: EMAIL,
        href: `mailto:${EMAIL}`,
        copyable: true,
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        label: 'Phone',
        value: '+880 1920 899997',
        href: 'tel:+8801920899997',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/fayajnakib',
        href: 'https://www.linkedin.com/in/fayajnakib/',
        external: true,
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: 'GitHub',
        value: 'github.com/Fayaj-Nakib',
        href: 'https://github.com/Fayaj-Nakib',
        external: true,
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        label: 'Location',
        value: 'Dhaka-1216, Bangladesh',
        href: null,
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
]

const inputClass =
    'w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500'

export default function Contact() {
    const formRef             = useRef(null)
    const [copied, setCopied] = useState(false)
    const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(EMAIL).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        const data = new FormData(e.target)
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    name:    data.get('from_name'),
                    email:   data.get('from_email'),
                    subject: data.get('subject') || 'Contact from Portfolio',
                    message: data.get('message'),
                }),
            })
            const result = await res.json()
            if (result.success) {
                setStatus('success')
                formRef.current.reset()
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Section header */}
                <div className="mb-12">
                    <span className="section-label">08 &nbsp;·&nbsp; Contact</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Get In Touch<span className="text-brand-accent">.</span>
                    </h2>
                    <p className="mt-3 text-gray-500 dark:text-gray-400 text-base max-w-2xl">
                        Have a project in mind or want to chat? I&apos;m open to new opportunities and collaborations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

                    {/* Contact info (2/5) */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="md:col-span-2 space-y-3"
                    >
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-5">
                            Reach me directly via any of these channels:
                        </p>
                        {contactDetails.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 p-3.5 bg-white dark:bg-gray-800/70 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                            >
                                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/50 text-brand-primary dark:text-brand-accent border border-blue-100 dark:border-blue-900/40">
                                    {item.icon}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">{item.label}</div>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target={item.external ? '_blank' : undefined}
                                            rel={item.external ? 'noopener noreferrer' : undefined}
                                            className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-accent transition-colors truncate block"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.value}</span>
                                    )}
                                </div>
                                {item.copyable && (
                                    <button
                                        onClick={handleCopyEmail}
                                        title={copied ? 'Copied!' : 'Copy email'}
                                        className="flex-shrink-0 ml-auto p-1 rounded text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors"
                                        aria-label="Copy email address"
                                    >
                                        {copied ? (
                                            <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </button>
                                )}
                            </div>
                        ))}
                    </motion.div>

                    {/* Message form (3/5) */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="md:col-span-3 p-7 bg-white dark:bg-gray-800/70 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm"
                    >
                        <h3 className="font-bold text-base text-gray-900 dark:text-white mb-5">Send a Message</h3>

                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                                <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center">
                                    <svg className="w-7 h-7 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="font-bold text-gray-900 dark:text-white">Message sent!</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-2 text-xs font-semibold text-brand-primary dark:text-brand-accent hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label htmlFor="c-name" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">Name</label>
                                        <input id="c-name" type="text" name="from_name" required placeholder="Your name" className={inputClass} />
                                    </div>
                                    <div>
                                        <label htmlFor="c-email" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">Email</label>
                                        <input id="c-email" type="email" name="from_email" required placeholder="your@email.com" className={inputClass} />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="c-subject" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">Subject</label>
                                    <input id="c-subject" type="text" name="subject" placeholder="What's this about?" className={inputClass} />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="c-message" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">Message</label>
                                    <textarea
                                        id="c-message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project or opportunity..."
                                        className={`${inputClass} resize-none`}
                                    />
                                </div>

                                {status === 'error' && (
                                    <p className="text-xs text-red-500 mb-3">Something went wrong. Please try again or email me directly.</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary dark:bg-brand-accent text-white text-sm font-semibold rounded-xl shadow-md shadow-brand-primary/20 dark:shadow-brand-accent/15 hover:bg-brand-accent dark:hover:bg-blue-400 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
