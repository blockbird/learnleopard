
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "What is Learn Leopard?",
      answer: "Learn Leopard is a membership platform that curates and reviews AI education tools. We provide updates on new tools, in-depth written reviews, video reviews, and structured learning guides to help you make the most of AI in education."
    },
    {
      question: "Can I cancel my membership at any time?",
      answer: "Absolutely! You can cancel your Learn Leopard membership at any time. If you cancel within the first 30 days, you're eligible for our money-back guarantee."
    },
    {
      question: "Are the learning schedules suitable for all ages?",
      answer: "Yes, we provide learning schedules for various age groups. Each schedule is carefully crafted to match developmental stages and learning objectives appropriate for different ages."
    },
    {
      question: "How do I know which AI tools are best for my needs?",
      answer: "Our comprehensive reviews include specific use cases, strengths, and limitations of each tool. Additionally, members can access personalized recommendations based on their learning goals, teaching context, or subject areas."
    },
    {
      question: "Can I request reviews for specific AI education tools?",
      answer: "Yes! Premium members can request reviews for specific AI education tools. We consider all requests and prioritize those that receive multiple member inquiries."
    }
  ];
  
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-accent-light text-transparent bg-clip-text">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Learn Leopard's membership and services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`mb-4 border-b border-gray-100 pb-4 ${index === faqs.length - 1 ? 'border-b-0' : ''}`}
            >
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-accent' : 'text-gray-700'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? 
                  <ChevronUp className="h-5 w-5 text-primary" /> : 
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                }
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
  