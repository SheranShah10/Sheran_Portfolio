import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 0 to 100 counter
    let startTime;
    const duration = 1500;
    
    const animateCounter = (time) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progressValue = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(progressValue);
      
      if (elapsed < duration) {
        requestAnimationFrame(animateCounter);
      }
    };
    
    requestAnimationFrame(animateCounter);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration + 300); // give a tiny delay after 100% before fading out

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="react-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0d1117', position: 'fixed', inset: 0, zIndex: 99999 }}
        >
          <div style={{ fontSize: '4rem', fontWeight: 300, color: '#fff', fontFamily: 'Inter, sans-serif' }}>
            {progress}%
          </div>
          <div className="loader-track-react" style={{ width: '200px', height: '1px', background: 'rgba(255,255,255,0.1)', marginTop: '20px', position: 'relative', overflow: 'hidden' }}>
            <motion.div 
              style={{ height: '100%', background: '#fff', originX: 0 }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
