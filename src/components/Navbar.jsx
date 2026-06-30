import { motion } from 'framer-motion';
import { Terminal, Download, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import MagneticButton from './MagneticButton';
import './Navbar.css';

const links = [
  { label: 'Journey',  href: '#journey'  },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];

const Navbar = ({ isDark, toggleDark }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a href="#" className="nav-brand display">
        <Terminal size={20} /> Sheran.
      </a>

      <ul className="nav-links">
        {links.map(l => (
          <li 
            key={l.label}
            onMouseEnter={() => setHoveredLink(l.label)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <a href={l.href} className="nav-link display">
              {l.label}
              {hoveredLink === l.label && (
                <motion.div 
                  className="nav-hover-line"
                  layoutId="navUnderline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button onClick={toggleDark} className="theme-toggle-btn" aria-label="Toggle Theme">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <MagneticButton
          href="/Sheran_Shah_CV.pdf"
          download
          className="btn btn-dark nav-cv"
        >
          <Download size={16} /> CV
        </MagneticButton>
      </div>
    </motion.nav>
  );
};

export default Navbar;
