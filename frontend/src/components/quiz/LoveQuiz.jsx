import React, { useState } from 'react';
import { motion } from 'framer-motion';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
import { questions } from '../../data/quizQuestions';

const LoveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (isCorrect, answer) => {
    if (isCorrect) setScore(score + 1);
    
    setAnswers([...answers, { 
      question: questions[currentQuestion].question,
      answer,
      correct: isCorrect
    }]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  return (
    <div className="min-h-screen bg-pink-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-8">
          How Well Do You Know Me?
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6 md:p-8"
        >
          {!showResult ? (
            <QuizQuestion
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
              progress={(currentQuestion + 1) / questions.length * 100}
            />
          ) : (
            <QuizResult
              score={score}
              total={questions.length}
              answers={answers}
              onRestart={restartQuiz}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LoveQuiz;