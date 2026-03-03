export type Project = {
  title: string;
  logline: string;
  role: string;
  tools: string[];
  link: string;
  thumbnail: string;
};

export const projects: Project[] = [
  {
    title: 'Neon Archive',
    logline: 'Cinematic portfolio browser for AI visuals.',
    role: 'Creative Developer',
    tools: ['Next.js', 'Tailwind', 'Motion'],
    link: 'https://example.com/neon-archive',
    thumbnail: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Synthetic Muse',
    logline: 'Style system for editorial look ideation.',
    role: 'Frontend + Product',
    tools: ['React', 'TypeScript', 'OpenAI'],
    link: 'https://example.com/synthetic-muse',
    thumbnail: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cloudroom OS',
    logline: 'Desktop-inspired web storytelling framework.',
    role: 'Frontend Engineer',
    tools: ['Next.js', 'GSAP', 'WebGL'],
    link: 'https://example.com/cloudroom-os',
    thumbnail: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80'
  }
];

export const filmProjects: Project[] = [
  {
    title: 'Echoes of Plastic',
    logline: 'AI short film about synthetic memories.',
    role: 'Director + Prompt Designer',
    tools: ['Runway', 'ComfyUI', 'Premiere'],
    link: 'https://example.com/echoes',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Soft Signal',
    logline: 'Dreamy Y2K-inspired fashion film experiment.',
    role: 'Creative Technologist',
    tools: ['Midjourney', 'After Effects', 'DaVinci'],
    link: 'https://example.com/soft-signal',
    thumbnail: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80'
  }
];
