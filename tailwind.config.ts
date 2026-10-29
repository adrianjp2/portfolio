import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        'background-subtle': 'var(--bg-subtle)',
        'card-bg': 'var(--card-bg)',
        'card-border': 'var(--card-border)',
        'card-hover-border': 'var(--card-hover-border)',
        foreground: 'var(--text)',
        'foreground-secondary': 'var(--text-secondary)',
        'foreground-muted': 'var(--text-muted)',
        border: 'var(--border)',
        brand: {
          pink: '#ec4899',
          rose: '#e11d48',
          orange: '#f97316',
          teal: '#0d9488',
          tealLight: '#14b8a6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        grotesk: ['var(--font-space-grotesk)', 'var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        hover: 'var(--shadow-hover)',
      },
      borderRadius: {
        'portfolio': '20px',
      },
    },
  },
  plugins: [],
};

export default config;

