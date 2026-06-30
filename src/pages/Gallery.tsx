import ImageSlot, { type ImageSlotName } from '../components/ImageSlot';

const images: ImageSlotName[] = [
  'gallery-1',
  'gallery-2',
  'gallery-3',
  'gallery-4',
  'gallery-5',
  'gallery-6',
];

export default function Gallery() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 py-16">
      <h1 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-10">
        Gallery
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {images.map((name) => (
          <ImageSlot
            key={name}
            name={name}
            alt="Kashi gallery photo"
            className="w-full aspect-square object-cover rounded-xl shadow-sm"
          />
        ))}
      </div>
    </section>
  );
}
