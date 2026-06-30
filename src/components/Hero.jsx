import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ChevronDown, Code2, Download, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';
import './Hero.css';

const ROLES = ['Full-Stack Developer', 'AI Engineer', 'ML Enthusiast', 'Creative Technologist', 'Photographer & Videographer'];

// Letter-by-letter animation
const AnimatedWord = ({ word, className, delay = 0 }) => {
  const chars = word.split('');
  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block' }}
          initial={{ opacity: 0, y: 80, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: delay + i * 0.04,
            type: 'spring',
            stiffness: 100,
            damping: 15,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const heroRef = useRef(null);

  // Rotate roles
  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 3500);
    return () => clearInterval(t);
  }, []);

  // Mouse parallax for orbs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const orbX = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const orbY = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);

  const handleMouse = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top)  / rect.height - 0.5);
  };



  return (
    <section
      className="hero-section"
      id="home"
      ref={heroRef}
      onMouseMove={handleMouse}
    >
      {/* Hero-local gradient orbs (react to mouse) */}
      <motion.div className="hero-orb hero-orb-v" style={{ x: orbX, y: orbY }} />
      <motion.div className="hero-orb hero-orb-c" style={{ x: useTransform(orbX, v => -v), y: useTransform(orbY, v => -v) }} />

      <div className="container hero-container">
        {/* Badge */}
        <motion.div
          className="hero-badge glass pill-v"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <span className="badge-pulse" />
          <Sparkles size={13} /> Open to Work
        </motion.div>

        {/* Name */}
        <h1 className="hero-name display" style={{ perspective: 1000 }}>
          <AnimatedWord word="SHERAN" delay={0.3} className="hero-name-line" />
          <br />
          <AnimatedWord word="SHAH" delay={0.5} className="hero-name-line gradient-text" />
        </h1>

        {/* Role Switcher */}
        <div className="hero-role-wrap">
          <span className="hero-role-prefix text-md">I am a&nbsp;</span>
          <div className="hero-role-switcher">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                className="hero-role gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {ROLES[roleIdx]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Bio */}
        <motion.p
          className="hero-bio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Building elegant digital experiences from Pakistan 🇵🇰 — where clean code meets creative vision.
          <span className="urdu-inline">ہائر کر لو!</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <MagneticButton href="#projects" className="btn-primary">
            <Code2 size={16} /> View Projects
          </MagneticButton>
          <MagneticButton href="/Sheran_Shah_CV.pdf" download className="btn-outline">
            <Download size={16} /> Download CV
          </MagneticButton>
        </motion.div>


      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  );
};

export default Hero;
