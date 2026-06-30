import ImageSlot from '../components/ImageSlot';
import CheckItem from '../components/CheckItem';

const benefits = [
  'Keeps you hydrated and energized.',
  'Supports better digestion.',
  'Boosts overall health.',
  '100% safe for daily use.',
];

export default function Benefits() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-6">
          Benefits
        </h1>
        <ul className="space-y-4">
          {benefits.map((b) => (
            <CheckItem key={b}>{b}</CheckItem>
          ))}
        </ul>
      </div>
      <ImageSlot
        name="benefits-bottle"
        alt="Kashi bottle with splash"
        className="w-full max-w-sm mx-auto object-contain"
      />
    </section>
  );
}
