import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaLinux, FaDocker, FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiMysql, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiPostman } from 'react-icons/si';

const SkillBar = ({ name, percentage, icon: Icon, color, barColor }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div ref={ref} className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                    {Icon && <Icon className={`text-xl ${color}`} />}
                    <span className="text-slate-200 font-medium">{name}</span>
                </div>
                <span className="text-slate-400 text-sm">{percentage}%</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${percentage}%` } : {}}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: barColor }}
                ></motion.div>
            </div>
        </div>
    );
};

const Skills = () => {
    const skills = {
        backendDev: [
            { name: "Python", percentage: 85, icon: FaPython, color: "text-blue-500", barColor: "#3b82f6" },
            { name: "Node.js", percentage: 80, icon: FaNodeJs, color: "text-green-500", barColor: "#22c55e" },
            { name: "REST API", percentage: 85, icon: SiPostman, color: "text-orange-500", barColor: "#f97316" },
        ],
        frontend: [
            { name: "HTML/CSS", percentage: 95, icon: SiHtml5, color: "text-orange-600", barColor: "#ea580c" },
            { name: "JavaScript", percentage: 85, icon: SiJavascript, color: "text-yellow-400", barColor: "#facc15" },
            { name: "React", percentage: 80, icon: FaReact, color: "text-cyan-400", barColor: "#22d3ee" },
            { name: "Tailwind CSS", percentage: 90, icon: SiTailwindcss, color: "text-cyan-300", barColor: "#67e8f9" },
        ],
        devops: [
            { name: "Docker", percentage: 70, icon: FaDocker, color: "text-blue-400", barColor: "#60a5fa" },
            { name: "MySQL", percentage: 75, icon: SiMysql, color: "text-blue-600", barColor: "#2563eb" },
            { name: "Linux", percentage: 80, icon: FaLinux, color: "text-yellow-500", barColor: "#eab308" },
        ],
    };

    return (
        <section id="skills" className="py-20 bg-primary relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A showcase of my technical abilities in Backend Development, Frontend, and DevOps.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Backend Dev Column (formerly Networking) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-secondary/30 p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300"
                    >
                        <h3 className="text-xl font-bold mb-6 text-slate-100 flex items-center gap-2">
                            <FaServer className="text-accent" /> Backend Dev
                        </h3>
                        {skills.backendDev.map((skill, index) => (
                            <SkillBar key={index} {...skill} />
                        ))}
                    </motion.div>

                    {/* Frontend Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-secondary/30 p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300"
                    >
                        <h3 className="text-xl font-bold mb-6 text-slate-100 flex items-center gap-2">
                            <FaCode className="text-accent" /> Frontend Dev
                        </h3>
                        {skills.frontend.map((skill, index) => (
                            <SkillBar key={index} {...skill} />
                        ))}
                    </motion.div>

                    {/* DevOps & Tools Column (formerly Backend) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-secondary/30 p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300"
                    >
                        <h3 className="text-xl font-bold mb-6 text-slate-100 flex items-center gap-2">
                            <FaDocker className="text-accent" /> DevOps & Tools
                        </h3>
                        {skills.devops.map((skill, index) => (
                            <SkillBar key={index} {...skill} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
