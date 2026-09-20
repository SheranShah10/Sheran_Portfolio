import { motion } from 'framer-motion';
import { Code2, Server, BrainCircuit, Wrench, Database, Layout } from 'lucide-react';
import './BentoSkills.css';

const skillCategories = [
  {
    title: 'Frontend Engineering',
    icon: Layout,
    color: '#60A5FA',
    colSpan: 2,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'TypeScript', 'HTML5/CSS3']
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    color: '#34D399',
    colSpan: 1,
    skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL']
  },
  {
    title: 'AI & Data Science',
    icon: BrainCircuit,
    color: '#F472B6',
    colSpan: 1,
    skills: ['Python', 'Pandas', 'Scikit-learn', 'LLMs', 'OpenAI API', 'Data Preprocessing']
  },
  {
    title: 'Databases',
    icon: Database,
    color: '#FBBF24',
    colSpan: 1,
    skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis']
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    color: '#A78BFA',
    colSpan: 1,
    skills: ['Git/GitHub', 'Docker', 'AWS', 'Vercel', 'Linux']
  },
  {
    title: 'Core Fundamentals',
    icon: Code2,
    color: '#94A3B8',
    colSpan: 2,
    skills: ['Data Structures', 'Algorithms', 'System Design', 'Agile/Scrum', 'Object-Oriented Programming']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const BentoSkills = () => {
  return (
    <section className="section bento-section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="section-label">Technical Arsenal</p>
          <h2 className="section-title">The<br /><span className="gradient-text">Tech Stack</span></h2>
        </motion.div>

        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={idx} 
                className={`bento-card col-span-${category.colSpan}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="bento-card-bg"></div>
                <div className="bento-header">
                  <div className="bento-icon-wrapper" style={{ color: category.color, backgroundColor: `${category.color}20` }}>
                    <Icon size={24} />
                  </div>
                  <h3 className="bento-title">{category.title}</h3>
                </div>
                <div className="bento-tags">
                  {category.skills.map(skill => (
                    <span key={skill} className="bento-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoSkills;
