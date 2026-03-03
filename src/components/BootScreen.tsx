'use client';

type BootScreenProps = {
  onComplete: () => void;
};

export function BootScreen({ onComplete }: BootScreenProps) {
  return (
    <div className="absolute inset-0 z-[200] flex items-center justify-center bg-[#070707] p-4 text-[#01ff8c]">
      <div className="w-full max-w-lg border-2 border-[#3d3d3d] bg-black p-5 font-mono text-sm shadow-[6px_6px_0_#202020]">
        <p className="mb-4 text-xs text-[#8cbf95]">SOE Portfolio OS v98.1</p>
        <p className="animate-pulse">Extracting soe.zip...</p>
        <div className="mt-4 h-4 border border-[#1f6a35] bg-[#03130a] p-[2px]">
          <div className="h-full w-2/3 animate-[boot_1s_steps(6,end)_infinite] bg-[#1cff7a]" />
        </div>
        <button
          onClick={onComplete}
          className="mt-5 border-2 border-[#c0c0c0] border-r-[#1d1d1d] border-b-[#1d1d1d] bg-[#bdbdbd] px-3 py-1 font-sans text-xs font-bold text-black active:border-l-[#1d1d1d] active:border-t-[#1d1d1d]"
        >
          SKIP
        </button>
      </div>
    </div>
  );
}
