import { useScroll, useSpring, motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ScrollJourney from './components/ScrollJourney';
import SkillTree from './components/SkillTree';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import CommandCenter from './components/CommandCenter';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Dark mode state
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, [isDark]);

  return (
    <div className={`app-wrap ${isDark ? 'dark' : ''}`}>
      {/* Scroll progress bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Navbar isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      <Hero />
      <Stats />
      <ScrollJourney />
      <SkillTree />
      <Projects />
      <Contact />
      <Chatbot />
      <CommandCenter />
    </div>
  );
}

export default App;
