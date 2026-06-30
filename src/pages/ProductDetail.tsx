import { Navigate, useParams } from 'react-router-dom';
import { Droplet, ShieldCheck, Gem, BadgeCheck } from 'lucide-react';
import ImageSlot from '../components/ImageSlot';
import IconFeature from '../components/IconFeature';
import CheckItem from '../components/CheckItem';
import { products, productFeatures } from '../data/products';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <div>
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid md:grid-cols-2 gap-12 items-center">
        <ImageSlot
          name={product.image}
          alt={`${product.size} bottle`}
          className="w-full max-w-sm mx-auto object-contain"
        />

        <div>
          <h1 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-navy-900 mb-1">
            {product.size} Bottle
          </h1>
          <p className="font-display italic text-lg text-blue-500 mb-6">
            Pure. Safe. Refreshing.
          </p>

          <ul className="space-y-3 mb-8">
            {productFeatures.map((f) => (
              <CheckItem key={f}>{f}</CheckItem>
            ))}
          </ul>

          <div className="inline-flex flex-col items-center bg-navy-950 text-white rounded-xl px-8 py-4">
            <span className="text-xs tracking-widest text-blue-200">PRICE</span>
            <span className="font-display text-2xl font-bold">₹{product.price}</span>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-14">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <IconFeature icon={Droplet} title="Pure Water" />
          <IconFeature icon={ShieldCheck} title="Safe & Healthy" />
          <IconFeature icon={Gem} title="Mineral Rich" />
          <IconFeature icon={BadgeCheck} title="Quality Tested" />
        </div>
      </section>
    </div>
  );
}
