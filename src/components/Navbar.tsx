import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/process', label: 'Our Process' },
  { to: '/products', label: 'Products' },
  { to: '/benefits', label: 'Benefits' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-3">
        <NavLink to="/" className="leading-tight" onClick={() => setOpen(false)}>
          <div className="font-display text-2xl md:text-3xl font-bold text-navy-900 tracking-wide">
            KASHI
          </div>
          <div className="text-[9px] md:text-[10px] tracking-[0.2em] text-navy-700 font-medium -mt-1">
            PREMIUM DRINKING WATER
          </div>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-navy-900">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `uppercase pb-1 border-b-2 transition-colors hover:text-blue-500 ${
                  isActive ? 'border-navy-900 text-navy-900' : 'border-transparent'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="lg:hidden text-navy-900"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden flex flex-col gap-1 px-5 pb-4 text-sm font-medium text-navy-900 bg-white">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `uppercase py-2 border-b border-blue-100 ${isActive ? 'text-blue-500' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
