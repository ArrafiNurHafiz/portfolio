import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCertificate } from 'react-icons/fa';

const timelineData = [
    {
        type: 'education',
        icon: FaGraduationCap,
        title: 'Sistem Informasi',
        organization: 'Universitas Teknologi Digital Indonesia',
        period: '2024 — Present',
        description: 'Menempuh pendidikan S1 Sistem Informasi dengan fokus pada pengembangan software, jaringan komputer, dan arsitektur sistem.',
    },
    {
        type: 'experience',
        icon: FaBriefcase,
        title: 'Freelance Developer',
        organization: 'Self-Employed',
        period: '2024 — Present',
        description: 'Membangun berbagai project web application, monitoring dashboard, dan sistem manajemen menggunakan React, Node.js, dan Python.',
    },
    {
        type: 'education',
        icon: FaGraduationCap,
        title: 'Ilmu Pengetahuan Alam (IPA)',
        organization: 'SMAN 1 Jatisrono',
        period: '2021 — 2024',
        description: 'Menyelesaikan pendidikan menengah atas di jurusan IPA dengan fokus pada Matematika, Fisika, Kimia, dan Biologi. Mengembangkan kemampuan berpikir analitis dan problem-solving yang menjadi fondasi kuat dalam dunia teknologi.',
    },
];

const TimelineItem = ({ item, index }) => {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`flex items-start gap-6 mb-10 md:mb-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} md:text-${isLeft ? 'right' : 'left'}`}
        >
            {/* Content */}
            <div className="flex-1">
                <div className="bg-secondary/30 p-5 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300 group">
                    <div className="flex items-center gap-2 mb-2">
                        <item.icon className="text-accent text-lg" aria-hidden="true" />
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 capitalize">
                            {item.type}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-accent/80 text-sm font-medium mb-1">{item.organization}</p>
                    <p className="text-slate-500 text-xs mb-3">{item.period}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-secondary/30 relative" aria-label="Experience and Education">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Experience & <span className="text-gradient">Education</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My journey in tech — education, hands-on experience, and continuous learning.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent md:-translate-x-px"></div>

                    {timelineData.map((item, index) => (
                        <div key={index} className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 mb-8 last:mb-0">
                            {/* Dot */}
                            <div className="absolute left-3 md:left-1/2 top-6 w-3 h-3 bg-accent rounded-full ring-4 ring-primary md:-translate-x-1.5 z-10"></div>

                            {index % 2 === 0 ? (
                                <>
                                    <TimelineItem item={item} index={index} />
                                    <div className="hidden md:block"></div>
                                </>
                            ) : (
                                <>
                                    <div className="hidden md:block"></div>
                                    <TimelineItem item={item} index={index} />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
