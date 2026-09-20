import { motion } from 'framer-motion';
import './Marquee.css';

const Marquee = () => {
  return (
    <section className="marquee-section">
      <div className="marquee-container">
        <motion.div
          className="marquee-content"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          <div className="marquee-group">
            <span className="marquee-text outline">SOFTWARE ENGINEER</span>
            <span className="marquee-dot">•</span>
            <span className="marquee-text">CREATIVE DEVELOPER</span>
            <span className="marquee-dot">•</span>
            <span className="marquee-text outline">AI ENTHUSIAST</span>
            <span className="marquee-dot">•</span>
          </div>
          <div className="marquee-group" aria-hidden="true">
            <span className="marquee-text outline">SOFTWARE ENGINEER</span>
            <span className="marquee-dot">•</span>
            <span className="marquee-text">CREATIVE DEVELOPER</span>
            <span className="marquee-dot">•</span>
            <span className="marquee-text outline">AI ENTHUSIAST</span>
            <span className="marquee-dot">•</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
