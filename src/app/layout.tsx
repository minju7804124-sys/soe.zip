import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'soe.zip | Portfolio OS',
  description: 'Y2K Portfolio OS inside a CRT monitor frame built with Next.js.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
