import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import './Stats.css';

const StatItem = ({ endValue, label, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, { stiffness: 50, damping: 20 });
  
  // Transform the raw spring value to a whole number string
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      springValue.set(endValue);
    }
  }, [isInView, endValue, springValue]);

  return (
    <div className="stat-item card" ref={ref}>
      <div className="stat-number hero-font">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="stat-label display">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="stats-section section" id="stats">
      <div className="container">
        <div className="stats-grid">
          <StatItem endValue={15} label="Projects Built" suffix="+" />
          <StatItem endValue={95} label="Model Accuracy" suffix="%" />
          <StatItem endValue={300} label="Community Members Led" suffix="+" />
          <StatItem endValue={10} label="Tech Stack Tools" suffix="+" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
