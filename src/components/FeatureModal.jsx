
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const FeatureModal = ({ title, children, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);
  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-modalFade shadow-2xl">
        <div className="flex justify-between items-center border-b border-gray-100 p-4">
          <h3 className="text-xl font-bold text-accent">{title}</h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600" 
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
        <div className="border-t border-gray-100 p-4 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 transition-colors"
            aria-label="Close modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
  