import { motion } from 'framer-motion';
import { Mail, Code2, Send, Link2 } from 'lucide-react';
import MagneticButton from './MagneticButton';
import './Contact.css';

const Contact = () => (
  <section className="section contact-section" id="contact">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Let's Build<br /><span className="gradient-text">Something Great</span></h2>
        <p className="contact-sub urdu">بات کریں، کام کریں، آگے بڑھیں</p>
      </motion.div>

      <div className="contact-grid">
        {/* Left: Info */}
        <motion.div
          className="contact-info glass"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="contact-desc">
            Whether you have a project idea, a job opportunity, or just want to discuss the latest in AI 
            and tech over chai — my inbox is always open. Let's connect!
          </p>

          <div className="contact-links">
            <MagneticButton href="mailto:syedsheran10@gmail.com" className="contact-link-btn glass">
              <Mail size={18} />
              <div>
                <span className="link-label">Email</span>
                <span className="link-val">syedsheran10@gmail.com</span>
              </div>
            </MagneticButton>
            <MagneticButton href="https://github.com/SyedSheran10" target="_blank" rel="noreferrer" className="contact-link-btn glass">
              <Code2 size={18} />
              <div>
                <span className="link-label">GitHub</span>
                <span className="link-val">SyedSheran10</span>
              </div>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          className="contact-form glass"
          onSubmit={e => e.preventDefault()}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="form-group">
            <input type="text" placeholder="Your Name" className="form-input" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" className="form-input" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows={5} className="form-input form-textarea" required />
          </div>
          <MagneticButton type="submit" className="btn-primary contact-submit">
            <Send size={16} /> Send Message
          </MagneticButton>
        </motion.form>
      </div>
    </div>
  </section>
);

export default Contact;
