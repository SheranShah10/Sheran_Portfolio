import { motion } from 'framer-motion';
import { Users, Calendar, Video, Award } from 'lucide-react';
import './Leadership.css';

const roles = [
  {
    icon: <Users size={22} />,
    title: "Vice President",
    organization: "AI Student Club",
    description: "Grew event attendance 40% via targeted campaigns; now oversee club strategy and operations.",
    color: 'var(--violet)',
  },
  {
    icon: <Calendar size={22} />,
    title: "Organizer",
    organization: "AI Dev Fest 2023",
    description: "Led Pakistan's largest student AI event (1,100+ attendees), securing sponsorships and coordinating speakers.",
    color: 'var(--cyan)',
  },
  {
    icon: <Award size={22} />,
    title: "General Secretary",
    organization: "Business Society",
    description: "Managed operations/budgeting for society events and facilitated startup mentorship partnerships.",
    color: 'var(--pink)',
  },
  {
    icon: <Video size={22} />,
    title: "Video Editor",
    organization: "Khalq",
    description: "Produced short-form promotional and documentary-style videos aligned with brand messaging.",
    color: 'var(--green)',
  },
];

const Leadership = () => (
  <section className="section leadership-section" id="leadership">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Beyond Code</p>
        <h2 className="section-title">Leadership &<br /><span className="gradient-text">Community</span></h2>
      </motion.div>

      <div className="leadership-grid">
        {roles.map((role, idx) => (
          <motion.div
            key={idx}
            className="leader-card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            style={{ '--lcolor': role.color }}
          >
            <div className="leader-icon-wrap">
              {role.icon}
            </div>
            <div className="leader-content">
              <h3 className="leader-title">{role.title}</h3>
              <h4 className="leader-org gradient-text">{role.organization}</h4>
              <p className="leader-desc">{role.description}</p>
            </div>
            <div className="leader-accent" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;
