import React from 'react';
import { motion } from 'framer-motion';

const ReasonCard = ({ reason, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center">
        <span className="text-pink-500 text-xl md:text-2xl mr-3 md:mr-4">❤</span>
        <p className="text-gray-700 text-base md:text-lg">{reason}</p>
      </div>
    </motion.div>
  );
};

export default ReasonCard;