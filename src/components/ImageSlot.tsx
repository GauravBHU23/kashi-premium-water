import type { CSSProperties } from 'react';
import { ImageOff } from 'lucide-react';

// Picks up any image dropped into src/assets/images/<name>.<ext> automatically.
const files = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp,avif,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const imageMap: Record<string, string> = {};
for (const path in files) {
  const name = path.split('/').pop()!.replace(/\.[^.]+$/, '');
  imageMap[name] = files[path];
}

export type ImageSlotName =
  | 'hero-bg'
  | 'hero-bottle'
  | 'ripple-drop'
  | 'cta-bg'
  | 'about-bottle'
  | 'quality-factory'
  | 'process-bottle'
  | 'products-bottles'
  | 'product-detail-750ml'
  | 'product-detail-1l'
  | 'product-detail-2l'
  | 'product-detail-20l-jar'
  | 'benefits-bottle'
  | 'gallery-1'
  | 'gallery-2'
  | 'gallery-3'
  | 'gallery-4'
  | 'gallery-5'
  | 'gallery-6'
  | 'contact-splash';

interface ImageSlotProps {
  name: ImageSlotName;
  alt: string;
  className?: string;
  style?: CSSProperties;
  label?: string;
}

export default function ImageSlot({ name, alt, className, style, label }: ImageSlotProps) {
  const src = imageMap[name];

  if (!src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 overflow-hidden border-2 border-dashed border-blue-300 bg-blue-50 text-navy-700 text-center p-4 ${className ?? ''}`}
        style={style}
      >
        <ImageOff className="w-8 h-8 opacity-50 shrink-0" />
        <span className="text-xs font-medium opacity-70 max-w-full">
          {label ?? alt}
          <br />
          <code className="text-[10px] break-all">src/assets/images/{name}.*</code>
        </span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} style={style} />;
}
