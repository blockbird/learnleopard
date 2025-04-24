import React from 'react';

export const Logo = ({ isDark }) => {
  return (
    <div 
      className="flex items-center cursor-pointer" 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <div className="relative">
        <div className={`w-10 h-10 ${isDark ? 'bg-amber-400' : 'bg-amber-500'} rounded-full flex items-center justify-center`}>
          <span className="text-white font-bold text-xl">L</span>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-full transform scale-110 rotate-45 opacity-0 hover:opacity-100 transition-opacity" style={{ clipPath: "polygon(30% 0%, 40% 10%, 55% 10%, 65% 0%, 80% 10%, 85% 20%, 100% 30%, 95% 45%, 100% 60%, 90% 75%, 100% 90%, 90% 100%, 70% 95%, 50% 100%, 30% 95%, 10% 100%, 0% 85%, 5% 65%, 0% 50%, 5% 35%, 0% 15%, 15% 5%)" }}></div>
      </div>
      <div className="ml-2">
        <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-blue-900'}`}>Learn</span>
        <span className={`font-bold text-xl ${isDark ? 'text-amber-400' : 'text-amber-500'}`}>Leopard</span>
      </div>
    </div>
  );
};

// Set default props
Logo.defaultProps = {
  isDark: false
};