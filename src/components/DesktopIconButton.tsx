'use client';

import Image from 'next/image';
import type { IconItem } from '@/components/types';

type DesktopIconButtonProps = {
  item: IconItem;
  selected: boolean;
  onSelect: (id: string) => void;
  onOpen: (id: string) => void;
};

export function DesktopIconButton({ item, selected, onSelect, onOpen }: DesktopIconButtonProps) {
  return (
    <button
      onClick={() => onSelect(item.id)}
      onDoubleClick={() => onOpen(item.id)}
      className={`flex w-[84px] flex-col items-center gap-1 p-1 text-white ${selected ? 'bg-[#0a3aa9]/70' : 'hover:bg-white/10'}`}
      aria-label={item.label}
    >
      <Image src={item.icon} alt="" width={36} height={36} className="pixelated" />
      <span className="text-center text-[11px] leading-tight [text-shadow:1px_1px_0_#000]">{item.label}</span>
    </button>
  );
}
