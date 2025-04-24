
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NewLogo } from './NewLogo';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      window.location.href = '/#' + sectionId;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigation items with proper capitalization
  const navItems = [
    { id: 'features', label: 'Features' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NewLogo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-medium text-accent hover:text-primary transition-colors"
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://login.circle.so/sign_in?request_host=premium.learnleopard.com#email"
            className="bg-gray-100 hover:bg-gray-200 text-accent font-bold px-5 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            aria-label="Login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
          <a 
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('pricing');
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-orange-500"
            aria-label="Join now"
          >
            Join Now
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="font-medium text-accent hover:text-primary transition-colors text-left py-2 border-b border-gray-100"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex flex-col space-y-3 pt-2">
              <a 
                href="https://login.circle.so/sign_in?request_host=premium.learnleopard.com#email"
                className="bg-gray-100 hover:bg-gray-200 text-accent font-bold px-5 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                aria-label="Login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </a>
              <a 
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  handleNavClick('pricing');
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-orange-500 text-center"
                aria-label="Join now"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
  