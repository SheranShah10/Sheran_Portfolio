import { useEffect } from 'react';
import { useScroll, useSpring, motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Marquee from './components/Marquee';
import ScrollJourney from './components/ScrollJourney';
import BentoSkills from './components/BentoSkills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CommandCenter from './components/CommandCenter';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import Scene3D from './components/Scene3D';
import SplashCursor from './components/SplashCursor';
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
      <SplashCursor />
      <Preloader />

      {/* Scroll progress bar */}
      <motion.div className="scroll-bar" style={{ scaleX }} />

      {/* 3D WebGL Background */}
      <Scene3D />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Marquee />
        <ScrollJourney />
        <BentoSkills />
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
