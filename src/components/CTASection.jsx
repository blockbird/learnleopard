import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';
import { subscribeToNewsletter } from '../lib/database';

export const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const videoRef = useRef(null);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.log("Auto-play was prevented. User needs to interact with the page first:", e);
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setFormStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);
    
    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        setFormStatus('success');
        setEmail('');
      } else {
        setFormStatus('error');
        setErrorMessage(result.error);
      }
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-accent to-accent-light relative overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://cdn.pixabay.com/video/2016/09/21/5396-183629124_medium.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-accent opacity-70"></div>
      </div>
      
      {/* Leopard spot patterns */}
      <div className="absolute inset-0 opacity-10 z-10">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-primary rounded-full"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Learning with AI?
          </h2>
          
          <p className="text-lg text-gray-200 mb-8">
            Join hundreds of educators, parents, and learners who are already using 
            Learn Leopard to discover the best AI education tools and strategies.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-xl font-bold text-accent mb-2">Sign up for updates</h3>
            <p className="text-gray-600 mb-6">
              Be the first to know when we launch new features and reviews
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                required
                disabled={isSubmitting}
                aria-label="Your email address"
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:transform-none disabled:hover:shadow-none"
                aria-label="Join the waitlist"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                    Processing...
                  </>
                ) : (
                  <>
                    Join the Waitlist
                    <ArrowRight size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
            
            {formStatus === 'success' && (
              <div className="flex items-center text-green-600 mt-3">
                <Check size={18} className="mr-2" />
                <span>Thank you for joining our waitlist!</span>
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="flex items-center text-red-600 mt-3">
                <AlertCircle size={18} className="mr-2" />
                <span>{errorMessage}</span>
              </div>
            )}
            
            <p className="text-xs text-gray-500 mt-4">
              By signing up, you agree to our Privacy Policy and Terms of Service.
              We'll send occasional updates and special offers.
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => handleScroll('pricing')} 
              className="text-white bg-orange-500 hover:bg-orange-600 font-bold px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center"
              aria-label="View membership options"
            >
              Join 200+ Members
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};