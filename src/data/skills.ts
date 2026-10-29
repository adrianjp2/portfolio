export interface SkillCategory {
  titleKey: 'skills_cat_backend' | 'skills_cat_frontend' | 'skills_cat_databases' | 'skills_cat_devops';
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    titleKey: 'skills_cat_backend',
    skills: [
      'PHP 8.x / 7.x',
      'Laravel (5 al 12)',
      'NestJS',
      'Node.js',
      'Lumen',
      'RESTful APIs',
      'GraphQL',
      'SOAP',
      'Microservicios',
      'TypeORM & Eloquent',
      'Laravel Horizon & Redis',
      'Arquitectura DDD',
      'Dwolla & PayPal APIs',
    ],
  },
  {
    titleKey: 'skills_cat_frontend',
    skills: [
      'React 19',
      'TypeScript',
      'TanStack Start & Router',
      'TanStack Query',
      'Vue.js',
      'Angular (5-7)',
      'Ionic Framework',
      'Tailwind CSS v4',
      'Radix UI / shadcn',
      'React Hook Form',
      'Zod',
      'HTML5 Semántico',
      'CSS3 / SASS',
      'Bootstrap',
    ],
  },
  {
    titleKey: 'skills_cat_databases',
    skills: [
      'PostgreSQL',
      'MySQL / MariaDB',
      'MongoDB',
      'Redis (Cache & Queues)',
      'Supabase',
      'AWS S3',
      'Diseño y Modelado Relacional',
      'Optimización de Queries e Índices',
    ],
  },
  {
    titleKey: 'skills_cat_devops',
    skills: [
      'Docker & Docker Compose',
      'Git & GitHub',
      'Cloudflare Workers / Pages',
      'Linux Server',
      'Vite',
      'Postman / Insomnia',
      'Datadog',
      'Apache & cPanel',
      'Google Maps API',
      'Metodologías Ágiles (SCRUM)',
      'Jira & Trello',
    ],
  },
];

