import type { PropsWithChildren } from 'react';

export function Screen({ children }: PropsWithChildren) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#9ad0ff_0%,#4fa3ff_35%,#86d37d_100%)]">
      {children}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_2px)] bg-[length:100%_3px] opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.4)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Cfilter id="n"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4"/%3E%3C/filter%3E%3Crect width="80" height="80" filter="url(%23n)" opacity="0.7"/%3E%3C/svg%3E')]" />
    </div>
  );
}
