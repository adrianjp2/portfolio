'use client';

import React, { useState } from 'react';
import { projects, ProjectItem } from '@/data/projects';
import { Language, translations } from '@/data/translations';
import { ProjectModal } from './ProjectModal';

interface ExperienceProps {
  lang: Language;
}

type FilterType = 'all' | 'backend' | 'fullstack' | 'ecommerce' | 'mobile';

export const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  const t = translations[lang];
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterOptions: { key: FilterType; label: string }[] = [
    { key: 'all', label: t.filter_all },
    { key: 'backend', label: t.filter_backend },
    { key: 'fullstack', label: t.filter_fullstack },
    { key: 'ecommerce', label: t.filter_ecommerce },
    { key: 'mobile', label: t.filter_mobile },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.categories.includes(activeFilter);
  });

  const getCount = (key: FilterType) => {
    if (key === 'all') return projects.length;
    return projects.filter((p) => p.categories.includes(key)).length;
  };

  const handleOpenModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="experiencia"
      className="py-20 md:py-28 bg-[#fafafa] dark:bg-[#111726] border-y border-neutral-200 dark:border-[#1e293b] transition-colors"
    >
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-pink/10 text-brand-pink border border-brand-pink/20 mb-3">
              {t.exp_pill}
            </span>
            <h2 className="font-grotesk text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {t.exp_title_1}
              <span className="grad-text">{t.exp_title_highlight}</span>
            </h2>
          </div>
          <a
            href="#contacto"
            className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-brand-pink dark:hover:text-brand-pink transition-colors inline-flex items-center gap-1 flex-shrink-0"
          >
            {t.exp_link_talk}
          </a>
        </div>

        {/* Filters Toolbar */}
        <div
          role="toolbar"
          aria-label="Filtrar proyectos"
          className="flex flex-wrap items-center gap-2 mb-10 pb-2"
        >
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-md'
                    : 'bg-white dark:bg-[#151d30] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-[#232f48] hover:border-neutral-400 dark:hover:border-neutral-600'
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 dark:bg-black/10 text-white dark:text-neutral-900 font-bold'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400'
                  }`}
                >
                  {getCount(filter.key)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white dark:bg-[#151d30] border border-neutral-200 dark:border-[#232f48] rounded-[24px] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Summary */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-grotesk text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-2 leading-snug">
                    {project.title[lang]}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-4">
                    {project.cardDescription?.[lang] || project.description[lang]}
                  </p>
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
                    {t.proj_type_label}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-6">
                    {project.type[lang]}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      {t.proj_btn_visit}
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => handleOpenModal(project)}
                    className="px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm font-semibold hover:border-neutral-900 dark:hover:border-white transition-colors"
                  >
                    {project.btnLabel?.[lang] || t.proj_btn_details}
                  </button>
                </div>
              </div>

              {/* Right Column: Achievements & Stack */}
              <div className="lg:col-span-7 bg-neutral-50 dark:bg-[#0b0f17]/70 rounded-2xl p-5 sm:p-6 border border-neutral-200/70 dark:border-[#1e293b]">
                <div className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 mb-3 tracking-wide">
                  {project.company}
                </div>
                <ul className="space-y-2.5 mb-5">
                  {project.points[lang].map((point, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-brand-pink flex-shrink-0 mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  <strong className="text-neutral-900 dark:text-white font-semibold">
                    Stack:
                  </strong>{' '}
                  {project.stack}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
      />
    </section>
  );
};

