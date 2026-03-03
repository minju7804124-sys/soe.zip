'use client';

type BootScreenProps = {
  onComplete: () => void;
};

export function BootScreen({ onComplete }: BootScreenProps) {
  return (
    <div className="absolute inset-0 z-[100] flex items-center justify-center bg-[#021437] text-white">
      <div className="w-[min(92%,520px)] border-2 border-[#d6d6d6] bg-[#c0c0c0] p-1 shadow-[6px_6px_0_#1a1a1a]">
        <div className="border-2 border-t-white border-l-white border-r-[#5a5a5a] border-b-[#5a5a5a] bg-[#efefef] p-6 font-mono">
          <p className="text-xs text-[#0f3f92]">Booting Portfolio OS 98...</p>
          <h2 className="mt-2 text-xl text-black">Extracting soe.zip...</h2>
          <div className="mt-5 h-5 border border-black bg-white p-[2px]">
            <div className="h-full w-2/3 animate-pulse bg-[#0f3f92]" />
          </div>
          <button
            onClick={onComplete}
            className="mt-4 border-2 border-t-white border-l-white border-r-[#666] border-b-[#666] bg-[#d7d7d7] px-4 py-1 text-sm text-black"
          >
            SKIP
          </button>
        </div>
      </div>
    </div>
  );
}
