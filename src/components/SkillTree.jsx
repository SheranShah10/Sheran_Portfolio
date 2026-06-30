import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, BrainCircuit } from 'lucide-react';
import './SkillTree.css';

const categories = [
  { id: 'frontend', label: 'FRONTEND', icon: Code2,        color: 'var(--blue)',   skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Framer Motion', 'Tailwind CSS'] },
  { id: 'backend',  label: 'BACKEND',  icon: Database,     color: 'var(--green)',  skills: ['Node.js', 'Express.js', 'MongoDB', 'C++', 'RESTful APIs'] },
  { id: 'ai',       label: 'AI & DATA',icon: BrainCircuit, color: 'var(--red)',    skills: ['Python', 'Pandas / NumPy', 'Scikit-learn', 'AI Agents', 'Prompt Engineering'] },
];

const SkillTree = () => {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section className="skill-section" id="skills">
      <motion.div 
        className="skill-layout"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        {/* ── Left: dark-green panel ── */}
        <div className="skill-left">
          <p className="skill-eyebrow display">WHAT I BRING</p>
          <p className="skill-intro">
            Delivering robust full-stack architectures, integrating cutting-edge AI solutions, 
            and driving community leadership — blending technical depth with creative vision.
          </p>

          <div className="skill-tabs">
            {categories.map((c, i) => {
              const Icon = c.icon;
              return (
                <button
                  key={c.id}
                  className={`skill-tab display ${active === i ? 'active' : ''}`}
                  style={{ '--accent': c.color }}
                  onClick={() => setActive(i)}
                >
                  <Icon size={18} /> {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Right: cream panel ── */}
        <div className="skill-right">
          <h2 className="skill-big display">TECHNICAL<br />ARSENAL</h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="skill-grid"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
            >
              {cat.skills.map((s, i) => (
                <motion.div
                  key={s}
                  className="skill-node card"
                  style={{ borderLeft: `5px solid ${cat.color}` }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.05, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  {s}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillTree;
