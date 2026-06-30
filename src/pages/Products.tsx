import { Link } from 'react-router-dom';
import { Droplet, Gem, ShieldCheck, Sparkles } from 'lucide-react';
import ImageSlot from '../components/ImageSlot';
import IconFeature from '../components/IconFeature';
import { products } from '../data/products';

export default function Products() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16 text-center md:text-left">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-1">
          Our Products
        </h1>
        <p className="font-display italic text-lg text-blue-500 mb-4">
          Pure Water for Every Need
        </p>
        <p className="text-slate-600 max-w-xl mx-auto md:mx-0">
          Available in multiple sizes to keep you hydrated anytime, anywhere.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-10 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-white border border-blue-100 rounded-2xl shadow-sm p-6">
          <h2 className="font-display text-xl font-bold tracking-wide text-navy-900 mb-4 uppercase">
            Price List
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-navy-700 border-b border-blue-100">
                <th className="py-2 font-semibold tracking-wide uppercase">Size</th>
                <th className="py-2 font-semibold tracking-wide uppercase text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.slug} className="border-b border-blue-50 last:border-0">
                  <td className="py-3">
                    <Link to={`/products/${p.slug}`} className="hover:text-blue-500 transition-colors">
                      {p.size}
                    </Link>
                  </td>
                  <td className="py-3 text-right font-medium text-navy-900">₹{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="relative w-full max-w-md mx-auto" style={{ aspectRatio: '1300 / 820' }}>
          <ImageSlot
            name="products-bottles"
            alt="Kashi bottle sizes lineup"
            className="absolute inset-0 w-full h-full object-contain"
          />
          {[
            { label: '750ML', left: '10.2%' },
            { label: '1L', left: '30.2%' },
            { label: '2L', left: '55.4%' },
            { label: '20L', left: '85.8%' },
          ].map((b) => (
            <span
              key={b.label}
              className="absolute -translate-x-1/2 text-[10px] sm:text-xs font-bold text-navy-900 bg-white/90 rounded-full px-2 py-0.5 shadow"
              style={{ left: b.left, top: '94%' }}
            >
              {b.label}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-14">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <IconFeature icon={Droplet} title="100% Pure & Safe" />
          <IconFeature icon={Gem} title="Mineral Enriched" />
          <IconFeature icon={ShieldCheck} title="Advanced Purification" />
          <IconFeature icon={Sparkles} title="Fresh Everyday" />
        </div>
      </section>

      <p className="text-center text-xs text-slate-400 py-6">
        Note: Prices may vary by location.
      </p>
    </div>
  );
}
