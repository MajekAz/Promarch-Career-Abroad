import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/book-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Booking error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {status === 'success' ? (
          <div className="p-12 text-center animate-fade-in">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-promarch-green" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Thank you, {formData.name}. Your assessment request for {formData.date} at {formData.time} has been sent successfully. 
              Our team will review your details and confirm the booking shortly.
            </p>
            <button 
              onClick={onClose}
              className="mt-8 bg-promarch-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-900 transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Book Free Assessment</h2>
              <p className="text-gray-600">Fill in the details below to schedule your consultation with our experts.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                    <User className="w-4 h-4 text-promarch-blue" /> Full Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-promarch-blue focus:border-transparent outline-none transition-all" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-promarch-blue" /> Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-promarch-blue focus:border-transparent outline-none transition-all" 
                    placeholder="name@example.com" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-promarch-blue" /> Phone Number
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-promarch-blue focus:border-transparent outline-none transition-all" 
                    placeholder="+234..." 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-promarch-blue" /> Preferred Date
                  </label>
                  <input 
                    type="date" 
                    name="date"
                    required 
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-promarch-blue focus:border-transparent outline-none transition-all" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-promarch-blue" /> Preferred Time
                </label>
                <select 
                  name="time"
                  required 
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-promarch-blue focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select Time Slot</option>
                  <option value="09:00 AM">09:00 AM - 10:00 AM</option>
                  <option value="10:00 AM">10:00 AM - 11:00 AM</option>
                  <option value="11:00 AM">11:00 AM - 12:00 PM</option>
                  <option value="12:00 PM">12:00 PM - 01:00 PM</option>
                  <option value="02:00 PM">02:00 PM - 03:00 PM</option>
                  <option value="03:00 PM">03:00 PM - 04:00 PM</option>
                  <option value="04:00 PM">04:00 PM - 05:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-promarch-blue" /> Message / Specific Interests
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-promarch-blue focus:border-transparent outline-none transition-all resize-none" 
                  placeholder="Tell us about your career or study goals..." 
                ></textarea>
              </div>

              {status === 'error' && (
                <p className="text-red-600 text-sm font-medium">Sorry, an error occurred. Please try again or contact us directly.</p>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-promarch-blue text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-all shadow-lg flex items-center justify-center gap-2 disabled:bg-gray-400 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {status === 'submitting' ? 'Processing...' : (
                  <>
                    Submit Request <Send className="w-5 h-5" />
                  </>
                )}
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                By submitting this form, you agree to be contacted regarding your migration assessment.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
