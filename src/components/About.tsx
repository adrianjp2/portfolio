'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Language, translations } from '@/data/translations';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang];
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  const ringsData = [
    {
      num: '10+',
      pct: 100,
      stroke: '#ec4899',
      title: t.about_ring1_title,
      desc: t.about_ring1_desc,
    },
    {
      num: '10+',
      pct: 90,
      stroke: '#14b8a6',
      title: t.about_ring2_title,
      desc: t.about_ring2_desc,
    },
    {
      num: '15+',
      pct: 85,
      stroke: '#f97316',
      title: t.about_ring3_title,
      desc: t.about_ring3_desc,
    },
  ];

  return (
    <section id="sobre-mi" ref={sectionRef} className="py-20 md:py-28">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio Card */}
          <div className="lg:col-span-7 bg-white dark:bg-[#151d30] border border-neutral-200 dark:border-[#232f48] rounded-[24px] p-7 md:p-10 shadow-sm flex flex-col justify-between transition-colors">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-neutral-200 dark:bg-neutral-800 relative">
                  <Image
                    src="/assets/perfil.png"
                    alt="Adrián Pérez"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-grotesk text-2xl font-bold text-neutral-900 dark:text-white">
                    {t.about_title}
                  </h3>
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    {t.about_role}
                  </span>
                </div>
              </div>

              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 text-[0.95rem] md:text-base text-justify">
                {t.about_desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-neutral-100 dark:bg-neutral-800/70 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/60">
                  {t.about_badge_degree}
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-neutral-100 dark:bg-neutral-800/70 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/60">
                  {t.about_badge_languages}
                </div>
              </div>
            </div>

            <div>
              <a
                href="#experiencia"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white text-neutral-900 dark:text-white font-semibold text-sm transition-all"
              >
                {t.about_btn_explore}
              </a>
            </div>
          </div>

          {/* Metric Rings Column */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {ringsData.map((ring, idx) => {
              const dashoffset = inView
                ? circumference * (1 - ring.pct / 100)
                : circumference;

              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#151d30] border border-neutral-200 dark:border-[#232f48] rounded-[24px] p-6 shadow-sm flex items-center gap-5 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                >
                  <div className="relative w-[68px] h-[68px] flex-shrink-0 flex items-center justify-center">
                    <svg width="68" height="68" className="-rotate-90 transform">
                      <circle
                        cx="34"
                        cy="34"
                        r={radius}
                        className="stroke-neutral-200 dark:stroke-neutral-800"
                        strokeWidth="5"
                        fill="none"
                      />
                      <circle
                        cx="34"
                        cy="34"
                        r={radius}
                        stroke={ring.stroke}
                        strokeWidth="5"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashoffset}
                        strokeLinecap="round"
                        fill="none"
                        style={{
                          transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      />
                    </svg>
                    <span className="absolute font-grotesk font-bold text-sm text-neutral-900 dark:text-white">
                      {ring.num}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-grotesk font-bold text-base text-neutral-900 dark:text-white mb-1">
                      {ring.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-snug">
                      {ring.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

