import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Download, Moon, Sun, Menu, X } from 'lucide-react';
import MagneticButton from './MagneticButton';
import './Navbar.css';

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Journey',    href: '#journey'    },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <a href="#" className="nav-logo display gradient-text-v">
          SS
        </a>

        <nav className="nav-links-desktop">
          {links.map(l => (
            <div
              key={l.label}
              className="nav-item"
              onMouseEnter={() => setHoveredLink(l.label)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a href={l.href} className="nav-link">
                {l.label}
                {hoveredLink === l.label && (
                  <motion.div
                    layoutId="navUnderline"
                    className="nav-underline"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            </div>
          ))}
        </nav>

        <div className="nav-actions">
          <MagneticButton
            href="/Sheran_Shah_CV.pdf"
            download
            className="btn-outline nav-cv-btn"
          >
            <Download size={15} /> Resume
          </MagneticButton>

          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <nav className="mobile-nav">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  className="mobile-link"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="/Sheran_Shah_CV.pdf"
                download
                className="btn-primary mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Download size={15} /> Download Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
