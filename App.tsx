import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { X, BookOpen } from 'lucide-react';
import Layout from './components/Layout';
import EligibilityAssistant from './components/EligibilityAssistant';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SuccessStories from './pages/SuccessStories';
import Contact from './pages/Contact';
import PolandWork from './pages/PolandWork';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);

  const [leadMagnetData, setLeadMagnetData] = useState({ name: '', email: '' });
  const [leadMagnetStatus, setLeadMagnetStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const openEligibility = () => setIsEligibilityOpen(true);
  const openLeadMagnet = () => {
    setIsLeadMagnetOpen(true);
    setLeadMagnetStatus('idle');
    setLeadMagnetData({ name: '', email: '' });
  };

  const handleLeadMagnetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadMagnetStatus('submitting');
    
    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadMagnetData),
      });

      if (response.ok) {
        setLeadMagnetStatus('success');
        setTimeout(() => setIsLeadMagnetOpen(false), 2000);
      } else {
        setLeadMagnetStatus('error');
      }
    } catch (error) {
      console.error('Lead magnet error:', error);
      setLeadMagnetStatus('error');
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout onOpenEligibility={openEligibility} onOpenLeadMagnet={openLeadMagnet} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="contact" element={<Contact />} />
          <Route path="poland-work" element={<PolandWork />} />
        </Route>
      </Routes>

      {/* Global Components */}
      <FloatingWhatsApp />
      <EligibilityAssistant isOpen={isEligibilityOpen} onClose={() => setIsEligibilityOpen(false)} />

      {/* Lead Magnet Modal */}
      {isLeadMagnetOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative">
            <button onClick={() => setIsLeadMagnetOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-promarch-blue" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Free UK Study Guide</h3>
              <p className="text-gray-600 mt-2">Get our comprehensive 20-page guide specifically for Nigerian students. Includes budget templates & visa checklists.</p>
            </div>
            
            {leadMagnetStatus === 'success' ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-promarch-green" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Guide Sent!</h4>
                <p className="text-gray-600 mt-2">Check your email. The guide is on its way!</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleLeadMagnetSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    value={leadMagnetData.name}
                    onChange={(e) => setLeadMagnetData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-promarch-green focus:border-transparent outline-none" 
                    placeholder="e.g. Oluwaseun Adebayo" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    value={leadMagnetData.email}
                    onChange={(e) => setLeadMagnetData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-promarch-green focus:border-transparent outline-none" 
                    placeholder="email@example.com" 
                  />
                </div>
                
                {leadMagnetStatus === 'error' && (
                  <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
                )}

                <button 
                  type="submit" 
                  disabled={leadMagnetStatus === 'submitting'}
                  className="w-full bg-promarch-blue text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors disabled:bg-gray-400"
                >
                  {leadMagnetStatus === 'submitting' ? 'Sending...' : 'Send Me The Guide'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;