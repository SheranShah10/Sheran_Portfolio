import { useScroll, useSpring, motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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

  // Rickshaw Cursor logic (only shows when hovering interactive elements)
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      const isInteractive = e.target.closest('a, button, input, textarea, .nav-item, .skill-tab, .proj-card, .j-card, .btn');
      setIsHovering(isInteractive !== null);
    };
    
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  return (
    <div className={`app-wrap ${isDark ? 'dark' : ''}`}>
      {/* Rickshaw Cursor */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'fixed',
              top: mousePos.y - 12,
              left: mousePos.x,
              pointerEvents: 'none',
              zIndex: 99999,
              width: 50,
              filter: isDark ? 'drop-shadow(2px 2px 0px #F5F0E8)' : 'drop-shadow(2px 2px 0px #111)',
              transform: 'scaleX(-1)',
            }}
          >
            <img src="/rickshaw_cursor_transparent.png" alt="cursor" style={{ width: '100%', display: 'block' }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Navbar isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      <Hero />
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
