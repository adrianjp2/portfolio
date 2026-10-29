'use client';

import React, { useEffect } from 'react';
import { ProjectItem } from '@/data/projects';
import { Language, translations } from '@/data/translations';

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  lang,
}) => {
  const t = translations[lang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[1100] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#151d30] border border-neutral-200 dark:border-[#232f48] rounded-[24px] shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-neutral-200 dark:border-neutral-800 flex items-start justify-between gap-4">
          <div>
            <h3
              id="modal-title"
              className="font-grotesk text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white"
            >
              {project.title[lang]}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {project.type[lang]} {project.company ? `· ${project.company}` : ''}
            </p>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label={t.modal_btn_close}
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          <div>
            <h4 className="font-grotesk font-bold text-sm uppercase tracking-wider text-neutral-900 dark:text-white mb-2">
              {lang === 'es' ? 'Sobre el Proyecto' : 'About the Project'}
            </h4>
            <p className="font-normal text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              {project.modalDescription?.[lang] || project.description[lang]}
            </p>
          </div>

          <div>
            <h4 className="font-grotesk font-bold text-sm uppercase tracking-wider text-neutral-900 dark:text-white mb-3">
              {t.modal_achievements_title}
            </h4>
            <ul className="space-y-2.5">
              {project.points[lang].map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed"
                >
                  <span className="text-brand-pink flex-shrink-0 mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#0b0f17] border border-neutral-200 dark:border-neutral-800">
            <span className="font-bold text-xs uppercase tracking-wider text-neutral-900 dark:text-white block mb-1">
              Stack Tecnológico:
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {project.stack}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-end gap-3 bg-neutral-50/50 dark:bg-neutral-900/50">
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {t.modal_btn_close}
          </button>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {t.modal_btn_visit}
            </a>
          ) : (
            <a
              href="#contacto"
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {t.modal_btn_inquire}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

