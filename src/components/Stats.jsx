import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import './Stats.css';

const stats = [
  { value: 15,   suffix: '+',  label: 'Projects Shipped',       color: 'var(--violet)'    },
  { value: 95,   suffix: '%',  label: 'ML Model Accuracy',      color: 'var(--cyan)'      },
  { value: 1100, suffix: '+',  label: 'AI Fest Attendees',      color: 'var(--pink)'      },
  { value: 3,    suffix: '',   label: 'Tech Internships',        color: 'var(--green)'     },
  { value: 10,   suffix: '+',  label: 'Technologies Mastered',  color: 'var(--violet-lt)' },
  { value: 300,  suffix: '+',  label: 'Community Members Led',  color: 'var(--cyan-lt)'   },
];

const AnimatedNumber = ({ value, suffix, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, v => Math.floor(v));

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, value, spring]);

  return (
    <span ref={ref} className="stat-value display" style={{ color }}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
};

const Stats = () => (
  <section className="stats-section" id="stats">
    <div className="stats-inner">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="stat-tile glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.04, y: -4 }}
              style={{ '--scolor': s.color }}
            >
              <AnimatedNumber value={s.value} suffix={s.suffix} color={s.color} />
              <p className="stat-label">{s.label}</p>
              <div className="stat-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
