'use client';

import { useEffect, useMemo, useState } from 'react';
import { BootScreen } from '@/components/BootScreen';
import { Desktop } from '@/components/Desktop';
import { MonitorFrame } from '@/components/MonitorFrame';
import { ProjectCard } from '@/components/ProjectCard';
import { Screen } from '@/components/Screen';
import { Taskbar } from '@/components/Taskbar';
import type { IconItem, WindowDefinition } from '@/components/types';
import { WindowManager, useWindowState } from '@/components/WindowManager';
import { filmProjects, worksProjects } from '@/data/portfolio';

const icons: IconItem[] = [
  { id: 'works', label: 'WORKS', icon: '/icons/folder.svg' },
  { id: 'ai-film', label: 'AI FILM', icon: '/icons/folder.svg' },
  { id: 'fashion-pack', label: 'FASHION PACK', icon: '/icons/folder.svg' },
  { id: 'about', label: 'ABOUT.txt', icon: '/icons/txt.svg' },
  { id: 'cv', label: 'CV.pdf', icon: '/icons/pdf.svg' },
  { id: 'contact', label: 'CONTACT', icon: '/icons/contact.svg' }
];

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setBooted(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 900);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const windows = useMemo<WindowDefinition[]>(
    () => [
      {
        id: 'works',
        title: 'WORKS.EXE',
        widthClass: 'w-[520px]',
        heightClass: 'h-[390px]',
        content: (
          <div>
            <p className="mb-2 text-xs">Selected projects, coded and art-directed for narrative-first interfaces.</p>
            <div className="grid gap-2 md:grid-cols-2">
              {worksProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        )
      },
      {
        id: 'ai-film',
        title: 'AI FILM.MOV',
        widthClass: 'w-[500px]',
        heightClass: 'h-[360px]',
        content: (
          <div className="grid gap-2 md:grid-cols-2">
            {filmProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )
      },
      {
        id: 'fashion-pack',
        title: 'FASHION PACK',
        content: (
          <div className="space-y-2 font-mono text-xs">
            <p>packaging mannequin // concept module</p>
            <div className="border border-dashed border-black bg-white p-3">
              Placeholder deck for a modular mannequin package system:
              <ul className="ml-4 list-disc">
                <li>flat-pack retail silhouette</li>
                <li>AR-assisted assembly marks</li>
                <li>recycled PP shell + holographic label</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: 'about',
        title: 'ABOUT.TXT',
        content: (
          <div className="h-full bg-black p-3 font-mono text-sm text-[#75ff6a]">
            <p>&gt; Senior creative frontend developer.</p>
            <p>&gt; Building brand worlds that feel like software artifacts.</p>
            <p>&gt; Next.js / TypeScript / AI film workflows / fashion-tech.</p>
            <span className="mt-2 inline-block h-4 w-2 animate-pulse bg-[#75ff6a]" />
          </div>
        )
      },
      {
        id: 'cv',
        title: 'CV.PDF',
        content: (
          <div className="space-y-2 text-xs">
            <div className="flex h-48 items-center justify-center border border-black bg-white">PDF preview placeholder</div>
            <div className="flex gap-2">
              <a href="/cv.pdf" target="_blank" rel="noreferrer" className="win98-btn px-3 py-1">
                Open
              </a>
              <a href="/cv.pdf" download className="win98-btn px-3 py-1">
                Download
              </a>
            </div>
          </div>
        )
      },
      {
        id: 'contact',
        title: 'CONTACT',
        widthClass: 'w-[340px]',
        heightClass: 'h-[220px]',
        content: (
          <div className="space-y-1 text-xs">
            <p>Email: hello@soe.zip</p>
            <p>Instagram: @soe.zip</p>
            <p>LinkedIn: linkedin.com/in/soe-zip</p>
            <p>Are.na: are.na/soe-zip</p>
          </div>
        )
      }
    ],
    []
  );

  const { openOrder, focusedId, definitions, openWindow, closeWindow, setFocusedId } = useWindowState(windows);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1a1a28] p-3">
      <MonitorFrame>
        <Screen>
          {!booted && <BootScreen onComplete={() => setBooted(true)} />}

          <Desktop icons={icons} selectedId={selectedIcon} onSelect={setSelectedIcon} onOpen={openWindow} mobile={isMobile} />

          <div className={`absolute inset-0 ${isMobile ? 'overflow-y-auto px-2 pb-16 pt-[220px]' : ''}`}>
            <WindowManager
              openOrder={openOrder}
              focusedId={focusedId}
              definitions={definitions}
              onClose={closeWindow}
              onFocus={setFocusedId}
              mobile={isMobile}
            />
          </div>

          <Taskbar booted={booted} />
        </Screen>
      </MonitorFrame>
    </main>
  );
}
