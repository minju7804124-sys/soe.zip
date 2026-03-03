import { DesktopIconButton } from '@/components/DesktopIconButton';
import type { DesktopIcon } from '@/components/types';

type DesktopProps = {
  icons: DesktopIcon[];
  selectedId: string;
  onSelect: (id: string) => void;
  onOpen: (id: string) => void;
};

export function Desktop({ icons, selectedId, onSelect, onOpen }: DesktopProps) {
  return (
    <div className="absolute inset-0 pb-12" style={{ backgroundImage: "url('/wallpaper.svg')", backgroundSize: 'cover' }}>
      <div className="grid h-full content-start gap-2 p-3 sm:grid-cols-[repeat(auto-fill,minmax(80px,1fr))] md:w-[320px]">
        {icons.map((icon) => (
          <DesktopIconButton
            key={icon.id}
            icon={icon}
            selected={selectedId === icon.id}
            onSelect={onSelect}
            onOpen={onOpen}
          />
        ))}
      </div>
    </div>
  );
}
