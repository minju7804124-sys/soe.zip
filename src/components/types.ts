import type { ReactNode } from 'react';

export type IconItem = {
  id: string;
  label: string;
  icon: string;
};

export type WindowDefinition = {
  id: string;
  title: string;
  content: ReactNode;
  widthClass?: string;
  heightClass?: string;
};
