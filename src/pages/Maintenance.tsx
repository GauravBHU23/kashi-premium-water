export default function Maintenance() {
  return (
    <div className="min-h-screen bg-[#0a2647] flex flex-col items-center justify-center px-5 py-12 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#2e7bc4]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#2e7bc4]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.02] border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-white/[0.01] border border-white/5 pointer-events-none" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-xl text-center">

        {/* Logo / Brand */}
        <div className="flex flex-col items-center gap-3 mb-10">
          {/* Animated drop icon */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[#2e7bc4]/20 animate-ping" style={{ animationDuration: '2.5s' }} />
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#2e7bc4] to-[#1a5fa8] flex items-center justify-center shadow-xl shadow-[#2e7bc4]/30">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                <path d="M12 2C12 2 5 10.5 5 15a7 7 0 0 0 14 0c0-4.5-7-13-7-13z" />
              </svg>
            </div>
          </div>

          <div>
            <p className="font-serif italic text-[#7fb8e8] text-base tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pure by Nature
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl font-extrabold text-white leading-none tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              KASHI
            </h1>
            <p className="text-[#7fb8e8] text-xs sm:text-sm font-semibold tracking-[0.3em] mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              PREMIUM DRINKING WATER
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#2e7bc4]/50" />
          <div className="w-2 h-2 rounded-full bg-[#2e7bc4]" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#2e7bc4]/50" />
        </div>

        {/* Main message */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-[#2e7bc4]/15 border border-[#2e7bc4]/30 text-[#7fb8e8] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Under Maintenance
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
            We're Upgrading<br />for You
          </h2>
          <p className="text-[#a0c4e4] leading-relaxed text-sm sm:text-base max-w-md mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Our website is currently undergoing scheduled maintenance to bring you
            a better experience. We'll be back very soon with something pure &amp; refreshing.
          </p>
        </div>

        {/* Features strip */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { icon: '💧', label: '100% Pure' },
            { icon: '🛡️', label: 'RO + UV Filtered' },
            { icon: '✨', label: 'Mineral Rich' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-xl px-3 py-4 flex flex-col items-center gap-2"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-white/70 text-[11px] font-semibold tracking-wide text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/30 text-xs tracking-wider" style={{ fontFamily: "'Poppins', sans-serif" }}>CONTACT US</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
          <a
            href="tel:+919999999999"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm px-5 py-3 rounded-full transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <svg className="w-4 h-4 text-[#2e7bc4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.042 11.042 0 005 5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 99999 99999
          </a>
          <a
            href="mailto:info@kashipremiumwater.com"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm px-5 py-3 rounded-full transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <svg className="w-4 h-4 text-[#2e7bc4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@kashipremiumwater.com
          </a>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-4 mb-10">
          {[
            {
              label: 'Facebook',
              href: '#',
              icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              ),
            },
            {
              label: 'Instagram',
              href: '#',
              icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth={0} />
                </svg>
              ),
            },
            {
              label: 'WhatsApp',
              href: '#',
              icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              ),
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#2e7bc4]/30 border border-white/10 hover:border-[#2e7bc4]/50 text-white/60 hover:text-white transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-white/25 text-xs tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
          © {new Date().getFullYear()} Kashi Premium Drinking Water · Varanasi, India
        </p>
      </div>
    </div>
  );
}
