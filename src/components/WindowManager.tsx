'use client';

import { useEffect, useMemo, useState } from 'react';
import { DesktopWindow } from '@/components/DesktopWindow';
import type { WindowDefinition } from '@/components/types';

export function useWindowState(windows: WindowDefinition[]) {
  const [openOrder, setOpenOrder] = useState<string[]>([]);
  const [focusedId, setFocusedId] = useState<string>('');

  const definitions = useMemo(() => Object.fromEntries(windows.map((item) => [item.id, item])), [windows]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !focusedId) return;
      setOpenOrder((prev) => prev.filter((id) => id !== focusedId));
      setFocusedId('');
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [focusedId]);

  const openWindow = (id: string) => {
    setOpenOrder((prev) => [...prev.filter((value) => value !== id), id]);
    setFocusedId(id);
  };

  const closeWindow = (id: string) => {
    setOpenOrder((prev) => {
      const remaining = prev.filter((value) => value !== id);
      if (focusedId === id) {
        setFocusedId(remaining[remaining.length - 1] ?? '');
      }
      return remaining;
    });
  };

  return { openOrder, focusedId, definitions, openWindow, closeWindow, setFocusedId };
}

type WindowManagerProps = {
  openOrder: string[];
  focusedId: string;
  definitions: Record<string, WindowDefinition>;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  mobile?: boolean;
};

export function WindowManager({ openOrder, focusedId, definitions, onClose, onFocus, mobile }: WindowManagerProps) {
  return (
    <>
      {openOrder.map((id, index) => {
        const windowDef = definitions[id];
        if (!windowDef) return null;

        return (
          <DesktopWindow
            key={id}
            id={id}
            title={windowDef.title}
            zIndex={focusedId === id ? 60 : 20 + index}
            focused={focusedId === id}
            defaultPosition={{ x: 170 + (index % 3) * 34, y: 60 + (index % 3) * 24 }}
            onFocus={onFocus}
            onClose={onClose}
            mobile={mobile}
            widthClass={mobile ? 'w-full' : windowDef.widthClass}
            heightClass={mobile ? 'h-auto min-h-[220px]' : windowDef.heightClass}
          >
            {windowDef.content}
          </DesktopWindow>
        );
      })}
    </>
  );
}
