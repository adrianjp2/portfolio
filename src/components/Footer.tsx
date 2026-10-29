'use client';

import React from 'react';
import Image from 'next/image';
import { Language, translations } from '@/data/translations';
import { useToast } from './ToastContext';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];
  const { showToast } = useToast();
  const currentYear = new Date().getFullYear();
  const email = 'adrianperez1223@gmail.com';

  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        showToast(`${t.toast_copied} (${email})`);
      });
    } else {
      showToast(`${t.toast_email_label} ${email}`);
    }
  };

  const whatsappMessage =
    lang === 'es'
      ? 'Hola Adrián, vi tu portafolio y me gustaría conversar sobre un proyecto'
      : 'Hello Adrián, I saw your portfolio and would like to discuss a project';

  return (
    <footer
      id="contacto"
      className="bg-[#0a0a0a] dark:bg-[#070a0f] text-white pt-20 pb-12 border-t border-neutral-900 dark:border-[#1a2234] transition-colors"
    >
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800 dark:border-[#1a2234]">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-auto">
                <Image
                  src="/assets/logo-full-dark.png"
                  alt="Adrián Pérez - Desarrollador de Software"
                  width={200}
                  height={64}
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>

            <h2 className="font-grotesk text-3xl sm:text-4xl font-bold tracking-tight text-white max-w-xl">
              {t.foot_title}
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed">
              {t.foot_desc}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${email}`}
                className="px-6 py-3 rounded-full bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2"
              >
                <span>✉</span>
                <span>{t.foot_btn_email}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-5 py-3 rounded-full border border-neutral-700 hover:border-white text-white font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <span>📋</span>
                <span>{t.foot_btn_copy}</span>
              </button>

              <a
                href={`https://wa.me/584128913959?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-neutral-700 hover:border-emerald-500 hover:text-emerald-400 text-white font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h4 className="font-grotesk text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">
              {t.foot_nav_title}
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  {t.foot_nav_home}
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-white transition-colors">
                  {t.nav_about}
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-white transition-colors">
                  {t.nav_experience}
                </a>
              </li>
              <li>
                <a href="#habilidades" className="hover:text-white transition-colors">
                  {t.nav_skills}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/adrian-jos%C3%A9-perez-figueredo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/adrianjp2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact info row */}
        <div className="py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-neutral-400 border-b border-neutral-800/60 dark:border-[#1a2234]/60">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>{t.foot_location}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${email}`} className="hover:text-white transition-colors flex items-center gap-1.5">
              <span>✉</span>
              <span>{email}</span>
            </a>
            <span className="text-neutral-700">•</span>
            <div className="flex items-center gap-1.5">
              <span>📱</span>
              <span>+58 414-4640810</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-neutral-500">
          © {currentYear} {t.foot_copyright}
        </div>
      </div>
    </footer>
  );
};

