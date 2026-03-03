'use client';

import { useEffect, useState } from 'react';
import { BootScreen } from '@/components/BootScreen';
import { MonitorFrame } from '@/components/MonitorFrame';
import { Screen } from '@/components/Screen';
import { WindowManager } from '@/components/WindowManager';

export default function Home() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setBooted(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_top,#cad1ff_0%,#9da7e8_38%,#6469aa_70%,#31386a_100%)] p-4">
      <MonitorFrame>
        <Screen>
          {!booted ? <BootScreen onComplete={() => setBooted(true)} /> : null}
          <WindowManager />
        </Screen>
      </MonitorFrame>
    </main>
  );
}
