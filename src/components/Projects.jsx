import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, link, github, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            viewport={{ once: true }}
        >
            <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.02}
                transitionSpeed={400}
                glareEnable={true}
                glareMaxOpacity={0.2}
                className="h-full"
            >
                <div className="bg-secondary/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full flex flex-col hover:border-accent/40 transition-all duration-300 group relative overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{title}</h3>
                            <div className="flex gap-3">
                                {github && (
                                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label={`View ${title} on GitHub`}>
                                        <FaGithub className="text-xl" aria-hidden="true" />
                                    </a>
                                )}
                                {link && (
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label={`Visit ${title} live demo`}>
                                        <FaExternalLinkAlt className="text-lg" aria-hidden="true" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="text-slate-300 mb-6 flex-grow leading-relaxed text-sm">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {tags.map((tag, index) => (
                                <span key={index} className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "YouTube Manager",
            description: "A YouTube channel management application for organizing and managing video content efficiently. Features include video tracking, playlist management, and a clean user interface.",
            tags: ["Python", "SQL", "CLI", "Database"],
            github: "https://github.com/ArrafiNurHafiz/youtube-manager",
        },
        {
            title: "Multi-node Monitoring Dashboard",
            description: "Real-time infrastructure monitoring solution visualizing CPU, RAM, and Network usage across multiple servers. Includes alert systems and historical data analysis.",
            tags: ["Vue.js", "Node.js", "Socket.io", "InfluxDB"],
            github: "https://github.com/ArrafiNurHafiz/Multi-node-Monitoring-Dashboard",
        },
        {
            title: "Portfolio Website",
            description: "A modern, responsive personal portfolio website built with React and Tailwind CSS. Features smooth animations, particle effects, and a sleek dark theme design.",
            tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
            github: "https://github.com/ArrafiNurHafiz/portfolio",
        },
    ];

    return (
        <section id="projects" className="py-20 bg-dark relative overflow-hidden" aria-label="Featured Projects">
            {/* Background Accents */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Highlighting some of the technical projects and solutions I have developed.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} delay={index * 0.2} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
