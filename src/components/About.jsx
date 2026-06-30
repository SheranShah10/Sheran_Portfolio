import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Identity.
        </motion.h2>
        
        <div className="glass-panel about-card">
          <p>
            I'm a <strong>Builder of Digital Experiences</strong>. Currently pursuing my BS in Information Technology at Bahria University, I thrive at the intersection of design, code, and artificial intelligence.
          </p>
          <p>
            My curiosity drives me to explore everything from full-stack web architectures to machine learning models. I don't just write code; I build solutions that people love to interact with.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
