export default function ProjectCard({ title, desc, tags, github, live }) {
    return (
        <div className="p-5 bg-white rounded-xl shadow-sm hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="mt-3 text-sm text-gray-700">{desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">{tag}</span>
                ))}
            </div>
            <div className="mt-4 flex gap-3">
                {github && <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-primary border border-brand-primary px-3 py-1 rounded hover:bg-brand-primary hover:text-white transition-colors">GitHub</a>}
                {live && <a href={live} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 border px-3 py-1 rounded hover:bg-gray-100 transition-colors">Live</a>}
            </div>
        </div>
    )
}