import type { PropsWithChildren } from 'react';

export function MonitorFrame({ children }: PropsWithChildren) {
  return (
    <div className="relative mx-auto w-[min(92vw,1200px)]">
      <div className="relative rounded-[28px] border-[10px] border-[#7f7f7f] bg-[#9d9d9d] p-5 shadow-[0_24px_40px_rgba(0,0,0,0.45)]">
        <div className="absolute left-6 top-5 rounded bg-[#f4e08f] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black">CRT 98</div>
        <div className="absolute right-6 top-5 -rotate-6 rounded bg-[#ffc0cb] px-2 py-1 text-[10px] font-bold text-black">Y2K WEB</div>
        <div className="absolute -right-8 bottom-20 h-16 w-16 rotate-12 bg-[url('/stickers/star.svg')] bg-contain bg-no-repeat" />
        <div className="absolute -left-7 top-28 h-14 w-14 -rotate-12 bg-[url('/stickers/smiley.svg')] bg-contain bg-no-repeat" />

        {children}

        <div className="mt-4 flex items-center justify-between rounded-xl border-2 border-[#6f6f6f] bg-[#8e8e8e] px-4 py-2">
          <div className="flex gap-2">
            <span className="h-4 w-4 rounded-full border border-[#5a5a5a] bg-[#6e6e6e]" />
            <span className="h-4 w-4 rounded-full border border-[#5a5a5a] bg-[#6e6e6e]" />
            <span className="h-4 w-8 rounded border border-[#5a5a5a] bg-[#6e6e6e]" />
          </div>
          <div className="text-xs font-semibold text-[#2b2b2b]">soe.zip monitor</div>
        </div>
      </div>
      <div className="mx-auto h-5 w-2/3 rounded-b-2xl bg-[#7f7f7f]" />
      <div className="mx-auto h-3 w-3/4 rounded-full bg-[#5f5f5f]" />
    </div>
  );
}
