import { motion } from 'framer-motion';
import { Mail, Code2, Send, Link } from 'lucide-react';
import MagneticButton from './MagneticButton';
import './Contact.css';

const Contact = () => (
  <section className="section contact-section" id="contact">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <h2 className="section-title display">Let's Talk</h2>
        <p className="contact-sub urdu">بات کریں، کام کریں، آگے بڑھیں</p>
      </motion.div>

      <div className="contact-grid">
        {/* Info panel */}
        <motion.div
          className="contact-info card"
          initial={{ opacity: 0, x: -40, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
        >
          <div className="info-band display">REACH OUT</div>
          <div className="info-body">
            <p className="info-desc">
              Whether you have a project idea, a job opportunity, or just want to discuss the latest in AI and tech over chai — my inbox is always open.
            </p>
            <div className="social-links">
              <MagneticButton href="mailto:syedsheran10@gmail.com" className="social-btn btn btn-dark">
                <Mail size={18} /> Email
              </MagneticButton>
              <MagneticButton href="https://github.com/SyedSheran10" target="_blank" rel="noreferrer" className="social-btn btn btn-dark">
                <Code2 size={18} /> GitHub
              </MagneticButton>
              <MagneticButton href="#" className="social-btn btn btn-dark">
                <Link size={18} /> LinkedIn
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Form panel */}
        <motion.form
          className="contact-form card"
          onSubmit={e => e.preventDefault()}
          initial={{ opacity: 0, x: 40, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          <div className="form-band display">SEND A MESSAGE</div>
          <div className="form-body">
            <input   type="text"  placeholder="Your Name"    className="form-input" required />
            <input   type="email" placeholder="Your Email"   className="form-input" required />
            <textarea placeholder="Your Message" rows={5}   className="form-input form-textarea" required />
            <MagneticButton type="submit" className="btn btn-yellow">
              <Send size={18} /> Send It
            </MagneticButton>
          </div>
        </motion.form>
      </div>
    </div>
  </section>
);

export default Contact;
