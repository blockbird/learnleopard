
import React, { useRef, useEffect, useState } from 'react';
import { TrendingUp, Clock, Lightbulb } from 'lucide-react';
import { FeatureModal } from './FeatureModal';

export const BenefitsSection = () => {
  const benefitsRef = useRef([]);
  const [showResearchModal, setShowResearchModal] = useState(false);
  const [showHowItWorksModal, setShowHowItWorksModal] = useState(false);
  const [showWhyAIMattersModal, setShowWhyAIMattersModal] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideIn');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    benefitsRef.current.forEach((benefit) => {
      if (benefit) {
        observer.observe(benefit);
      }
    });
    
    return () => {
      benefitsRef.current.forEach((benefit) => {
        if (benefit) {
          observer.unobserve(benefit);
        }
      });
    };
  }, []);
  
  const benefits = [
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Improved Testing Scores",
      description: "Students using AI education tools show an average 27% increase in test performance across subjects.",
      imageUrl: "https://heyboss.heeyo.ai/user-assets/ChatGPT%20Image%20Apr%201%2C%202025%2C%2007_57_42%20PM_jhQhm8tS.png",
      buttonText: "See the Research",
      action: () => setShowResearchModal(true)
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Learn Anywhere, Anytime",
      description: "Access your personalized learning plan from any device, whenever it fits your schedule.",
      imageUrl: "https://heyboss.heeyo.ai/user-assets/ChatGPT%20Image%20Apr%202,%202025,%2009_06_04%20AM_Lww-b4eb.png",
      buttonText: "How It Works",
      action: () => setShowHowItWorksModal(true)
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Stay Ahead of the Curve",
      description: "Be the first to know about emerging AI learning tools and techniques that are reshaping education.",
      imageUrl: "https://heyboss.heeyo.ai/user-assets/ChatGPT%20Image%20Apr%202,%202025,%2008_27_31%20AM_Du3o2t1Y.png",
      buttonText: "Why AI Education Matters",
      action: () => setShowWhyAIMattersModal(true)
    }
  ];
  
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-accent-light text-transparent bg-clip-text">
              Why Choose AI Learning
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI-powered education tools are revolutionizing how we learn. Discover the advantages that await when you embrace the future of education.
          </p>
        </div>
        
        <div className="space-y-24">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              ref={(el) => (benefitsRef.current[index] = el)}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 lg:gap-16 opacity-0 transform translate-y-10 transition-all duration-700 ease-out`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className={`absolute ${index % 2 === 0 ? '-left-4' : '-right-4'} -top-4 w-full h-full bg-primary rounded-xl opacity-20`}></div>
                  <img
                    src={benefit.imageUrl}
                    alt={benefit.title}
                    className="rounded-xl shadow-lg w-full h-auto relative z-10"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary-light bg-opacity-30">
                    {benefit.icon}
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-accent">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {benefit.description}
                </p>
                
                <button 
                  onClick={benefit.action}
                  className="text-primary font-bold flex items-center hover:text-primary-dark transition-colors"
                  aria-label={benefit.buttonText}
                >
                  {benefit.buttonText}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Modal */}
      {showResearchModal && (
        <FeatureModal
          title="Research on AI in Education"
          onClose={() => setShowResearchModal(false)}
        >
          <div className="space-y-6">
            <div className="bg-primary-light bg-opacity-20 p-4 rounded-lg mb-4">
              <p className="text-sm italic">Investigating the effect of artificial intelligence in education: A meta-analysis</p>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold text-lg text-accent mb-2">1. What was the study's purpose?</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700">
                  Researchers analysed 85 controlled studies (10 469 learners) published since 2011 to see whether AI improves academic results. Converting their statistical effect (Hedges g = 1.10) into plain language: the average student jumped from the 50th to about the 86th percentile — a 36‑point gain, or a 72% boost in rank compared with peers who learned without AI.
                </p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <h3 className="font-bold text-lg text-accent mb-2">2. Which AI tools work best</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700">
                  Chatbots delivered the strongest bump, lifting learners roughly 41 percentile points (to the top‑10%), while intelligent tutoring systems added about 36 points and personalised‑learning platforms around 28 points. All three categories therefore move students well above the class median, with chatbots edging ahead thanks to rapid, tailored feedback.
                </p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <h3 className="font-bold text-lg text-accent mb-2">3. Why it matters</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  For a lay audience, the takeaway is simple: in the right setting, AI tools can catapult an average student into the top tier of the class within weeks. Schools get the biggest payoff by starting with maths or coding chatbots, running tight pilots, and training teachers to use the data dashboards that keep those percentile gains real.
                </p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                <strong>Source:</strong> Tlili et al (2025) "Investigating the effect of artificial intelligence in 
                education (AIEd) on learning achievement: A meta-analysis and research synthesis" 
                (<a href="https://journals.sagepub.com/doi/10.1177/02666669241304407" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline break-words">
                  https://journals.sagepub.com/doi/10.1177/02666669241304407
                </a>)
              </p>
            </div>
          </div>
        </FeatureModal>
      )}

      {/* How It Works Modal */}
      {showHowItWorksModal && (
        <FeatureModal
          title="How Personalized AI Learning Works"
          onClose={() => setShowHowItWorksModal(false)}
        >
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-accent">The Personalized Learning Process</h3>
            
            <div className="bg-primary-light bg-opacity-20 p-4 rounded-lg mb-6">
              <p className="text-sm italic">How AI adapts to individual learning needs and creates personalized educational experiences</p>
            </div>
            
            <h4 className="font-bold text-accent">1. Initial Assessment</h4>
            <p className="text-gray-700 mb-4">
              The process begins with a comprehensive assessment of the learner's current knowledge, skills, learning style, interests, and goals. This creates a baseline profile that guides all future recommendations.
            </p>
            
            <h4 className="font-bold text-accent">2. Customized Learning Path</h4>
            <p className="text-gray-700 mb-4">
              AI algorithms create a personalized learning path that sequences activities in an optimal order based on the learner's profile. This path is continuously refined as new data about learning behavior and progress is collected.
            </p>
            
            <h4 className="font-bold text-accent">3. Adaptive Content Delivery</h4>
            <p className="text-gray-700 mb-4">
              Content is presented in formats that best match the learner's preferences—whether that's visual, auditory, reading/writing, or kinesthetic. The system automatically adjusts difficulty levels to maintain an optimal challenge.
            </p>
            
            <h4 className="font-bold text-accent">4. Real-Time Feedback</h4>
            <p className="text-gray-700 mb-4">
              As learners engage with materials, they receive immediate, constructive feedback on their performance. This just-in-time guidance helps solidify correct understanding and quickly addresses misconceptions.
            </p>
            
            <h4 className="font-bold text-accent">5. Progress Monitoring</h4>
            <p className="text-gray-700 mb-4">
              Comprehensive dashboards allow both learners and parents/teachers to track progress toward learning goals, identify strengths and areas for improvement, and celebrate achievements.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mt-6">
              <h4 className="font-bold text-accent text-sm">Key Benefits of Personalization:</h4>
              <ul className="text-xs text-gray-600 list-disc pl-4 mt-2">
                <li>Learning at the optimal pace—neither too fast nor too slow</li>
                <li>Focus on areas where support is most needed</li>
                <li>Higher engagement through relevant, interesting content</li>
                <li>Reduced frustration and increased confidence</li>
                <li>Development of self-directed learning skills</li>
                <li>More efficient use of learning time</li>
              </ul>
            </div>
          </div>
        </FeatureModal>
      )}

      {/* Why AI Education Matters Modal */}
      {showWhyAIMattersModal && (
        <FeatureModal
          title="Why AI Education Matters"
          onClose={() => setShowWhyAIMattersModal(false)}
        >
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-accent">The Power of Personalized Learning</h3>
            
            <p className="text-gray-700">AI education tools provide one-on-one style teaching that simply isn't possible in traditional classroom settings. This personalized approach adapts to each student's unique learning pace, style, and needs without requiring constant parental supervision.</p>
            
            <div className="bg-primary-light bg-opacity-20 p-4 rounded-lg">
              <h4 className="font-bold text-accent text-sm mb-2">Traditional vs. AI-Powered Learning:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="font-medium">Traditional Classroom:</p>
                  <ul className="list-disc pl-4 text-gray-600">
                    <li>One teacher for 20-30 students</li>
                    <li>Fixed pace for entire class</li>
                    <li>Limited personalized feedback</li>
                    <li>Standardized approach to all learners</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">AI-Powered Learning:</p>
                  <ul className="list-disc pl-4 text-gray-600">
                    <li>One-on-one attention for each student</li>
                    <li>Adaptive pacing based on mastery</li>
                    <li>Immediate, personalized feedback</li>
                    <li>Learning paths tailored to individual needs</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700">Parents often struggle to provide dedicated one-on-one teaching time while balancing work and other responsibilities. AI education tools fill this gap by:</p>
            
            <ul className="list-disc pl-5 text-gray-700">
              <li>Identifying knowledge gaps and automatically adjusting content</li>
              <li>Providing consistent, patient instruction without fatigue</li>
              <li>Offering immediate feedback rather than delayed corrections</li>
              <li>Adapting teaching methods to match each child's learning preferences</li>
              <li>Making learning engaging through gamification and interactive elements</li>
            </ul>
            
            <p className="text-gray-700 mt-4">By embracing AI education tools, parents can ensure their children receive personalized instruction that would otherwise require hours of individual tutoring or specialized education that might be inaccessible or unaffordable.</p>
          </div>
        </FeatureModal>
      )}
    </section>
  );
};
  