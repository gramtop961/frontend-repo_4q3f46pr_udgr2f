import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  const handleBook = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-6 py-28 text-white">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a2540]/70 via-[#0a2540]/50 to-[#0a2540]/80" />
        <div className="relative">
          <span className="rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">BIOTEK HOLISTIC KLINIK</span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            Restoring Balance of Body, Mind, and Spirit through Modern Holistic Care.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            We blend advanced biotechnology with natural therapies to help you heal deeply and sustainably.
          </p>
          <div className="mt-8">
            <button
              onClick={handleBook}
              className="rounded-md bg-emerald-500 px-6 py-3 text-white shadow-lg transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
