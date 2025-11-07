import React from 'react';

const gallery = [
  { src: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1600&auto=format&fit=crop', alt: 'Clinic facility' },
  { src: 'https://images.unsplash.com/photo-1710074213379-2a9c2653046a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGluaWMlMjBmYWNpbGl0eXxlbnwwfDB8fHwxNzYyNDg1Nzg3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Treatment room' },
  { src: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1600&auto=format&fit=crop', alt: 'Staff at work' },
  { src: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1600&auto=format&fit=crop', alt: 'Educational session' },
];

const testimonials = [
  {
    name: 'Maya S.',
    text: 'The holistic approach changed my life. I feel more energized and calm than ever.',
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
  {
    name: 'Daniel R.',
    text: 'Professional, caring team with results that felt both immediate and lasting.',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    name: 'Anisa K.',
    text: 'Their regenerative program and nutrition coaching worked amazingly well for me.',
    avatar: 'https://i.pravatar.cc/100?img=32',
  },
];

const GalleryTestimonials = () => {
  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Gallery</h2>
        <p className="mt-3 max-w-3xl text-slate-600">A glimpse into our calming spaces and caring team.</p>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((g, idx) => (
            <img
              key={idx}
              src={g.src}
              alt={g.alt}
              className="h-40 w-full rounded-lg object-cover shadow-sm md:h-48"
              loading="lazy"
            />
          ))}
        </div>

        <div id="testimonials" className="mt-16">
          <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">Testimonials</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <p className="font-medium text-slate-900">{t.name}</p>
                </div>
                <p className="mt-3 text-slate-600">“{t.text}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryTestimonials;
