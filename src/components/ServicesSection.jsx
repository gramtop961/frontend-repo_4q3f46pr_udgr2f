import React from 'react';
import { Leaf, Activity, HeartPulse, Salad, Meditation } from 'lucide-react';

const services = [
  {
    title: 'Regenerative Biotechnology Therapy',
    desc: 'Advanced cellular-support therapies designed to optimize the body’s natural repair processes.',
    icon: Activity,
  },
  {
    title: 'Detoxification & Ozone Therapy',
    desc: 'Comprehensive detox programs and ozone therapy to support immunity and vitality.',
    icon: HeartPulse,
  },
  {
    title: 'Herbal Medicine & Natural Supplements',
    desc: 'Personalized herbal prescriptions and high-quality nutraceuticals for targeted healing.',
    icon: Leaf,
  },
  {
    title: 'Nutrition & Holistic Lifestyle Consultation',
    desc: 'Evidence-based nutrition planning and lifestyle coaching for long-term health.',
    icon: Salad,
  },
  {
    title: 'Mind Therapy & Guided Meditation',
    desc: 'Mind-body techniques and guided meditation to reduce stress and restore balance.',
    icon: Meditation,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gradient-to-b from-sky-50 to-emerald-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Our Services</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          We deliver integrated, patient-centered programs that combine modern biotechnology with natural, holistic care.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
