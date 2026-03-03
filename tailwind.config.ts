import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0b1220',
        panel: '#10192b',
        accent: '#89f7fe',
        accent2: '#d58bff'
      },
      boxShadow: {
        glow: '0 0 30px rgba(137, 247, 254, 0.35), 0 0 60px rgba(213, 139, 255, 0.2)'
      },
      backgroundImage: {
        iridescent:
          'radial-gradient(circle at 15% 20%, rgba(137,247,254,0.2), transparent 40%), radial-gradient(circle at 80% 10%, rgba(213,139,255,0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(143,211,244,0.2), transparent 45%)'
      }
    }
  },
  plugins: []
};

export default config;
