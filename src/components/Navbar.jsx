import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Experience", to: "experience" },
        { name: "Blog", to: "blog" },
        { name: "Contact", to: "contact" },
    ];

    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    const mobileMenuVariants = {
        closed: { opacity: 0, x: "100%" },
        open: { opacity: 1, x: 0 },
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            variants={variants}
            aria-label="Main navigation"
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-primary/80 backdrop-blur-md border-b border-light/10 shadow-lg py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-bold cursor-pointer font-poppins"
                    aria-label="Go to top of page"
                >
                    <span className="text-white">Arrafi</span>
                    <span className="text-secondary-400 text-gradient">.dev</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                            activeClass="text-accent"
                            className="text-slate-300 hover:text-accent font-medium cursor-pointer transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white text-2xl focus:outline-none"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <RiCloseLine aria-hidden="true" /> : <RiMenu4Line aria-hidden="true" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={mobileMenuVariants}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white text-3xl"
                        >
                            <RiCloseLine />
                        </button>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl text-slate-300 hover:text-accent font-semibold cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
