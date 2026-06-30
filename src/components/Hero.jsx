import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code2, Download } from 'lucide-react';
import './Hero.css';

const taglines = [
  { text: 'Nokri na mili toh raksha he sahi', urdu: true  },
  { text: 'Building ideas into reality.',      urdu: false },
  { text: 'Desi aesthetics. Modern tech.',     urdu: false },
  { text: 'کوڈ میرا ہنر، تخلیق میری پہچان',   urdu: true  },
];

const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % taglines.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero-section section" id="home">
      <div className="container hero-container">
        
        {/* Status badge */}
        <motion.div
          className="hero-badge display"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <span className="badge-dot" /> Open to work
        </motion.div>

        {/* Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="hero-name hero-font">Sheran<br /><span className="name-red">Shah</span></h1>

          {/* Rotating tagline */}
          <div className="hero-tagline-wrap">
            <AnimatePresence mode="wait">
              <motion.p
                key={idx}
                className={`hero-tagline ${taglines[idx].urdu ? 'urdu' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit  ={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {taglines[idx].text}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-dark">
              <Code2 size={18} /> View Projects
            </a>
            <a href="/Sheran_Shah_CV.pdf" download className="btn btn-yellow">
              <Download size={18} /> Download CV
            </a>
          </div>
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
