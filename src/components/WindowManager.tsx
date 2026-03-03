'use client';

import { useEffect, useMemo, useState } from 'react';
import { Desktop } from '@/components/Desktop';
import { DesktopWindow } from '@/components/DesktopWindow';
import { ProjectCard } from '@/components/ProjectCard';
import { Taskbar } from '@/components/Taskbar';
import type { AppId, AppWindowConfig, DesktopIcon } from '@/components/types';
import { filmProjects, projects } from '@/data/portfolio';

const icons: DesktopIcon[] = [
  { id: 'works', label: 'WORKS', icon: '/icons/folder.svg' },
  { id: 'ai-film', label: 'AI FILM', icon: '/icons/film.svg' },
  { id: 'fashion-pack', label: 'FASHION PACK', icon: '/icons/fashion.svg' },
  { id: 'about', label: 'ABOUT.txt', icon: '/icons/txt.svg' },
  { id: 'cv', label: 'CV.pdf', icon: '/icons/pdf.svg' },
  { id: 'contact', label: 'CONTACT', icon: '/icons/mail.svg' }
];

const appConfigs: AppWindowConfig[] = [
  { id: 'works', title: 'WORKS', width: 600, height: 420 },
  { id: 'ai-film', title: 'AI FILM', width: 520, height: 380 },
  { id: 'fashion-pack', title: 'FASHION PACK', width: 500, height: 360 },
  { id: 'about', title: 'ABOUT.txt', width: 500, height: 340 },
  { id: 'cv', title: 'CV.pdf', width: 520, height: 380 },
  { id: 'contact', title: 'CONTACT', width: 380, height: 280 }
];

export function WindowManager() {
  const [openWindows, setOpenWindows] = useState<AppId[]>([]);
  const [focusedId, setFocusedId] = useState<AppId | null>(null);
  const [selectedId, setSelectedId] = useState<AppId | ''>('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !focusedId) return;
      closeWindow(focusedId);
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [focusedId]);

  const openWindow = (id: AppId) => {
    setOpenWindows((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setFocusedId(id);
  };

  const closeWindow = (id: AppId) => {
    setOpenWindows((prev) => prev.filter((item) => item !== id));
    setFocusedId((prev) => (prev === id ? null : prev));
  };

  const onFocus = (id: string) => {
    const castId = id as AppId;
    setFocusedId(castId);
    setOpenWindows((prev) => [...prev.filter((item) => item !== castId), castId]);
  };

  const content = useMemo(
    () => ({
      works: (
        <div className="grid gap-2 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ),
      'ai-film': (
        <div className="grid gap-2 sm:grid-cols-2">
          {filmProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ),
      'fashion-pack': (
        <div className="space-y-2">
          <p className="font-bold">Packaging mannequin concept</p>
          <p>
            Futuristic mannequin shipped as collectible packaging: clear shell, NFC story card, AI-generated styling presets, and
            editorial campaign-ready inserts.
          </p>
          <div className="h-36 border border-dashed border-[#7c7c7c] bg-[#efefef] p-2 text-xs">Placeholder board / visual pack coming soon.</div>
        </div>
      ),
      about: (
        <div className="font-mono text-xs leading-relaxed">
          <p>&gt; Senior creative frontend developer.</p>
          <p>&gt; Builds playful interfaces with production-quality code.</p>
          <p>&gt; Focus: Next.js, motion systems, AI-assisted storytelling.</p>
          <p className="mt-3 inline-block animate-pulse">▋</p>
        </div>
      ),
      cv: (
        <div className="space-y-2">
          <div className="grid h-52 place-items-center border border-[#7e7e7e] bg-white text-[#555]">CV preview placeholder</div>
          <a href="/cv.pdf" target="_blank" rel="noreferrer" className="text-[#0000ee] underline">
            Open / Download CV
          </a>
        </div>
      ),
      contact: (
        <div className="space-y-1 text-sm">
          <p>Email: hello@soe.zip</p>
          <p>X: @soe_zip</p>
          <p>Instagram: @soe.zip</p>
          <p>LinkedIn: linkedin.com/in/soe-zip</p>
        </div>
      )
    }),
    []
  );

  if (isMobile) {
    return (
      <div className="relative h-full">
        <div className="absolute inset-0 overflow-auto p-3 pb-14" style={{ backgroundImage: "url('/wallpaper.svg')", backgroundSize: 'cover' }}>
          <h2 className="mb-2 bg-[#000080]/70 p-2 text-xs font-bold text-white">Launcher</h2>
          <div className="grid gap-2">
            {icons.map((icon) => (
              <button key={icon.id} onClick={() => openWindow(icon.id)} className="flex items-center gap-2 border bg-[#efefef] p-2 text-left text-xs">
                <img src={icon.icon} alt="" className="h-7 w-7 [image-rendering:pixelated]" />
                {icon.label}
              </button>
            ))}
            {openWindows.map((id) => {
              const config = appConfigs.find((item) => item.id === id);
              if (!config) return null;
              return (
                <DesktopWindow
                  key={id}
                  id={id}
                  title={config.title}
                  width={config.width}
                  height={config.height}
                  zIndex={1}
                  isMobile
                  onClose={(windowId) => closeWindow(windowId as AppId)}
                  onFocus={onFocus}
                >
                  {content[id]}
                </DesktopWindow>
              );
            })}
          </div>
        </div>
        <Taskbar onStart={() => setOpenWindows([])} />
      </div>
    );
  }

  return (
    <div className="relative h-full">
      <Desktop icons={icons} selectedId={selectedId} onSelect={(id) => setSelectedId(id as AppId)} onOpen={(id) => openWindow(id as AppId)} />
      <div className="absolute inset-0 pb-12">
        {openWindows.map((id, index) => {
          const config = appConfigs.find((item) => item.id === id);
          if (!config) return null;
          return (
            <DesktopWindow
              key={id}
              id={id}
              title={config.title}
              width={config.width}
              height={config.height}
              zIndex={focusedId === id ? 100 : 20 + index}
              isMobile={false}
              onClose={(windowId) => closeWindow(windowId as AppId)}
              onFocus={onFocus}
              defaultPosition={{ x: 70 + index * 30, y: 60 + index * 20 }}
            >
              {content[id]}
            </DesktopWindow>
          );
        })}
      </div>
      <Taskbar onStart={() => openWindow('works')} />
    </div>
  );
}
