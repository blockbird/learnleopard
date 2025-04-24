
import React from 'react';
import { Link } from 'react-router-dom';

export const NewLogo = ({ isDark }) => {
  return (
    <Link 
      to="/"
      className="flex items-center cursor-pointer" 
      aria-label="Learn Leopard Home"
    >
      <div className="h-auto">
        <img 
          src="https://heyboss.heeyo.ai/user-assets/learn%20leopard%20transparent_sFqcp8Lh.png"
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
  