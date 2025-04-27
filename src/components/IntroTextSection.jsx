import React from 'react';
import jungleBg from '../assets/images/jungle-bg.jpg'; // Import the background image

export const IntroTextSection = () => {
  return (
    // Add background image styles and position relative for the overlay
    <section 
      className="py-16 md:py-24 relative bg-cover bg-center" 
      style={{ backgroundImage: `url(${jungleBg})` }}
    >
      {/* Add overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      
      {/* Add position relative to bring content above overlay */}
      <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
        
        <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
          If you're a parent trying to help your kids learn with AI, you know it's confusing.
        </p>

        <div className="space-y-4 text-lg md:text-xl text-white mb-10">
          <p>Which apps are actually good?</p>
          <p>Will the tool you pick today be obsolete next month?</p>
          <p>How do you separate real quality from paid hype?</p>
        </div>

        <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
          I went through that exact frustration—Googling reviews, watching YouTube videos, hearing about a friend-of-a-friend's kids "flying ahead" on some secret AI app, and wondering: <span className="font-semibold text-white">Why not mine?</span>
        </p>

        <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
          That's why we built <span className="font-bold text-primary">Learn Leopard</span>.
        </p>

        <p className="text-lg md:text-xl text-white mb-10 leading-relaxed">
          It's a membership platform where parents and educators—<span className="italic">not advertisers</span>—test every promising AI learning tool for kids.
          <br />
          No ads. No sponsorships. No affiliate links. Just honest, hands-on reviews.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          Every week, we:
        </h2>

        <ul className="list-none space-y-3 mb-10 text-left inline-block">
          <li className="flex items-start">
            <span className="text-secondary mr-3 mt-1">✓</span>
            <span className="text-white">Scan the web for brand-new AI tools (forums, launch sites, even domain registrations)</span>
          </li>
          <li className="flex items-start">
            <span className="text-secondary mr-3 mt-1">✓</span>
            <span className="text-white">Filter and thoroughly test the most promising candidates</span>
          </li>
          <li className="flex items-start">
            <span className="text-secondary mr-3 mt-1">✓</span>
            <span className="text-white">Score and rank them in our library</span>
          </li>
          <li className="flex items-start">
            <span className="text-secondary mr-3 mt-1">✓</span>
            <span className="text-white">Build personalized learning plans tailored to your child's age, interests, and abilities</span>
          </li>
        </ul>

        <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
          We charge a small subscription so we can stay completely unbiased—and keep you up-to-date.
          <br/>
          Because new tools launch daily, and what's best today might not be best tomorrow.
        </p>

        <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
          If you want a shortcut to the best AI learning tools—and a community of parents who get it—<span className="font-semibold text-white">join us</span>.
          <br />
          Instant access. Personalized plans. Zero guesswork.
        </p>

        <p className="text-xl md:text-2xl font-bold text-primary">
          We're glad you're here. 🐆
        </p>

      </div>
    </section>
  );
}; 