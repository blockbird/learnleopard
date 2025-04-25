import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import sarahImage from '../assets/images/sarah.png';
import michaelImage from '../assets/images/michael.png';
import ameliaImage from '../assets/images/amelia.png';

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  
  const testimonials = [
    {
      quote: "Learn Leopard revolutionized how I find AI tools for my classroom. The reviews are spot-on and save me hours of research!",
      name: "Sarah Chen",
      title: "High School STEM Teacher",
      image: sarahImage,
      rating: 5,
    },
    {
      quote: "As a lifelong learner, staying current with AI is crucial. Learn Leopard's daily updates and insights are invaluable.",
      name: "Michael Reyes",
      title: "Software Developer",
      image: michaelImage,
      rating: 5,
    },
    {
      quote: "The personalized learning path helped me focus my AI studies. I feel much more confident applying AI concepts in my work.",
      name: "Amelia Xie",
      title: "Marketing Manager",
      image: ameliaImage,
      rating: 5,
    },
  ];
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
      }
    }, 6000);
    
    return () => clearInterval(intervalRef.current);
  }, [isPaused, testimonials.length]);
  
  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-20 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What Our Members Say
          </h2>
          <p className="text-primary max-w-2xl mx-auto">
            Join hundreds of satisfied members who are transforming their educational journey with Learn Leopard.
          </p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative h-64 md:h-52">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex transition-opacity duration-700 ${
                  index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-primary">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="text-primary fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="italic text-gray-600 mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div>
                      <p className="font-bold text-accent">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute left-0 right-0 bottom-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md text-accent hover:bg-gray-100 z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md text-accent hover:bg-gray-100 z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
  