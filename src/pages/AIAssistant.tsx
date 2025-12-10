import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader, Sparkles, Brain, Target } from 'lucide-react';
import { sendChatMessage } from '../services/api';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function AIAssistant() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  React.useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userProfile') || '{}');
    if (userData.desiredRole) {
      setSelectedRole(userData.desiredRole);
    }
  }, []);

  const getRoleSpecificGreeting = () => {
    if (!selectedRole) {
      return "Hello! I'm your AI Career Assistant. I'm here to help you with career advice, skill development, job search strategies, and any questions about your professional journey. How can I assist you today?";
    }

    const roleTitle = selectedRole.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    return `Hello! I'm your AI Career Assistant. I see you're interested in becoming a ${roleTitle}. I can help you with specific guidance for this career path, answer questions about skills, roadmap steps, job market insights, and more. How can I assist you today?`;
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: getRoleSpecificGreeting(),
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);


  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const data = await sendChatMessage(inputMessage, selectedRole || undefined);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || 'Sorry, I encountered an error. Please try again.',
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Failed to send message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I\'m having trouble connecting right now. Please try again later.',
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getRoleSpecificQuestions = () => {
    if (!selectedRole) {
      return [
        "How do I transition to a tech career?",
        "What skills should I learn for data science?",
        "How to improve my resume?",
        "Best practices for job interviews?",
        "How to negotiate salary?",
        "Remote work opportunities?"
      ];
    }

    const roleTitle = selectedRole.replace('-', ' ');
    return [
      `What skills are most important for a ${roleTitle}?`,
      `How long does it take to become a ${roleTitle}?`,
      `What's the typical career path for a ${roleTitle}?`,
      `Best resources to learn ${roleTitle} skills?`,
      `What certifications should I get for ${roleTitle}?`,
      `Remote opportunities for ${roleTitle}?`
    ];
  };

  const quickQuestions = getRoleSpecificQuestions();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-4">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Career Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get instant answers to your career questions with our intelligent AI assistant
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Career AI Assistant</h3>
                <p className="text-blue-100 text-sm">Online • Ready to help</p>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-xs md:max-w-md ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-br from-purple-600 to-blue-600'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div className={`px-4 py-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.text}
                      </p>
                      <p className={`text-xs mt-2 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                    <div className="flex items-center space-x-2">
                      <Loader className="h-4 w-4 animate-spin text-gray-600" />
                      <span className="text-sm text-gray-600">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-6 py-4 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-700 mb-3">Quick questions to get started:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => setInputMessage(question)}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Section */}
          <div className="border-t border-gray-100 p-6">
            <div className="flex items-end space-x-4">
              <div className="flex-1">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about your career..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={1}
                  style={{ minHeight: '44px', maxHeight: '120px' }}
                />
              </div>
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Instant Answers
              </h3>
              <p className="text-gray-600 text-sm">
                Get immediate responses to your career questions 24/7
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Personalized Advice
              </h3>
              <p className="text-gray-600 text-sm">
                Receive tailored recommendations based on your unique situation
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Guidance
              </h3>
              <p className="text-gray-600 text-sm">
                Access professional insights and industry best practices
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}