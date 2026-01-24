import React from 'react';
import { CheckCircle, ArrowRight, Globe2, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Promarch</h1>
           <p className="text-xl text-gray-600 max-w-2xl">Empowering the next generation of Nigerian leaders through global education.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-all">
               <div className="w-16 h-16 bg-promarch-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Target className="w-8 h-8 text-promarch-green" />
               </div>
               <h3 className="text-xl font-bold mb-3">Our Mission</h3>
               <p className="text-gray-600">To provide accessible, accurate, and trustworthy guidance for Nigerian students seeking international education, bridging the gap between talent and opportunity.</p>
            </div>
            <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-all">
               <div className="w-16 h-16 bg-promarch-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Globe2 className="w-8 h-8 text-promarch-green" />
               </div>
               <h3 className="text-xl font-bold mb-3">Our Vision</h3>
               <p className="text-gray-600">To be the most trusted education consultancy in West Africa, known for integrity, high visa success rates, and seamless student transitions.</p>
            </div>
            <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-all">
               <div className="w-16 h-16 bg-promarch-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Users className="w-8 h-8 text-promarch-green" />
               </div>
               <h3 className="text-xl font-bold mb-3">Our Team</h3>
               <p className="text-gray-600">A diverse team of UK graduates and education experts based in Lagos, Abuja, and London, dedicated to your success story.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why UK Section (Moved from Home) */}
      <section id="why-uk" className="py-20 bg-promarch-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-3">Destination UK</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Choose the UK?</h3>
              <p className="text-blue-100 text-lg mb-8">The UK offers world-class education and incredible career opportunities for Nigerian graduates.</p>
              
              <ul className="space-y-6">
                {[
                  "2-Year Post-Study Work Visa (Graduate Route)",
                  "Access to NHS Healthcare for Students",
                  "1-Year Master's Degrees (Save time & money)",
                  "High demand for IT, Healthcare & Engineering roles",
                  "Vibrant Nigerian communities in major cities"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-lg text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/services" className="mt-10 bg-promarch-green hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/uk_city/400/500" className="rounded-2xl shadow-lg mt-8" alt="UK City" />
                <img src="https://picsum.photos/seed/uk_library/400/500" className="rounded-2xl shadow-lg" alt="UK Library" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
