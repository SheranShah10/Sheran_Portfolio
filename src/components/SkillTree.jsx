import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, BrainCircuit } from 'lucide-react';
import './SkillTree.css';

const categories = [
  { id: 'frontend', label: 'Frontend',  icon: Code2,        color: 'var(--violet)',   skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Framer Motion', 'Tailwind CSS'] },
  { id: 'backend',  label: 'Backend',   icon: Database,     color: 'var(--cyan)',     skills: ['Node.js', 'Express.js', 'MongoDB', 'C++', 'RESTful APIs', 'Python'] },
  { id: 'ai',       label: 'AI & Data', icon: BrainCircuit, color: 'var(--pink)',     skills: ['Scikit-learn', 'Pandas / NumPy', 'AI Agents', 'Prompt Engineering', 'LLM Integration', 'Data Preprocessing'] },
];

const SkillTree = () => {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section className="section skill-section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Technical Arsenal</p>
          <h2 className="section-title">Skills &<br /><span className="gradient-text">Expertise</span></h2>
        </motion.div>

        {/* Tab Selector */}
        <div className="skill-tabs">
          {categories.map((c, i) => {
            const Icon = c.icon;
            return (
              <button
                key={c.id}
                className={`skill-tab ${active === i ? 'active' : ''}`}
                style={{ '--tab-color': c.color }}
                onClick={() => setActive(i)}
              >
                <Icon size={16} />
                <span>{c.label}</span>
                {active === i && (
                  <motion.div
                    className="tab-indicator"
                    layoutId="skillTabIndicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {cat.skills.map((s, i) => (
              <motion.div
                key={s}
                className="skill-chip glass"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.06, y: -3 }}
                style={{ '--chip-color': cat.color }}
              >
                <div className="chip-dot" />
                <span>{s}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillTree;
