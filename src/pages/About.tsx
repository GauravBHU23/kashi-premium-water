import { Target, Eye, Award } from 'lucide-react';
import ImageSlot from '../components/ImageSlot';
import IconFeature from '../components/IconFeature';
import CheckItem from '../components/CheckItem';

export default function About() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-1">
            About Us
          </h1>
          <p className="font-display italic text-lg text-blue-500 mb-5">A Promise of Purity</p>
          <p className="text-slate-600 leading-relaxed max-w-md">
            Kashi Premium Drinking Water is dedicated to providing 100% pure, safe and
            refreshing drinking water. Sourced from natural underground sources and purified
            with advanced technology, we ensure every drop you drink is healthy and
            trustworthy.
          </p>
        </div>
        <ImageSlot
          name="about-bottle"
          alt="Kashi bottle with splash"
          className="w-full max-w-sm mx-auto object-contain"
        />
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-10 pb-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Target, title: 'Our Mission', desc: 'To deliver pure & healthy water.' },
            { icon: Eye, title: 'Our Vision', desc: 'To be a trusted name in every home.' },
            { icon: Award, title: 'Our Promise', desc: 'Purity, Quality & Customer Trust.' },
          ].map((b) => (
            <div
              key={b.title}
              className="bg-white border border-blue-100 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center gap-2"
            >
              <IconFeature icon={b.icon} title={b.title} description={b.desc} />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-10 pb-20">
        <div className="bg-navy-950 rounded-2xl overflow-hidden grid md:grid-cols-2">
          <div className="p-8 md:p-10 text-white">
            <h2 className="font-display text-2xl font-bold mb-3">Our Commitment to Quality</h2>
            <p className="text-blue-100/80 text-sm mb-6 leading-relaxed">
              We follow strict quality standards at every step to ensure the water you drink
              is 100% safe and pure.
            </p>
            <ul className="space-y-3">
              <CheckItem dark>Advanced Purification</CheckItem>
              <CheckItem dark>Quality Tested</CheckItem>
              <CheckItem dark>Hygienic Bottling</CheckItem>
              <CheckItem dark>Safe &amp; Healthy</CheckItem>
            </ul>
          </div>
          <ImageSlot
            name="quality-factory"
            alt="Bottling line"
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
