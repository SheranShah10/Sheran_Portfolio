import { motion } from 'framer-motion';
import { Users, Calendar, Video, Award } from 'lucide-react';
import './Leadership.css';

const roles = [
  {
    icon: <Users size={24} />,
    title: "Vice President",
    organization: "AI Student Club",
    description: "Grew event attendance 40% via targeted campaigns; now oversee club strategy and operations."
  },
  {
    icon: <Calendar size={24} />,
    title: "Organizer",
    organization: "AI Dev Fest 2023",
    description: "Led Pakistan's largest student AI event (1,100+ attendees), securing sponsorships and coordinating speakers."
  },
  {
    icon: <Award size={24} />,
    title: "General Secretary",
    organization: "Business Society",
    description: "Managed operations/budgeting for society events and facilitated startup mentorship partnerships."
  },
  {
    icon: <Video size={24} />,
    title: "Video Editor",
    organization: "Khalq",
    description: "Produced short-form promotional and documentary-style videos aligned with brand messaging."
  }
];

const Leadership = () => {
  return (
    <section className="section leadership-section" id="leadership">
      <div className="container">
        <div className="leadership-header text-center mb-12">
          <motion.h2 
            className="section-title text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Leadership & Community
          </motion.h2>
          <motion.p 
            className="leadership-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            "Builder + Community + Creator mindset"
          </motion.p>
        </div>

        <div className="leadership-grid">
          {roles.map((role, idx) => (
            <motion.div 
              key={idx}
              className="glass-panel leadership-card flex items-start gap-4"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="leadership-icon-wrapper">
                {role.icon}
              </div>
              <div className="leadership-content">
                <h3 className="role-title">{role.title}</h3>
                <h4 className="role-org text-gradient-alt">{role.organization}</h4>
                <p className="role-desc">{role.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
