import { Droplet, Filter, Leaf, Sun, CheckCircle2, ArrowRight } from 'lucide-react';
import ImageSlot from '../components/ImageSlot';
import IconFeature from '../components/IconFeature';

const steps = [
  { icon: Droplet, title: 'Source Selection' },
  { icon: Filter, title: 'Multi-Stage Filtration' },
  { icon: Leaf, title: 'Mineral Enrichment' },
  { icon: Sun, title: 'UV Sterilization' },
  { icon: CheckCircle2, title: 'Quality Check' },
];

export default function Process() {
  return (
    <div className="bg-blue-50">
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-5">
            Our Process
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-md">
            We follow a strict multi-stage purification process to ensure every bottle of
            Kashi Premium Drinking Water is 100% safe and pure.
          </p>
        </div>
        <ImageSlot
          name="process-bottle"
          alt="Kashi bottle"
          className="w-full max-w-sm mx-auto object-contain"
        />
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-10 pb-10">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-2">
          {steps.map((s, i) => (
            <div key={s.title} className="flex items-center gap-2 md:gap-3">
              <div className="bg-white rounded-xl shadow-sm border border-blue-100 px-5 py-6 w-36">
                <IconFeature icon={s.icon} title={s.title} />
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden sm:block w-5 h-5 text-navy-300 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 text-center">
        <p className="font-display text-xl md:text-2xl font-semibold text-navy-900">
          Purity You Can Trust, Quality You Deserve.
        </p>
      </section>
    </div>
  );
}
