import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png'; // Import local logo

export const NewLogo = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link 
      to="/"
      onClick={scrollToTop}
      className="flex items-center cursor-pointer" 
      aria-label="Learn Leopard Home"
    >
      <div className="h-auto">
        <img 
          src={logoImage} // Use imported logo
          alt="Learn Leopard Logo" 
          className="h-16 md:h-20 w-auto object-contain"
        />
      </div>
    </Link>
  );
};

// Set default props
NewLogo.defaultProps = {
  isDark: false
};
  