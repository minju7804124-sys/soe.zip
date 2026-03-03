export type Project = {
  title: string;
  logline: string;
  role: string;
  tools: string[];
  link: string;
  thumbnail: string;
};

export const worksProjects: Project[] = [
  {
    title: 'Neon Archive',
    logline: 'Desktop-like archive for speculative films and AI stills.',
    role: 'Creative Frontend Lead',
    tools: ['Next.js', 'Tailwind', 'Motion'],
    link: 'https://example.com/neon-archive',
    thumbnail: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Cloudroom OS',
    logline: 'Interactive portfolio operating system with cinematic transitions.',
    role: 'Frontend Engineer',
    tools: ['TypeScript', 'WebGL', 'GSAP'],
    link: 'https://example.com/cloudroom-os',
    thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Future Threads',
    logline: 'Generative fashion lookbook with reusable prompt scenes.',
    role: 'AI Creative Technologist',
    tools: ['ComfyUI', 'Python', 'S3'],
    link: 'https://example.com/future-threads',
    thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80'
  }
];

export const filmProjects: Project[] = [
  {
    title: 'Memory Mineral',
    logline: 'A poetic AI short about synthetic memory erosion.',
    role: 'Director + Prompt Artist',
    tools: ['Midjourney', 'Runway', 'Premiere'],
    link: 'https://example.com/memory-mineral',
    thumbnail: 'https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Transit Bloom',
    logline: 'Experimental montage blending commuters and floral architecture.',
    role: 'Creative Director',
    tools: ['SDXL', 'DaVinci', 'Ableton'],
    link: 'https://example.com/transit-bloom',
    thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80'
  }
];
