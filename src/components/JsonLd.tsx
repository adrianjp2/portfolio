import React from 'react';
import { Language } from '@/data/translations';

interface JsonLdProps {
  lang: Language;
}

export const JsonLd: React.FC<JsonLdProps> = ({ lang }) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adrianperez.dev';

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Adrián José Pérez Figueredo Portfolio',
        description:
          lang === 'es'
            ? 'Portafolio profesional de Adrián Pérez - Desarrollador Full-Stack & Backend con más de 10 años de experiencia.'
            : 'Professional portfolio of Adrián Pérez - Full-Stack & Backend Developer with over 10 years of experience.',
        inLanguage: lang === 'es' ? 'es-VE' : 'en-US',
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/${lang}#profilepage`,
        url: `${siteUrl}/${lang}`,
        name:
          lang === 'es'
            ? 'Adrián José Pérez Figueredo | Full-Stack & Backend Developer'
            : 'Adrián José Pérez Figueredo | Full-Stack & Backend Developer',
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        mainEntity: {
          '@type': 'Person',
          '@id': `${siteUrl}/#person`,
          name: 'Adrián José Pérez Figueredo',
          alternateName: ['Adrián Pérez', 'adrianjp2'],
          jobTitle: 'Full-Stack & Backend Developer',
          gender: 'https://schema.org/Male',
          description:
            lang === 'es'
              ? 'Desarrollador Full-Stack con más de una década de trayectoria diseñando y escalando sistemas web. Especialista en PHP/Laravel, Node.js, NestJS, React, Vue, TypeScript, bases de datos y arquitectura de microservicios.'
              : 'Full-Stack Developer with over a decade of experience designing and scaling web systems. Specialist in PHP/Laravel, Node.js, NestJS, React, Vue, TypeScript, databases, and microservices architecture.',
          image: `${siteUrl}/assets/perfil.png`,
          logo: `${siteUrl}/assets/logo-full.png`,
          url: siteUrl,
          email: 'contact@adrianperez.dev',
          telephone: '+584144640810',
          address: {
            '@type': 'PostalAddress',
            addressRegion: 'Aragua',
            addressCountry: 'VE',
          },
          alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'Universidad Politécnica Territorial del Estado Aragua (UPT Aragua)',
          },
          knowsAbout: [
            'PHP',
            'Laravel',
            'Node.js',
            'NestJS',
            'React',
            'Vue.js',
            'Angular',
            'TypeScript',
            'PostgreSQL',
            'MySQL',
            'Redis',
            'MongoDB',
            'Docker',
            'GraphQL',
            'REST APIs',
            'Microservices',
            'Domain-Driven Design (DDD)',
            'Cloudflare',
            'AWS',
          ],
          sameAs: [
            'https://www.linkedin.com/in/adrian-jos%C3%A9-perez-figueredo/',
            'https://github.com/adrianjp2',
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

