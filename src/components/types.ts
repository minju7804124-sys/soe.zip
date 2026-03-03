export type AppId = 'works' | 'ai-film' | 'fashion-pack' | 'about' | 'cv' | 'contact';

export type DesktopIcon = {
  id: AppId;
  label: string;
  icon: string;
};

export type AppWindowConfig = {
  id: AppId;
  title: string;
  width: number;
  height: number;
};
