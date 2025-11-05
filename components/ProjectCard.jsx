export default function ProjectCard({ title, desc, tags, github, live, year }) {
    return (
        <div className="group h-full p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col">
            <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-brand-primary transition-colors">{title}</h3>
                {year && (
                    <span className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                        {year}
                    </span>
                )}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-grow">{desc}</p>
            <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, idx) => (
                        <span 
                            key={idx} 
                            className="text-xs px-3 py-1 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 text-brand-primary rounded-lg font-medium border border-brand-primary/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3 pt-2 border-t border-gray-100">
                    {github && (
                        <a 
                            href={github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-1 text-sm text-brand-primary border border-brand-primary px-4 py-2 rounded-lg hover:bg-brand-primary hover:text-white transition-all duration-200 font-medium"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </a>
                    )}
                    {live && (
                        <a 
                            href={live} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-1 text-sm text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}