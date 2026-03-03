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
    logline: 'A cinematic archive browser for AI-generated short films.',
    role: 'Creative Developer',
    tools: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: 'https://example.com/neon-archive',
    thumbnail:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Synthetic Muse',
    logline: 'Generative styling assistant for editorial fashion teams.',
    role: 'Product Designer + Frontend',
    tools: ['React', 'TypeScript', 'OpenAI API'],
    link: 'https://example.com/synthetic-muse',
    thumbnail:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Cloudroom OS',
    logline: 'Immersive desktop-like storytelling portfolio framework.',
    role: 'Frontend Engineer',
    tools: ['Next.js', 'WebGL', 'GSAP'],
    link: 'https://example.com/cloudroom-os',
    thumbnail:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'FUTURE THREADS',
    logline: 'Lookbook generator with AI scene compositing workflows.',
    role: 'AI Creative Technologist',
    tools: ['Python', 'ComfyUI', 'S3'],
    link: 'https://example.com/future-threads',
    thumbnail:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80'
  }
];
