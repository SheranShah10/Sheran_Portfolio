import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Briefcase, Mail } from 'lucide-react';
import './CommandCenter.css';

const commands = [
  { id: 'projects', label: 'show projects', icon: <Briefcase size={16} />, action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'skills',   label: 'show skills',   icon: <Terminal size={16} />, action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'contact',  label: 'contact sheran',icon: <Mail size={16} />,    action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'github',   label: 'open github',   icon: <Code2 size={16} />,   action: () => window.open('https://github.com/SyedSheran10', '_blank') },
];

const eggs = {
  whoami:  '> Sheran Shah. Developer. Creator. AI Explorer. Desi by heart. 🇵🇰',
  future:  '> Goal: Launch a SaaS product, master AI Agents, and make Ammi proud.',
  secret:  '> 🎉 Congratulations! You unlocked the Vault. Here is your reward: ☕ chai.',
  nokri:   '> Nokri na mili? Koi baat nahi — Sheran khud company banayega.',
};

const CommandCenter = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); setOpen(p => !p); }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const run = (cmd) => {
    const key = cmd.trim().toLowerCase().replace(/\s+/g, '');
    if (eggs[key]) { setOutput(eggs[key]); setInput(''); return; }
    const match = commands.find(c => c.id === key || c.label === cmd.trim().toLowerCase());
    if (match) { match.action(); setOpen(false); setInput(''); setOutput(''); }
    else setOutput(`> Command not found: "${cmd}". Try: show projects, whoami, nokri`);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="cmd-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
          <motion.div className="cmd-window" initial={{ scale: 0.8, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 40 }} onClick={e => e.stopPropagation()}>
            {/* Retro title bar */}
            <div className="cmd-titlebar">
              <div className="cmd-traffic">
                <span style={{ background: '#E53935' }} />
                <span style={{ background: '#FFC107' }} />
                <span style={{ background: '#4A6741' }} />
              </div>
              <span>sheran@portfolio — bash — 80×24</span>
              <span />
            </div>

            <div className="cmd-body">
              <div className="cmd-input-row">
                <span className="cmd-prompt">sheran@portfolio:~$&nbsp;</span>
                <input
                  autoFocus
                  className="cmd-input"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && run(input)}
                  placeholder="type a command..."
                />
              </div>

              {output && <div className="cmd-output">{output}</div>}

              <div className="cmd-suggestions">
                {commands.map(c => (
                  <button key={c.id} className="cmd-suggestion" onClick={() => run(c.label)}>
                    {c.icon} <span>{c.label}</span>
                  </button>
                ))}
              </div>

              <div className="cmd-hint">
                💡 Try secret easter eggs: <code>whoami</code> · <code>nokri</code> · <code>secret</code>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandCenter;
