'use client';

import type { DesktopIcon } from '@/components/types';

type DesktopIconButtonProps = {
  icon: DesktopIcon;
  selected: boolean;
  onSelect: (id: DesktopIcon['id']) => void;
  onOpen: (id: DesktopIcon['id']) => void;
};

export function DesktopIconButton({ icon, selected, onSelect, onOpen }: DesktopIconButtonProps) {
  return (
    <button
      onClick={() => onSelect(icon.id)}
      onDoubleClick={() => onOpen(icon.id)}
      className={`flex w-20 flex-col items-center gap-1 p-1 text-center text-white ${selected ? 'bg-[#000080]/70' : 'hover:bg-[#000080]/40'}`}
      aria-label={`Open ${icon.label}`}
    >
      <img src={icon.icon} alt="" className="h-10 w-10 [image-rendering:pixelated]" />
      <span className="text-[11px] leading-tight">{icon.label}</span>
    </button>
  );
}
