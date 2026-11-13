export default function FeaturedProject({ title, summary, desc, tags, github, live, year, highlights = [] }) {
    return (
        <article className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/70 shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-5">
                <div className="p-6 sm:p-8 lg:p-10 md:col-span-3">
                    <p className="text-xs font-semibold tracking-wide text-brand-primary dark:text-brand-accent mb-4">Featured project · {year}</p>
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight text-gray-900 dark:text-white max-w-xl text-balance">{title}</h3>
                    <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300 max-w-xl">{summary || desc}</p>
                    <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-2">
                        {tags.map(tag => <li key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">{tag}</li>)}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-3">
                        {github && <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} on GitHub`}
                            className="inline-flex items-center justify-center min-h-11 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:border-brand-primary dark:hover:border-brand-accent">GitHub <span aria-hidden="true" className="ml-2">↗</span></a>}
                        {live && <a href={live} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} live demo`}
                            className="inline-flex items-center justify-center min-h-11 px-4 py-2 rounded-xl bg-brand-primary dark:bg-brand-accent text-sm font-semibold text-white dark:text-gray-950 hover:bg-emerald-800 dark:hover:bg-emerald-300">Live demo <span aria-hidden="true" className="ml-2">↗</span></a>}
                    </div>
                </div>
                <div className="md:col-span-2 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-6 sm:p-8 lg:p-10">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-6">Engineering highlights</h4>
                    <dl className="space-y-6">
                        {highlights.map(highlight => (
                            <div key={highlight.label} className="flex flex-col-reverse gap-2">
                                <dt className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{highlight.label}</dt>
                                <dd className={`${/^\d+$/.test(highlight.value) ? 'text-3xl' : 'text-lg'} font-semibold tabular-nums tracking-tight text-brand-primary dark:text-brand-accent`}>{highlight.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </article>
    )
}
