'use client';

import { useEffect, useState } from 'react';

type TaskbarProps = {
  onStart: () => void;
};

export function Taskbar({ onStart }: TaskbarProps) {
  const [clock, setClock] = useState('');

  useEffect(() => {
    const update = () => {
      setClock(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between border-t-2 border-[#f3f3f3] bg-[#bdbdbd] px-2">
      <button
        onClick={onStart}
        className="flex items-center gap-1 border-2 border-[#f3f3f3] border-r-[#222] border-b-[#222] bg-[#c5c5c5] px-2 py-1 text-xs font-bold text-black active:border-l-[#222] active:border-t-[#222]"
      >
        <span className="inline-block h-3 w-3 bg-[#079f3a]" />
        Start
      </button>
      <div className="border-2 border-[#8d8d8d] border-l-[#222] border-t-[#222] bg-[#cfcfcf] px-2 py-1 text-xs text-black">{clock}</div>
    </div>
  );
}
