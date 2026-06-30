import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/process', label: 'Our Process' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-blue-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl font-bold text-white">KASHI</div>
          <div className="text-[10px] tracking-[0.2em] text-blue-200 font-medium mb-3">
            PREMIUM DRINKING WATER
          </div>
          <p className="text-sm text-blue-100/80 leading-relaxed">
            Pure by Nature, Packaged with Care. Committed to your health and trust.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-blue-100/80">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-3 text-sm text-blue-100/80">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" /> +91 9123456789
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" /> info@kashipremiumwater.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" /> Varanasi, Uttar Pradesh, India
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            {[FacebookIcon, InstagramIcon, WhatsAppIcon].map((Icon, i) => (
              <span
                key={i}
                className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer"
              >
                <Icon className="w-4 h-4" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800 text-center text-xs text-blue-200/70 py-4">
        © 2025 Kashi Premium Drinking Water. All Rights Reserved.
      </div>
    </footer>
  );
}
