export default function Experience() {
    const items = [
        { 
            title: 'Associate Software Engineer', 
            org: 'Cassetex', 
            period: 'Feb 2025 - Present', 
            bullets: [
                'Built and deployed scalable web applications using Next.js, Laravel and PostgreSQL', 
                'Deployed production systems on Linux VPS using GitHub Actions and secure SSH pipelines'
            ] 
        },
        { 
            title: 'Junior Software Engineer', 
            org: 'Eutropia-IT', 
            period: 'Jul 2024 - Dec 2024', 
            bullets: [
                'Developed websites with Laravel & Next.js', 
                'Optimized API endpoints'
            ] 
        }
    ]
    return (
        <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
            <p className="text-gray-600 mb-8">Professional journey and achievements</p>
            <div className="mt-6 space-y-6">
                {items.map((it, idx) => (
                    <div key={idx} className="p-5 bg-white rounded-xl shadow-sm border-l-4 border-brand-primary hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                            <div>
                                <div className="font-semibold text-lg">{it.title}</div>
                                <div className="text-sm text-gray-600 mt-1">
                                    <span className="font-medium">{it.org}</span> • <span className="text-xs">{it.period}</span>
                                </div>
                            </div>
                        </div>
                        <ul className="mt-3 text-sm text-gray-700 space-y-1 ml-4">
                            {it.bullets.map((b, i) => (
                                <li key={i} className="list-disc">{b}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}