import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400 opacity-50"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            y: [null, -20, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3
          }}
        >
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;