import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">
                        Get In Touch<span className="text-brand-accent">.</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">Let's discuss your next project or opportunity</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <h3 className="font-bold text-xl dark:text-white">Contact Information</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Email</div>
                                    <a href="mailto:nakibfayaj99@gmail.com" className="text-brand-primary dark:text-brand-accent hover:underline font-medium">nakibfayaj99@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Phone</div>
                                    <a href="tel:+8801920899997" className="text-gray-900 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-accent transition-colors font-medium">+880 1920 899997</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                <div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</div>
                                    <a href="https://www.linkedin.com/in/fayaj-nakib/" target="_blank" rel="noopener noreferrer" className="text-brand-primary dark:text-brand-accent hover:underline font-medium">linkedin.com/in/fayaj-nakib</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                <div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">GitHub</div>
                                    <a href="https://github.com/Fayaj-Nakib" target="_blank" rel="noopener noreferrer" className="text-brand-primary dark:text-brand-accent hover:underline font-medium">github.com/Fayaj-Nakib</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Location</div>
                                    <div className="text-gray-900 dark:text-gray-200 font-medium">Dhaka-1216, Bangladesh</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.form
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                        onSubmit={(e) => {
                            e.preventDefault()
                            const form = e.target
                            const formData = new FormData(form)
                            window.location.href = `mailto:nakibfayaj99@gmail.com?subject=${encodeURIComponent(formData.get('subject') || 'Contact from Portfolio')}&body=${encodeURIComponent(formData.get('message') || '')}`
                        }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            <h3 className="font-bold text-xl dark:text-white">Send a Message</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    required
                                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent focus:border-transparent transition-all" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    required
                                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent focus:border-transparent transition-all" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent focus:border-transparent transition-all" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                <textarea 
                                    name="message"
                                    required
                                    rows="5"
                                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent focus:border-transparent transition-all resize-none" 
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full px-6 py-3.5 bg-brand-primary dark:bg-brand-accent text-white rounded-lg hover:bg-brand-accent dark:hover:bg-blue-500 transition-all duration-300 font-semibold shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                Send Message
                            </button>
                        </div>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    )
}