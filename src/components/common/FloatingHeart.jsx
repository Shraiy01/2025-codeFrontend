import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FloatingHeart = ({ delay, style }) => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{ 
      y: -100,
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay
    }}
    className="absolute text-pink-500"
    style={style}
  >
    <FontAwesomeIcon icon={faHeart} />
  </motion.div>
);

export default FloatingHeart;