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
import Resources from './pages/Resources';

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

  const openEligibility = () => setIsEligibilityOpen(true);
  const openLeadMagnet = () => setIsLeadMagnetOpen(true);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout onOpenEligibility={openEligibility} onOpenLeadMagnet={openLeadMagnet} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="resources" element={<Resources />} />
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
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsLeadMagnetOpen(false); alert('Guide sent to your email!'); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-promarch-green focus:border-transparent outline-none" placeholder="e.g. Oluwaseun Adebayo" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-promarch-green focus:border-transparent outline-none" placeholder="email@example.com" />
              </div>
              <button type="submit" className="w-full bg-promarch-blue text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors">
                Send Me The Guide
              </button>
            </form>
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;