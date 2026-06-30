import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Web Developer Intern",
    company: "GS TEN",
    duration: "August 2024 – October 2024",
    built: "Built front-end components for client-facing websites and connected UI to APIs.",
    tech: ["HTML", "CSS", "Bootstrap", "Vanilla JavaScript", "AJAX"],
    impact: "Improved UI consistency and successfully integrated multiple backend APIs for seamless data flow."
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "CodexCue",
    duration: "July 2024 – August 2024",
    built: "Developed reusable React components for a live SaaS product in an Agile workflow.",
    tech: ["React Hooks", "Axios", "GitHub", "Agile"],
    impact: "Improved UI load times by 30% through efficient component structuring and state management."
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Prodigy",
    duration: "July 2024 – August 2024",
    built: "Created interactive front-end features and optimized web forms.",
    tech: ["jQuery", "JavaScript", "DOM Manipulation"],
    impact: "Enhanced performance and DOM manipulation speeds, leading to a smoother user experience."
  }
];

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Experience Timeline
        </motion.h2>

        <div className="timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
              
              <motion.div 
                className="glass-panel exp-card"
                layout
                onClick={() => toggleExpand(exp.id)}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div layout className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company text-gradient-alt">{exp.company}</h4>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-date flex-center gap-2">
                      <Calendar size={14} /> {exp.duration}
                    </span>
                    <button className="expand-btn">
                      {expandedId === exp.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {expandedId === exp.id && (
                    <motion.div 
                      className="exp-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="detail-section">
                        <h5>What I Built</h5>
                        <p>{exp.built}</p>
                      </div>
                      
                      <div className="detail-section">
                        <h5>Impact / Learning</h5>
                        <p>{exp.impact}</p>
                      </div>

                      <div className="tech-stack">
                        {exp.tech.map((t, i) => (
                          <span key={i} className="tech-tag">{t}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
