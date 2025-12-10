import React from 'react';
import { motion } from 'framer-motion';

interface Option {
  value: string;
  label: string;
}

interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'text';
  options?: Option[];
  placeholder?: string;
}

interface QuestionCardProps {
  question: Question;
  answer: string;
  onAnswer: (answer: string) => void;
  questionIndex: number;
  totalQuestions: number;
}

export default function QuestionCard({ 
  question, 
  answer, 
  onAnswer, 
  questionIndex, 
  totalQuestions 
}: QuestionCardProps) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-xl"
    >
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-blue-600">
            Question {questionIndex + 1} of {totalQuestions}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round(((questionIndex + 1) / totalQuestions) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        {question.text}
      </h3>

      {question.type === 'multiple-choice' && question.options ? (
        <div className="space-y-3">
          {question.options.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => onAnswer(option.value)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                answer === option.value
                  ? 'border-blue-600 bg-blue-50 text-blue-900'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  answer === option.value 
                    ? 'border-blue-600 bg-blue-600' 
                    : 'border-gray-300'
                }`}>
                  {answer === option.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-full h-full bg-blue-600 rounded-full"
                    />
                  )}
                </div>
                <span className="font-medium">{option.label}</span>
              </div>
            </motion.button>
          ))}
        </div>
      ) : (
        <div>
          <textarea
            value={answer}
            onChange={(e) => onAnswer(e.target.value)}
            placeholder={question.placeholder || 'Type your answer here...'}
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none resize-none h-32"
            rows={4}
          />
        </div>
      )}
    </motion.div>
  );
}