import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export const OutsetaModal = ({ isOpen, onClose, url }) => {
  const iframeRef = useRef(null);
  
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-xl w-full max-w-4xl h-[90vh] animate-modalFade shadow-2xl relative overflow-hidden">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-1"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        <iframe
          ref={iframeRef}
          src={url}
          className="w-full h-full border-0"
          title="Outseta Registration Form"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
};