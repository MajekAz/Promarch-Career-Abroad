import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface ContactProps {
  onOpenBooking: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: ''
        });
        
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-promarch-blue overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Have questions about studying in the UK? Our expert counselors are here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Whether you're just starting to explore options or ready to apply, we're ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-promarch-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">London Office</h4>
                    <p className="text-gray-600 text-sm">167-169 Great Portland Street, 5th Floor, London, United Kingdom</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-promarch-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">WhatsApp & Calls</h4>
                    <p className="text-gray-600 text-sm">+44 7594 459931</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Us</h4>
                    <p className="text-gray-600 text-sm">info@promarcareerabroad.co.uk</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">Sat: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-promarch-blue" />
                  Free Assessment
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Speak with our counselors for a free orientation and assessment.
                </p>
                <button 
                  onClick={onOpenBooking}
                  className="w-full bg-promarch-blue text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors shadow-md"
                >
                  Book Free Assessment
                </button>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-promarch-blue" />
                  Instant Support
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Ready to chat? Message us on WhatsApp for quick help.
                </p>
                <a 
                  href="https://wa.me/447594459931" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-promarch-green text-white font-bold py-3 rounded-lg hover:bg-emerald-600 transition-colors shadow-md"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Oluwaseun Adebayo"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-promarch-green focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-promarch-green focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 ..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-promarch-green focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-promarch-green focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Admission Support">Admission Support</option>
                        <option value="Visa Guidance">Visa Guidance</option>
                        <option value="Scholarship Info">Scholarship Info</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can we help you today?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-promarch-green focus:border-transparent outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                      status === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-promarch-blue hover:bg-blue-900'
                    }`}
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {status === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-emerald-50 text-emerald-800 rounded-xl animate-fade-in">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                      <p className="text-sm font-medium">Thank you! Your message has been sent successfully. We'll get back to you shortly.</p>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 text-red-800 rounded-xl animate-fade-in">
                      <AlertCircle className="w-6 h-6 flex-shrink-0" />
                      <p className="text-sm font-medium">Oops! Something went wrong. Please try again later.</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Global Presence</h2>
            <p className="text-gray-600 mt-4">Supporting you from Nigeria to the United Kingdom</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-all">
              <h4 className="font-bold text-promarch-blue mb-2 text-lg">London (HQ)</h4>
              <p className="text-sm text-gray-600 leading-relaxed">167-169 Great Portland Street, 5th Floor, London, W1W 5PF, United Kingdom</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-all">
              <h4 className="font-bold text-promarch-green mb-2 text-lg">Lagos Office</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Ikeja, Lagos State, Nigeria</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-all">
              <h4 className="font-bold text-promarch-green mb-2 text-lg">Abuja Office</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Central Business District, Abuja, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
