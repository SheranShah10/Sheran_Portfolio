import { motion } from 'framer-motion';
import { GraduationCap, Video, Users, Code2, Lightbulb, Brain } from 'lucide-react';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import './ScrollJourney.css';

const steps = [
  { icon: GraduationCap, title: 'Bahria University',    urdu: 'علم کا سفر شروع',    desc: 'Started BSIT — deep dived into computer science foundations.',     bg: 'var(--blue)'   },
  { icon: Video,          title: 'Video Editor',         urdu: 'کہانی سنانے کا فن',  desc: 'Joined Khalq, blending storytelling with visual media production.', bg: 'var(--red)'    },
  { icon: Users,          title: 'NGOs & Leadership',    urdu: 'لوگوں سے لوگوں تک', desc: 'General Secretary at Business Society — connecting people & ideas.', bg: 'var(--yellow)', dark: true },
  { icon: Code2,          title: 'Web Dev Internships',  urdu: 'کوڈ میری پہچان',     desc: 'Built real products at GS TEN, CodexCue & Prodigy.',               bg: 'var(--green)'  },
  { icon: Lightbulb,      title: 'Built Real Projects',  urdu: 'خیال سے حقیقت تک',  desc: 'Travel booking, pizzeria apps, psychology platforms — shipped.',    bg: 'var(--red)'    },
  { icon: Brain,          title: 'Exploring AI',         urdu: 'مستقبل کی طرف',      desc: 'Organized Pakistan\'s largest AI Dev Fest. Now building with LLMs.',bg: 'var(--blue)'   },
];

const ScrollJourney = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });

  return (
    <section className="section journey-section" id="journey" ref={ref}>
      <div className="container">
        <h2 className="section-title display">My Journey</h2>
        <p className="journey-urdu-sub urdu">سفر جاری ہے...</p>

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
                <div className="j-dot" style={{ background: step.bg }} />

                <motion.div
                  className="j-card card"
                  initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ type: 'spring', stiffness: 100 }}
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
