import ProjectCard from './ProjectCard'

export default function Projects() {
    const projects = [
        { 
            title: 'IELTS Preparation App', 
            desc: 'Reading, writing & vocabulary modules. Firebase auth & DB', 
            tags: ['React', 'Tailwind', 'Firebase'], 
            github: 'https://github.com/Fayaj-Nakib/IELTS-prep' 
        },
        { 
            title: 'I-SORT (Research)', 
            desc: 'IoT-powered autonomous product sorting robot for eCommerce', 
            tags: ['IoT', 'Python', 'Embedded'], 
            github: '' 
        },
        { 
            title: 'Car Dealer Web App', 
            desc: 'Inventory & sales management platform', 
            tags: ['Django', 'Python'], 
            github: 'https://github.com/sanjanaoythi/car_dealer' 
        },
        { 
            title: 'Human Disease Prediction', 
            desc: 'SVM model predicting diseases with 85% accuracy', 
            tags: ['ML', 'Python'], 
            github: 'https://github.com/Apurba0012/multiple_disease_prediction_webapp' 
        }
    ]
    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold mb-2">Selected Projects</h2>
            <p className="text-gray-600 mb-8">A small selection of recent work and research.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p, i) => (<ProjectCard key={i} {...p} />))}
            </div>
        </section>
    )
}