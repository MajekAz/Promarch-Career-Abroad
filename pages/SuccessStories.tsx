import React from 'react';

const SuccessStories: React.FC = () => {
  const testimonials = [
    {
      name: "Tunde A.",
      quote: "Promarch helped me sort my visa documentation when I was confused. Now I'm working with the NHS!",
      image: "https://picsum.photos/seed/african_man_1/200/200"
    },
    {
      name: "Funke B.",
      quote: "The pre-departure briefing was a lifesaver. Knowing how to open a Monzo account before landing was great.",
      image: "https://picsum.photos/seed/african_woman_1/200/200"
    },
    {
      name: "Emmanuel K.",
      quote: "Honest advice. They told me realistically what I could afford and matched me to a great school with a scholarship.",
      image: "https://picsum.photos/seed/african_man_2/200/200"
    },
    {
      name: "Chidinma O.",
      quote: "My counselor was available 24/7 on WhatsApp. The support was personal and genuine.",
      image: "https://picsum.photos/seed/african_woman_2/200/200"
    },
    {
      name: "Yusuf I.",
      quote: "I had a study gap of 5 years, but Promarch helped me package my experience to get an offer within 2 weeks.",
      image: "https://picsum.photos/seed/african_man_3/200/200"
    },
    {
      name: "Ngozi E.",
      quote: "From Abuja to Sunderland, the journey was seamless. Thank you Promarch!",
      image: "https://picsum.photos/seed/african_woman_3/200/200"
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
    </div>
  );
};

export default SuccessStories;
