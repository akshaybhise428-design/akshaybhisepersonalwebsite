import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    business_website: '',
    services_required: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({
        full_name: '',
        email: '',
        phone_number: '',
        business_website: '',
        services_required: '',
        message: ''
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Meta Ads Management',
    'Google Ads Management',
    'SEO (Search Engine Optimization)',
    'Content Creation & Strategy',
    'Complete Digital Marketing Strategy',
    'Multiple Services'
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's Grow Your Business with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Digital Marketing Freelancer</span>
          </h2>
          <p className="text-xl text-gray-600">
            Looking for a reliable Digital Marketing Freelancer to scale your brand online?
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Fill out the form below and get a free strategy call.
          </p>
        </div>

        {isSuccess && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-6 flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            <p className="text-green-800 font-medium">
              Thank you for your message! I'll get back to you within 24 hours.
            </p>
          </div>
        )}

        {error && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-xl p-6">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-8 shadow-xl border border-cyan-100">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="full_name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone_number" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label htmlFor="business_website" className="block text-sm font-semibold text-gray-700 mb-2">
                Business Website
              </label>
              <input
                type="url"
                id="business_website"
                name="business_website"
                value={formData.business_website}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="services_required" className="block text-sm font-semibold text-gray-700 mb-2">
              Services Required *
            </label>
            <select
              id="services_required"
              name="services_required"
              value={formData.services_required}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
            >
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all resize-none"
              placeholder="Tell me about your business and goals..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Sending...' : 'Get Free Consultation with a Digital Marketing Freelancer'}
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
