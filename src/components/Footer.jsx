import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Mail, Terminal } from 'lucide-react';
import './Footer.css';

const Footer = () => (
  <footer className="footer-section">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <h3 className="footer-logo display gradient-text-v">Sheran Shah</h3>
          <p className="footer-tagline">AI Engineer · Full-Stack Developer · Creative Technologist</p>
          <p className="footer-urdu urdu">نوکری نہ ملی تو رکشہ ہی سہی 🇵🇰</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4 className="footer-col-title">Navigate</h4>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Connect</h4>
            <a href="https://github.com/SyedSheran10" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a>
            <a href="mailto:syedsheran10@gmail.com">Email <ArrowUpRight size={12} /></a>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} Sheran Shah. Handcrafted with care.</p>
        <motion.a
          href="#home"
          className="back-to-top glass"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          ↑
        </motion.a>
      </div>
    </div>
  </footer>
);

export default Footer;
