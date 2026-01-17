import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Akshay helped us generate quality leads through Meta Ads and Google Ads. As a Digital Marketing Freelancer, he is extremely dedicated and result-oriented.",
      author: "Business Owner",
      role: "Local Brand",
      rating: 5
    },
    {
      text: "Our website traffic and inquiries increased within 2 months of SEO work. Highly recommend Akshay as a Digital Marketing Freelancer.",
      author: "Startup Founder",
      role: "Tech Startup",
      rating: 5
    },
    {
      text: "Professional, transparent, and performance-focused. One of the best Digital Marketing Freelancers to work with.",
      author: "E-commerce Manager",
      role: "E-commerce Client",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Clients Say About This <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Digital Marketing Freelancer</span>
          </h2>
          <p className="text-xl text-gray-600">Real feedback from real clients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-cyan-200" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
