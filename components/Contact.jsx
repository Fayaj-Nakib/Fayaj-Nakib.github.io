export default function Contact() {
    return (
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p className="text-gray-600 mb-8">Get in touch for opportunities or collaboration</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-xl shadow-sm">
                    <h3 className="font-semibold text-lg">Get in touch</h3>
                    <p className="mt-3 text-gray-700">
                        <a href="mailto:nakibfayaj99@gmail.com" className="text-brand-primary hover:underline">nakibfayaj99@gmail.com</a>
                    </p>
                    <p className="mt-1 text-gray-700">
                        <a href="https://www.linkedin.com/in/fayaj-nakib/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">LinkedIn Profile</a>
                    </p>
                </div>
                <form className="p-6 bg-white rounded-xl shadow-sm">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                    <label className="block text-sm font-medium text-gray-700 mt-3">Email</label>
                    <input type="email" className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                    <label className="block text-sm font-medium text-gray-700 mt-3">Message</label>
                    <textarea className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary" rows="4"></textarea>
                    <button type="submit" className="mt-4 px-4 py-2 bg-brand-primary text-white rounded hover:opacity-90 transition-opacity">Send</button>
                </form>
            </div>
        </section>
    )
}