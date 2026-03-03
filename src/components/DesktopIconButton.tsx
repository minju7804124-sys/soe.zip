'use client';

import type { DesktopIcon } from '@/components/types';

type DesktopIconButtonProps = {
  icon: DesktopIcon;
  onOpen: (id: string) => void;
};

export function DesktopIconButton({ icon, onOpen }: DesktopIconButtonProps) {
  return (
    <button
      onClick={() => onOpen(icon.id)}
      className="group flex flex-col items-center gap-2 rounded-lg p-3 text-center transition hover:bg-cyan-100/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200"
      aria-label={`Open ${icon.label}`}
    >
      <span className="text-3xl drop-shadow">{icon.emoji}</span>
      <span className="text-xs font-medium tracking-wide text-cyan-100 group-hover:text-white">{icon.label}</span>
    </button>
  );
}
