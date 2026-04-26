import React from 'react';
import { 
  FileCheck, 
  Briefcase, 
  Home, 
  Zap, 
  Truck, 
  Warehouse, 
  Factory,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface PolandWorkProps {
  onOpenBooking: () => void;
}

const PolandWork: React.FC<PolandWorkProps> = ({ onOpenBooking }) => {
  const jobRoles = [
    {
      icon: <Zap className="w-6 h-6 text-promarch-green" />,
      title: "Electrician",
      desc: "Skilled electrical work for industrial and residential projects."
    },
    {
      icon: <Truck className="w-6 h-6 text-promarch-green" />,
      title: "Driver",
      desc: "Professional driving opportunities across various logistics sectors."
    },
    {
      icon: <Warehouse className="w-6 h-6 text-promarch-green" />,
      title: "Warehouse Operative",
      desc: "Essential roles in modern logistics and distribution centers."
    },
    {
      icon: <Factory className="w-6 h-6 text-promarch-green" />,
      title: "Factory Worker",
      desc: "Production and assembly roles in leading manufacturing plants."
    }
  ];

  const benefits = [
    "Guaranteed Accommodation provided by client companies",
    "Assistance with Poland Work Permit (Zezwolenie na pracę)",
    "Comprehensive Visa application guidance",
    "Direct connection with reputable Polish employers",
    "Pre-departure orientation and support",
    "Post-arrival guidance in Poland"
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-promarch-blue py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="hero-pattern w-full h-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-promarch-green/20 text-promarch-green px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              New Opportunity
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Work & Live in <span className="text-promarch-green">Poland</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We help you secure your Poland working permit and visa. Start your career in Europe with guaranteed job offers and accommodation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onOpenBooking}
                className="bg-promarch-green text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all shadow-lg flex items-center gap-2 text-center"
              >
                Start Your Free Assessment <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Gateway to European Employment
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Poland offers a vibrant job market and a high quality of life. Our expert consultants specialize in navigating the Polish immigration system to ensure you get your work permit and visa smoothly.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-promarch-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-promarch-green/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-promarch-blue/5 rounded-full -ml-12 -mb-12"></div>
                
                <h3 className="text-2xl font-bold text-promarch-blue mb-8 relative z-10">Why Choose Poland?</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <FileCheck className="w-6 h-6 text-promarch-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Streamlined Process</h4>
                      <p className="text-sm text-gray-600">Clear pathways for skilled and semi-skilled workers.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <Home className="w-6 h-6 text-promarch-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Guaranteed Housing</h4>
                      <p className="text-sm text-gray-600">Peace of mind with pre-arranged accommodation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <Briefcase className="w-6 h-6 text-promarch-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Career Growth</h4>
                      <p className="text-sm text-gray-600">Gain valuable European work experience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Career Paths</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We connect you with client companies in Poland looking for dedicated professionals in these key sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jobRoles.map((role, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                <div className="bg-promarch-accent w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-promarch-green transition-colors">
                  <div className="group-hover:text-white transition-colors">
                    {role.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{role.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-promarch-blue rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="hero-pattern w-full h-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
              Contact our consultants today for a free assessment of your eligibility for a Poland work visa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button 
                onClick={onOpenBooking} 
                className="bg-promarch-green text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all shadow-lg"
              >
                Get Started Today
              </button>
              <a 
                href="https://wa.me/447594459931" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-promarch-blue px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PolandWork;
