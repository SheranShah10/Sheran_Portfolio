import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import './Projects.css';

const projects = [
  { emoji: '✈️', title: 'Booking Management System',  desc: 'CLI-based travel management with advanced OOP and File I/O for persistent storage.',     tech: ['C++', 'OOP', 'File I/O'],         github: 'https://github.com/SyedSheran10/Booking-Management-System-C-', bg: 'var(--red)'    },
  { emoji: '🍕', title: 'Pizzeria Web App',           desc: 'Interactive pizza ordering app with dynamic DOM and responsive design.',                  tech: ['HTML', 'CSS', 'JavaScript'],       github: 'https://github.com/SyedSheran10/pizzeria',                     bg: 'var(--yellow)', dark: true },
  { emoji: '📚', title: 'Student Grading System',    desc: 'Academic management tool with structured data processing and conditional logic.',          tech: ['C++', 'Logic', 'Data Structures'], github: 'https://github.com/SyedSheran10/Student-Grading-System',       bg: 'var(--green)'  },
  { emoji: '🧠', title: 'Psychology Website',         desc: 'A clean platform for psychology professionals with strong UI/UX focus.',                   tech: ['HTML', 'CSS', 'JS', 'UI/UX'],     github: 'https://github.com/SheranShah10/psychology-website',           bg: 'var(--blue)'   },
];

const Projects = () => (
  <section className="section projects-section" id="projects">
    <div className="container">
      <h2 className="section-title display">My Projects</h2>
      <p className="proj-subtitle urdu">کام ایسا کرو کہ لوگ یاد رکھیں</p>

      <div className="proj-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="proj-card card"
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
            whileHover={{ rotate: 1.5, scale: 1.02 }}
          >
            {/* Coloured header */}
            <div className="proj-top" style={{ background: p.bg }}>
              <span className="proj-emoji">{p.emoji}</span>
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
      </div>
    </div>
  </section>
);

export default Projects;
