import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import './Projects.css';

const projects = [
  { 
    emoji: '🧠', 
    title: 'Parkinson\'s ML Predictor',  
    desc: 'Developed a robust Machine Learning model predicting Parkinson\'s disease with 95% accuracy using clinical datasets. Showcased strong data preprocessing and algorithmic evaluation skills.',     
    tech: ['Python', 'Scikit-learn', 'Pandas'],         
    github: 'https://github.com/SyedSheran10', // Placeholder as not provided
    bg: 'var(--red)'    
  },
  { 
    emoji: '✈️', 
    title: 'Booking Management Engine',  
    desc: 'Architected a CLI-based travel management system featuring advanced OOP principles and persistent File I/O storage, handling complex state and data flow.',     
    tech: ['C++', 'OOP', 'File I/O'],         
    github: 'https://github.com/SyedSheran10/Booking-Management-System-C-', 
    bg: 'var(--blue)'    
  },
  { 
    emoji: '🍕', 
    title: 'Pizzeria Interactive App',           
    desc: 'Built a responsive, interactive pizza ordering web application emphasizing dynamic DOM manipulation and seamless user experience.',                  
    tech: ['HTML', 'CSS', 'JavaScript'],       
    github: 'https://github.com/SyedSheran10/pizzeria',                     
    bg: 'var(--yellow)', 
    dark: true 
  },
  { 
    emoji: '📚', 
    title: 'Academic Grading System',    
    desc: 'Engineered an academic management tool processing structured student data using conditional logic and custom data structures for efficient retrieval.',          
    tech: ['C++', 'Logic', 'Data Structures'], 
    github: 'https://github.com/SyedSheran10/Student-Grading-System',       
    bg: 'var(--green)'  
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const Projects = () => (
  <section className="section projects-section" id="projects">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <h2 className="section-title display">My Projects</h2>
        <p className="proj-subtitle urdu">کام ایسا کرو کہ لوگ یاد رکھیں</p>
      </motion.div>

      <motion.div 
        className="proj-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="proj-card card"
            variants={cardVariants}
            whileHover={{ scale: 1.03, rotate: 1 }}
          >
            {/* Coloured header */}
            <div className="proj-top" style={{ background: p.bg }}>
              <motion.span 
                className="proj-emoji"
                whileHover={{ scale: 1.3, rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {p.emoji}
              </motion.span>
              <a href={p.github} target="_blank" rel="noreferrer" className="proj-gh-btn btn btn-white">
                <Code2 size={16} /> GitHub
              </a>
            </div>

            {/* Body */}
            <div className="proj-body">
              <h3 className="proj-title display">{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-pills">
                {p.tech.map((t, j) => <span key={j} className="pill">{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
