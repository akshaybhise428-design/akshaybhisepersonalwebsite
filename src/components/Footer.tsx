import { Phone, Mail, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const services = [
    'Meta Ads',
    'Google Ads',
    'SEO',
    'Content Marketing',
    'Lead Generation',
    'Digital Strategy'
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Akshay Bhise
            </h3>
            <p className="text-cyan-100 leading-relaxed mb-4">
              Digital Marketing Freelancer helping businesses grow with SEO, Paid Ads, and Performance Marketing.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-cyan-100 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:7000828149"
                className="flex items-center gap-3 text-cyan-100 hover:text-cyan-400 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>7000828149</span>
              </a>
              <a
                href="mailto:akshaybhise428@gmail.com"
                className="flex items-center gap-3 text-cyan-100 hover:text-cyan-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>akshaybhise428@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-cyan-100">
            © {new Date().getFullYear()} Akshay Bhise - Digital Marketing Freelancer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
