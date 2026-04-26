import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  GraduationCap, 
  Menu, 
  X
} from 'lucide-react';

interface LayoutProps {
  onOpenEligibility: () => void;
  onOpenLeadMagnet: () => void;
  onOpenBooking: () => void;
}

const Layout: React.FC<LayoutProps> = ({ onOpenEligibility, onOpenLeadMagnet, onOpenBooking }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-promarch-green font-bold" : "text-gray-600 hover:text-promarch-green font-medium";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-40 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
              <div className="bg-promarch-green p-2 rounded-lg">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <div className="leading-tight">
                <h1 className="text-xl font-bold text-promarch-blue">PROMARCH</h1>
                <span className="text-xs font-medium text-promarch-green tracking-wider">CAREER ABROAD</span>
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className={isActive("/")}>Home</Link>
              <Link to="/about" className={isActive("/about")}>About Us</Link>
              <Link to="/services" className={isActive("/services")}>Services</Link>
              <Link to="/success-stories" className={isActive("/success-stories")}>Success Stories</Link>
              <Link to="/contact" className={isActive("/contact")}>Contact</Link>
              <button 
                onClick={onOpenBooking}
                className="bg-promarch-green text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Free Assessment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-promarch-green">
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link to="/" onClick={closeMenu} className="block w-full text-left px-3 py-3 text-gray-600 font-medium">Home</Link>
              <Link to="/about" onClick={closeMenu} className="block w-full text-left px-3 py-3 text-gray-600 font-medium">About Us</Link>
              <Link to="/services" onClick={closeMenu} className="block w-full text-left px-3 py-3 text-gray-600 font-medium">Services</Link>
              <Link to="/success-stories" onClick={closeMenu} className="block w-full text-left px-3 py-3 text-gray-600 font-medium">Success Stories</Link>
              <Link to="/contact" onClick={closeMenu} className="block w-full text-left px-3 py-3 text-gray-600 font-medium">Contact</Link>
              <button 
                onClick={() => { onOpenBooking(); closeMenu(); }}
                className="block w-full text-center mt-4 bg-promarch-green text-white px-3 py-3 rounded-lg font-semibold"
              >
                Free Assessment
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="flex-grow pt-20">
        <Outlet context={{ openEligibility: onOpenEligibility, openLeadMagnet: onOpenLeadMagnet, openBooking: onOpenBooking }} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
               <GraduationCap className="text-white w-6 h-6" />
               <span className="text-lg font-bold text-white">PROMARCH</span>
            </div>
            <p className="text-sm">Empowering Nigerian students to achieve global career success through quality UK education.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white">Our Services</Link></li>
              <li><Link to="/poland-work" className="hover:text-white">Poland Work</Link></li>
              <li><Link to="/eu-work-permits" className="hover:text-white">EU Work Permits</Link></li>
              <li><Link to="/success-stories" className="hover:text-white">Success Stories</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Legal</h4>
             <ul className="space-y-2 text-sm">
               <li>Privacy Policy</li>
               <li>Terms of Service</li>
               <li>Cookie Policy</li>
             </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>London Office: 167-169 Great Portland Street, 5th Floor, London</li>
              <li>WhatsApp: +44 7594 459931</li>
              <li>Email: info@promarcareerabroad.co.uk</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-xs">
          &copy; {new Date().getFullYear()} Promarch Career Abroad. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;