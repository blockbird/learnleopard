
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, Video, Calendar, FileText, 
  Settings, LogOut, ChevronRight,
  Star, Clock, Download, Heart
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { NewLogo } from './NewLogo';

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [tools, setTools] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Load dashboard data
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // In a real app, we'd fetch actual data from Supabase
        // For now, we're using mock data
        
        // Example of how you would fetch data:
        // const { data: toolsData, error: toolsError } = await supabase
        //   .from('67f8434b14dfafddebe24d2a_tools')
        //   .select('*')
        //   .limit(5);
        
        // if (toolsError) throw toolsError;
        
        // Updated tools with the requested AI education tools
        setTools([
          { 
            id: 1, 
            name: 'Yet Confetti Kids', 
            category: 'Early Learning', 
            rating: 4.8, 
            isNew: true,
            image: 'https://heyboss.heeyo.ai/1744160201-29fe4768-play-lh.googleusercontent.com-FoOmjY8NwkLHSEEtVHUvglGJa0sWEpj8FYm6QCa5vApiqKYhosB-r7kCTjHtxob5zmo'
          },
          { 
            id: 2, 
            name: 'Synthesis', 
            category: 'Problem Solving', 
            rating: 4.7, 
            isNew: false,
            image: 'https://heyboss.heeyo.ai/1744160202-cc208bc7-www.chemistrylearner.com-wp-content-uploads-2020-08-Synthesis-combination-reaction.jpg'
          },
          { 
            id: 3, 
            name: 'Buddy AI', 
            category: 'Language Learning', 
            rating: 4.9, 
            isNew: true,
            image: 'https://heyboss.heeyo.ai/1744160201-573844fd-buddy.ai-nuxt-img2.63cba433.webp'
          },
          { 
            id: 4, 
            name: 'Littlelit', 
            category: 'Reading', 
            rating: 4.5, 
            isNew: false,
            image: 'https://heyboss.heeyo.ai/1744160201-cb1492d3-upload.wikimedia.org-wikipedia-en-a-a0-Littlelit.jpg'
          },
          { 
            id: 5, 
            name: 'Ello', 
            category: 'Communication', 
            rating: 4.6, 
            isNew: true,
            image: 'https://heyboss.heeyo.ai/1744160201-25d89f60-ml.globenewswire.com-Resource-Download-d08aaeeb-15ec-4617-8002-adce96ed015c'
          },
          { 
            id: 6, 
            name: 'Khanmigo', 
            category: 'Tutoring', 
            rating: 4.8, 
            isNew: true,
            image: 'https://heyboss.heeyo.ai/1744160202-79d58208-cdn.prod.website-files.com-659ee90e075c502b5cc49dae-660dac6d6ee13109152bb250-Khanmigo-TX-Hero-UIonly-1.png'
          },
        ]);
        
        // Updated reviews to match the new tools
        setReviews([
          { id: 1, title: 'In-depth Review: Buddy AI', date: 'Apr 5, 2025', type: 'written' },
          { id: 2, title: 'Video Review: Khanmigo', date: 'Apr 3, 2025', type: 'video' },
          { id: 3, title: 'Weekly Learning Schedule: Grade 5', date: 'Apr 2, 2025', type: 'schedule' },
          { id: 4, title: 'In-depth Review: Yet Confetti Kids', date: 'Mar 29, 2025', type: 'written' },
        ]);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleGoHome = () => {
    navigate('/');
  };

  // Get user's first name - for demo purposes
  const firstName = 'Guest';
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simplified Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-shrink-0">
            <NewLogo />
          </div>
          
          <button 
            onClick={handleGoHome}
            className="bg-gray-100 hover:bg-gray-200 text-accent px-4 py-2 rounded-full transition-colors flex items-center"
            aria-label="Back to Home"
          >
            <LogOut size={18} className="mr-2" />
            Back to Home
          </button>
        </div>
      </header>
      
      {/* Add sufficient padding to prevent content from being hidden under header */}
      <div className="pt-32">
        <div className="container mx-auto px-4">
          {/* Dashboard header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-accent mb-2">Welcome to Learn Leopard Premium!</h1>
            <p className="text-gray-600">
              Explore AI education tools and resources - April 8, 2025
            </p>
          </div>
          
          {/* Dashboard layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                <div className="flex items-center mb-4 pb-4 border-b border-gray-100">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
                    {firstName.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold">Guest User</h3>
                    <p className="text-xs text-gray-500">Demo Access</p>
                  </div>
                </div>
                
                <nav>
                  <ul className="space-y-1">
                    <li>
                      <button 
                        onClick={() => setActiveTab('overview')}
                        className={`w-full text-left px-3 py-2 rounded-lg flex items-center ${
                          activeTab === 'overview' ? 'bg-primary text-accent font-medium' : 'hover:bg-gray-50'
                        }`}
                      >
                        <BookOpen className="h-5 w-5 mr-2" />
                        Overview
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('dailyUpdates')}
                        className={`w-full text-left px-3 py-2 rounded-lg flex items-center ${
                          activeTab === 'dailyUpdates' ? 'bg-primary text-accent font-medium' : 'hover:bg-gray-50'
                        }`}
                      >
                        <FileText className="h-5 w-5 mr-2" />
                        Daily Updates
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('reviews')}
                        className={`w-full text-left px-3 py-2 rounded-lg flex items-center ${
                          activeTab === 'reviews' ? 'bg-primary text-accent font-medium' : 'hover:bg-gray-50'
                        }`}
                      >
                        <FileText className="h-5 w-5 mr-2" />
                        Reviews
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('videos')}
                        className={`w-full text-left px-3 py-2 rounded-lg flex items-center ${
                          activeTab === 'videos' ? 'bg-primary text-accent font-medium' : 'hover:bg-gray-50'
                        }`}
                      >
                        <Video className="h-5 w-5 mr-2" />
                        Video Reviews
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('schedules')}
                        className={`w-full text-left px-3 py-2 rounded-lg flex items-center ${
                          activeTab === 'schedules' ? 'bg-primary text-accent font-medium' : 'hover:bg-gray-50'
                        }`}
                      >
                        <Calendar className="h-5 w-5 mr-2" />
                        Learning Schedules
                      </button>
                    </li>
                  </ul>
                </nav>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <ul className="space-y-1">
                    <li>
                      <button 
                        onClick={() => setActiveTab('settings')}
                        className="w-full text-left px-3 py-2 rounded-lg flex items-center hover:bg-gray-50"
                      >
                        <Settings className="h-5 w-5 mr-2" />
                        Account Settings
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Membership info */}
              <div className="bg-gradient-to-br from-accent to-accent-light text-white rounded-xl shadow-md p-5">
                <h3 className="font-bold mb-2">Demo Access</h3>
                <p className="text-sm text-gray-200 mb-4">See what a full membership offers</p>
                <button 
                  className="bg-primary hover:bg-primary-dark text-accent font-medium px-4 py-2 rounded-lg text-sm transition-colors w-full"
                  onClick={() => navigate('/#pricing')}
                >
                  Upgrade to Premium
                </button>
              </div>
            </div>
            
            {/* Main content */}
            <div className="w-full lg:w-3/4">
              {loading ? (
                <div className="bg-white rounded-xl shadow-md p-6 flex justify-center">
                  <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
                </div>
              ) : activeTab === 'overview' ? (
                <>
                  {/* Latest AI tools */}
                  <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold text-accent">Latest AI Education Tools</h2>
                      <button className="text-primary flex items-center text-sm font-medium">
                        View All <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      {tools.map(tool => (
                        <div key={tool.id} className="border-b border-gray-100 pb-4 last:border-none last:pb-0">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                                <img 
                                  src={tool.image} 
                                  alt={tool.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <div className="flex items-center">
                                  <h3 className="font-medium">{tool.name}</h3>
                                  {tool.isNew && (
                                    <span className="ml-2 bg-primary text-accent text-xs px-2 py-0.5 rounded-full">New</span>
                                  )}
                                </div>
                                <p className="text-gray-500 text-sm">{tool.category}</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-primary fill-current" />
                              <span className="ml-1 font-medium">{tool.rating}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Recent content */}
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold text-accent">Recent Content</h2>
                      <button className="text-primary flex items-center text-sm font-medium">
                        View Library <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {reviews.map(review => (
                        <div key={review.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start">
                            <div className="bg-primary-light p-2 rounded-lg mr-3">
                              {review.type === 'written' && <FileText className="h-5 w-5 text-primary" />}
                              {review.type === 'video' && <Video className="h-5 w-5 text-primary" />}
                              {review.type === 'schedule' && <Calendar className="h-5 w-5 text-primary" />}
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">{review.title}</h3>
                              <div className="flex items-center mt-1">
                                <Clock className="h-3.5 w-3.5 text-gray-400 mr-1" />
                                <span className="text-xs text-gray-500">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between mt-3 pt-2 border-t border-gray-50">
                            <button className="text-primary text-xs flex items-center">
                              <Download className="h-3.5 w-3.5 mr-1" />
                              Save
                            </button>
                            <button className="text-gray-500 text-xs flex items-center">
                              <Heart className="h-3.5 w-3.5 mr-1" />
                              Favorite
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : activeTab === 'videos' ? (
                // Video tab content with Khanmigo and Buddy AI
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold text-accent mb-4">Video Reviews</h2>
                  
                  <div>
                    <p className="text-gray-600 mb-6">
                      Watch our detailed video reviews of Khanmigo and Buddy AI - two of the most innovative AI education tools available today.
                    </p>
                    
                    <div className="aspect-video rounded-lg overflow-hidden mb-6">
                      <video 
                        controls
                        className="w-full h-full object-cover"
                        poster="https://heyboss.heeyo.ai/1744160202-79d58208-cdn.prod.website-files.com-659ee90e075c502b5cc49dae-660dac6d6ee13109152bb250-Khanmigo-TX-Hero-UIonly-1.png"
                      >
                        <source src="https://cdn.pixabay.com/video/2015/10/16/1013-142621211_medium.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    
                    <h3 className="font-bold text-lg text-accent">Khanmigo & Buddy AI: AI-Powered Learning Assistants</h3>
                    <p className="mb-4">This video compares Khanmigo and Buddy AI, exploring how these AI-powered education tools can enhance student learning experiences and provide personalized guidance.</p>
                    
                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                      <div className="w-full md:w-1/2 bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                            <img 
                              src="https://heyboss.heeyo.ai/1744160202-79d58208-cdn.prod.website-files.com-659ee90e075c502b5cc49dae-660dac6d6ee13109152bb250-Khanmigo-TX-Hero-UIonly-1.png" 
                              alt="Khanmigo"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="font-bold">Khanmigo</h4>
                        </div>
                        <p className="text-sm text-gray-600">AI-powered tutor that helps students with math, science, and humanities subjects through interactive conversations.</p>
                      </div>
                      <div className="w-full md:w-1/2 bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                            <img 
                              src="https://heyboss.heeyo.ai/1744160201-573844fd-buddy.ai-nuxt-img2.63cba433.webp" 
                              alt="Buddy AI"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="font-bold">Buddy AI</h4>
                        </div>
                        <p className="text-sm text-gray-600">Language learning assistant that helps children practice speaking and listening skills through engaging conversations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Other tabs content
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold text-accent mb-4">
                    {activeTab === 'dailyUpdates' && 'Daily AI Tool Updates'}
                    {activeTab === 'reviews' && 'Written Reviews'}
                    {activeTab === 'schedules' && 'Learning Schedules'}
                    {activeTab === 'settings' && 'Account Settings'}
                  </h2>
                  
                  <p className="text-gray-600">
                    This section is coming soon. We're working hard to bring you the best {activeTab} content featuring Yet Confetti Kids, Synthesis, Buddy AI, Littlelit, Ello, and Khanmigo.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  