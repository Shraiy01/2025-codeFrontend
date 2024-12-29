import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { calculateTimeTogether } from '../../utils/dateUtils';
import { RELATIONSHIP_START_DATE } from '../../config/constants';

const RelationshipCounter = () => {
  const [timeTogether, setTimeTogether] = useState(calculateTimeTogether(RELATIONSHIP_START_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeTogether(calculateTimeTogether(RELATIONSHIP_START_DATE));
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg"
    >
      <p className="text-lg md:text-xl text-pink-600">
        We've been together for
      </p>
      <p className="text-2xl md:text-3xl font-bold text-pink-700">
        {timeTogether.days} days, {timeTogether.hours} hours, and {timeTogether.minutes} minutes
      </p>
    </motion.div>
  );
};

export default RelationshipCounter;