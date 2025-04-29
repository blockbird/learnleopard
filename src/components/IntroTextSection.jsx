import React from 'react';
// Remove background image import
// import jungleBg from '../assets/images/jungle-bg.jpg'; 
// Import necessary icons
import { Search, Filter, ClipboardList, UserCheck } from 'lucide-react'; 
// Import the new image
import gladLeopardImg from '../assets/images/gladleopard.png';

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

        {/* Card container for the list */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 my-12 inline-block text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 text-center">
            Every week, we:
          </h2>

          <ul className="list-none space-y-4"> {/* Increased spacing */}
            <li className="flex items-start">
              <Search size={20} className="text-primary mr-3 mt-1 flex-shrink-0" /> {/* Icon */}
              <span className="text-gray-700">Scan the web for brand-new AI tools (forums, launch sites, even domain registrations)</span>
            </li>
            <li className="flex items-start">
              <Filter size={20} className="text-primary mr-3 mt-1 flex-shrink-0" /> {/* Icon */}
              <span className="text-gray-700">Filter and thoroughly test the most promising candidates</span>
            </li>
            <li className="flex items-start">
              <ClipboardList size={20} className="text-primary mr-3 mt-1 flex-shrink-0" /> {/* Icon */}
              <span className="text-gray-700">Score and rank them in our library 📊</span>
            </li>
            <li className="flex items-start">
              <UserCheck size={20} className="text-primary mr-3 mt-1 flex-shrink-0" /> {/* Icon */}
              <span className="text-gray-700">Build personalized learning plans tailored to your child's age, interests, and abilities 🎯</span>
            </li>
          </ul>
        </div>

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

        {/* Replace the final text paragraph with the image */}
        <div className="mt-8 flex justify-center"> {/* Added flex justify-center to center the relative container */}
          <div className="relative w-3/4"> {/* Added relative container with w-3/4 */}
            {/* Offset Frame Div */}
            <div className="absolute -left-4 -top-4 w-full h-full bg-primary rounded-xl opacity-20 z-0"></div>
            {/* Image Tag */}
            <img 
              src={gladLeopardImg} 
              alt="Happy Learn Leopard mascot" 
              // Keep size classes, add relative and z-10
              className="rounded-xl shadow-lg w-full mx-auto h-auto relative z-10" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}; 