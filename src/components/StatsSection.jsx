
import React, { useRef, useEffect, useState } from 'react';
import { LucideMapPinCheckInside, BookOpen, Clock, Users } from 'lucide-react';

export const StatsSection = () => {
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const stats = [
    {
      icon: <LucideMapPinCheckInside className="h-8 w-8 text-primary" />,
      count: 20,
      label: "AI Tools Reviewed",
      suffix: "+"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      count: 27,
      label: "Average Score Improvement",
      suffix: "%"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      count: 10,
      label: "Hours Saved Weekly",
      suffix: "+"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      count: 200,
      label: "Happy Members",
      suffix: "+"
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-accent">
                  {isVisible ? (
                    <Counter end={stat.count} duration={2000} />
                  ) : (
                    0
                  )}
                </span>
                <span className="text-3xl md:text-4xl font-bold text-primary ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Counter animation component
const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (end === 0) return;
    
    let start = 0;
    const incrementTime = (duration / end) * (end < 100 ? 1 : 0.5);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return <>{count.toLocaleString()}</>;
};
  