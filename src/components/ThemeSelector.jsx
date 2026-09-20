import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, ChevronDown, Check, Sliders } from 'lucide-react';
import './ThemeSelector.css';

const THEMES = [
  { id: 'dark', label: 'Dark Cinematic', color: '#07070F' },
  { id: 'light', label: 'Minimal Light', color: '#F8FAFC' },
  { id: 'cyberpunk', label: 'Cyberpunk', color: '#0D0221' },
  { id: 'forest', label: 'Earthy Forest', color: '#0B1910' },
  { id: 'ocean', label: 'Deep Ocean', color: '#041022' },
  { id: 'sunset', label: 'Crimson Sunset', color: '#2C0E14' },
];

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  const [customColors, setCustomColors] = useState(() => {
    const saved = localStorage.getItem('portfolio-custom-colors');
    return saved ? JSON.parse(saved) : { bg: '#1a1a24', text: '#ffffff', accent: '#ff3366' };
  });

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Apply theme dynamically
  useEffect(() => {
    const root = document.documentElement;

    if (activeTheme === 'custom') {
      root.removeAttribute('data-theme');
      root.style.setProperty('--bg', customColors.bg);
      root.style.setProperty('--bg-2', customColors.bg);
      root.style.setProperty('--text', customColors.text);
      root.style.setProperty('--violet', customColors.accent);
      root.style.setProperty('--cyan', customColors.accent);
      
      // Calculate glows based on accent
      const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '255,255,255';
      };
      
      const rgb = hexToRgb(customColors.accent);
      root.style.setProperty('--border-glow-v', `rgba(${rgb}, 0.5)`);
      root.style.setProperty('--border-glow-c', `rgba(${rgb}, 0.5)`);
      root.style.setProperty('--glow-v', `0 0 60px rgba(${rgb}, 0.4)`);
      root.style.setProperty('--glow-c', `0 0 60px rgba(${rgb}, 0.4)`);
    } else {
      // Clear inline custom styles when switching back to a preset
      root.removeAttribute('style');
      root.setAttribute('data-theme', activeTheme);
    }

    localStorage.setItem('portfolio-theme', activeTheme);
    localStorage.setItem('portfolio-custom-colors', JSON.stringify(customColors));
  }, [activeTheme, customColors]);

  const handleCustomColorChange = (key, value) => {
    setCustomColors(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="theme-selector-container" ref={dropdownRef}>
      <button 
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Theme"
      >
        <Palette size={18} />
        <ChevronDown size={14} className={`theme-chevron ${isOpen ? 'open' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="theme-dropdown glass-md"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <div className="theme-dropdown-header">
              <span className="text-xs">SELECT THEME</span>
            </div>
            
            <div className="theme-options">
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  className={`theme-option ${activeTheme === theme.id ? 'active' : ''}`}
                  onClick={() => { setActiveTheme(theme.id); setIsOpen(false); }}
                >
                  <div className="theme-color-swatch" style={{ background: theme.color }} />
                  <span className="theme-label">{theme.label}</span>
                  {activeTheme === theme.id && <Check size={14} className="theme-check" />}
                </button>
              ))}

              <div className="theme-divider" />

              <button
                className={`theme-option ${activeTheme === 'custom' ? 'active' : ''}`}
                onClick={() => setActiveTheme('custom')}
              >
                <div className="theme-color-swatch custom-swatch"><Sliders size={12} /></div>
                <span className="theme-label">Custom Theme</span>
                {activeTheme === 'custom' && <Check size={14} className="theme-check" />}
              </button>
            </div>

            {/* Custom Theme Settings */}
            <AnimatePresence>
              {activeTheme === 'custom' && (
                <motion.div
                  className="custom-theme-settings"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className="color-picker-row">
                    <label>Background</label>
                    <input 
                      type="color" 
                      value={customColors.bg} 
                      onChange={(e) => handleCustomColorChange('bg', e.target.value)} 
                    />
                  </div>
                  <div className="color-picker-row">
                    <label>Text</label>
                    <input 
                      type="color" 
                      value={customColors.text} 
                      onChange={(e) => handleCustomColorChange('text', e.target.value)} 
                    />
                  </div>
                  <div className="color-picker-row">
                    <label>Accent Glow</label>
                    <input 
                      type="color" 
                      value={customColors.accent} 
                      onChange={(e) => handleCustomColorChange('accent', e.target.value)} 
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;
