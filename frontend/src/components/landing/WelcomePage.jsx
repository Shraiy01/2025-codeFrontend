import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloatingHearts from './FloatingHearts';
import RelationshipCounter from './RelationshipCounter';
import { GIRLFRIEND_NAME } from '../../config/constants';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 flex items-center justify-center relative overflow-hidden">
      <FloatingHearts />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4 z-10"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-pink-600 mb-4"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Welcome to {GIRLFRIEND_NAME}'s World
        </motion.h1>
        
        <p className="text-xl md:text-2xl text-pink-500 mb-8">
          A site dedicated to the most amazing person in my life!
        </p>

        <RelationshipCounter />
        
        <Link to="/photo-gallery">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-600 transition-colors mt-8"
          >
            Start Our Journey ❤️
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default WelcomePage;