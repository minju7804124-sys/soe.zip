import { DesktopIconButton } from '@/components/DesktopIconButton';
import type { IconItem } from '@/components/types';

type DesktopProps = {
  icons: IconItem[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onOpen: (id: string) => void;
  mobile?: boolean;
};

export function Desktop({ icons, selectedId, onSelect, onOpen, mobile }: DesktopProps) {
  return (
    <div className={`absolute left-2 top-2 z-10 ${mobile ? 'right-2' : ''}`}>
      <div className={mobile ? 'grid grid-cols-2 gap-2 pb-12' : 'grid grid-cols-2 gap-y-2'}>
        {icons.map((item) => (
          <DesktopIconButton key={item.id} item={item} selected={selectedId === item.id} onSelect={onSelect} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}
