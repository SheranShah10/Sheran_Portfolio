import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    emoji: '🧠',
    title: "Parkinson's ML Predictor",
    desc: 'Built a robust ML model achieving 95% accuracy in predicting Parkinson\'s disease from clinical datasets. Demonstrated strong data preprocessing and algorithmic evaluation skills.',
    tech: ['Python', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/SyedSheran10',
    color: 'var(--pink)',
  },
  {
    emoji: '✈️',
    title: 'Booking Management Engine',
    desc: 'Architected a CLI-based travel management system with advanced OOP principles and persistent File I/O storage, handling complex state and data flow.',
    tech: ['C++', 'OOP', 'File I/O'],
    github: 'https://github.com/SyedSheran10/Booking-Management-System-C-',
    color: 'var(--violet)',
  },
  {
    emoji: '🍕',
    title: 'Pizzeria Interactive App',
    desc: 'Built a responsive, interactive pizza ordering web application emphasizing dynamic DOM manipulation and seamless user experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/SyedSheran10/pizzeria',
    color: 'var(--cyan)',
  },
  {
    emoji: '📚',
    title: 'Academic Grading System',
    desc: 'Engineered a management tool processing structured student data using conditional logic and custom data structures for efficient retrieval.',
    tech: ['C++', 'Logic', 'Data Structures'],
    github: 'https://github.com/SyedSheran10/Student-Grading-System',
    color: 'var(--green)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const Projects = () => (
  <section className="section projects-section" id="projects">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Selected Work</p>
        <h2 className="section-title">Featured<br /><span className="gradient-text">Projects</span></h2>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card glass"
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -6 }}
            style={{ '--pcolor': p.color }}
          >
            {/* Accent top line */}
            <div className="project-accent" />

            {/* Header */}
            <div className="project-header">
              <motion.span
                className="project-emoji"
                whileHover={{ scale: 1.3, rotate: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {p.emoji}
              </motion.span>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="project-link-btn">
                  <Code2 size={15} />
                </a>
              </div>
            </div>

            {/* Body */}
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>

            {/* Tech */}
            <div className="project-techs">
              {p.tech.map((t, j) => (
                <span key={j} className="pill">{t}</span>
              ))}
            </div>

            {/* Glow */}
            <div className="project-glow" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
