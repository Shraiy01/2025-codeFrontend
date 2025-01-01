import React from 'react';
import { motion } from 'framer-motion';

const PhotoCard = ({ photo, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={photo}
        alt={`Memory ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default PhotoCard;