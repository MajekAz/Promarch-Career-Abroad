import React from 'react';
import { University, FileCheck, Briefcase, Plane, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <University className="w-8 h-8 text-white" />,
      title: "University Admissions",
      desc: "We analyze your academic background and career goals to match you with the best UK universities. We handle the entire application process, from personal statement reviews to offer acceptance.",
      color: "bg-blue-600"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-white" />,
      title: "Visa Guidance (Tier 4)",
      desc: "Navigating UKVI rules can be tricky. We guide you through CAS issuance, Tuberculosis (TB) testing, and proof of funds to ensure your student visa application is successful.",
      color: "bg-emerald-600"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "Post-Study Career",
      desc: "We don't just get you in; we help you thrive. Our career coaching covers the Graduate Route (PSW) visa, CV tailoring for the UK market, and interview preparation.",
      color: "bg-purple-600"
    },
    {
      icon: <Plane className="w-8 h-8 text-white" />,
      title: "Pre-Departure Support",
      desc: "Get ready for life in the UK. We assist with flight bookings, finding student accommodation, opening a UK bank account from Nigeria, and currency exchange advice.",
      color: "bg-orange-600"
    }
  ];

  return (
    <div className="animate-fade-in">
       {/* Header */}
       <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
           <p className="text-xl text-gray-600 max-w-2xl">Comprehensive support for every step of your international education journey.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-promarch-green font-bold tracking-wide uppercase mb-8">How It Works</h2>
           <div className="grid md:grid-cols-4 gap-8">
             {[
               { step: "01", title: "Consultation", desc: "Free initial assessment of your eligibility." },
               { step: "02", title: "Application", desc: "We submit applications to your chosen unis." },
               { step: "03", title: "Visa", desc: "Guided support for your Tier 4 visa." },
               { step: "04", title: "Departure", desc: "Travel arrangements and welcome to the UK." }
             ].map((item, i) => (
               <div key={i} className="relative">
                 <div className="text-6xl font-bold text-gray-800 absolute top-0 left-1/2 -translate-x-1/2 -z-10">{item.step}</div>
                 <h3 className="text-xl font-bold mb-2 mt-8">{item.title}</h3>
                 <p className="text-gray-400 text-sm">{item.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
