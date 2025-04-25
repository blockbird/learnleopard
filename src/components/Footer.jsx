import React from 'react';
import { Link } from 'react-router-dom';
import { NewLogo } from './NewLogo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <NewLogo isDark={false} />
            </div>
            <p className="mb-6 mt-4 max-w-lg mx-auto">
              Discover the best AI education tools to enhance learning with personalized reviews and daily updates.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} Learn Leopard. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
  