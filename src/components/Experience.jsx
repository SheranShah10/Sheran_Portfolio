import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Web Developer Intern",
    company: "GS TEN",
    duration: "Aug 2024 – Oct 2024",
    built: "Built front-end components for client-facing websites and connected UI to APIs.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "AJAX"],
    impact: "Improved UI consistency and successfully integrated multiple backend APIs for seamless data flow.",
    color: 'var(--violet)',
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "CodexCue",
    duration: "Jul 2024 – Aug 2024",
    built: "Developed reusable React components for a live SaaS product in an Agile workflow.",
    tech: ["React Hooks", "Axios", "GitHub", "Agile"],
    impact: "Improved UI load times by 30% through efficient component structuring and state management.",
    color: 'var(--cyan)',
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Prodigy",
    duration: "Jul 2024 – Aug 2024",
    built: "Created interactive front-end features and optimized web forms.",
    tech: ["jQuery", "JavaScript", "DOM Manipulation"],
    impact: "Enhanced performance and DOM manipulation speeds, leading to a smoother user experience.",
    color: 'var(--pink)',
  },
];

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Work History</p>
          <h2 className="section-title">Professional<br /><span className="gradient-text">Experience</span></h2>
        </motion.div>

        <div className="exp-timeline">
          <div className="exp-line" />
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="exp-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: idx * 0.15 }}
            >
              <div className="exp-dot" style={{ '--ecolor': exp.color }}>
                <Briefcase size={14} />
              </div>

              <motion.div
                className="exp-card glass"
                layout
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                whileHover={{ scale: 1.01 }}
                style={{ '--ecolor': exp.color }}
              >
                <motion.div layout className="exp-top">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company gradient-text">{exp.company}</h4>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-date">
                      <Calendar size={13} /> {exp.duration}
                    </span>
                    <button className="exp-toggle">
                      {expandedId === exp.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {expandedId === exp.id && (
                    <motion.div
                      className="exp-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="exp-detail-block">
                        <h5>What I Built</h5>
                        <p>{exp.built}</p>
                      </div>
                      <div className="exp-detail-block">
                        <h5>Impact</h5>
                        <p>{exp.impact}</p>
                      </div>
                      <div className="exp-tech-row">
                        {exp.tech.map((t, i) => (
                          <span key={i} className="pill">{t}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="exp-accent" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
