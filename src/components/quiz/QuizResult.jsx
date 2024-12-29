import React from 'react';
import { motion } from 'framer-motion';
import { getScoreMessage } from '../../utils/quizUtils';

const QuizResult = ({ score, total, answers, onRestart }) => {
  const message = getScoreMessage(score, total);

  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="mb-6"
      >
        <span className="text-6xl">
          {score === total ? '🎉' : score >= total / 2 ? '💖' : '💝'}
        </span>
      </motion.div>

      <h3 className="text-2xl font-bold text-pink-600 mb-4">
        You scored {score} out of {total}!
      </h3>

      <p className="text-lg text-gray-700 mb-8">{message}</p>

      <div className="mb-8">
        <h4 className="font-semibold text-gray-800 mb-4">Your Answers:</h4>
        {answers.map((answer, index) => (
          <div key={index} className="mb-4 p-4 bg-pink-50 rounded-lg">
            <p className="font-medium">{answer.question}</p>
            <p className={`text-sm ${answer.correct ? 'text-green-600' : 'text-red-600'}`}>
              Your answer: {answer.answer}
              {!answer.correct && (
                <span className="block text-xs mt-1">
                  💭 Don't worry, we'll make more memories together!
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold 
                   hover:bg-pink-600 transition-colors"
        onClick={onRestart}
      >
        Try Again ❤️
      </motion.button>
    </div>
  );
};

export default QuizResult;