import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
import { useState } from 'react';
import './AnimatedMascot.css';

const AnimatedMascot = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="mascot-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        y: isHovered ? -15 : [0, -10, 0], // Interactive hover vs idle float
      }}
      transition={{
        y: isHovered 
          ? { type: "spring", stiffness: 300, damping: 15 } 
          : { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <div className="mascot-body">
        {/* Antenna */}
        <motion.div 
          className="mascot-antenna"
          animate={{ rotate: isHovered ? [0, -15, 15, -10, 10, 0] : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="antenna-ball" />
          <div className="antenna-stick" />
        </motion.div>
        
        {/* Head */}
        <div className="mascot-head card">
          <div className="mascot-eyes">
            <motion.div 
              className="eye"
              animate={isHovered ? { scaleY: [1, 0.1, 1], scaleX: [1, 1.2, 1] } : { scaleY: [1, 1, 0.1, 1, 1] }}
              transition={isHovered ? { duration: 0.3 } : { duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 0.98, 1] }}
            />
            <motion.div 
              className="eye"
              animate={isHovered ? { scaleY: [1, 0.1, 1], scaleX: [1, 1.2, 1] } : { scaleY: [1, 1, 0.1, 1, 1] }}
              transition={isHovered ? { duration: 0.3 } : { duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 0.98, 1] }}
            />
          </div>
          <motion.div 
            className="mascot-mouth"
            animate={isHovered ? { width: 30, height: 12, borderRadius: "50%" } : { width: 20, height: 4, borderRadius: "4px" }}
          />
        </div>
      </div>
      
      {/* Shadow */}
      <motion.div 
        className="mascot-shadow"
        animate={{ 
          scale: isHovered ? 0.7 : [1, 0.8, 1],
          opacity: isHovered ? 0.3 : [0.5, 0.3, 0.5]
        }}
        transition={{
          duration: isHovered ? 0.3 : 3,
          repeat: isHovered ? 0 : Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default AnimatedMascot;
