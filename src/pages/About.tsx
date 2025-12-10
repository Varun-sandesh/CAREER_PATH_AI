import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Brain,
      title: 'AI-Driven Insights',
      description: 'Our advanced AI analyzes market trends and your profile to provide the most relevant career guidance.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data is encrypted and secure. We never share your personal information with third parties.'
    },
    {
      icon: Zap,
      title: 'Fast Results',
      description: 'Get instant career recommendations and start your journey immediately after onboarding.'
    },
    {
      icon: Heart,
      title: 'Human-Centered',
      description: 'While powered by AI, our platform is designed with human needs and aspirations at the core.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About CareerAI
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering professionals worldwide with intelligent career guidance and personalized growth strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At CareerAI, we believe that everyone deserves access to personalized career guidance. 
                Our mission is to democratize career development by making advanced AI-powered insights 
                accessible to professionals at every stage of their journey.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We combine cutting-edge artificial intelligence with proven career development methodologies 
                to help you navigate the modern job market, identify opportunities, and achieve your 
                professional goals faster than ever before.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold">50K+</div>
                    <div className="text-blue-100">Users Helped</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">89%</div>
                    <div className="text-blue-100">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">6 Months</div>
                    <div className="text-blue-100">Avg. Goal Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-blue-100">AI Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at CareerAI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built by Career Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines decades of experience in career development, AI technology, 
              and human resources to create the most effective career guidance platform.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Trusted by Leading Companies
              </h3>
              <p className="text-gray-600 mb-8">
                Our career guidance has helped professionals land jobs at top companies worldwide
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
                <div className="text-2xl font-bold text-gray-400">Google</div>
                <div className="text-2xl font-bold text-gray-400">Microsoft</div>
                <div className="text-2xl font-bold text-gray-400">Apple</div>
                <div className="text-2xl font-bold text-gray-400">Amazon</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}