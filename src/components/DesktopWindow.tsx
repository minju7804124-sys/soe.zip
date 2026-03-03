'use client';

import type { PropsWithChildren } from 'react';
import Draggable from 'react-draggable';

type DesktopWindowProps = PropsWithChildren<{
  id: string;
  title: string;
  onClose: (id: string) => void;
  zIndex: number;
  onFocus: (id: string) => void;
}>;

export function DesktopWindow({ id, title, onClose, zIndex, onFocus, children }: DesktopWindowProps) {
  return (
    <Draggable handle=".window-handle" defaultPosition={{ x: 120, y: 90 }}>
      <section
        className="absolute left-4 top-8 w-[min(92vw,680px)] overflow-hidden rounded-xl border border-cyan-100/20 bg-[#0a1324]/95 text-cyan-50 shadow-glow backdrop-blur"
        style={{ zIndex }}
        role="dialog"
        aria-label={title}
        onMouseDown={() => onFocus(id)}
      >
        <header className="window-handle flex cursor-move items-center justify-between border-b border-cyan-100/20 bg-cyan-200/10 px-4 py-2">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em]">{title}</h2>
          <button
            onClick={() => onClose(id)}
            className="rounded border border-cyan-100/40 px-2 py-1 text-xs font-semibold transition hover:bg-red-300/20"
            aria-label={`Close ${title}`}
          >
            ✕
          </button>
        </header>
        <div className="max-h-[70vh] overflow-auto p-4">{children}</div>
      </section>
    </Draggable>
  );
}
