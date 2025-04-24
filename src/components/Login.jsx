
import React, { useState } from 'react';
import { X, Mail, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [step, setStep] = useState('email'); // 'email' or 'verify'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // null, 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const { signInWithOtp, verifyOtp } = useAuth();

  // Handle email form submission
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setStatus(null);
    
    try {
      const { success, error } = await signInWithOtp(email);
      
      if (success) {
        setStep('verify');
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(error || 'Failed to send verification code');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred');
      console.error('Sign in error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle verification code submission
  const handleVerificationSubmit = async (e) => {
    e.preventDefault();
    
    if (!verificationCode || verificationCode.length < 6) {
      setStatus('error');
      setErrorMessage('Please enter a valid verification code');
      return;
    }

    setIsSubmitting(true);
    setStatus(null);
    
    try {
      const { success, error } = await verifyOtp(email, verificationCode);
      
      if (success) {
        setStatus('success');
        onClose(); // Close the modal on successful login
      } else {
        setStatus('error');
        setErrorMessage(error || 'Invalid verification code');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred');
      console.error('Verification error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle backdrop click to close modal
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
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-modalFade shadow-2xl">
        <div className="flex justify-between items-center border-b border-gray-100 p-4">
          <h3 className="text-xl font-bold text-accent">
            {step === 'email' ? 'Sign In to Learn Leopard' : 'Enter Verification Code'}
          </h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          {step === 'email' ? (
            <div>
              <div className="mb-6">
                <div className="bg-primary-light rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                  <Mail size={24} className="text-primary" />
                </div>
                <p className="text-center text-gray-600">
                  Enter your email to sign in or create an account. We'll send you a verification code.
                </p>
              </div>
              
              <form onSubmit={handleEmailSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4 flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-600">{errorMessage}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-3 rounded-lg hover:shadow-md transition-all disabled:opacity-50 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Continue with Email
                      <ArrowRight size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <div className="bg-primary-light rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle size={24} className="text-primary" />
                </div>
                <p className="text-center text-gray-600">
                  We've sent a verification code to <strong>{email}</strong>. Please enter it below.
                </p>
              </div>
              
              <form onSubmit={handleVerificationSubmit}>
                <div className="mb-4">
                  <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    id="verificationCode"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter 6-digit code"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4 flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-600">{errorMessage}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-3 rounded-lg hover:shadow-md transition-all disabled:opacity-50 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </div>
                  ) : (
                    <>
                      Verify and Sign In
                      <ArrowRight size={18} className="ml-2" />
                    </>
                  )}
                </button>
                
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setStep('email');
                      setStatus(null);
                      setVerificationCode('');
                    }}
                    className="text-primary text-sm font-medium"
                  >
                    Use a different email address
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
