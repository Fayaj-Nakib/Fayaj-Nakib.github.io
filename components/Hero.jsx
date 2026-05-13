'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import TypingEffect from './TypingEffect'
import { useState, useRef, useEffect } from 'react'
import projectsData   from '@/data/projects.json'
import experienceData from '@/data/experience.json'

const fadeUp = (delay = 0) => ({
    initial: { y: 16, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
})

// ── Parse "Jul 2024" or "Feb 2025" → Date ──
function parseMonthYear(str) {
    const MONTHS = { Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11 }
    const [mon, yr] = str.trim().split(' ')
    if (MONTHS[mon] !== undefined && yr) return new Date(parseInt(yr), MONTHS[mon], 1)
    if (/^\d{4}$/.test(str.trim()))    return new Date(parseInt(str), 0, 1)
    return null
}

// ── Auto-calculate stats from data files ──
function calcStats() {
    // Years of experience — from earliest job start to today
    const startDates = experienceData
        .map(e => parseMonthYear(e.period.split(' - ')[0]))
        .filter(Boolean)

    let yearsLabel = '1+'
    if (startDates.length > 0) {
        const earliest = new Date(Math.min(...startDates.map(d => d.getTime())))
        const years    = Math.floor((Date.now() - earliest.getTime()) / (1000 * 60 * 60 * 24 * 365.25))
        yearsLabel     = `${Math.max(years, 1)}+`
    }

    // Unique companies
    const companies = new Set(experienceData.map(e => e.org)).size

    return [
        { value: yearsLabel,                 label: 'Years Exp.'  },
        { value: `${projectsData.length}`,   label: 'Projects'    },
        { value: `${companies}`,             label: 'Companies'   },
    ]
}

// ── Animated count-up for a numeric prefix ──
function useCountUp(target, isInView) {
    const [display, setDisplay] = useState('0')

    useEffect(() => {
        if (!isInView) return
        // Extract numeric part and suffix (e.g. "2+" → num=2, suffix="+")
        const match = String(target).match(/^(\d+)(.*)$/)
        if (!match) { setDisplay(target); return }
        const num    = parseInt(match[1], 10)
        const suffix = match[2] || ''
        if (num === 0) { setDisplay(target); return }

        let start = null
        const duration = 900
        const step = (timestamp) => {
            if (!start) start = timestamp
            const elapsed  = timestamp - start
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased    = 1 - Math.pow(1 - progress, 3)
            const current  = Math.round(eased * num)
            setDisplay(`${current}${suffix}`)
            if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }, [isInView, target])

    return display
}

function StatItem({ value, label }) {
    const ref     = useRef(null)
    const inView  = useInView(ref, { once: true, margin: '-40px' })
    const display = useCountUp(value, inView)
    return (
        <div ref={ref}>
            <div className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{display}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-medium">{label}</div>
        </div>
    )
}

export default function Hero() {
    const roles = ['Full-stack Developer', 'Software Engineer', 'Problem Solver']
    const [imageError, setImageError] = useState(false)

    const stats = calcStats()

    const stack = ['Laravel', 'React', 'Next.js', 'TypeScript']

    const socials = [
        {
            href: 'https://github.com/Fayaj-Nakib',
            label: 'GitHub',
            icon: (
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            ),
            fill: true,
        },
        {
            href: 'https://www.linkedin.com/in/fayajnakib/',
            label: 'LinkedIn',
            icon: (
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            ),
            fill: true,
        },
        {
            href: 'mailto:fayaj.nakib.dev@gmail.com',
            label: 'Email',
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            ),
            fill: false,
        },
    ]

    return (
        <header className="relative max-w-6xl mx-auto px-6 pt-20 pb-20 md:pt-28 md:pb-28" role="banner">
            {/* Dot pattern background */}
            <div className="hero-pattern absolute inset-0 -z-10 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">

                {/* ── Left: Text content (3/5) ── */}
                <div className="md:col-span-3 order-2 md:order-1 space-y-6">

                    {/* Greeting */}
                    <motion.p {...fadeUp(0.05)} className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide">
                        Hello, I&rsquo;m
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        {...fadeUp(0.1)}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
                    >
                        <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-blue-400 bg-clip-text text-transparent dark:from-blue-300 dark:via-brand-accent dark:to-blue-500">
                            Fayaj Nakib
                        </span>
                    </motion.h1>

                    {/* Typing role */}
                    <motion.div
                        {...fadeUp(0.15)}
                        className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 h-8 flex items-center"
                    >
                        <TypingEffect words={roles} speed={100} />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        {...fadeUp(0.2)}
                        className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-xl"
                    >
                        Full-stack engineer with 2 years of production experience building enterprise-grade web apps.
                        Specialises in IoT-integrated fleet systems, REST API architecture, and payment integrations — with DevOps depth across&nbsp;
                        <code className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-950/50 rounded text-sm text-brand-primary dark:text-blue-400 border border-blue-100 dark:border-blue-900/60">Docker</code>,&nbsp;
                        <code className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-950/50 rounded text-sm text-brand-primary dark:text-blue-400 border border-blue-100 dark:border-blue-900/60">Kubernetes</code>, and&nbsp;
                        <code className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-950/50 rounded text-sm text-brand-primary dark:text-blue-400 border border-blue-100 dark:border-blue-900/60">CI/CD</code>.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div {...fadeUp(0.25)} className="flex gap-3 flex-wrap items-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary dark:bg-brand-accent text-white font-semibold text-sm shadow-lg shadow-brand-primary/25 dark:shadow-brand-accent/20 hover:bg-brand-accent dark:hover:bg-blue-400 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent focus:ring-offset-2 transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            Get In Touch
                        </a>
                        <a
                            href="/Md_Fayaj_Nakib.pdf"
                            download="Md_Fayaj_Nakib.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold text-sm hover:border-brand-primary dark:hover:border-brand-accent hover:text-brand-primary dark:hover:text-brand-accent transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent focus:ring-offset-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download CV
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-1 px-4 py-3 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors"
                        >
                            View Work
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </motion.div>

                    {/* Divider + Stats row */}
                    <motion.div {...fadeUp(0.3)} className="pt-5 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex gap-8">
                            {stats.map((s, i) => (
                                <StatItem key={i} value={s.value} label={s.label} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Social icons */}
                    <motion.div {...fadeUp(0.35)} className="flex gap-2.5">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                                rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                aria-label={s.label}
                                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-brand-primary dark:hover:border-brand-accent hover:text-brand-primary dark:hover:text-brand-accent transition-all"
                            >
                                <svg className="w-4 h-4" fill={s.fill ? 'currentColor' : 'none'} stroke={s.fill ? 'none' : 'currentColor'} viewBox="0 0 24 24">
                                    {s.icon}
                                </svg>
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* ── Right: Photo + Info card (2/5) ── */}
                <div className="md:col-span-2 order-1 md:order-2 flex flex-col items-center gap-5">

                    {/* Profile photo */}
                    <motion.div
                        initial={{ scale: 0.94, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 shadow-2xl">
                            {!imageError ? (
                                <Image
                                    src="/profile.jpg"
                                    alt="Fayaj Nakib"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 176px, 208px"
                                    unoptimized
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-white font-bold text-4xl bg-gradient-to-br from-brand-primary to-brand-accent">
                                    FN
                                </div>
                            )}
                        </div>

                        {/* Available badge */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.45, type: 'spring', stiffness: 260, damping: 20 }}
                            className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 whitespace-nowrap"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">Available for hire</span>
                        </motion.div>
                    </motion.div>

                    {/* Info card */}
                    <motion.div
                        {...fadeUp(0.3)}
                        className="w-full mt-3 p-5 bg-white dark:bg-gray-800/70 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm space-y-3.5"
                    >
                        <div className="flex items-center gap-2.5 text-sm">
                            <span className="text-brand-accent font-bold">▸</span>
                            <span className="text-gray-500 dark:text-gray-400">Currently at</span>
                            <span className="text-gray-900 dark:text-gray-100 font-semibold">Cassetex</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400">
                            <svg className="w-4 h-4 text-brand-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Dhaka, Bangladesh
                        </div>

                        <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                            <div className="text-xs text-gray-400 dark:text-gray-500 mb-2.5 font-semibold uppercase tracking-wider">Primary Stack</div>
                            <div className="flex flex-wrap gap-1.5">
                                {stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2.5 py-1 bg-blue-50 dark:bg-blue-950/40 text-brand-primary dark:text-blue-400 rounded-lg font-medium border border-blue-100 dark:border-blue-900/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </header>
    )
}
