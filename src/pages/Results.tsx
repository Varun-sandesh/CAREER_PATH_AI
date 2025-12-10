import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getCareerGuidance } from '../services/api';
import { Brain, Target, BookOpen, TrendingUp, Users, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

export default function Results() {
  const [guidance, setGuidance] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchGuidance = async () => {
      try {
        // First try to get from localStorage (recent completion)
        const storedGuidance = localStorage.getItem('userGuidance');
        if (storedGuidance) {
          setGuidance(JSON.parse(storedGuidance));
        } else {
          // Fallback to API call
          const data = await getCareerGuidance();
          setGuidance(data.guidance);
        }
      } catch (error) {
        console.error('Failed to fetch career guidance:', error);
        setError('Failed to load your career guidance. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchGuidance();
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Parse AI guidance into sections
  const parseGuidance = (text: string) => {
    const sections = [
      { key: 'summary', title: 'Career Summary', icon: Brain },
      { key: 'path', title: 'Recommended Path', icon: Target },
      { key: 'skills', title: 'Skill Development', icon: TrendingUp },
      { key: 'resources', title: 'Learning Resources', icon: BookOpen },
      { key: 'timeline', title: 'Timeline Milestones', icon: Target },
      { key: 'networking', title: 'Networking Tips', icon: Users },
      { key: 'insights', title: 'Market Insights', icon: TrendingUp }
    ];

    const parsedSections: Record<string, string> = {};
    
    sections.forEach(section => {
      const regex = new RegExp(`${section.key.toUpperCase()}[^:]*:([\\s\\S]*?)(?=\\d+\\.|$)`, 'i');
      const match = text.match(regex);
      parsedSections[section.key] = match ? match[1].trim() : 'Content will be available soon.';
    });

    return { sections, parsedSections };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Generating Your Career Guidance...
          </h2>
          <p className="text-gray-600">
            Our AI is analyzing your responses and creating personalized recommendations
          </p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <Brain className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const { sections, parsedSections } = guidance ? parseGuidance(guidance) : { sections: [], parsedSections: {} };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Brain className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Personalized Career Guidance
          </h1>
          <p className="text-xl text-gray-600">
            AI-generated recommendations tailored specifically for you
          </p>
        </motion.div>

        {guidance ? (
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.key)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <section.icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
                  </div>
                  {expandedSections[section.key] ? (
                    <ChevronUp className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  )}
                </button>

                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedSections[section.key] ? 'auto' : 0,
                    opacity: expandedSections[section.key] ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4">
                    <div className="prose prose-blue max-w-none">
                      {parsedSections[section.key].split('\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-3 text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.key === 'resources' && (
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.a
                          href="https://freecodecamp.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <div>
                            <h4 className="font-medium text-gray-900">freeCodeCamp</h4>
                            <p className="text-sm text-gray-600">Free coding curriculum</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                              Free
                            </span>
                            <ExternalLink className="h-4 w-4 text-gray-400" />
                          </div>
                        </motion.a>

                        <motion.a
                          href="https://coursera.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <div>
                            <h4 className="font-medium text-gray-900">Coursera</h4>
                            <p className="text-sm text-gray-600">Professional certificates</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                              Paid
                            </span>
                            <ExternalLink className="h-4 w-4 text-gray-400" />
                          </div>
                        </motion.a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <Brain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Guidance Available Yet
            </h3>
            <p className="text-gray-600">
              Complete the onboarding questionnaire to receive your personalized career guidance.
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
        >
          <button
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Link to="/progress">View Progress Dashboard</Link>
          </button>
          <Link
            to="/roadmap"
            className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center block"
          >
            View Learning Roadmap
          </Link>
        </motion.div>
      </div>
    </div>
  );
}