import React from 'react';
import { motion } from 'framer-motion';

const QuizQuestion = ({ question, onAnswer, progress }) => {
  return (
    <div>
      <div className="mb-6">
        <div className="h-2 bg-pink-100 rounded-full">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-pink-500 rounded-full"
          />
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        {question.question}
      </h3>

      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 text-left rounded-lg border-2 border-pink-200 hover:border-pink-500 
                     hover:bg-pink-50 transition-colors"
            onClick={() => onAnswer(option === question.correctAnswer, option)}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;