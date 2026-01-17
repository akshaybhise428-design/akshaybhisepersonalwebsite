import { Target, TrendingUp, Users, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Meta Ads',
      description: 'Facebook & Instagram Advertising'
    },
    {
      icon: TrendingUp,
      title: 'Google Ads',
      description: 'Search, Display & YouTube'
    },
    {
      icon: Users,
      title: 'SEO',
      description: 'Search Engine Optimization'
    },
    {
      icon: Award,
      title: 'Content & Branding',
      description: 'Creation & Positioning'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Digital Marketing Freelancer</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Hi, I'm Akshay Bhise</h3>
              <p className="text-lg leading-relaxed text-cyan-50">
                A passionate and performance-driven Digital Marketing Freelancer based in India. With over one year of real-world experience, I specialize in helping startups, local businesses, and personal brands grow through strategic digital marketing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-cyan-50 p-6 rounded-xl border border-cyan-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <Icon className="w-10 h-10 text-cyan-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">My Mission is Simple</h3>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            To deliver measurable growth, quality leads, and strong ROI through smart digital strategies.
          </p>
        </div>
      </div>
    </section>
  );
}
