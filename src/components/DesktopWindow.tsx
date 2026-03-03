'use client';

import type { PropsWithChildren } from 'react';
import Draggable from 'react-draggable';

type DesktopWindowProps = PropsWithChildren<{
  id: string;
  title: string;
  zIndex: number;
  focused: boolean;
  defaultPosition: { x: number; y: number };
  onFocus: (id: string) => void;
  onClose: (id: string) => void;
  mobile?: boolean;
  widthClass?: string;
  heightClass?: string;
}>;

function WindowChrome({ title, id, onClose, focused }: Pick<DesktopWindowProps, 'title' | 'id' | 'onClose' | 'focused'>) {
  return (
    <header className={`window-handle flex items-center justify-between px-1 py-[2px] ${focused ? 'bg-[#0a3aa9]' : 'bg-[#7f7f7f]'}`}>
      <h2 className="truncate pr-2 text-[12px] font-bold text-white">{title}</h2>
      <div className="flex gap-1 text-black">
        <button className="win98-btn h-5 w-5 text-[11px] leading-none" aria-label="Minimize">
          _
        </button>
        <button className="win98-btn h-5 w-5 text-[11px] leading-none" aria-label="Maximize">
          ▢
        </button>
        <button className="win98-btn h-5 w-5 text-[11px] leading-none" aria-label={`Close ${title}`} onClick={() => onClose(id)}>
          ×
        </button>
      </div>
    </header>
  );
}

export function DesktopWindow(props: DesktopWindowProps) {
  const { id, title, zIndex, focused, onFocus, onClose, children, defaultPosition, mobile, widthClass, heightClass } = props;

  const panel = (
    <section
      className={`win98-panel ${widthClass ?? 'w-[460px]'} ${heightClass ?? 'h-[340px]'} overflow-hidden text-black`}
      style={{ zIndex }}
      role="dialog"
      aria-label={title}
      onMouseDown={() => onFocus(id)}
    >
      <WindowChrome title={title} id={id} onClose={onClose} focused={focused} />
      <div className="h-[calc(100%-28px)] overflow-auto bg-[#efefef] p-3 text-sm">{children}</div>
    </section>
  );

  if (mobile) {
    return <div className="w-full">{panel}</div>;
  }

  return (
    <Draggable handle=".window-handle" defaultPosition={defaultPosition}>
      <div className="absolute">{panel}</div>
    </Draggable>
  );
}
