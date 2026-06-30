import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './Chatbot.css';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

const PROMPT = `You are Sheran.AI — the digital personality of Sheran Shah, a Developer, Creator and AI Explorer from Pakistan.
Speak in a friendly mix of English and Roman Urdu (Hinglish style).
Greeting example: "Khushamdeed! Main Sheran ka AI clone hoon. Poochain jo poochna hai!"
Key facts: Skills include React, Node.js, Python, C++, AI agents. Interned at GS TEN, CodexCue, Prodigy.
Projects: Booking System, Pizzeria App, Student Grading System, Psychology Website.
Leadership: VP AI Student Club, organized Pakistan's largest AI Dev Fest.
Be enthusiastic, witty, and concise.`;

const demoReplies = (q) => {
  const t = q.toLowerCase();
  if (t.includes('skill'))       return 'Sheran ke skills mein React, Node.js, Python, C++ aur AI integration sab hai! Skills section mein jaein dekhnay ke liye.';
  if (t.includes('project'))     return 'Kamal ke projects hain! Booking System, Pizzeria App, Psychology Website — sab kuch. Projects section check karein! 🚀';
  if (t.includes('intern') || t.includes('experience')) return 'GS TEN, CodexCue, aur Prodigy mein intern kiya hai — real products pe kaam kiya! 💪';
  if (t.includes('hire') || t.includes('why'))          return 'Sheran ko hire karein kyunki wo clean code, acha design, aur AI sab ek saath deliver karta hai. Plus — desi hustle! 🔥';
  if (t.includes('hello') || t.includes('hi') || t.includes('salam')) return 'Walaikum assalam! Khushamdeed! Main Sheran ka AI clone hoon. Poochain jo poochna hai! 🎉';
  if (t.includes('contact') || t.includes('email'))     return 'Sheran se milein: syedsheran10@gmail.com — ya neeche Contact section mein!';
  return 'Yeh interesting sawal hai! Sheran ke baare mein aur poochein — skills, projects, ya experience ke baare mein! 😊';
};

const Chatbot = () => {
  const [open, setOpen]       = useState(false);
  const [msgs, setMsgs]       = useState([{ role: 'ai', text: "Khushamdeed! 👋 Main Sheran ka AI clone hoon. Poochain jo poochna hai — skills, projects, ya 'nokri'!" }]);
  const [input, setInput]     = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs]);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMsgs(p => [...p, userMsg]);
    setInput('');
    setLoading(true);

    if (!API_KEY) {
      setTimeout(() => {
        setMsgs(p => [...p, { role: 'ai', text: demoReplies(userMsg.text) }]);
        setLoading(false);
      }, 1200);
      return;
    }

    try {
      const ai = new GoogleGenerativeAI(API_KEY);
      const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const res = await model.generateContent(`${PROMPT}\n\nUser: ${userMsg.text}\nSheran.AI:`);
      setMsgs(p => [...p, { role: 'ai', text: res.response.text() }]);
    } catch {
      setMsgs(p => [...p, { role: 'ai', text: 'Oops! Circuits bizy hain. Thodi der baad try karein! 😅' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cb-wrap">
      <AnimatePresence>
        {open && (
          <motion.div
            className="cb-window"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
          >
            {/* Title bar */}
            <div className="cb-titlebar display">
              <div className="cb-dots">
                <span style={{ background: 'var(--red)'    }} onClick={() => setOpen(false)} />
                <span style={{ background: 'var(--yellow)' }} />
                <span style={{ background: 'var(--green)'  }} />
              </div>
              <span className="cb-title">Sheran.AI — Personal Assistant</span>
            </div>

            {/* Messages */}
            <div className="cb-msgs">
              {msgs.map((m, i) => (
                <div key={i} className={`cb-msg ${m.role}`}>
                  <div className="cb-icon">{m.role === 'ai' ? <Bot size={14} /> : <User size={14} />}</div>
                  <div className="cb-text">{m.text}</div>
                </div>
              ))}
              {loading && (
                <div className="cb-msg ai">
                  <div className="cb-icon"><Bot size={14} /></div>
                  <div className="cb-text cb-typing"><span/><span/><span/></div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="cb-input-row">
              <input
                className="cb-input"
                placeholder="Poochain kuch bhi..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
              />
              <button className="btn btn-yellow cb-send" onClick={send} disabled={loading}>
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="cb-toggle btn btn-dark"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(o => !o)}
      >
        {open ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
