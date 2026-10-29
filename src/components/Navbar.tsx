'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Language, translations } from '@/data/translations';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  lang: Language;
}

export const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  const t = translations[lang];
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const nextLang: Language = lang === 'es' ? 'en' : 'es';

  const switchLanguage = () => {
    router.push(`/${nextLang}`);
  };

  useEffect(() => {
    const sectionIds = ['inicio', 'sobre-mi', 'experiencia', 'habilidades', 'contacto'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: '#sobre-mi', label: t.nav_about, id: 'sobre-mi' },
    { href: '#experiencia', label: t.nav_experience, id: 'experiencia' },
    { href: '#habilidades', label: t.nav_skills, id: 'habilidades' },
    { href: '#contacto', label: t.nav_contact, id: 'contacto' },
  ];

  return (
    <>
      <nav
        aria-label={lang === 'es' ? 'Navegación principal' : 'Main navigation'}
        className="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-[#0b0f17]/85 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300"
      >
        <div className="max-w-[1160px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Brand */}
          <Link
            href={`/${lang}#inicio`}
            className="flex items-center gap-3 font-bold text-[1.02rem] tracking-tight hover:scale-[1.02] transition-transform text-neutral-900 dark:text-neutral-50 group"
          >
            <span className="w-9 h-9 flex items-center justify-center flex-shrink-0 relative">
              {/* Light Mode Isotype */}
              <Image
                src="/assets/logo-isotype-transparent.png"
                alt="Logo Adrián Pérez"
                width={36}
                height={36}
                className="w-full h-full object-contain dark:hidden group-hover:scale-105 transition-transform"
                priority
              />
              {/* Dark Mode Isotype */}
              <Image
                src="/assets/logo-isotype-dark.png"
                alt="Logo Adrián Pérez"
                width={36}
                height={36}
                className="w-full h-full object-contain hidden dark:block group-hover:scale-105 transition-transform"
                priority
              />
            </span>
            <span className="font-grotesk tracking-tight">Adrián Pérez</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-[0.92rem] font-medium py-1.5 transition-colors relative ${
                    activeSection === link.id
                      ? 'text-neutral-900 dark:text-white font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-pink to-brand-orange rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={switchLanguage}
              type="button"
              aria-label={t.lang_btn_title}
              title={t.lang_btn_title}
              className="h-10 px-3.5 flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151d30] text-neutral-800 dark:text-neutral-100 font-semibold text-xs tracking-wider transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <span>🌐</span>
              <span>{t.lang_btn_text}</span>
            </button>

            {/* Theme Switcher */}
            <ThemeToggle lang={lang} />

            {/* Desktop CTAs */}
            <a
              href="#contacto"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white text-sm font-semibold hover:border-neutral-900 dark:hover:border-white transition-all shadow-sm"
            >
              {t.nav_talk}
            </a>

            <a
              href="/assets/CV_Adrian_Perez.pdf"
              download
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-sm"
              title="Descargar Currículum en PDF"
            >
              <span>⬇</span>
              <span>{lang === 'es' ? 'Descargar CV' : 'Download CV'}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151d30] text-neutral-800 dark:text-neutral-100"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-4 h-0.5 bg-current transition-all mb-1" />
              <div className="w-4 h-0.5 bg-current transition-all mb-1" />
              <div className="w-4 h-0.5 bg-current transition-all" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed top-[72px] left-0 right-0 z-40 bg-white dark:bg-[#0b0f17] border-b border-neutral-200 dark:border-neutral-800 p-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-3">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-semibold text-sm"
            >
              {t.nav_talk}
            </a>
            <a
              href="/assets/CV_Adrian_Perez.pdf"
              download
              className="w-full text-center py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>⬇</span>
              <span>{lang === 'es' ? 'Descargar CV' : 'Download CV'}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

