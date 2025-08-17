import React from 'react';
// Remove background image import
// import jungleBg from '../assets/images/jungle-bg.jpg';

export const IntroTextSection = () => {
  return (
    // Remove background image styles, add back plain background
    <section 
      className="py-16 md:py-24 bg-gray-50" // Back to bg-gray-50
      // Remove style attribute
      // style={{ backgroundImage: `url(${jungleBg})` }}
    >
      {/* Remove overlay */}
      {/* <div className="absolute inset-0 bg-white bg-opacity-85"></div> */}
      
      {/* Remove relative and z-10 from container */}
      <div className="container mx-auto px-4 max-w-3xl text-center">
        
        {/* Text colors already reverted, ensure they are suitable for light background */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"> {/* Use gray-700 for body text */}
          If you're a parent trying to help your kids learn with AI, you know it's confusing 🤔.
        </p>

        <div className="space-y-4 text-lg md:text-xl text-gray-700 mb-10"> {/* Use gray-700 */}
          <p>Which apps are actually good? ✅</p>
          <p>Will the tool you pick today be obsolete next month? ⏳</p>
          <p>How do you separate real quality from paid hype? 💸</p>
        </div>

        {/* Reverted pull quote to inline italic */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          I went through that exact frustration 😩—Googling reviews 🔍, watching YouTube videos 📺, hearing about a friend-of-a-friend's kids "flying ahead" on some secret AI app, and wondering: <i className="font-medium text-accent">Why not mine?</i>
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"> {/* Use gray-700 */}
          That's why we built <span className="font-bold text-accent">Learn Leopard</span> 🐆.
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed"> {/* Use gray-700 */}
          It's a membership platform where parents and educators—<span className="italic">not advertisers</span>—test every promising AI learning tool for kids.
          <br />
          No ads 🚫. No sponsorships 🚫. No affiliate links 🚫. Just honest, hands-on reviews 👍.
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"> {/* Use gray-700 */}
          We charge a subscription so we can stay completely unbiased—and keep you up-to-date.
          <br/>
          And because new tools launch daily 🚀 - what's best today might not be best tomorrow.
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"> {/* Use gray-700 */}
          If you want a shortcut to the best AI learning tools—and a community of parents who get it 🤝—<span className="font-semibold text-gray-900">join us</span>.
          <br />
          Instant access ✨. Personalized plans. Zero guesswork.
        </p>

      </div>
    </section>
  );
}; 