import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle, Brain } from 'lucide-react';
import { submitQuestionnaire } from '../services/api';
import { questions } from '../data/questions';
import QuestionCard from '../components/QuestionCard';

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await submitQuestionnaire({ answers });
      if (response.success) {
        // Store user data in localStorage for progress tracking
        localStorage.setItem('userAnswers', JSON.stringify(answers));
        localStorage.setItem('userGuidance', JSON.stringify(response.guidance));
        localStorage.setItem('completedOnboarding', 'true');
        navigate('/results');
      } else {
        throw new Error('Failed to generate guidance');
      }
    } catch (error) {
      console.error('Failed to submit questionnaire:', error);
      alert('Failed to generate your career guidance. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const currentQuestion = questions[currentStep];
  const currentAnswer = answers[currentQuestion?.id] || '';
  const isAnswered = currentAnswer.length > 0;

  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full text-center text-white"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-8"
          >
            <Brain className="h-12 w-12 text-blue-600" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Welcome to Your Career Journey!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl text-blue-100 mb-8"
          >
            We're excited to help you discover your perfect career path. We'll ask you a few questions 
            to understand your goals, skills, and preferences. This will take about 5 minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center space-x-2 text-blue-100">
              <CheckCircle className="h-5 w-5" />
              <span>Personalized AI recommendations</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-100">
              <CheckCircle className="h-5 w-5" />
              <span>Custom learning roadmap</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-100">
              <CheckCircle className="h-5 w-5" />
              <span>Progress tracking tools</span>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            onClick={() => setShowWelcome(false)}
            className="mt-8 inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Questionnaire</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        <AnimatePresence mode="wait">
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            answer={currentAnswer}
            onAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
            questionIndex={currentStep}
            totalQuestions={questions.length}
          />
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-between mt-8"
        >
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Previous</span>
          </button>

          <div className="text-white text-sm">
            {currentStep + 1} of {questions.length}
          </div>

          <button
            onClick={handleNext}
            disabled={!isAnswered || loading}
            className="flex items-center space-x-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span>
              {currentStep === questions.length - 1 
                ? loading ? 'Processing...' : 'Complete' 
                : 'Next'
              }
            </span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}