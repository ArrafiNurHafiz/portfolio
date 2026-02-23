import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
            {/* Background Particles */}
            <ParticlesBackground />

            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-primary/30 z-0"></div>

            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-accent font-medium mb-4">
                        Hello, Welcome to My Portfolio
                    </h2>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                        I am <span className="text-gradient">Arrafi Nur Hafiz</span>
                    </h1>

                    <div className="text-2xl md:text-4xl text-slate-300 font-semibold mb-8 h-16 md:h-20">
                        <TypeAnimation
                            sequence={[
                                'Software Engineer',
                                2000,
                                'Network Engineer',
                                2000,
                                'System Architect',
                                2000,
                                'Full Stack Developer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Building scalable digital systems and crafting modern web experiences.
                        Passionate about Networking, Frontend Development, and System Architecture.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="px-8 py-3 bg-accent/10 border border-accent text-accent rounded-full font-medium hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-105 cursor-pointer"
                        >
                            View Projects
                        </Link>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer backdrop-blur-md"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
            >
                <Link to="about" smooth={true} duration={500} offset={-70} className="cursor-pointer text-slate-400 hover:text-accent transition-colors" aria-label="Scroll to About section">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
