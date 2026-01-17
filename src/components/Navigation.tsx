import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600' : 'text-white'
            }`}
          >
            Akshay Bhise
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white hover:text-cyan-400'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-gray-700 hover:text-cyan-600 font-medium py-2"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
