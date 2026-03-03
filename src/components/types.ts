import type { ReactNode } from 'react';

export type DesktopIcon = {
  id: string;
  label: string;
  emoji: string;
};

export type WindowConfig = {
  id: string;
  title: string;
  content: ReactNode;
};
