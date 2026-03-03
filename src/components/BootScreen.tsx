'use client';

type BootScreenProps = {
  onComplete: () => void;
};

export function BootScreen({ onComplete }: BootScreenProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050812] text-cyan-100">
      <div className="w-full max-w-xl rounded-xl border border-cyan-200/20 bg-panel/80 p-8 shadow-glow backdrop-blur">
        <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/80">Boot sequence</p>
        <h1 className="text-2xl font-semibold md:text-3xl">Extracting soe.zip...</h1>
        <div className="mt-6 h-2 w-full overflow-hidden rounded bg-cyan-100/10">
          <div className="h-full w-2/3 animate-pulse bg-gradient-to-r from-accent to-accent2" />
        </div>
        <button
          onClick={onComplete}
          className="mt-6 rounded border border-cyan-100/40 px-4 py-2 text-sm font-medium transition hover:bg-cyan-100/10"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
