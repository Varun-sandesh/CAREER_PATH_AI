import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Career Assessment', href: '/onboarding' },
    { name: 'Learning Roadmaps', href: '/roadmap' },
    { name: 'Success Stories', href: '/about' },
    { name: 'Resources', href: '/progress' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/contact' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];


  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/YourCareerPathPro' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/CareerPathPro' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/varun-sandesh-97ba8b316' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/CareerPathPro' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">CareerPath Pro</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering professionals to achieve their career goals through personalized 
              learning paths and expert guidance.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"             // Opens link in a new tab
                  rel="noopener noreferrer"   // Security best practice for target="_blank"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {/* These are internal links, so <Link> is correct */}
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  {/* These are internal links, so <Link> is correct */}
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>varunrider873@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91 9502784715</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>hyderabad, india</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 CareerPath Pro. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}