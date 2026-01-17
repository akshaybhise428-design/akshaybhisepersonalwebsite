import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <WhyChoose />
      <Services />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
