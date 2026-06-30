import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code2, Download } from 'lucide-react';
import AnimatedMascot from './AnimatedMascot';
import MagneticButton from './MagneticButton';
import './Hero.css';

const taglines = [
  { text: 'Nokri na mili toh raksha he sahi', urdu: true  },
  { text: 'Building ideas into reality.',      urdu: false },
  { text: 'Desi aesthetics. Modern tech.',     urdu: false },
  { text: 'کوڈ میرا ہنر، تخلیق میری پہچان',   urdu: true  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % taglines.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero-section section" id="home">
      <div className="container hero-container">
        
        {/* Mascot */}
        <AnimatedMascot />

        {/* Content Wrapper for Staggered Animation */}
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Status badge */}
          <motion.div className="hero-badge display" variants={staggerItem}>
            <span className="badge-dot" /> Open to work
          </motion.div>

          {/* Name */}
          <motion.h1 className="hero-name hero-font" variants={staggerItem}>
            Sheran<br /><span className="name-red">Shah</span>
          </motion.h1>

          {/* Rotating tagline */}
          <motion.div className="hero-tagline-wrap" variants={staggerItem}>
            <AnimatePresence mode="wait">
              <motion.p
                key={idx}
                className={`hero-tagline ${taglines[idx].urdu ? 'urdu' : ''}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit  ={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {taglines[idx].text}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="hero-cta" variants={staggerItem}>
            <MagneticButton href="#projects" className="btn btn-dark">
              <Code2 size={18} /> View Projects
            </MagneticButton>
            <MagneticButton href="/Sheran_Shah_CV.pdf" download className="btn btn-yellow">
              <Download size={18} /> Download CV
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="hero-scroll"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={28} /> Scroll
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
