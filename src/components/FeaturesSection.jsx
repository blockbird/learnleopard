
import React, { useState } from 'react';
import { ArrowRight, Calendar, FileText, Video, CalendarDays } from 'lucide-react';
import { FeatureModal } from './FeatureModal';

export const FeaturesSection = () => {
  const [modalContent, setModalContent] = useState(null);
  
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-accent" />,
      title: "Daily AI Tool Updates",
      description: "Never miss a new AI education tool with our daily curated updates",
      buttonText: "Discovery Process",
      modalTitle: "Daily AI Tool Update",
      modalContent: (
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-accent">How We Find the Latest AI Tools</h3>
          <div className="bg-primary-light bg-opacity-20 p-4 rounded-lg">
            <p className="text-sm font-medium text-accent">Our Discovery Process</p>
            <p className="text-sm text-gray-600">While most people miss new AI education tool releases, our team catches them all</p>
          </div>
          
          <p>Every day, our dedicated research team scours the web using advanced monitoring systems to uncover the latest AI education tools as soon as they're released. Many of these tools don't have large marketing budgets and can be nearly impossible for parents and teachers to find on their own.</p>
          
          <h4 className="font-bold text-accent mt-2">Our 3-Step Discovery Process:</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><span className="font-medium">Comprehensive Monitoring</span> - We track product launch sites, social media platforms, domain registrars and educational technology forums</li>
            <li><span className="font-medium">Quality Verification</span> - Our team quickly test each new tool to determine if it's worth your attention</li>
            <li><span className="font-medium">Detailed Analysis</span> - Tools that pass our initial screening get a comprehensive review focusing on educational value, usability, and safety</li>
          </ul>
          
          <p className="text-gray-700">As a Learn Leopard member, you'll receive these curated updates every morning, saving you countless hours of searching and helping you discover the most valuable AI education tools right when they launch.</p>
        </div>
      )
    },
    {
      icon: <FileText className="w-8 h-8 text-accent" />,
      title: "In-Depth Written Reviews",
      description: "Comprehensive analysis of every AI education tool on the market",
      buttonText: "Read Sample Review",
      modalTitle: "Written Review: Synthesis Maths Tutor",
      modalContent: (
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="text-primary text-2xl font-bold">5/5</div>
            <div className="ml-2 flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary">★</span>
              ))}
            </div>
          </div>
          <p>Synthesis Maths Tutor is the one of the best AI-driven math tools we've seen for building critical thinking and problem-solving skills in kids. It encourages your child to think deeply about maths concepts, and teaches through fun maths games.</p>
          <h4 className="font-bold text-accent mt-4">Strengths:</h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Lessons adapt to your child's pace and understanding based on each activity</li>
            <li>Blends powerful AI with proven educational concepts and methods to make math easier to learn</li>
            <li>Detailed feedback for the parent</li>
          </ul>
          <h4 className="font-bold text-accent mt-4">Weaknesses:</h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Less gamified than some other tools — better for focused learners</li>
            <li>There is some 'drop off' off engagement as the maths gets harder</li>
          </ul>
          <p className="mt-4">Overall, Synthesis Maths Tutor is a standout choice for families seeking a high-impact, intellectually engaging math experience.</p>
        </div>
      )
    },
    {
      icon: <Video className="w-8 h-8 text-accent" />,
      title: "Comprehensive Video Reviews",
      description: "Watch detailed video reviews of the most promising AI education tools",
      buttonText: "Watch Sample Review",
      modalTitle: "Video Review Preview",
      modalContent: (
        <div className="space-y-4">
          <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
            <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/BKTuUEmwB84"
                title="Synthesis Maths Tutor Video Review"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <h3 className="font-bold text-lg text-accent">Synthesis Maths Tutor: Building Problem-Solving Skills</h3>
          <p>Synthesis Maths Tutor is the one of the best AI-driven math tools we've seen for building critical thinking and problem-solving skills in kids. It encourages your child to think deeply about maths concepts, and teaches through fun maths games.</p>
          <div className="flex items-center mt-2">
            <div className="text-primary text-xl font-bold">5/5</div>
            <div className="ml-2 flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary">★</span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-accent" />,
      title: "AI Learning Schedules",
      description: "Structured weekly guides to maximize AI-powered learning",
      buttonText: "Learn More",
      modalTitle: "Get Started with AI Learning Schedules",
      modalContent: (
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-accent">Hit the Ground Running with AI Learning</h3>
          <div className="bg-primary-light bg-opacity-20 p-4 rounded-lg">
            <p className="text-sm font-medium text-accent">Personalized Learning Journeys</p>
            <p className="text-sm text-gray-600">Customized for your child's age, interests, and learning style</p>
            <p className="text-sm text-gray-600">Balanced screen time with meaningful learning activities</p>
          </div>
          
          <p className="text-gray-700">Our "Hit the ground running" schedules make it super easy to get started with your child's AI learning journey. Each schedule is carefully crafted with exactly the right tools for your child's specific needs and learning style.</p>
          
          <div className="bg-white border border-primary-light rounded-lg p-4 my-4">
            <h4 className="font-bold text-accent mb-2">Why Our Learning Schedules Work:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li><span className="font-medium">Expert Curation</span> - Only the best AI tools selected by educational specialists</li>
              <li><span className="font-medium">Balanced Approach</span> - Perfect mix of screen-based activities and hands-on learning</li>
              <li><span className="font-medium">Goal-Oriented</span> - Clear learning objectives that build skills progressively</li>
              <li><span className="font-medium">Easy to Follow</span> - Simple daily and weekly plans that parents can implement right away</li>
            </ul>
          </div>
          
          <p className="text-gray-700">Parents love our schedules because they can start their children's AI learning journey with confidence, knowing they're on the right track from day one. No more guesswork about which tools to use or how much time to spend on each activity.</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <h4 className="font-bold text-accent text-sm">What Parents Are Saying:</h4>
            <blockquote className="italic text-gray-600 mt-2 pl-4 border-l-2 border-primary">
              "The weekly schedule took all the stress out of getting started. My daughter was engaged from day one, and I could see her progress right away. Knowing experts had selected the best tools gave me complete peace of mind."
            </blockquote>
            <p className="text-xs text-gray-500 mt-2 text-right">— Michelle R., parent of 8-year-old</p>
          </div>
        </div>
      )
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-accent-light text-transparent bg-clip-text">
              Membership Benefits
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unlock the full potential of AI education tools with our comprehensive membership. Stay ahead with exclusive access to expert reviews and structured learning plans.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 transform hover:-translate-y-1 duration-300"
            >
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-accent mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              
              <button
                onClick={() => setModalContent(feature)}
                className="text-primary font-bold flex items-center hover:text-primary-dark transition-colors"
                aria-label={`View ${feature.buttonText}`}
              >
                {feature.buttonText}
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-secondary rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-primary-light rounded-full opacity-40"></div>
      
      {/* Feature Modal */}
      {modalContent && (
        <FeatureModal
          title={modalContent.modalTitle}
          onClose={() => setModalContent(null)}
        >
          {modalContent.modalContent}
        </FeatureModal>
      )}
    </section>
  );
};
