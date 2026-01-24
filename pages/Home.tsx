import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { 
  Globe2, 
  CheckCircle, 
  ArrowRight,
  Download,
  Users,
  Award,
  BookOpen,
  MapPin,
  GraduationCap,
  Briefcase
} from 'lucide-react';

interface OutletContextType {
  openEligibility: () => void;
  openLeadMagnet: () => void;
}

const Home: React.FC = () => {
  const context = useOutletContext<OutletContextType>();
  
  const { openEligibility, openLeadMagnet } = context || { 
    openEligibility: () => console.log('Eligibility context missing'),
    openLeadMagnet: () => console.log('Lead magnet context missing')
  };

  return (
    <div className="flex flex-col">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-12 lg:pt-0 min-h-[90vh] flex items-center bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-emerald-50/50 skew-x-[-20deg] translate-x-1/4 z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white shadow-sm border border-emerald-100 px-4 py-1.5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-800 text-xs font-bold tracking-wide uppercase">#1 Nigerian Ed-Tech Consultancy</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-[1.1]">
                Your Direct Pathway <br/>
                from <span className="text-green-600">Lagos</span> to <br/>
                <span className="text-promarch-blue">London.</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Stop guessing about your future. We provide expert guidance on admissions, Tier 4 visas, and career placement for ambitious Nigerian students.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                  onClick={openEligibility}
                  className="px-8 py-4 bg-promarch-blue text-white font-bold rounded-xl hover:bg-blue-900 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={openLeadMagnet}
                  className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:border-promarch-green hover:text-promarch-green transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Free Study Guide
                </button>
              </div>

              <div className="pt-6 flex items-center gap-6 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-promarch-green" /> 98% Visa Success
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-promarch-green" /> British Council Certified
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block relative animate-fade-in delay-200">
               <div className="relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                    alt="Nigerian Student in UK" 
                    className="rounded-3xl shadow-2xl object-cover h-[600px] w-full"
                  />
                  {/* Floating Badge 1 */}
                  <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border-l-4 border-promarch-green max-w-[200px] animate-bounce duration-[3000ms]">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Award className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Scholarships</p>
                        <p className="font-bold text-gray-900">£5k Secured</p>
                      </div>
                    </div>
                  </div>
                  {/* Floating Badge 2 */}
                  <div className="absolute bottom-10 -right-6 bg-white p-4 rounded-2xl shadow-xl border-l-4 border-promarch-blue max-w-[220px]">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Offer Received</p>
                        <p className="font-bold text-gray-900">University of Leeds</p>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="absolute inset-0 bg-promarch-green/10 transform rotate-3 rounded-3xl -z-10 scale-95 origin-bottom-right"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS STRIP */}
      <section className="bg-promarch-blue py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2 text-emerald-400">98%</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">Visa Success Rate</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2 text-emerald-400">500+</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">Students Placed</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2 text-emerald-400">50+</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">University Partners</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2 text-emerald-400">£2M+</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">Scholarships Secured</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VALUE PROPOSITION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-promarch-green font-bold uppercase tracking-widest text-sm mb-3">Why Promarch?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">We Make Your UK Dream a Reality</h3>
            <p className="text-gray-600 text-lg">Moving to a new country is daunting. We simplify the complex process of international education, so you can focus on your studies.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-promarch-blue" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Local Presence, Global Reach</h4>
              <p className="text-gray-600">With offices in Lagos, Abuja, and London, we support you before you leave Nigeria and welcome you when you arrive in the UK.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-promarch-green" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Personalized Mentorship</h4>
              <p className="text-gray-600">You're not just a file number. Our counselors are UK alumni who understand your specific background and career goals.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Career Focused</h4>
              <p className="text-gray-600">We don't just get you an admission; we strategize for your Post-Study Work visa and future career from Day 1.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-lg mt-12" alt="London City" />
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-lg" alt="Study Group" />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Everything You Need for a Smooth Transition</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-5 h-5 text-promarch-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">University Admissions</h4>
                    <p className="text-gray-600 mt-1">Direct applications to Russell Group and modern universities with fast-track offer processing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-promarch-green" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Visa & Compliance</h4>
                    <p className="text-gray-600 mt-1">Detailed guidance on CAS, Tuberculosis tests, POF (Proof of Funds), and credibility interviews.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe2 className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Settlement Support</h4>
                    <p className="text-gray-600 mt-1">Airport pickup arrangement, accommodation hunting, and bank account setup in the UK.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/services" className="text-promarch-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Explore all services <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIAL HIGHLIGHT */}
      <section className="py-20 bg-promarch-green relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-md rounded-full px-4 py-1 mb-6">
            <span className="text-white text-sm font-semibold">Success Story</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            "Promarch didn't just get me an admission, they helped me secure a £3,000 scholarship and sorted my visa issues when I was about to give up."
          </h2>
          
          <div className="flex flex-col items-center">
            <img 
              src="https://randomuser.me/api/portraits/women/63.jpg" 
              alt="Student" 
              className="w-16 h-16 rounded-full border-4 border-white mb-3"
            />
            <h4 className="text-white font-bold text-lg">Funmi Adebayo</h4>
            <p className="text-emerald-200">MSc International Business, University of Hertfordshire</p>
          </div>
          
          <div className="mt-12">
            <Link to="/success-stories" className="inline-block px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-promarch-green transition-all font-semibold">
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA / LEAD MAGNET */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Decor */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-promarch-green rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your UK Journey?</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Don't navigate the complex admission and visa process alone. Get your free comprehensive guide today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openLeadMagnet}
                  className="px-8 py-4 bg-promarch-green text-white font-bold rounded-xl hover:bg-emerald-600 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Free Guide
                </button>
                <button 
                  onClick={openEligibility}
                  className="px-8 py-4 bg-white/10 backdrop-blur text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
                >
                  Speak to a Counselor
                </button>
              </div>
              
              <p className="mt-6 text-xs text-gray-500">
                Join 5,000+ Nigerian students who trust our newsletter.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;