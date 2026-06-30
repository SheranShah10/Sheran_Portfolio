import { useEffect } from 'react';
import { useScroll, useSpring, motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DotPath from './components/DotPath';
import ScrollJourney from './components/ScrollJourney';
import SkillTree from './components/SkillTree';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CommandCenter from './components/CommandCenter';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="app-root">
      <Preloader />

      {/* Scroll progress bar */}
      <motion.div className="scroll-bar" style={{ scaleX }} />

      {/* Animated background */}
      <div className="bg-mesh" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="noise-overlay" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <DotPath />
        <ScrollJourney />
        <SkillTree />
        <Projects />
        <Experience />
        <Leadership />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
      <CommandCenter />
      <BackToTop />
    </div>
  );
}

export default App;
