import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    emoji: '🧠',
    title: "Parkinson's ML Predictor (FYP)",
    desc: 'Final Year Project (FYP) focused on predicting Parkinson\'s disease from clinical datasets. This project is currently in progress, with ongoing work in data preprocessing and model training.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'In Progress'],
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

const ProjectCard = ({ p, variants }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="project-card glass"
      variants={variants}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        '--pcolor': p.color,
        rotateX,
        rotateY,
        transformPerspective: 1000
      }}
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
  );
};

const Projects = () => {
  return (
    <motion.section 
      className="section projects-section" 
      id="projects"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
    >
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
          <ProjectCard key={i} p={p} variants={cardVariants} />
        ))}
      </motion.div>
    </div>
    </motion.section>
  );
};

export default Projects;
