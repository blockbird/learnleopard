import React, { useState, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="pt-40 md:pt-48 pb-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-accent">Leap into AI learning with </span>
              <span className="bg-gradient-to-r from-secondary-dark to-secondary text-transparent bg-clip-text">Learn Leopard</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Your guide to the best AI education tools and strategies. 
              Discover, learn, and excel with cutting-edge AI resources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleScroll('pricing')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center"
                aria-label="Start your AI learning journey"
              >
                Start Your AI Learning Journey
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative z-10">
            <div className="relative group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -left-5 -bottom-5 w-28 h-28 bg-primary-light rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
              
              <video 
                ref={videoRef}
                src="https://jpbq4vkvpplludcc.public.blob.vercel-storage.com/learnleopardlander-oYh4UIEgyohXiJQe8RcJuraGWsIriw.mp4"
                poster="https://jpbq4vkvpplludcc.public.blob.vercel-storage.com/videothumbnail-ttMnJveKSmtYhZBRxB2QmwAfTW1KTN.jpeg"
                controls
                loop
                playsInline
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                className="rounded-2xl shadow-2xl z-10 relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              >
                Your browser does not support the video tag.
              </video>

              {!isPlaying && (
                <button 
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-opacity duration-300 rounded-2xl z-20 cursor-pointer focus:outline-none"
                  aria-label="Play video"
                >
                  <Play 
                    size={80}
                    className="text-white opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300"
                    fill="currentColor"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-secondary rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-primary-light rounded-full opacity-40 animate-float-delay"></div>
      <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-secondary-dark rounded-full opacity-20 animate-float-slow"></div>
      
      {/* Leopard spots pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-6 h-4 bg-black rounded-full transform rotate-45"></div>
        <div className="absolute top-40 left-1/3 w-5 h-3 bg-black rounded-full transform -rotate-20"></div>
        <div className="absolute top-60 left-1/5 w-4 h-3 bg-black rounded-full transform rotate-30"></div>
        <div className="absolute bottom-40 right-1/4 w-6 h-4 bg-black rounded-full transform rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-3 bg-black rounded-full transform -rotate-20"></div>
      </div>
    </section>
  );
};
  