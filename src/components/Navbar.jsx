import { motion } from 'framer-motion';
import { Terminal, Download, Moon, Sun } from 'lucide-react';
import './Navbar.css';

const links = [
  { label: 'Journey',  href: '#journey'  },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];

const Navbar = ({ isDark, toggleDark }) => (
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
        <li key={l.label}>
          <a href={l.href} className="nav-link display">{l.label}</a>
        </li>
      ))}
    </ul>

    <div className="nav-actions">
      <button onClick={toggleDark} className="theme-toggle-btn" aria-label="Toggle Theme">
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <a
        href="/Sheran_Shah_CV.pdf"
        download
        className="btn btn-dark nav-cv"
      >
        <Download size={16} /> CV
      </a>
    </div>
  </motion.nav>
);

export default Navbar;
