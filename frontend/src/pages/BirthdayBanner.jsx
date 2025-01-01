import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCake, faStar } from '@fortawesome/free-solid-svg-icons';

const FloatingIcon = ({ icon, delay, duration }) => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{ 
      y: [-20, 20],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay
    }}
    className="absolute text-pink-400"
  >
    <FontAwesomeIcon icon={icon} />
  </motion.div>
);

const BirthdayBanner = () => {
  return (
    <div className="relative py-8 px-4 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200">
      {[...Array(5)].map((_, i) => (
        <FloatingIcon 
          key={i}
          icon={i % 2 === 0 ? faCake : faStar}
          delay={i * 0.3}
          duration={2 + i * 0.5}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}px`
          }}
        />
      ))}
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-2">
          Happy Birthday, Cutie! 🎂
        </h1>
        <p className="text-lg text-pink-500">
          This is my special gift to you, expressing all my love ❤️
        </p>
      </motion.div>
    </div>
  );
};

export default BirthdayBanner;