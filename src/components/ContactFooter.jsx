import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

const ContactFooter = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section id="contact" className="bg-gradient-to-b from-emerald-50 to-sky-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Contact Us</h2>
          <p className="mt-3 max-w-3xl text-slate-600">We’re here to help you start your healing journey.</p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <form onSubmit={onSubmit} className="rounded-xl border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="grid gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-md border border-slate-200 p-3 focus:border-emerald-400 focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-md border border-slate-200 p-3 focus:border-emerald-400 focus:outline-none"
                />
                <textarea
                  required
                  placeholder="Tell us about your concerns or desired therapy"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-md border border-slate-200 p-3 focus:border-emerald-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-md bg-emerald-500 px-6 py-3 text-white shadow-md transition hover:bg-emerald-600"
                >
                  Send Message
                </button>
                {submitted && (
                  <p className="text-sm text-emerald-700">Thank you! We will get back to you shortly.</p>
                )}
              </div>
            </form>

            <div className="space-y-4 rounded-xl border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-emerald-600" />
                <p className="text-slate-700">
                  Jl. Sehat Harmoni No. 88, Jakarta Selatan 12540
                  <br />
                  <a
                    className="text-emerald-700 underline"
                    href="https://maps.google.com?q=BIOTEK%20HOLISTIC%20KLINIK"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-600" />
                <a href="tel:+621234567890" className="text-slate-700">+62 123-4567-890</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-600" />
                <a href="mailto:hello@biotekholistic.id" className="text-slate-700">hello@biotekholistic.id</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-emerald-600" />
                <p className="text-slate-700">Mon–Sat: 08:00 – 18:00 | Sun: Closed</p>
              </div>

              <a
                href="https://wa.me/621234567890"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-white shadow-md transition hover:bg-emerald-600"
              >
                <MessageCircle className="h-5 w-5" /> Chat with Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-700 font-bold">B</div>
              <div>
                <p className="font-semibold text-slate-900">BIOTEK HOLISTIC KLINIK</p>
                <p className="text-sm text-slate-600">Modern Holistic Care</p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <a href="#home" className="hover:text-emerald-700">Home</a>
              <a href="#services" className="hover:text-emerald-700">Services</a>
              <a href="#about" className="hover:text-emerald-700">About</a>
              <a href="#contact" className="hover:text-emerald-700">Contact</a>
            </nav>

            <div className="flex items-center gap-4 text-slate-600">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-emerald-700">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-emerald-700">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-emerald-700">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} BIOTEK HOLISTIC KLINIK. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
