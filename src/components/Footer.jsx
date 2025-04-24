
import React from 'react';
import { Link } from 'react-router-dom';
import { NewLogo } from './NewLogo';

export const Footer = () => {
  const currentYear = 2025;

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
            <a href="https://legal.heyboss.tech/67845a5e6e6bf5ecd4a3ae47/" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a href="https://legal.heyboss.tech/67845cfe76f9675292514b80/" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>
            <Link to="/" className="hover:text-primary transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
  