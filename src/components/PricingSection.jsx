
import React, { useState } from 'react';
import { CheckCircle, Info } from 'lucide-react';

export const PricingSection = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const plan = {
    name: "Premium",
    description: "Our membership plan for serious learners",
    features: [
      "AI tool updates",
      "Full access to written reviews",
      "Video reviews library",
      "Personalised learning schedules",
      "Resources for AI in education",
      "Ask us to review a tool",
      "Early access to new features",
      "Priority support"
    ],
    buttonText: "Join Waitlist",
    highlighted: true
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-black rounded-full transform rotate-45"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-accent-light text-transparent bg-clip-text">
              Membership Plan
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join learners who are transforming education with our AI tools reviews and guidance.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div
            className="rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 relative 
              bg-gradient-to-br from-accent to-accent-light text-white shadow-xl"
          >
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <span className="bg-primary text-accent text-xs font-bold px-4 py-1 rounded-full uppercase shadow-md">
                Our Membership Plan
              </span>
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-white">
              {plan.name}
            </h3>
            
            <p className="mb-6 text-sm text-gray-200">
              {plan.description}
            </p>
            
            <ul className="mb-8 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mr-2 text-primary" />
                  <span className="text-sm text-gray-200">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            <a
              href="https://e23w92zy07h.typeform.com/to/rwKLRWs9"
              className="block w-full py-3 rounded-full font-medium transition-all text-center 
                bg-primary hover:bg-primary-dark text-accent"
              aria-label="Join Waitlist"
              target="_blank"
              rel="noopener noreferrer"
            >
              {plan.buttonText}
            </a>
            
            <div className="mt-4 text-center">
              <div 
                className="inline-flex items-center text-xs cursor-pointer relative"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <Info className="h-4 w-4 mr-1 text-gray-200" />
                <span className="text-gray-200">30-day money back guarantee</span>
                
                {showTooltip && (
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-48 bg-white text-gray-800 text-xs p-2 rounded shadow-lg z-10">
                    Try risk-free for 30 days. If you're not satisfied, we'll refund your payment.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
  