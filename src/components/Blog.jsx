import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaArrowRight, FaTimes } from 'react-icons/fa';

import blogMonitoringImg from '../assets/blog_monitoring.png';
import blogDockerImg from '../assets/blog_docker.png';
import blogMikrotikImg from '../assets/blog_mikrotik.png';

const blogPosts = [
    {
        title: 'Membangun Monitoring Dashboard Multi-node',
        excerpt: 'Bagaimana saya membangun sistem monitoring real-time untuk memantau CPU, RAM, dan Network di beberapa server sekaligus menggunakan Vue.js dan Socket.io.',
        date: '2025-02-15',
        readTime: '5 min read',
        tags: ['Vue.js', 'Node.js', 'DevOps'],
        image: blogMonitoringImg,
        content: [
            'Monitoring infrastruktur server adalah hal krusial dalam menjaga kestabilan sistem. Dalam project ini, saya membangun sebuah dashboard monitoring multi-node yang mampu menampilkan data secara real-time.',
            'Stack yang digunakan meliputi Vue.js untuk frontend, Node.js dengan Socket.io untuk komunikasi real-time, dan InfluxDB sebagai time-series database untuk menyimpan historical data.',
            'Fitur utama mencakup visualisasi CPU usage, RAM consumption, dan Network throughput menggunakan chart library. Setiap node server mengirimkan metrics melalui agent yang berjalan di background.',
            'Sistem alert juga diimplementasikan — ketika CPU atau RAM melebihi threshold tertentu, dashboard akan menampilkan notifikasi warning secara otomatis.',
            'Project ini mengajarkan saya banyak tentang arsitektur event-driven, WebSocket communication, dan pentingnya data visualization yang efektif untuk monitoring.',
        ],
    },
    {
        title: 'Mengenal Docker untuk Developer Pemula',
        excerpt: 'Panduan lengkap memulai Docker — dari instalasi, membuat Dockerfile, hingga deploy aplikasi pertama menggunakan Docker Compose.',
        date: '2025-01-20',
        readTime: '7 min read',
        tags: ['Docker', 'DevOps', 'Tutorial'],
        image: blogDockerImg,
        content: [
            'Docker telah mengubah cara developer membangun, menguji, dan men-deploy aplikasi. Dengan containerization, kita bisa memastikan bahwa aplikasi berjalan konsisten di berbagai environment.',
            'Langkah pertama adalah memahami konsep dasar: Image vs Container. Image adalah blueprint atau template, sedangkan Container adalah instance yang berjalan dari image tersebut.',
            'Membuat Dockerfile cukup sederhana — kita mendefinisikan base image, meng-copy source code, menginstall dependencies, dan menentukan command untuk menjalankan aplikasi.',
            'Docker Compose mempermudah pengelolaan multi-container application. Dengan satu file docker-compose.yml, kita bisa mendefinisikan seluruh stack: web server, database, cache, dan service lainnya.',
            'Tips penting: gunakan .dockerignore untuk mengecualikan file yang tidak perlu, manfaatkan multi-stage build untuk mengoptimalkan ukuran image, dan selalu gunakan specific version tag untuk base image.',
        ],
    },
    {
        title: 'Setup Jaringan Enterprise dengan Mikrotik',
        excerpt: 'Step-by-step konfigurasi jaringan enterprise skala kecil menggunakan Mikrotik RouterOS — VLAN, Firewall, dan QoS.',
        date: '2024-12-10',
        readTime: '6 min read',
        tags: ['Networking', 'Mikrotik', 'Infrastructure'],
        image: blogMikrotikImg,
        content: [
            'Mikrotik RouterOS adalah platform yang powerful dan cost-effective untuk mengelola jaringan enterprise skala kecil hingga menengah. Dalam artikel ini, saya membagikan pengalaman setup jaringan dari nol.',
            'Langkah pertama adalah konfigurasi dasar: setting IP address, DHCP server, dan DNS. Mikrotik menyediakan interface Winbox yang memudahkan konfigurasi melalui GUI.',
            'VLAN (Virtual LAN) memungkinkan kita untuk mengsegmentasi jaringan secara logical. Misalnya, memisahkan traffic antara departemen IT, HR, dan Finance dalam satu infrastruktur fisik yang sama.',
            'Firewall rules di Mikrotik sangat granular — kita bisa mengatur filter rules, NAT, dan mangle untuk mengontrol traffic secara detail. Penting untuk menerapkan prinsip "deny all, allow specific".',
            'QoS (Quality of Service) memastikan bahwa bandwidth terdistribusi secara adil. Dengan Queue Tree dan Simple Queue, kita bisa memprioritaskan traffic yang critical seperti VoIP dan video conference.',
        ],
    },
];

const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
};

/* ─── Blog Detail Modal ─── */
const BlogModal = ({ post, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-10"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`Blog post: ${post.title}`}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative bg-primary border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                    aria-label="Close blog post"
                >
                    <FaTimes className="text-base sm:text-lg" aria-hidden="true" />
                </button>

                {/* Hero Image */}
                <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                        {post.tags.map((tag, i) => (
                            <span key={i} className="text-xs font-medium px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                        {post.title}
                    </h2>

                    {/* Meta */}
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/5">
                        <span className="flex items-center gap-1">
                            <FaCalendarAlt aria-hidden="true" />
                            <time dateTime={post.date}>{formatDate(post.date)}</time>
                        </span>
                        <span className="flex items-center gap-1">
                            <FaClock aria-hidden="true" />
                            {post.readTime}
                        </span>
                    </div>

                    {/* Body Paragraphs */}
                    <div className="space-y-3 sm:space-y-4">
                        {post.content.map((paragraph, i) => (
                            <p key={i} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

/* ─── Blog Card ─── */
const BlogCard = ({ post, index, onClick }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            aria-label={`Blog post: ${post.title}`}
            onClick={onClick}
        >
            <div className="bg-secondary/30 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                {/* Thumbnail */}
                <div className="relative w-full aspect-video overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col flex-grow p-4 sm:p-5 md:p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                        {post.tags.map((tag, i) => (
                            <span key={i} className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-accent transition-colors mb-2 sm:mb-3 leading-snug">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                        {post.excerpt}
                    </p>

                    {/* Meta + CTA */}
                    <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-white/5">
                        <div className="flex items-center gap-3 sm:gap-4 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                                <FaCalendarAlt aria-hidden="true" />
                                <time dateTime={post.date}>{formatDate(post.date)}</time>
                            </span>
                            <span className="flex items-center gap-1">
                                <FaClock aria-hidden="true" />
                                {post.readTime}
                            </span>
                        </div>
                        <span className="text-accent text-xs sm:text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read <FaArrowRight className="text-xs" aria-hidden="true" />
                        </span>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

/* ─── Blog Section ─── */
const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <section id="blog" className="py-12 sm:py-16 md:py-20 bg-dark relative overflow-hidden" aria-label="Blog">
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-12 md:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                        Latest <span className="text-gradient">Blog</span>
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
                        Sharing knowledge, tutorials, and my experience in the world of technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogCard
                            key={index}
                            post={post}
                            index={index}
                            onClick={() => setSelectedPost(post)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Blog;
