import React, { useState, useEffect } from 'react';
    import { X, Check, AlertCircle } from 'lucide-react';
    import { signupForMembership } from '../lib/database';

    export const MembershipModal = ({ planName, planPrice, period, onClose }) => {
      const [formData, setFormData] = useState({
        name: '',
        email: ''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'
      const [errorMessage, setErrorMessage] = useState('');

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

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.email || !formData.email.includes('@') || !formData.name) {
          setFormStatus('error');
          setErrorMessage('Please fill in all fields correctly');
          return;
        }

        setIsSubmitting(true);
        setFormStatus(null);
        
        try {
          const result = await signupForMembership(
            formData.email, 
            formData.name, 
            planName
          );
          
          if (result.success) {
            setFormStatus('success');
          } else {
            setFormStatus('error');
            setErrorMessage(result.error);
          }
        } catch (error) {
          setFormStatus('error');
          setErrorMessage('An unexpected error occurred. Please try again.');
          console.error('Signup error:', error);
        } finally {
          setIsSubmitting(false);
        }
      };

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
              <h3 className="text-xl font-bold text-accent">Join {planName} Membership</h3>
              <button 
                onClick={onClose} 
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="mx-auto bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your {planName} membership registration was successful. 
                    We've sent the details to your email.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 bg-orange-500 text-white font-medium px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-accent">{planName} Plan</span>
                        <span className="text-accent font-bold">${planPrice}/{period}</span>
                      </div>
                    </div>
                  
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                          disabled={isSubmitting}
                          aria-label="Your full name"
                        />
                      </div>
                    
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                          disabled={isSubmitting}
                          aria-label="Your email address"
                        />
                      </div>
                    </div>
                  </div>
                
                  {formStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4 flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-600">{errorMessage}</p>
                    </div>
                  )}
                
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={onClose}
                      className="mr-3 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md hover:shadow-md transition-all disabled:opacity-50"
                      aria-label="Complete registration"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </div>
                      ) : (
                        'Complete Registration'
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs text-gray-500">
                    By registering, you agree to our Privacy Policy and Terms of Service.
                    Your payment information will be collected securely on the next step.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      );
    };