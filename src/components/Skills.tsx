import React from 'react';
import { skillCategories } from '@/data/skills';
import { Language, translations } from '@/data/translations';

interface SkillsProps {
  lang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="habilidades" className="py-20 md:py-28">
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-teal/10 text-brand-teal border border-brand-teal/20 mb-3">
              {t.skills_pill}
            </span>
            <h2 className="font-grotesk text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {t.skills_title}
            </h2>
          </div>
          <a
            href="#contacto"
            className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-brand-teal dark:hover:text-brand-teal transition-colors inline-flex items-center gap-1 flex-shrink-0"
          >
            {t.skills_link}
          </a>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.titleKey}
              className="bg-white dark:bg-[#151d30] border border-neutral-200 dark:border-[#232f48] rounded-[24px] p-6 shadow-sm hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="font-grotesk font-bold text-lg text-neutral-900 dark:text-white mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                  {t[category.titleKey]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-neutral-100 dark:bg-[#0b0f17] text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800/80 hover:scale-105 transition-transform cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

