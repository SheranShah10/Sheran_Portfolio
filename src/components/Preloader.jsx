import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure the loader stays for at least 1.5 seconds so the animation can play
    // even if the JS loads extremely fast locally.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="react-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <div className="loader-logo-react">SS</div>
          <div className="loader-track-react">
            <div className="loader-fill-react"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
