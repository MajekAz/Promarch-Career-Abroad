import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SuccessStoriesProps {
  onOpenBooking: () => void;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ onOpenBooking }) => {
  const testimonials = [
    {
      name: "Tunde A.",
      quote: "Promarch helped me sort my visa documentation when I was confused. Now I'm working with the NHS!",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Funke B.",
      quote: "The pre-departure briefing was a lifesaver. Knowing how to open a UK bank account before landing was great.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Emmanuel K.",
      quote: "Honest advice. They told me realistically what I could afford and matched me to a great school with a scholarship.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Chidinma O.",
      quote: "My counselor was available 24/7 on WhatsApp. The support was personal and genuine.",
      image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Yusuf I.",
      quote: "I had a study gap of 5 years, but Promarch helped me package my experience to get an offer within 2 weeks.",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Ngozi E.",
      quote: "From Abuja to Sunderland, the journey was seamless. Thank you Promarch!",
      image: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2eba?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <div className="animate-fade-in">
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h1>
           <p className="text-xl text-gray-600 max-w-2xl">Join hundreds of Nigerian students who have successfully moved to the UK.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((story, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => <span key={star} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-gray-600 italic mb-6 min-h-[80px]">"{story.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={story.image} alt={story.name} className="w-12 h-12 rounded-full object-cover bg-gray-200" />
                  <div>
                    <h5 className="font-bold text-gray-900">{story.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-promarch-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Will You Be Our Next Success Story?</h2>
          <p className="text-blue-100 text-lg mb-10">Start your journey today by booking a free assessment with our experienced counselors.</p>
          <button 
            onClick={onOpenBooking}
            className="px-10 py-5 bg-promarch-green text-white font-bold rounded-xl hover:bg-emerald-600 transition-all shadow-xl flex items-center justify-center gap-2 mx-auto transform hover:-translate-y-1"
          >
            Start Your Free Assessment <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
