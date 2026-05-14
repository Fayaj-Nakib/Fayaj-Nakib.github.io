const GRADIENTS = [
    'from-blue-600 to-blue-400',
    'from-indigo-600 to-violet-500',
    'from-blue-700 to-cyan-500',
    'from-slate-700 to-blue-500',
    'from-violet-600 to-blue-500',
    'from-emerald-600 to-teal-400',
    'from-blue-500 to-indigo-600',
]

export default function ProjectCard({ title, desc, tags, github, live, year, index = 0 }) {
    const grad = GRADIENTS[index % GRADIENTS.length]

    return (
        <div className="group relative h-full flex flex-col bg-white dark:bg-gray-800/70 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">

            {/* Gradient top bar — always visible, unique per card */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${grad} flex-shrink-0`} />

            <div className="p-6 flex flex-col flex-1">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br ${grad} shadow-md flex-shrink-0`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    {year && (
                        <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 px-2.5 py-1 rounded-full border border-gray-100 dark:border-gray-700 whitespace-nowrap flex-shrink-0">
                            {year}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors duration-200 mb-2 leading-snug">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
                    {desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="text-[11px] px-2.5 py-1 bg-blue-50 dark:bg-blue-950/40 text-brand-primary dark:text-blue-400 rounded-lg font-medium border border-blue-100 dark:border-blue-900/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                {(github || live) && (
                    <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors"
                                aria-label={`View ${title} on GitHub`}
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                Code
                            </a>
                        )}
                        {live && (
                            <a
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors"
                                aria-label={`View ${title} live`}
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Demo
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
