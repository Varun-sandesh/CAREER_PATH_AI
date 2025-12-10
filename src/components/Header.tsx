import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, User, Menu, X, Target, TrendingUp, MessageCircle, Home, Info, Mail } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Progress', href: '/progress', icon: TrendingUp },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Roadmap', href: '/roadmap', icon: Target },
    { name: 'AI Assistant', href: '/ai-assistant', icon: MessageCircle },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <motion.header 
      className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CareerPath Pro
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'bg-blue-50 text-blue-600 shadow-sm'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/onboarding"
              className="inline-flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Get Started</span>
              <Brain className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-4 space-y-2 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <Link
                to="/onboarding"
                className="flex items-center justify-center space-x-2 mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Get Started</span>
                <Brain className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}