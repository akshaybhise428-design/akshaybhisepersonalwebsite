import { Facebook, Search, TrendingUp, FileText, Target } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Facebook,
      title: 'Meta Ads Management',
      description: 'High-converting Facebook & Instagram ad campaigns for leads, sales, and brand awareness.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Search,
      title: 'Google Ads Management',
      description: 'Search, Display & YouTube Ads optimized for ROI and quality traffic.',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      title: 'Search Engine Optimization (SEO)',
      description: 'On-page SEO, technical SEO, and content optimization to rank your website and improve organic traffic.',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: FileText,
      title: 'Content Creation & Strategy',
      description: 'Social media content, ad creatives, website content, and branding that connects and converts.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Target,
      title: 'Complete Digital Marketing Strategy',
      description: 'End-to-end funnel building, tracking, analytics, and performance scaling by a professional Digital Marketing Freelancer.',
      color: 'from-cyan-600 to-blue-700'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Digital Marketing Freelancer <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to grow your business online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
