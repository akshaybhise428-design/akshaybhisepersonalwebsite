import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaC0ydjJoMnYtMmgydi0yaC0yem0tMiAwdi0ySDMydjJoMnptMi0yaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-300">Available for New Projects</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Digital Marketing Freelancer
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">
            Helping Brands Grow
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-5xl mt-4 text-gray-300">
            with Data-Driven Strategies
          </span>
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          I'm <span className="text-cyan-400 font-semibold">Akshay Bhise</span>, a results-focused Digital Marketing Freelancer with 1+ year of hands-on experience in Meta Ads, Google Ads, SEO, and Content Marketing. I help businesses generate leads, increase sales, and build strong online visibility.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            Hire a Digital Marketing Freelancer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToContact}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
          >
            Get a Free Marketing Consultation
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '1+', label: 'Years Experience' },
            { number: '50+', label: 'Projects Completed' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
