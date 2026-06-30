import { motion } from 'framer-motion';
import { Mail, Code2, Send, Link } from 'lucide-react';
import './Contact.css';

const Contact = () => (
  <section className="section contact-section" id="contact">
    <div className="container">
      <h2 className="section-title display">Let's Talk</h2>
      <p className="contact-sub urdu">بات کریں، کام کریں، آگے بڑھیں</p>

      <div className="contact-grid">
        {/* Info panel */}
        <motion.div
          className="contact-info card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="info-band display">REACH OUT</div>
          <div className="info-body">
            <p className="info-desc">
              Got an idea? Want to hire me? Or just want to chat about AI and chai? I'm always open!
            </p>
            <div className="social-links">
              <a href="mailto:syedsheran10@gmail.com" className="social-btn btn btn-dark">
                <Mail size={18} /> Email
              </a>
              <a href="https://github.com/SyedSheran10" target="_blank" rel="noreferrer" className="social-btn btn btn-dark">
                <Code2 size={18} /> GitHub
              </a>
              <a href="#" className="social-btn btn btn-dark">
                <Link size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form panel */}
        <motion.form
          className="contact-form card"
          onSubmit={e => e.preventDefault()}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="form-band display">SEND A MESSAGE</div>
          <div className="form-body">
            <input   type="text"  placeholder="Your Name"    className="form-input" required />
            <input   type="email" placeholder="Your Email"   className="form-input" required />
            <textarea placeholder="Your Message" rows={5}   className="form-input form-textarea" required />
            <button type="submit" className="btn btn-yellow">
              <Send size={18} /> Send It
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  </section>
);

export default Contact;
