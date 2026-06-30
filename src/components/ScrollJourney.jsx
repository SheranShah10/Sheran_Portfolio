import { motion, useScroll } from 'framer-motion';
import { GraduationCap, Video, Users, Code2, Lightbulb, Brain } from 'lucide-react';
import { useRef } from 'react';
import './ScrollJourney.css';

const steps = [
  { icon: GraduationCap, title: 'Bahria University',    urdu: 'علم کا سفر شروع',    desc: 'Pursuing BS in Information Technology, focusing on algorithms, data structures, and software engineering principles.',     bg: 'var(--blue)'   },
  { icon: Video,          title: 'Video Editor @ Khalq',urdu: 'کہانی سنانے کا فن',  desc: 'Directed and edited high-impact visual media, enhancing brand storytelling and engagement metrics.', bg: 'var(--red)'    },
  { icon: Users,          title: 'NGO Leadership',       urdu: 'لوگوں سے لوگوں تک', desc: 'Served as General Secretary at the Business Society, spearheading community initiatives and coordinating large-scale events.', bg: 'var(--yellow)', dark: true },
  { icon: Code2,          title: 'Software Engineering', urdu: 'کوڈ میری پہچان',     desc: 'Completed technical internships at GS TEN, CodexCue, & Prodigy, delivering scalable web solutions.',               bg: 'var(--green)'  },
  { icon: Lightbulb,      title: 'Product Development',  urdu: 'خیال سے حقیقت تک',  desc: 'Architected and shipped multiple full-stack applications including travel management and academic tracking systems.',    bg: 'var(--red)'    },
  { icon: Brain,          title: 'AI & Data Science',    urdu: 'مستقبل کی طرف',      desc: 'Organized Pakistan\'s largest AI Dev Fest. Currently building LLM integrations and predictive ML models.',bg: 'var(--blue)'   },
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
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="section-title display">My Journey</h2>
          <p className="journey-urdu-sub urdu">سفر جاری ہے...</p>
        </motion.div>

        <div className="journey-path">
          {/* Dashed background line */}
          <div className="j-line-bg" />
          {/* Animated progress line */}
          <motion.div className="j-line-fill" style={{ scaleY: scrollYProgress }} />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className={`j-row ${isLeft ? 'j-left' : 'j-right'}`}>
                {/* Center dot */}
                <motion.div 
                  className="j-dot" 
                  style={{ background: step.bg }} 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                />

                <motion.div
                  className="j-card card"
                  initial={{ opacity: 0, x: isLeft ? 50 : -50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="j-card-top" style={{ background: step.bg }}>
                    <Icon size={22} color={step.dark ? '#111' : '#fff'} />
                    <span className="j-title display" style={{ color: step.dark ? '#111' : '#fff' }}>
                      {step.title}
                    </span>
                  </div>
                  <div className="j-card-body">
                    <p className="j-urdu urdu">{step.urdu}</p>
                    <p className="j-desc">{step.desc}</p>
                  </div>
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
