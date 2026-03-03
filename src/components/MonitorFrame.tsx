import Image from 'next/image';
import type { PropsWithChildren } from 'react';

export function MonitorFrame({ children }: PropsWithChildren) {
  return (
    <div className="monitor-shell relative mx-auto w-[min(92vw,1200px)] rounded-[30px] bg-[#9a9a9a] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
      <Image src="/stickers/smile.svg" alt="smile sticker" width={70} height={70} className="absolute -left-5 top-4 rotate-[-10deg]" />
      <Image src="/stickers/star.svg" alt="star sticker" width={92} height={92} className="absolute -right-8 top-6 rotate-[14deg]" />
      <div className="rounded-[16px] border-4 border-[#5f5f5f] bg-[#303030] p-4">
        <div className="screen-area relative mx-auto aspect-[4/3] w-full overflow-hidden border-2 border-black bg-black">{children}</div>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-xl border-2 border-[#737373] bg-[#8d8d8d] px-4 py-2 text-xs text-[#242424]">
        <span>SOE Trinitron 1998</span>
        <div className="flex items-center gap-2">
          <button className="h-4 w-8 rounded-full bg-[#5f5f5f]" aria-label="power button" />
          <button className="h-4 w-4 rounded-full bg-[#6c6c6c]" aria-label="menu button" />
        </div>
      </div>
    </div>
  );
}
