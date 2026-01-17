import { BarChart3, Search, Lightbulb, Rocket, LineChart, RefreshCw } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: BarChart3,
      title: 'Business & Market Analysis',
      description: 'Deep dive into your business goals and market landscape'
    },
    {
      icon: Search,
      title: 'Keyword Research & Competitor Study',
      description: 'Identify opportunities and competitive advantages'
    },
    {
      icon: Lightbulb,
      title: 'Strategy & Funnel Planning',
      description: 'Create a customized roadmap for your success'
    },
    {
      icon: Rocket,
      title: 'Campaign Setup & SEO Optimization',
      description: 'Launch campaigns with best practices and optimization'
    },
    {
      icon: LineChart,
      title: 'Testing, Scaling & Reporting',
      description: 'Data-driven decisions to maximize performance'
    },
    {
      icon: RefreshCw,
      title: 'Continuous Improvement',
      description: 'Long-term growth through ongoing optimization'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How I Work as a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Digital Marketing Freelancer</span>
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            A proven process that delivers results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="mb-4 mt-4">
                  <Icon className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-cyan-100 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
