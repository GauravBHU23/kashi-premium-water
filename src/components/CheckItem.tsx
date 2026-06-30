import { CheckCircle2 } from 'lucide-react';

export default function CheckItem({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${dark ? 'text-blue-300' : 'text-blue-500'}`} />
      <span className={`text-sm ${dark ? 'text-blue-50' : 'text-navy-900/90'}`}>{children}</span>
    </li>
  );
}
