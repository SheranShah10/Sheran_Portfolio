import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, BrainCircuit, ChevronRight } from 'lucide-react';
import './SkillTree.css';

const tree = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Code2,
    color: 'var(--violet)',
    branches: [
      { name: 'React.js',         level: 90 },
      { name: 'TypeScript',       level: 80 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'HTML5 / CSS3',      level: 95 },
      { name: 'Framer Motion',    level: 85 },
      { name: 'Tailwind CSS',     level: 80 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Database,
    color: 'var(--cyan)',
    branches: [
      { name: 'Node.js',          level: 85 },
      { name: 'Express.js',       level: 80 },
      { name: 'MongoDB',          level: 75 },
      { name: 'C++',              level: 90 },
      { name: 'RESTful APIs',     level: 85 },
      { name: 'Python',           level: 80 },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Data',
    icon: BrainCircuit,
    color: 'var(--pink)',
    branches: [
      { name: 'Scikit-learn',       level: 85 },
      { name: 'Pandas / NumPy',     level: 80 },
      { name: 'AI Agents',          level: 75 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'LLM Integration',   level: 80 },
      { name: 'Data Preprocessing', level: 85 },
    ],
  },
];

const SkillTree = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section className="section skill-section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Technical Arsenal</p>
          <h2 className="section-title">Skill<br /><span className="gradient-text">Tree</span></h2>
        </motion.div>

        <div className="tree-container">
          {/* Trunk line */}
          <div className="tree-trunk" />

          {tree.map((node, idx) => {
            const Icon = node.icon;
            const isOpen = openId === node.id;

            return (
              <motion.div
                key={node.id}
                className="tree-node"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Root / parent node */}
                <motion.button
                  className={`tree-root glass ${isOpen ? 'is-open' : ''}`}
                  onClick={() => toggle(node.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ '--ncolor': node.color }}
                >
                  <div className="tree-root-left">
                    <div className="tree-root-icon">
                      <Icon size={20} />
                    </div>
                    <span className="tree-root-label">{node.label}</span>
                    <span className="tree-root-count">{node.branches.length} skills</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="tree-chevron"
                  >
                    <ChevronRight size={18} />
                  </motion.div>
                </motion.button>

                {/* Branch connector line */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="tree-branch-connector"
                      style={{ '--ncolor': node.color }}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </AnimatePresence>

                {/* Branches (child skills) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="tree-branches"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {node.branches.map((b, i) => (
                        <motion.div
                          key={b.name}
                          className="tree-leaf"
                          style={{ '--ncolor': node.color }}
                          initial={{ opacity: 0, x: -20, scale: 0.9 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: -20, scale: 0.9 }}
                          transition={{ delay: i * 0.05, type: 'spring', stiffness: 200 }}
                        >
                          {/* Branch line */}
                          <div className="leaf-branch-line" />

                          {/* Leaf node */}
                          <div className="leaf-content glass">
                            <div className="leaf-dot" />
                            <span className="leaf-name">{b.name}</span>
                            <div className="leaf-bar-track">
                              <motion.div
                                className="leaf-bar-fill"
                                initial={{ width: 0 }}
                                animate={{ width: `${b.level}%` }}
                                transition={{ delay: i * 0.05 + 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillTree;
