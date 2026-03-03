type TaskbarProps = {
  booted: boolean;
};

export function Taskbar({ booted }: TaskbarProps) {
  const clock = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="absolute bottom-0 left-0 right-0 z-50 flex h-10 items-center justify-between border-t-2 border-white bg-[#bdbdbd] px-2 text-xs text-black">
      <button className="win98-btn px-3 py-1 font-bold">Start</button>
      <div className="win98-panel h-7 w-[88px] px-2 py-1 text-center">{booted ? clock : '--:--'}</div>
    </div>
  );
}
