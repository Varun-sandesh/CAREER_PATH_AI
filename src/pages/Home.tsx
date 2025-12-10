import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, Target, TrendingUp, Users, ArrowRight, Star, Sparkles, MessageCircle, Briefcase, DollarSign, TrendingUp as Growth, Activity } from 'lucide-react';
import { careerRoles } from '../data/careerRoles';

export default function Home() {
  const navigate = useNavigate();

  const handleCareerClick = (roleId: string) => {
    // Store selected role for roadmap page
    const userData = JSON.parse(localStorage.getItem('userProfile') || '{}');
    userData.desiredRole = roleId;
    localStorage.setItem('userProfile', JSON.stringify(userData));

    // Navigate to roadmap
    navigate('/roadmap');
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Guidance',
      description: 'Get personalized career advice powered by advanced AI technology',
      color: 'blue'
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Set clear career objectives and track your progress',
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Skill Development',
      description: 'Identify skill gaps and get recommended learning paths',
      color: 'green'
    },
    {
      icon: MessageCircle,
      title: 'AI Assistant',
      description: 'Chat with our AI assistant for instant career advice',
      color: 'indigo'
    }
  ];

  const testimonials = [
    {
      name: 'Varun Sandesh',
      role: 'Software Engineer at Google',
      content: 'CareerPath Pro helped me transition from marketing to tech in just 8 months! The AI guidance was incredibly accurate.',
      rating: 5,
      avatar: 'https://wallpapercave.com/wp/wp11276608.jpg'
    },
    {
      name: 'Sai Charan',
      role: 'Data Scientist at Qwallacumm',
      content: 'The personalized roadmap was exactly what I needed to advance my career. The AI assistant answered all my questions.',
      rating: 5,
      avatar: 'https://wallpapers.com/images/thumbnail/funny-old-man-pictures-u7urvj45ydnyhxqy.webp'
    },
    {
      name: 'Abhilash',
      role: 'Product Manager at Apple',
      content: 'Incredible platform! The AI guidance feels like having a personal career coach available 24/7.',
      rating: 5,
      avatar: 'https://images8.alphacoders.com/669/669047.png'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Professionals Guided' },
    { number: '89%', label: 'Success Rate' },
    { number: '6 Months', label: 'Average Goal Achievement' },
    { number: '24/7', label: 'AI Support Available' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-400 to-pink-400 opacity-20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-8"
            >
              <Sparkles className="h-10 w-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Ready to Transform
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Your Career?
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100 leading-relaxed"
            >
              Join over 50,000 professionals who've accelerated their careers with our proven methodology.
              Get personalized AI guidance, skill recommendations, and roadmaps tailored specifically for your goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link
                to="/onboarding"
                className="group flex items-center space-x-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                <span>Start Your Journey Today</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/ai-assistant"
                className="group flex items-center space-x-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Try AI Assistant</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose CareerPath Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our platform combines cutting-edge AI with proven career development strategies 
              to accelerate your professional growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-${feature.color}-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Roles Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Career Paths
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our curated career paths and get a personalized roadmap to achieve your goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => handleCareerClick(role.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={role.image}
                    alt={role.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {role.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {role.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                        <span className="font-medium">Salary Range</span>
                      </div>
                      <span className="font-bold text-green-600">{role.salary}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Growth className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="font-medium">Growth</span>
                      </div>
                      <span className={`font-bold ${
                        role.growth === 'Very High' ? 'text-green-600' :
                        role.growth === 'High' ? 'text-blue-600' :
                        'text-orange-600'
                      }`}>
                        {role.growth}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Activity className="h-4 w-4 mr-2 text-purple-600" />
                        <span className="font-medium">Demand</span>
                      </div>
                      <span className={`font-bold ${
                        role.demand === 'Very High' ? 'text-green-600' :
                        role.demand === 'High' ? 'text-blue-600' :
                        'text-orange-600'
                      }`}>
                        {role.demand}
                      </span>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 group-hover:shadow-lg">
                    <span>View Roadmap</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how CareerPath Pro has transformed careers across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who have accelerated their careers with AI-powered guidance
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/onboarding"
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                <span>Start Your Journey Today</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/ai-assistant"
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat with AI</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}