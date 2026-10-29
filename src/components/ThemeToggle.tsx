'use client';

import React, { useEffect, useState } from 'react';
import { Language, translations } from '@/data/translations';

interface ThemeToggleProps {
  lang: Language;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ lang }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const t = translations[lang];

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved === 'dark' || (!saved && prefersDark) ? 'dark' : 'light';
    setTheme(initial);
    if (initial === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    if (next === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const label = theme === 'dark' ? t.theme_light_title : t.theme_dark_title;

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={label}
      title={label}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151d30] text-neutral-800 dark:text-neutral-100 transition-all hover:scale-105 active:scale-95 shadow-sm"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};

