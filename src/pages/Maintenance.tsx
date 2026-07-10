import { useEffect, useState } from 'react';

const LAUNCH_DATE = new Date('2026-07-25T00:00:00');

function getRemaining(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
  };
}

const BUBBLES = [
  { id: 0,  size: 10, left: 5,  delay: 0,   dur: 12 },
  { id: 1,  size: 18, left: 12, delay: 1.5, dur: 15 },
  { id: 2,  size: 8,  left: 22, delay: 3,   dur: 10 },
  { id: 3,  size: 24, left: 33, delay: 0.8, dur: 18 },
  { id: 4,  size: 12, left: 45, delay: 2.5, dur: 13 },
  { id: 5,  size: 20, left: 55, delay: 4,   dur: 16 },
  { id: 6,  size: 7,  left: 65, delay: 1,   dur: 11 },
  { id: 7,  size: 16, left: 73, delay: 3.5, dur: 14 },
  { id: 8,  size: 22, left: 82, delay: 0.3, dur: 17 },
  { id: 9,  size: 9,  left: 90, delay: 2,   dur: 12 },
  { id: 10, size: 14, left: 96, delay: 4.5, dur: 15 },
  { id: 11, size: 6,  left: 38, delay: 5,   dur: 9  },
];

export default function Maintenance() {
  const [time, setTime] = useState(getRemaining(LAUNCH_DATE));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(LAUNCH_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setProgress(68), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,500&family=Poppins:wght@300;400;500;600;700&display=swap');

        @keyframes float-bubble {
          0%   { transform: translateY(110vh) scale(0.9); opacity: 0; }
          8%   { opacity: 0.6; }
          92%  { opacity: 0.3; }
          100% { transform: translateY(-80px) scale(1.1); opacity: 0; }
        }
        @keyframes ripple-out {
          0%   { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(3); opacity: 0; }
        }
        @keyframes drop-bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes shimmer-text {
          0%   { background-position: -400% center; }
          100% { background-position: 400% center; }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wave-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 24px 4px rgba(46,123,196,0.35); }
          50%       { box-shadow: 0 0 48px 12px rgba(46,123,196,0.6); }
        }
        @keyframes bar-fill {
          from { width: 0%; }
          to   { width: var(--target-w); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes count-flip {
          0%   { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .animate-fade-up-1 { animation: fade-up 0.7s ease forwards 0.2s; opacity: 0; }
        .animate-fade-up-2 { animation: fade-up 0.7s ease forwards 0.5s; opacity: 0; }
        .animate-fade-up-3 { animation: fade-up 0.7s ease forwards 0.8s; opacity: 0; }
        .animate-fade-up-4 { animation: fade-up 0.7s ease forwards 1.1s; opacity: 0; }
        .animate-fade-up-5 { animation: fade-up 0.7s ease forwards 1.4s; opacity: 0; }
        .animate-fade-up-6 { animation: fade-up 0.7s ease forwards 1.7s; opacity: 0; }

        .shimmer-brand {
          background: linear-gradient(
            90deg,
            #fff 0%, #fff 30%,
            #7fb8e8 48%, #fff 54%,
            #fff 100%
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer-text 4s linear infinite 1.5s;
        }

        .glow-icon { animation: glow-pulse 2.5s ease-in-out infinite; }
        .bob-drop  { animation: drop-bob 3s ease-in-out infinite; }
      `}</style>

      <div
        className="relative min-h-screen overflow-hidden flex flex-col"
        style={{ background: 'linear-gradient(160deg, #051829 0%, #0a2647 45%, #0d3464 100%)' }}
      >
        {/* ── Floating bubbles ─────────────────────────────────── */}
        {BUBBLES.map((b) => (
          <div
            key={b.id}
            className="absolute rounded-full border border-[#2e7bc4]/30 bg-[#2e7bc4]/10 pointer-events-none"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              bottom: '-10%',
              animation: `float-bubble ${b.dur}s linear ${b.delay}s infinite`,
            }}
          />
        ))}

        {/* ── Radial glow blobs ────────────────────────────────── */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(46,123,196,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(46,123,196,0.10) 0%, transparent 70%)' }} />

        {/* ── Animated orbit rings ─────────────────────────────── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
             style={{ animation: 'spin-slow 30s linear infinite' }}>
          <div className="w-[600px] h-[600px] rounded-full border border-[#2e7bc4]/8" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
             style={{ animation: 'spin-slow 20s linear infinite reverse' }}>
          <div className="w-[400px] h-[400px] rounded-full border border-[#2e7bc4]/10" />
        </div>

        {/* ── Main content ─────────────────────────────────────── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 py-16">

          {/* Drop icon with ripple rings */}
          <div className="animate-fade-up-1 relative flex items-center justify-center mb-6">
            {/* Ripple rings */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border border-[#2e7bc4]/40"
                style={{
                  width: 64 + i * 32,
                  height: 64 + i * 32,
                  animation: `ripple-out 2.5s ease-out ${i * 0.7}s infinite`,
                }}
              />
            ))}
            {/* Drop */}
            <div
              className="bob-drop glow-icon relative z-10 w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #2e7bc4 0%, #1a5fa8 60%, #0d3464 100%)' }}
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0C19 10 12 2 12 2z" />
              </svg>
            </div>
          </div>

          {/* Brand name */}
          <div className="animate-fade-up-2 text-center mb-2">
            <p className="text-[#7fb8e8] italic text-sm sm:text-base tracking-widest mb-1"
               style={{ fontFamily: "'Playfair Display', serif" }}>
              Pure by Nature
            </p>
            <h1
              className="shimmer-brand text-6xl sm:text-7xl md:text-8xl font-extrabold leading-none tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              KASHI
            </h1>
            <p className="text-[#7fb8e8]/80 text-xs sm:text-sm font-semibold tracking-[0.35em] mt-2"
               style={{ fontFamily: "'Poppins', sans-serif" }}>
              PREMIUM DRINKING WATER
            </p>
          </div>

          {/* Divider */}
          <div className="animate-fade-up-3 flex items-center gap-4 w-full max-w-sm my-8">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(46,123,196,0.6))' }} />
            <div className="w-2.5 h-2.5 rounded-full bg-[#2e7bc4]" />
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(46,123,196,0.6))' }} />
          </div>

          {/* Glass card */}
          <div
            className="animate-fade-up-3 w-full max-w-lg rounded-3xl p-7 sm:p-10 text-center mb-8"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold tracking-[0.18em] uppercase"
                 style={{
                   fontFamily: "'Poppins', sans-serif",
                   background: 'rgba(46,123,196,0.12)',
                   border: '1px solid rgba(46,123,196,0.35)',
                   color: '#7fb8e8',
                 }}>
              <span className="w-2 h-2 rounded-full bg-amber-400"
                    style={{ animation: 'glow-pulse 1.4s ease-in-out infinite', boxShadow: '0 0 6px #fbbf24' }} />
              Under Maintenance
            </div>

            <h2 className="text-white font-bold text-3xl sm:text-4xl mb-3 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}>
              We're Upgrading<br />for You
            </h2>
            <p className="text-[#a0c4e4] text-sm sm:text-base leading-relaxed max-w-sm mx-auto mb-8"
               style={{ fontFamily: "'Poppins', sans-serif" }}>
              Our website is currently undergoing scheduled maintenance to deliver
              you a purer, fresher experience. We'll be back soon!
            </p>

            {/* Countdown */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-8">
              {([
                { value: time.days,  label: 'Days'    },
                { value: time.hours, label: 'Hours'   },
                { value: time.mins,  label: 'Minutes' },
                { value: time.secs,  label: 'Seconds' },
              ] as const).map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center rounded-2xl py-3 sm:py-4 px-1"
                  style={{ background: 'rgba(46,123,196,0.12)', border: '1px solid rgba(46,123,196,0.2)' }}
                >
                  <span
                    className="text-white font-bold text-2xl sm:text-3xl tabular-nums leading-none mb-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {String(value).padStart(2, '0')}
                  </span>
                  <span className="text-[#7fb8e8]/70 text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase"
                        style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#7fb8e8]/60 text-[11px] font-semibold tracking-widest uppercase"
                      style={{ fontFamily: "'Poppins', sans-serif" }}>Progress</span>
                <span className="text-[#7fb8e8] text-[11px] font-bold"
                      style={{ fontFamily: "'Poppins', sans-serif" }}>68%</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden"
                   style={{ background: 'rgba(255,255,255,0.07)' }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    transition: 'width 1.8s cubic-bezier(0.4,0,0.2,1)',
                    background: 'linear-gradient(90deg, #1a5fa8 0%, #2e7bc4 60%, #7fb8e8 100%)',
                    boxShadow: '0 0 12px rgba(46,123,196,0.6)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Feature pills */}
          <div className="animate-fade-up-4 flex flex-wrap justify-center gap-3 mb-10 max-w-lg">
            {[
              { icon: '💧', text: '100% Pure Water' },
              { icon: '🛡️', text: 'RO + UV Filtered' },
              { icon: '✨', text: 'Mineral Enriched' },
              { icon: '🏺', text: 'From Kashi, Varanasi' },
            ].map((f) => (
              <div
                key={f.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.75)',
                }}
              >
                <span>{f.icon}</span>
                <span className="font-medium text-xs sm:text-sm">{f.text}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="animate-fade-up-5 flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a href="tel:+919999999999"
               className="flex items-center gap-2 text-white text-sm px-5 py-3 rounded-full transition-all"
               style={{
                 fontFamily: "'Poppins', sans-serif",
                 background: 'rgba(255,255,255,0.06)',
                 border: '1px solid rgba(255,255,255,0.12)',
               }}
               onMouseEnter={e => (e.currentTarget.style.background = 'rgba(46,123,196,0.2)')}
               onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
            >
              <svg className="w-4 h-4 shrink-0" style={{ color: '#2e7bc4' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.042 11.042 0 005 5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 99999 99999
            </a>
            <a href="mailto:info@kashipremiumwater.com"
               className="flex items-center gap-2 text-white text-sm px-5 py-3 rounded-full transition-all"
               style={{
                 fontFamily: "'Poppins', sans-serif",
                 background: 'rgba(255,255,255,0.06)',
                 border: '1px solid rgba(255,255,255,0.12)',
               }}
               onMouseEnter={e => (e.currentTarget.style.background = 'rgba(46,123,196,0.2)')}
               onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
            >
              <svg className="w-4 h-4 shrink-0" style={{ color: '#2e7bc4' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@kashipremiumwater.com
            </a>
          </div>

          {/* Social icons */}
          <div className="animate-fade-up-6 flex justify-center gap-3 mb-10">
            {[
              {
                label: 'Facebook',
                icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
              },
              {
                label: 'Instagram',
                icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth={0}/></svg>,
              },
              {
                label: 'WhatsApp',
                icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
              },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.5)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(46,123,196,0.25)';
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(46,123,196,0.5)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <p className="text-white/20 text-xs tracking-wider"
             style={{ fontFamily: "'Poppins', sans-serif" }}>
            © {new Date().getFullYear()} Kashi Premium Drinking Water · Varanasi, India
          </p>
        </div>

        {/* ── Animated bottom wave ──────────────────────────────── */}
        <div className="relative w-full overflow-hidden pointer-events-none" style={{ height: 90 }}>
          <div style={{ width: '200%', animation: 'wave-scroll 8s linear infinite', display: 'flex' }}>
            <svg viewBox="0 0 1440 90" className="w-1/2 shrink-0" preserveAspectRatio="none" style={{ height: 90 }}>
              <path
                d="M0,45 C120,80 240,10 360,45 C480,80 600,10 720,45 C840,80 960,10 1080,45 C1200,80 1320,10 1440,45 L1440,90 L0,90 Z"
                fill="rgba(46,123,196,0.08)"
              />
            </svg>
            <svg viewBox="0 0 1440 90" className="w-1/2 shrink-0" preserveAspectRatio="none" style={{ height: 90 }}>
              <path
                d="M0,45 C120,80 240,10 360,45 C480,80 600,10 720,45 C840,80 960,10 1080,45 C1200,80 1320,10 1440,45 L1440,90 L0,90 Z"
                fill="rgba(46,123,196,0.08)"
              />
            </svg>
          </div>
          <div style={{ width: '200%', animation: 'wave-scroll 12s linear infinite reverse', display: 'flex', position: 'absolute', top: 0, left: 0 }}>
            <svg viewBox="0 0 1440 90" className="w-1/2 shrink-0" preserveAspectRatio="none" style={{ height: 90 }}>
              <path
                d="M0,60 C180,20 360,80 540,40 C720,0 900,70 1080,40 C1260,10 1380,60 1440,50 L1440,90 L0,90 Z"
                fill="rgba(46,123,196,0.06)"
              />
            </svg>
            <svg viewBox="0 0 1440 90" className="w-1/2 shrink-0" preserveAspectRatio="none" style={{ height: 90 }}>
              <path
                d="M0,60 C180,20 360,80 540,40 C720,0 900,70 1080,40 C1260,10 1380,60 1440,50 L1440,90 L0,90 Z"
                fill="rgba(46,123,196,0.06)"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
