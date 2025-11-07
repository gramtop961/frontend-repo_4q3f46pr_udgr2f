import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GalleryTestimonials from './components/GalleryTestimonials';
import ContactFooter from './components/ContactFooter';

function App() {
  React.useEffect(() => {
    document.title = 'BIOTEK HOLISTIC KLINIK | Modern Holistic Care';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'BIOTEK HOLISTIC KLINIK blends biotechnology, herbal medicine, and holistic therapy to restore balance of body, mind, and spirit.'
      );
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content =
        'BIOTEK HOLISTIC KLINIK blends biotechnology, herbal medicine, and holistic therapy to restore balance of body, mind, and spirit.';
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="font-inter text-slate-800">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-100 text-emerald-700 font-bold">B</span>
            <span className="text-sm font-semibold tracking-wide">BIOTEK HOLISTIC KLINIK</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#home" className="hover:text-emerald-700">Home</a>
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#gallery" className="hover:text-emerald-700">Gallery</a>
            <a href="#contact" className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600">Book</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <GalleryTestimonials />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
