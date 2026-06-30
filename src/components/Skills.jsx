import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: "Frontend Ecosystem",
    color: "var(--neon-cyan)",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "Bootstrap", level: "Intermediate" },
      { name: "jQuery", level: "Intermediate" }
    ]
  },
  {
    title: "Backend & DB",
    color: "var(--neon-purple)",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "REST APIs", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "C++", level: "Advanced" }
    ]
  },
  {
    title: "Data Science & AI",
    color: "var(--neon-pink)",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Pandas/NumPy", level: "Intermediate" },
      { name: "Scikit-learn", level: "Intermediate" },
      { name: "Regression Models", level: "Advanced" },
      { name: "TabNet/PCA", level: "Intermediate" }
    ]
  },
  {
    title: "Tools & Workflow",
    color: "var(--neon-green)",
    skills: [
      { name: "Git/GitHub", level: "Advanced" },
      { name: "Agile/Scrum", level: "Intermediate" },
      { name: "CodeSandbox", level: "Intermediate" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient-alt"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Skills Universe
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="glass-panel skill-cluster"
              style={{ '--cluster-color': category.color }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h3 className="cluster-title">{category.title}</h3>
              <div className="chips-container">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    className="skill-chip"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      boxShadow: `0 0 15px ${category.color}40`
                    }}
                  >
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
