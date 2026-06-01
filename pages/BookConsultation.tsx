import React from 'react';
import { ExternalLink, CheckCircle2, Shield, Clock, GraduationCap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookConsultation: React.FC = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScF0YYhklxoh_bXEEEmVup9cNOz-4OUPi2nGQfA6aEjJjJNnw/viewform";
  const embedUrl = `${formUrl}?embedded=true`;

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Page Header Banner */}
      <section className="relative py-16 bg-gradient-to-r from-promarch-blue to-blue-900 text-white overflow-hidden shadow-md">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-15deg] translate-x-1/4 z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Book a Consultation with Promarch Career Abroad
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              Complete the form below and our team will contact you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Form Embed */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Main Embed Form Container */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col">
              
              {/* Trust/Assurance Bar */}
              <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-emerald-800 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-promarch-green" />
                  <span>British Council Certified Agency</span>
                </div>
                <div className="flex items-center gap-2 text-blue-800 text-sm font-medium">
                  <Clock className="w-5 h-5 text-promarch-blue" />
                  <span>Typically responds within 24 hours</span>
                </div>
              </div>

              {/* Google Form IFrame container */}
              <div className="w-full bg-white relative p-1 md:p-4">
                <iframe 
                  id="google-consultation-form"
                  src={embedUrl} 
                  title="Promarch Consultation Questionnaire"
                  width="100%" 
                  height="1100" 
                  frameBorder="0" 
                  className="w-full outline-none border-none overflow-y-auto"
                  style={{ minHeight: '1000px', display: 'block' }}
                >
                  Loading…
                </iframe>
              </div>

              {/* Action Bar with External Link Fallback */}
              <div className="bg-slate-50 px-6 py-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                  <h4 className="text-slate-800 font-bold text-sm">Having trouble viewing the embedded form?</h4>
                  <p className="text-xs text-slate-500 mt-1">If the form above is cut off or not loading, click the button to open it in a comfortable full screen window.</p>
                </div>
                
                <a 
                  href={formUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-promarch-blue hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Open Form in New Tab
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Security & Privacy Info */}
        <div className="mt-10 grid sm:grid-cols-2 gap-6 pb-8">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex gap-4">
            <div className="bg-emerald-50 p-3 rounded-xl h-fit">
              <Shield className="w-6 h-6 text-promarch-green" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Your Privacy is Protected</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                We safely secure your data. Your information is purely utilized directly for processing admissions and evaluating visa credentials with absolute confidentiality.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex gap-4">
            <div className="bg-blue-50 p-3 rounded-xl h-fit">
              <GraduationCap className="w-6 h-6 text-promarch-blue" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Next Relocation Steps</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                After submission, a senior migration specialist will evaluate your qualifications and contact you to proceed back-to-back with the application process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
