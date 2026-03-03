'use client';

import type { PropsWithChildren } from 'react';
import Draggable from 'react-draggable';

type DesktopWindowProps = PropsWithChildren<{
  id: string;
  title: string;
  width: number;
  height: number;
  zIndex: number;
  isMobile: boolean;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  defaultPosition?: { x: number; y: number };
}>;

export function DesktopWindow({
  id,
  title,
  width,
  height,
  zIndex,
  isMobile,
  onClose,
  onFocus,
  defaultPosition = { x: 80, y: 80 },
  children
}: DesktopWindowProps) {
  const frame = (
    <section
      role="dialog"
      aria-label={title}
      onMouseDown={() => onFocus(id)}
      className="overflow-hidden border-2 border-[#d9d9d9] border-r-[#222] border-b-[#222] bg-[#c3c3c3] text-black shadow-[4px_4px_0_rgba(0,0,0,0.25)]"
      style={{ width, height, zIndex }}
    >
      <header className="window-handle flex h-7 cursor-move items-center justify-between bg-gradient-to-r from-[#00008a] to-[#1084d0] px-1.5 text-xs font-bold text-white">
        <span>{title}</span>
        <button
          onClick={() => onClose(id)}
          className="border border-[#fff] border-r-[#222] border-b-[#222] bg-[#c3c3c3] px-1 leading-none text-black"
          aria-label={`Close ${title}`}
        >
          ×
        </button>
      </header>
      <div className="h-[calc(100%-1.75rem)] overflow-auto bg-[#efefef] p-3 text-sm">{children}</div>
    </section>
  );

  if (isMobile) {
    return <div className="w-full">{frame}</div>;
  }

  return (
    <Draggable handle=".window-handle" defaultPosition={defaultPosition} bounds="parent">
      <div className="absolute left-0 top-0">{frame}</div>
    </Draggable>
  );
}
