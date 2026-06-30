import { motion, useScroll } from 'framer-motion';
import { GraduationCap, Video, Users, Code2, Lightbulb, Brain } from 'lucide-react';
import { useRef } from 'react';
import './ScrollJourney.css';

const steps = [
  { icon: GraduationCap, title: 'Bahria University',    urdu: 'علم کا سفر شروع',    desc: 'Pursuing BSIT with deep focus on algorithms, data structures, and software engineering.', color: 'var(--violet)' },
  { icon: Video,          title: 'Video Editor @ Khalq', urdu: 'کہانی سنانے کا فن',  desc: 'Directed and edited high-impact visual media, enhancing brand storytelling and engagement.', color: 'var(--cyan)' },
  { icon: Users,          title: 'NGO Leadership',       urdu: 'لوگوں سے لوگوں تک', desc: 'Served as General Secretary at Business Society, spearheading community events and mentorships.', color: 'var(--pink)' },
  { icon: Code2,          title: 'Software Engineering', urdu: 'کوڈ میری پہچان',     desc: 'Completed technical internships at GS TEN, CodexCue & Prodigy — shipping real web products.', color: 'var(--green)' },
  { icon: Lightbulb,      title: 'Product Development',  urdu: 'خیال سے حقیقت تک',  desc: 'Architected and shipped multiple full-stack applications — travel booking, pizzeria, academic systems.', color: 'var(--violet-lt)' },
  { icon: Brain,          title: 'AI & Data Science',    urdu: 'مستقبل کی طرف',      desc: "Organized Pakistan's largest AI Dev Fest (1,100+ attendees). Now building LLM integrations.", color: 'var(--cyan-lt)' },
];

const ScrollJourney = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });

  return (
    <section className="section journey-section" id="journey" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">My Story</p>
          <h2 className="section-title">The Journey<br /><span className="gradient-text">So Far</span></h2>
        </motion.div>

        <div className="journey-track">
          {/* Animated line */}
          <div className="journey-line-bg" />
          <motion.div
            className="journey-line-fill"
            style={{ scaleY: scrollYProgress }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className={`journey-row ${isLeft ? 'is-left' : 'is-right'}`}>
                {/* Center icon */}
                <motion.div
                  className="journey-node"
                  style={{ '--ncolor': step.color }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                >
                  <Icon size={18} />
                </motion.div>

                {/* Card */}
                <motion.div
                  className="journey-card glass"
                  initial={{ opacity: 0, x: isLeft ? 60 : -60, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ type: 'spring', stiffness: 90, delay: 0.15 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  style={{ '--ncolor': step.color }}
                >
                  <div className="journey-card-header">
                    <h3 className="journey-title">{step.title}</h3>
                    <p className="journey-urdu urdu">{step.urdu}</p>
                  </div>
                  <p className="journey-desc">{step.desc}</p>
                  <div className="journey-accent-line" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScrollJourney;
