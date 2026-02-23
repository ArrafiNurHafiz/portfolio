import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    // Handling form submission (demo only)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., emailjs or similar)
        alert("Thanks for your message! This is a demo form.");
    };

    return (
        <section id="contact" className="py-20 bg-primary relative" aria-label="Contact">
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-[80px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss network architecture? Let's connect.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/3 flex flex-col gap-8"
                    >
                        <div className="bg-secondary/30 p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>

                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-accent/10 rounded-full text-accent mt-1">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="text-slate-200 font-medium">Location</h4>
                                    <p className="text-slate-400">Yogyakarta, Indonesia</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-accent/10 rounded-full text-accent mt-1">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="text-slate-200 font-medium">Email</h4>
                                    <p className="text-slate-400 hover:text-accent transition-colors">
                                        <a href="mailto:arrafinur3@gmail.com">arrafinur3@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-secondary/30 p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-6 text-white">Social Profiles</h3>
                            <div className="flex gap-4">
                                <a href="https://github.com/ArrafiNurHafiz" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300" aria-label="GitHub profile">
                                    <FaGithub className="text-xl" aria-hidden="true" />
                                </a>
                                <a href="https://www.linkedin.com/in/arrafi-nur-hafiz-3a2a802b8/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300" aria-label="LinkedIn profile">
                                    <FaLinkedin className="text-xl" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-2/3"
                    >
                        <form onSubmit={handleSubmit} className="bg-secondary/20 p-8 rounded-2xl border border-white/5 glass">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-slate-300 mb-2 text-sm font-medium">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full bg-primary/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-300 mb-2 text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full bg-primary/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-slate-300 mb-2 text-sm font-medium">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Project Inquiry"
                                    className="w-full bg-primary/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-slate-300 mb-2 text-sm font-medium">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-primary/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent hover:bg-cyan-500 text-primary font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-accent/20"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
