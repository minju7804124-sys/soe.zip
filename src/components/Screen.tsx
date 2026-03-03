import type { PropsWithChildren } from 'react';

export function Screen({ children }: PropsWithChildren) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border-4 border-[#2f2f2f] bg-black">
      {children}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_55%,rgba(0,0,0,0.25)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_50%,rgba(0,0,0,0.06)_50%)] bg-[length:100%_4px] opacity-60" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:url('/screen-noise.svg')]" />
    </div>
  );
}
