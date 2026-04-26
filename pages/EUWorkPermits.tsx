import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Briefcase, 
  Home, 
  Globe, 
  Users, 
  Building2,
  Stethoscope,
  TrendingUp,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface EUWorkPermitsProps {
  onOpenBooking: () => void;
}

const EUWorkPermits: React.FC<EUWorkPermitsProps> = ({ onOpenBooking }) => {
  const polandFeatures = [
    {
      title: "Rapid Entry Process",
      desc: "Poland has one of the fastest work permit processing times in the EU for Nigerian applicants.",
      icon: <TrendingUp className="w-6 h-6 text-promarch-green" />
    },
    {
      title: "Low Cost of Living",
      desc: "Enjoy a high quality of life with affordable housing and utilities compared to Western Europe.",
      icon: <Home className="w-6 h-6 text-promarch-green" />
    },
    {
      title: "Massive Demand",
      desc: "High demand for electricians, drivers, and factory workers with guaranteed placements.",
      icon: <Users className="w-6 h-6 text-promarch-green" />
    }
  ];

  const germanyFeatures = [
    {
      title: "Premium Wages",
      desc: "Germany offers some of the highest salaries in Europe for skilled professionals.",
      icon: <TrendingUp className="w-6 h-6 text-promarch-blue" />
    },
    {
      title: "World-Class Healthcare",
      desc: "Access to one of the world's best healthcare systems for you and your family.",
      icon: <Stethoscope className="w-6 h-6 text-promarch-blue" />
    },
    {
      title: "The EU Blue Card",
      desc: "A fast-track to permanent residency and citizenship in Germany.",
      icon: <ShieldCheck className="w-6 h-6 text-promarch-blue" />
    }
  ];

  const promiseItems = [
    {
      feature: "Legal Document Verification",
      benefit: "Peace of mind knowing your application is 100% compliant with EU immigration laws."
    },
    {
      feature: "Direct Job Matching",
      benefit: "Financial freedom through secured employment before you even leave Nigeria."
    },
    {
      feature: "Accommodation Assistance",
      benefit: "Stress-free arrival with pre-arranged housing for you and your family."
    },
    {
      feature: "Family Relocation Support",
      benefit: "Keep your loved ones together with our comprehensive family visa guidance."
    }
  ];

  const faqs = [
    {
      q: "How long does the Poland work permit process take?",
      a: "Typically, the process takes between 3 to 6 months from initial document submission to visa issuance."
    },
    {
      q: "Do I need to speak Polish or German?",
      a: "While helpful, many of our partner employers offer roles where English is sufficient. We also provide basic language resources."
    },
    {
      q: "Are the job offers guaranteed?",
      a: "Yes, we work directly with client companies who have pre-approved quotas for international workers."
    },
    {
      q: "Can I bring my family?",
      a: "Yes, once your work permit is secured, we assist with 'Family Reunification' visas for your spouse and children."
    }
  ];

  return (
    <div className="animate-fade-in font-sans">
      {/* Hero Section - ATTENTION */}
      <section className="relative bg-gradient-to-br from-promarch-blue to-blue-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="hero-pattern w-full h-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-promarch-green/20 text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8 animate-bounce">
              Europe is Calling
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              From Lagos to Warsaw: Your <span className="text-promarch-green">Guaranteed Path</span> to a European Work Permit
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed font-light">
              Tired of visa rejections and empty promises? We connect Nigerian professionals and laborers with verified employers in Poland and Germany. Legal, secure, and stress-free immigration starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={onOpenBooking} 
                className="bg-promarch-green text-white px-10 py-5 rounded-full font-black text-lg hover:bg-emerald-800 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
              >
                Start Your Free Assessment <ArrowRight className="w-6 h-6" />
              </button>
              <a 
                href="https://wa.me/447594459931" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-promarch-blue px-10 py-5 rounded-full font-black text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
              >
                Chat with an Expert
              </a>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-blue-200 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-promarch-green" /> Verified Employers
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-promarch-green" /> 100% Legal Process
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Poland Advantage - INTEREST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">The Poland Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poland is currently the fastest-growing economy in the EU, creating thousands of opportunities for Nigerian talent.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {polandFeatures.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:border-promarch-green transition-all group">
                <div className="mb-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-promarch-green group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-promarch-blue/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-promarch-blue mb-4">Urgent Roles in Poland:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 font-semibold text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-promarch-green" /> Electricians
                </div>
                <div className="flex items-center gap-2 font-semibold text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-promarch-green" /> HGV Drivers
                </div>
                <div className="flex items-center gap-2 font-semibold text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-promarch-green" /> Warehouse Ops
                </div>
                <div className="flex items-center gap-2 font-semibold text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-promarch-green" /> Factory Staff
                </div>
              </div>
            </div>
            <button 
              onClick={onOpenBooking} 
              className="bg-promarch-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-900 transition-all shrink-0"
            >
              Apply for Poland Work Permit
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: Germany & EU Expansion - DESIRE */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-promarch-blue/10 skew-x-12 transform translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Secure Your Future in <span className="text-promarch-green">Germany</span> & Beyond
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                For skilled professionals, Germany represents the ultimate destination. High wages, social security, and a clear path to European citizenship.
              </p>
              <div className="space-y-8">
                {germanyFeatures.map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="shrink-0 bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-promarch-blue/20 to-promarch-green/10 p-1 rounded-3xl">
              <div className="bg-gray-800 rounded-[22px] p-8 md:p-12 shadow-2xl">
                <Building2 className="w-16 h-16 text-promarch-green mb-8" />
                <h3 className="text-2xl font-bold mb-6">The EU Opportunity</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-promarch-green" /> Schengen Area Access (27 Countries)
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-promarch-green" /> Free Education for Children
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-promarch-green" /> Top-Tier Retirement Benefits
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-promarch-green" /> Fast-Track Residency via Skill Sets
                  </li>
                </ul>
                <button 
                  onClick={onOpenBooking} 
                  className="w-full text-center bg-promarch-green text-white py-4 rounded-xl font-black hover:bg-emerald-800 transition-all"
                >
                  Request Germany Visa Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The "Promarch" Promise - DESIRE/ACTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">The Promarch Promise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just process papers; we change lives. Here is how we ensure your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {promiseItems.map((item, idx) => (
              <div key={idx} className="flex gap-6 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
                <div className="shrink-0 bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-promarch-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-promarch-blue uppercase tracking-wider mb-2">Feature: {item.feature}</h4>
                  <p className="text-2xl font-bold text-gray-900 mb-4">Benefit: {item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof & FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>
              <div className="space-y-8">
                {/* Placeholder Testimonials */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 italic text-gray-600 relative">
                  <span className="text-6xl text-promarch-green opacity-20 absolute -top-4 -left-2">"</span>
                  "I was almost giving up after two rejections until I met Promarch. Today, I am working in Poznań as a logistics manager. The process was transparent and they supported me all the way."
                  <div className="mt-4 font-bold text-gray-900 not-italic">— Chukwuma A., Poland (via Lagos)</div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 italic text-gray-600 relative">
                  <span className="text-6xl text-promarch-green opacity-20 absolute -top-4 -left-2">"</span>
                  "The Germany Blue Card seemed impossible for me, but Promarch's legal team handled everything. My family and I are now settled in Berlin. Truly professional service."
                  <div className="mt-4 font-bold text-gray-900 not-italic">— Amina O., Germany (via Abuja)</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Common Concerns (FAQ)</h2>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-6 h-6 text-promarch-blue shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                        <p className="text-gray-600 text-sm">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EUWorkPermits;
