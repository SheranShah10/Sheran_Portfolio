import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './DotPath.css';

/**
 * Inspired by motion.zajno.com's animated ball that follows
 * an SVG path as you scroll. The dot moves along a curved path
 * and illuminates section titles as it passes through them.
 */

const DotPath = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Dot position along the path
  const dotProgress = useTransform(smoothProgress, [0, 1], [0, 1]);

  // Section labels that appear along the path
  const sections = [
    { label: 'Build', icon: '⚡', desc: 'Full-Stack Applications' },
    { label: 'Train', icon: '🧠', desc: 'Machine Learning Models' },
    { label: 'Lead',  icon: '🚀', desc: 'Tech Communities' },
    { label: 'Create', icon: '🎬', desc: 'Visual Stories' },
  ];

  return (
    <section className="dotpath-section" ref={containerRef}>
      <div className="dotpath-container">
        {/* SVG Path */}
        <svg
          className="dotpath-svg"
          viewBox="0 0 800 1000"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          {/* Background path (faded) */}
          <path
            d="M 600 0 
               C 600 50, 250 100, 250 200 
               C 250 300, 950 350, 950 450 
               C 950 550, 250 600, 250 700 
               C 250 800, 950 850, 950 950
               C 950 1000, 600 1000, 600 1000"
            className="dotpath-bg"
          />
          
          {/* Animated path (fills with gradient as you scroll) */}
          <motion.path
            d="M 600 0 
               C 600 50, 250 100, 250 200 
               C 250 300, 950 350, 950 450 
               C 950 550, 250 600, 250 700 
               C 250 800, 950 850, 950 950
               C 950 1000, 600 1000, 600 1000"
            className="dotpath-fill"
            style={{
              pathLength: dotProgress,
            }}
          />

          {/* The Dot */}
          <motion.circle
            r="14"
            className="dotpath-dot"
            style={{
              offsetPath: `path("M 600 0 C 600 50, 250 100, 250 200 C 250 300, 950 350, 950 450 C 950 550, 250 600, 250 700 C 250 800, 950 850, 950 950 C 950 1000, 600 1000, 600 1000")`,
              offsetDistance: useTransform(dotProgress, [0, 1], ['0%', '100%']),
            }}
          />

          {/* Dot glow */}
          <motion.circle
            r="36"
            className="dotpath-glow"
            style={{
              offsetPath: `path("M 600 0 C 600 50, 250 100, 250 200 C 250 300, 950 350, 950 450 C 950 550, 250 600, 250 700 C 250 800, 950 850, 950 950 C 950 1000, 600 1000, 600 1000")`,
              offsetDistance: useTransform(dotProgress, [0, 1], ['0%', '100%']),
            }}
          />
        </svg>

        {/* Section labels positioned along the path */}
        <div className="dotpath-labels">
          {sections.map((s, i) => {
            const progress = (i + 0.5) / sections.length;
            const opacity = useTransform(
              smoothProgress,
              [progress - 0.2, progress - 0.05, progress + 0.05, progress + 0.2],
              [0.1, 1, 1, 0.1]
            );
            const scale = useTransform(
              smoothProgress,
              [progress - 0.2, progress - 0.05, progress + 0.05, progress + 0.2],
              [0.9, 1.05, 1.05, 0.9]
            );
            
            const tops = ['17%', '42%', '67%', '92%'];
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                className={`dotpath-label ${isLeft ? 'is-left' : 'is-right'}`}
                style={{
                  top: tops[i],
                  opacity,
                  scale,
                }}
              >
                <span className="dotpath-icon">{s.icon}</span>
                <div>
                  <h3 className="dotpath-title display gradient-text">{s.label}</h3>
                  <p className="dotpath-desc">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DotPath;
