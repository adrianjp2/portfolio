import React from 'react';
import Image from 'next/image';
import { Language, translations } from '@/data/translations';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <header id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center relative overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-6 flex flex-col items-center">
        {/* Avatar with Status Badge */}
        <div className="mb-6 relative">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-tr from-brand-pink via-brand-rose to-brand-orange shadow-xl shadow-brand-pink/20">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-white dark:bg-neutral-900">
              <Image
                src="/assets/perfil.png"
                alt="Adrián Pérez"
                width={128}
                height={128}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0b0f17] shadow-md animate-pulse"
              title={t.hero_available}
            />
            {/* Brand emblem badge */}
            <div
              className="absolute -bottom-1 -left-1 w-8 h-8 rounded-full bg-white dark:bg-[#151d30] border-2 border-white dark:border-[#0b0f17] p-1.5 shadow-md flex items-center justify-center"
              title="Adrián Pérez Brand"
            >
              <Image
                src="/assets/logo-isotype-transparent.png"
                alt="Brand Logo"
                width={24}
                height={24}
                className="w-full h-full object-contain dark:hidden"
              />
              <Image
                src="/assets/logo-isotype-dark.png"
                alt="Brand Logo"
                width={24}
                height={24}
                className="w-full h-full object-contain hidden dark:block"
              />
            </div>
          </div>
        </div>

        {/* Role Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-200 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs md:text-sm font-semibold tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>{t.hero_role_pill}</span>
        </div>

        {/* Main H1 Title */}
        <h1 className="font-grotesk text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white max-w-4xl leading-[1.15] mb-6">
          {t.hero_title_1}
          <span className="grad-text">{t.hero_title_highlight1}</span>
          {t.hero_title_2}
          <span className="grad-text">{t.hero_title_highlight2}</span>
          {t.hero_title_3}
          <span className="grad-text">{t.hero_title_highlight3}</span>
        </h1>

        {/* Capability Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mb-8">
          <span className="px-3 py-1 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300">
            {t.hero_pill_backend}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300">
            {t.hero_pill_apis}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300">
            {t.hero_pill_ai}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300">
            {t.hero_pill_fullstack}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300">
            {t.hero_pill_scalable}
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed mb-10">
          {t.hero_sub}
        </p>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contacto"
            className="px-7 py-3.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-semibold text-sm hover:scale-[1.03] active:scale-[0.98] transition-all shadow-lg shadow-neutral-900/10 dark:shadow-white/5"
          >
            {t.hero_cta_talk}
          </a>
          <a
            href="/assets/CV_Adrian_Perez.pdf"
            download
            className="px-6 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 text-neutral-800 dark:text-neutral-200 font-semibold text-sm hover:border-neutral-900 dark:hover:border-white transition-all"
          >
            {t.hero_cta_cv}
          </a>
          <a
            href="#experiencia"
            className="px-6 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 text-neutral-800 dark:text-neutral-200 font-semibold text-sm hover:border-neutral-900 dark:hover:border-white transition-all"
          >
            {t.hero_cta_exp}
          </a>
        </div>
      </div>
    </header>
  );
};

