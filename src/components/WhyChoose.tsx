import { CheckCircle2 } from 'lucide-react';

export default function WhyChoose() {
  const benefits = [
    'Personalized strategy (not template campaigns)',
    'Direct communication with your Digital Marketing Freelancer',
    'Cost-effective compared to big agencies',
    'Fast execution & optimization',
    'Data-backed performance tracking',
    '100% focus on your business growth'
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Hire a Digital Marketing Freelancer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Instead of an Agency?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-cyan-100"
            >
              <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border border-cyan-200 text-center">
          <p className="text-2xl text-gray-800 leading-relaxed">
            When you hire me, you're not just hiring a marketer — you're partnering with a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 font-bold">
              dedicated Digital Marketing Freelancer
            </span>{' '}
            invested in your success.
          </p>
        </div>
      </div>
    </section>
  );
}
