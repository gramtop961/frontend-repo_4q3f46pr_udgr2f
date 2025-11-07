import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">About Us</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            BIOTEK HOLISTIC KLINIK is dedicated to restoring the natural balance of the body by uniting the precision of modern biotechnology with time-tested natural therapies. Our mission is to deliver safe, science-informed, and compassionate care that addresses the whole person—body, mind, and spirit.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Vision & Mission</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              <li>
                Vision: To be a trusted center for holistic healing that seamlessly integrates biotechnology, herbal medicine, and therapeutic practices for sustainable well-being.
              </li>
              <li>
                Mission: To empower individuals through personalized care plans, combining regenerative therapies, nutrition, and mindful practices.
              </li>
              <li>
                Mission: To educate communities with evidence-based holistic health strategies.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Our Founder & Team</h3>
            <p className="mt-3 text-slate-600">
              Founded by Dr. Aisha Pratama, MD, PhD (Integrative Medicine), the clinic brings together experienced medical doctors, certified therapists, and nutritionists. Our team collaborates to design tailored protocols—from regenerative biotechnology and detoxification to herbal medicine, nutrition, and mind therapy.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { name: 'Dr. Aisha Pratama', role: 'Founder, Integrative Physician' },
                { name: 'Dr. Rama Setiawan', role: 'Regenerative Therapy Specialist' },
                { name: 'Nadia Putri, S.Gz', role: 'Clinical Nutritionist' },
                { name: 'Yoga Wibowo', role: 'Holistic Therapist' },
                { name: 'Sinta Lestari', role: 'Mindfulness Coach' },
                { name: 'Clinic Care Team', role: 'Patient Support' },
              ].map((m) => (
                <div key={m.name} className="rounded-lg bg-slate-50 p-4">
                  <div className="h-10 w-10 rounded-full bg-emerald-100" />
                  <p className="mt-2 text-sm font-medium text-slate-900">{m.name}</p>
                  <p className="text-xs text-slate-600">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
