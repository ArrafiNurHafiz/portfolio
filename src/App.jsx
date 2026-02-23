import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Utilities
import ScrollProgress from './components/ScrollProgress';
// import ThemeToggle from './components/ThemeToggle';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
      offset: 100,
      disable: 'mobile' // Disable AOS on mobile for better performance
    });
  }, []);

  return (
    <div className="min-h-screen bg-primary text-slate-200 overflow-x-hidden relative selection:bg-accent/30 selection:text-accent font-sans">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>

      <Footer />
      {/* Theme Toggle is disabled by default for this dark-themed portfolio, but available if needed */}
      {/* <ThemeToggle /> */}
    </div>
  );
}

export default App;
