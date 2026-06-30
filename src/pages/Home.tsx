import { Droplet, Leaf, Snowflake, ShieldCheck, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageSlot from '../components/ImageSlot';
import IconFeature from '../components/IconFeature';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      {/* Desktop/tablet height matches the cropped photo's ratio so the bottle is never zoomed/clipped */}
      <section className="relative overflow-hidden bg-sky-50 md:aspect-[1284/1024] md:min-h-[560px]">
        {/* Desktop/tablet: full-bleed photo behind everything, with a left-side scrim for text legibility */}
        <ImageSlot
          name="hero-bg"
          alt="Kashi bottle splashing in the Ganges at Varanasi ghats"
          className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-0 md:h-full flex flex-col md:justify-center">
          <div className="max-w-md">
            <p className="font-display italic text-lg text-navy-800 mb-1">Pure by Nature</p>
            <h1 className="font-display text-6xl md:text-7xl font-extrabold text-navy-900 leading-none">
              KASHI
            </h1>
            <p className="tracking-[0.25em] text-sm md:text-base font-semibold text-navy-800 mt-2 mb-5">
              PREMIUM DRINKING WATER
            </p>
            <p className="text-slate-700 mb-8 leading-relaxed">
              From the Heart of Kashi,
              <br />
              For a Healthier You.
            </p>

            <div className="flex gap-8">
              <IconFeature icon={Droplet} title="PURE" />
              <IconFeature icon={Leaf} title="NATURAL" />
              <IconFeature icon={Snowflake} title="REFRESHING" />
            </div>
          </div>

          {/* Mobile/tablet: contained photo below the text, never overlapping it */}
          <ImageSlot
            name="hero-bg"
            alt="Kashi bottle splashing in the Ganges at Varanasi ghats"
            className="md:hidden w-full h-72 sm:h-96 object-cover rounded-2xl mt-8"
            style={{ objectPosition: '58% 28%' }}
          />
        </div>
      </section>

      {/* Feature bar */}
      <section className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-8 grid grid-cols-3 gap-6 divide-x divide-white/15">
          <IconFeature variant="dark" icon={Droplet} title="100% Pure & Safe" />
          <IconFeature variant="dark" icon={ShieldCheck} title="Advanced Filtration" />
          <IconFeature variant="dark" icon={Gem} title="Mineral Enriched" />
        </div>
      </section>

      {/* Purity section */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4 leading-snug">
            The Purity of Kashi
            <br />
            In Every Drop
          </h2>
          <p className="text-slate-600 leading-relaxed mb-7 max-w-md">
            Kashi Premium Drinking Water is carefully purified using advanced technology to
            ensure unmatched purity, freshness and safety.
          </p>
          <Link
            to="/process"
            className="inline-block bg-navy-900 hover:bg-navy-800 transition-colors text-white text-sm font-medium tracking-wide px-7 py-3 rounded-full"
          >
            LEARN MORE
          </Link>
        </div>
        <ImageSlot
          name="ripple-drop"
          alt="Water droplet ripple"
          className="w-full max-w-md mx-auto object-contain"
        />
      </section>

      {/* Why choose */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h2 className="font-display text-3xl font-bold text-navy-900 text-center mb-12">
            Why Choose Kashi Premium?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            <IconFeature
              icon={Droplet}
              title="Natural Source"
              description="Sourced from pure & natural underground water."
            />
            <IconFeature
              icon={ShieldCheck}
              title="Advanced Purification"
              description="Multi-stage purification for 100% safe drinking."
            />
            <IconFeature
              icon={Leaf}
              title="Essential Minerals"
              description="Retains essential minerals for better health."
            />
            <IconFeature
              icon={Snowflake}
              title="Fresh & Refreshing"
              description="Crisp, clean and refreshing with every sip."
            />
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative bg-navy-950 py-20 overflow-hidden">
        <ImageSlot
          name="cta-bg"
          alt="Varanasi ghats at night"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative max-w-3xl mx-auto px-5 text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Stay Hydrated, Stay Healthy
          </h2>
          <p className="text-blue-100/90 mb-8">
            Kashi Premium Drinking Water – A promise of purity in every drop.
          </p>
          <Link
            to="/contact"
            className="inline-block border-2 border-white text-white text-sm font-medium tracking-wide px-7 py-3 rounded-full hover:bg-white hover:text-navy-900 transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </div>
  );
}
