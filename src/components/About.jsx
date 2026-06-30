import { motion } from 'framer-motion';
import { Brain, Code2, Camera, Video, Users, Cpu } from 'lucide-react';
import './About.css';

const identities = [
  { icon: Code2,  label: 'Full-Stack Dev',    color: 'var(--violet)' },
  { icon: Brain,  label: 'AI Engineer',        color: 'var(--cyan)'   },
  { icon: Cpu,    label: 'ML Enthusiast',      color: 'var(--pink)'   },
  { icon: Camera, label: 'Photographer',       color: 'var(--violet-lt)' },
  { icon: Video,  label: 'Videographer',       color: 'var(--cyan-lt)'   },
  { icon: Users,  label: 'Community Builder',  color: 'var(--green)'  },
];

const About = () => (
  <section className="section about-section" id="about">
    <div className="container">
      <div className="about-grid">
        {/* Left: Text */}
        <div className="about-text">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Who I Am
          </motion.p>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Building at the
            <br />
            <span className="gradient-text">intersection of</span>
            <br />
            code & creativity.
          </motion.h2>

          <motion.p
            className="about-bio"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I'm <strong>Sheran Shah</strong> — a Full-Stack Developer and AI Explorer from Pakistan. 
            I craft elegant web experiences, train machine learning models, and lead communities 
            that push the boundaries of what's possible with technology.
          </motion.p>

          <motion.p
            className="about-bio"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Currently pursuing my BS in Information Technology at Bahria University, I've shipped 
            real products, interned at three tech companies, and organized Pakistan's largest 
            student AI event with over 1,100 attendees.
          </motion.p>

          <motion.p
            className="about-urdu urdu"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            خیال سے حقیقت تک — ایک کوڈ ایک بار میں
          </motion.p>
        </div>

        {/* Right: Identity Grid */}
        <div className="about-identities">
          {identities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="identity-card glass"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 150 }}
                whileHover={{ scale: 1.05, y: -4 }}
                style={{ '--icolor': item.color }}
              >
                <div className="identity-icon">
                  <Icon size={22} />
                </div>
                <span className="identity-label">{item.label}</span>
              </motion.div>
            );
          })}

          {/* Glow card */}
          <motion.div
            className="about-fun-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="fun-title">📍 Based in Pakistan</p>
            <p className="fun-sub">Bahria University, Islamabad</p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
