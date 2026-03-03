'use client';

import { useEffect, useMemo, useState } from 'react';
import { BootScreen } from '@/components/BootScreen';
import { DesktopIconButton } from '@/components/DesktopIconButton';
import { DesktopWindow } from '@/components/DesktopWindow';
import { ProjectCard } from '@/components/ProjectCard';
import type { DesktopIcon } from '@/components/types';
import { projects } from '@/data/portfolio';

const icons: DesktopIcon[] = [
  { id: 'works', label: 'WORKS', emoji: '🗂️' },
  { id: 'ai-film', label: 'AI FILM', emoji: '🎬' },
  { id: 'fashion-pack', label: 'FASHION PACK', emoji: '🧥' },
  { id: 'about', label: 'ABOUT.txt', emoji: '📄' },
  { id: 'cv', label: 'CV.pdf', emoji: '📕' },
  { id: 'contact', label: 'CONTACT', emoji: '📡' }
];

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [focusedId, setFocusedId] = useState<string>('');

  useEffect(() => {
    const timer = window.setTimeout(() => setBooted(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpenWindows((prev) => prev.slice(0, -1));
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  const openWindow = (id: string) => {
    setOpenWindows((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
    setFocusedId(id);
  };

  const closeWindow = (id: string) => {
    setOpenWindows((prev) => prev.filter((windowId) => windowId !== id));
    setFocusedId((prev) => (prev === id ? '' : prev));
  };

  const windows = useMemo(
    () => ({
      works: {
        title: 'WORKS',
        content: (
          <div>
            <p className="mb-4 text-sm text-cyan-100/80">Selected projects across AI, film, and fashion technology.</p>
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        )
      },
      'ai-film': {
        title: 'AI FILM',
        content: (
          <div className="space-y-3 text-sm leading-relaxed text-cyan-100">
            <p>
              I create AI-native short films by combining narrative direction, diffusion-based image generation, and editing systems.
            </p>
            <p>Workflow: script → moodboards → model prompts → sequence stitching → color and sound.</p>
          </div>
        )
      },
      'fashion-pack': {
        title: 'FASHION PACK',
        content: (
          <ul className="list-disc space-y-2 pl-5 text-sm text-cyan-100">
            <li>Trend decks with synthetic references and material studies.</li>
            <li>Editorial scene generation and lookbook concepts.</li>
            <li>Prompt libraries for repeatable style directions.</li>
          </ul>
        )
      },
      about: {
        title: 'ABOUT.txt',
        content: (
          <p className="text-sm leading-relaxed text-cyan-100">
            Senior frontend developer blending cinematic visuals with production-grade web engineering. Specialized in Next.js,
            design systems, and creative AI workflows.
          </p>
        )
      },
      cv: {
        title: 'CV.pdf',
        content: (
          <div className="space-y-3 text-sm text-cyan-100">
            <p>Download CV:</p>
            <a href="#" className="inline-flex rounded border border-cyan-100/40 px-3 py-2 hover:bg-cyan-100/10">
              Placeholder CV link
            </a>
          </div>
        )
      },
      contact: {
        title: 'CONTACT',
        content: (
          <div className="space-y-2 text-sm text-cyan-100">
            <p>Email: hello@soe.zip</p>
            <p>LinkedIn: linkedin.com/in/soe-zip</p>
            <p>Instagram: @soe.zip</p>
          </div>
        )
      }
    }),
    []
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-surface bg-iridescent px-5 py-8 text-cyan-50">
      {!booted ? <BootScreen onComplete={() => setBooted(true)} /> : null}

      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_bottom,transparent_95%,rgba(255,255,255,0.08)_100%)] [background-size:100%_4px]" />

      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-[0.2em] text-white md:text-3xl">soe.zip // Portfolio OS</h1>
        <p className="mt-2 text-sm text-cyan-100/80">Retro-futuristic interface. Recruiter-friendly clarity.</p>
      </header>

      <section aria-label="Desktop icons" className="grid max-w-sm grid-cols-3 gap-2">
        {icons.map((icon) => (
          <DesktopIconButton key={icon.id} icon={icon} onOpen={openWindow} />
        ))}
      </section>

      {openWindows.map((id, index) => {
        const windowData = windows[id as keyof typeof windows];
        if (!windowData) return null;

        const isFocused = focusedId === id;
        const zIndex = isFocused ? 40 : 20 + index;

        return (
          <DesktopWindow key={id} id={id} title={windowData.title} onClose={closeWindow} zIndex={zIndex} onFocus={setFocusedId}>
            {windowData.content}
          </DesktopWindow>
        );
      })}
    </main>
  );
}
