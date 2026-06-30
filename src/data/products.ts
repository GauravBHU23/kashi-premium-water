export interface Product {
  slug: string;
  size: string;
  price: number;
  image: 'product-detail-750ml' | 'product-detail-1l' | 'product-detail-2l' | 'product-detail-20l-jar';
}

export const products: Product[] = [
  { slug: '750ml', size: '750ml', price: 10, image: 'product-detail-750ml' },
  { slug: '1-litre', size: '1 Litre', price: 20, image: 'product-detail-1l' },
  { slug: '2-litre', size: '2 Litre', price: 30, image: 'product-detail-2l' },
  { slug: '20-litre-jar', size: '20 Litre Jar', price: 50, image: 'product-detail-20l-jar' },
];

export const productFeatures = [
  '100% Pure Drinking Water',
  'Advanced RO + UV Purification',
  'Mineral Enriched',
  'Hygienically Packed',
  'Perfect for Daily Use',
];
