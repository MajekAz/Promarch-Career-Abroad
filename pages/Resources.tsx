import React from 'react';
import { ArrowRight } from 'lucide-react';

const Resources: React.FC = () => {
   const posts = [
     { title: "Latest UK Immigration Updates for Nigerians (2025)", cat: "Visa News", excerpt: "Everything you need to know about the recent changes to the student visa route and dependent rules." },
     { title: "How to open a UK Bank account from Nigeria", cat: "Guides", excerpt: "A step-by-step guide to using digital banks like Monzo and Revolut before you even board your flight." },
     { title: "5 Affordable UK Cities for International Students", cat: "Lifestyle", excerpt: "London isn't the only option. Discover student-friendly cities like Hull, Teesside, and Sunderland." },
     { title: "What to pack for the UK: A Nigerian Student's Checklist", cat: "Pre-Departure", excerpt: "Don't forget your adapters and spices! Here is the ultimate packing list." },
     { title: "Understanding the Graduate Route (PSW) Visa", cat: "Careers", excerpt: "How to stay and work in the UK for 2 years after your degree." },
     { title: "Scholarship Opportunities for 2025 Entry", cat: "Funding", excerpt: "List of universities offering automatic discounts for Nigerian students." }
   ];

  return (
    <div className="animate-fade-in">
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resources & Blog</h1>
           <p className="text-xl text-gray-600 max-w-2xl">Expert advice, guides, and news to keep you informed.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {posts.map((post, i) => (
               <div key={i} className="group cursor-pointer flex flex-col h-full border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                 <div className="h-48 overflow-hidden relative">
                   <img src={`https://picsum.photos/seed/blogres${i}/600/400`} alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-promarch-blue uppercase">
                     {post.cat}
                   </div>
                 </div>
                 <div className="p-6 flex-1 flex flex-col">
                   <h4 className="text-xl font-bold text-gray-900 group-hover:text-promarch-green transition-colors mb-3">{post.title}</h4>
                   <p className="text-gray-500 text-sm mb-4 flex-1">{post.excerpt}</p>
                   <button className="text-promarch-blue font-bold text-sm inline-flex items-center gap-2 mt-auto">
                     Read Full Article <ArrowRight className="w-4 h-4" />
                   </button>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
