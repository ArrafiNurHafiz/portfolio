import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import img from '../assets/image.png';

const About = () => {
    // Using intersection observer to trigger animations when in view
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="about" className="py-20 relative bg-secondary/30">
            {/* Blurry background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6" ref={ref}>
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Left Side - Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12 duration-300"></div>
                            <div className="relative bg-primary p-2 rounded-2xl border border-white/10 shadow-xl overflow-hidden glass">
                                <img
                                    src={img}
                                    alt="Arrafi Nur Hafiz"
                                    className="w-full h-auto rounded-xl object-cover object-[center_25%] aspect-[4/3]"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-gradient">Me</span>
                        </h2>

                        <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                            Hi, I'm <span className="text-accent font-medium">Arrafi Nur Hafiz</span>, a System Information student at Universitas Teknologi Digital Indonesia (entering 2024).
                            I have a deep passion for building robust digital infrastructures and interactive web applications.
                        </p>

                        <p className="text-slate-400 mb-8 leading-relaxed">
                            My journey bridges the gap between <span className="text-slate-200">Network Engineering</span> and <span className="text-slate-200">Software Development</span>.
                            I enjoy solving complex problems, from configuring secure networks (Cisco, Mikrotik) to deploying scalable applications using Docker and modern web technologies.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-accent/30 transition-colors">
                                <h3 className="text-xl font-bold text-accent mb-1">2024</h3>
                                <p className="text-sm text-slate-400">Started Journey</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-accent/30 transition-colors">
                                <h3 className="text-xl font-bold text-accent mb-1">5+</h3>
                                <p className="text-sm text-slate-400">Projects Built</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
