import type { LucideIcon } from 'lucide-react';

interface IconFeatureProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  variant?: 'light' | 'dark' | 'plain';
  className?: string;
}

export default function IconFeature({
  icon: Icon,
  title,
  description,
  variant = 'plain',
  className = '',
}: IconFeatureProps) {
  const ring =
    variant === 'dark'
      ? 'border-white/40 text-white'
      : variant === 'light'
        ? 'border-blue-200 text-navy-800 bg-white'
        : 'border-navy-200 text-navy-800';

  return (
    <div className={`flex flex-col items-center text-center gap-3 ${className}`}>
      <span className={`w-14 h-14 rounded-full border-2 flex items-center justify-center ${ring}`}>
        <Icon className="w-6 h-6" strokeWidth={1.75} />
      </span>
      <h3
        className={`font-semibold text-sm ${variant === 'dark' ? 'text-white' : 'text-navy-900'}`}
      >
        {title}
      </h3>
      {description && (
        <p className={`text-xs leading-relaxed ${variant === 'dark' ? 'text-blue-100/80' : 'text-slate-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
