import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ImageSlot from '../components/ImageSlot';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section className="relative max-w-7xl mx-auto px-5 md:px-10 py-16 grid md:grid-cols-2 gap-12 overflow-hidden">
      <div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
          Contact Us
        </h1>
        <p className="text-slate-600 leading-relaxed max-w-md mb-8">
          We'd love to hear from you! For any queries or support, feel free to reach out.
        </p>

        <ul className="space-y-4 text-sm text-navy-900">
          <li className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-500" /> +91 9123456789
          </li>
          <li className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-500" /> info@kashipremiumwater.com
          </li>
          <li className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-500" /> Varanasi, Uttar Pradesh, India
          </li>
        </ul>
      </div>

      <div className="relative bg-white border border-blue-100 rounded-2xl shadow-sm p-6 md:p-8 z-10">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Your Name"
            className="w-full border border-blue-100 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400"
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            className="w-full border border-blue-100 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400"
          />
          <textarea
            required
            placeholder="Your Message"
            rows={5}
            className="w-full border border-blue-100 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 resize-none"
          />
          <button
            type="submit"
            className="bg-navy-900 hover:bg-navy-800 transition-colors text-white text-sm font-medium tracking-wide px-7 py-3 rounded-full"
          >
            SEND MESSAGE
          </button>
          {sent && <p className="text-sm text-green-600">Thanks! Your message has been sent.</p>}
        </form>
      </div>

      <ImageSlot
        name="contact-splash"
        alt="Water splash"
        className="hidden md:block absolute bottom-0 right-0 w-40 h-40 object-contain opacity-70 pointer-events-none"
      />
    </section>
  );
}
