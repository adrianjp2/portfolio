export type Language = 'es' | 'en';

export interface TranslationDictionary {
  meta_title: string;
  meta_desc: string;
  nav_about: string;
  nav_experience: string;
  nav_skills: string;
  nav_contact: string;
  nav_talk: string;
  nav_cv: string;
  lang_btn_text: string;
  lang_btn_title: string;
  theme_light_title: string;
  theme_dark_title: string;
  hero_available: string;
  hero_role_pill: string;
  hero_title_1: string;
  hero_title_highlight1: string;
  hero_title_2: string;
  hero_title_highlight2: string;
  hero_title_3: string;
  hero_title_highlight3: string;
  hero_pill_backend: string;
  hero_pill_apis: string;
  hero_pill_ai: string;
  hero_pill_fullstack: string;
  hero_pill_scalable: string;
  hero_sub: string;
  hero_cta_talk: string;
  hero_cta_cv: string;
  hero_cta_exp: string;
  about_title: string;
  about_role: string;
  about_desc: string;
  about_badge_degree: string;
  about_badge_languages: string;
  about_btn_explore: string;
  about_ring1_title: string;
  about_ring1_desc: string;
  about_ring2_title: string;
  about_ring2_desc: string;
  about_ring3_title: string;
  about_ring3_desc: string;
  exp_pill: string;
  exp_title_1: string;
  exp_title_highlight: string;
  exp_link_talk: string;
  filter_all: string;
  filter_backend: string;
  filter_fullstack: string;
  filter_ecommerce: string;
  filter_mobile: string;
  proj_type_label: string;
  proj_btn_details: string;
  proj_btn_visit: string;
  skills_pill: string;
  skills_title: string;
  skills_link: string;
  skills_cat_backend: string;
  skills_cat_frontend: string;
  skills_cat_databases: string;
  skills_cat_devops: string;
  foot_title: string;
  foot_desc: string;
  foot_btn_email: string;
  foot_btn_copy: string;
  foot_nav_title: string;
  foot_nav_home: string;
  foot_location: string;
  foot_copyright: string;
  modal_default_title: string;
  modal_achievements_title: string;
  modal_btn_close: string;
  modal_btn_visit: string;
  modal_btn_inquire: string;
  toast_copied: string;
  toast_email_label: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  es: {
    meta_title: "Adrián José Pérez Figueredo | Full-Stack & Backend Developer",
    meta_desc: "Desarrollador Full-Stack con más de 10 años de experiencia. Especialista en PHP/Laravel, Node.js, NestJS, React, Vue, Angular, PostgreSQL y MySQL. Aragua, Venezuela.",
    nav_about: "Sobre mí",
    nav_experience: "Experiencia",
    nav_skills: "Habilidades",
    nav_contact: "Contacto",
    nav_talk: "Hablemos",
    nav_cv: "⬇ Descargar CV",
    lang_btn_text: "EN",
    lang_btn_title: "Cambiar idioma a Inglés (English)",
    theme_light_title: "Modo claro",
    theme_dark_title: "Modo oscuro",
    hero_available: "Disponible para nuevos proyectos",
    hero_role_pill: "Full-Stack · Backend Developer",
    hero_title_1: "Construyendo ",
    hero_title_highlight1: "arquitecturas robustas",
    hero_title_2: ", flujos automatizados con ",
    hero_title_highlight2: "IA",
    hero_title_3: " y ",
    hero_title_highlight3: "soluciones tecnológicas escalables.",
    hero_pill_backend: "⚙️ Desarrollo Back-End",
    hero_pill_apis: "🔌 APIs & Microservicios",
    hero_pill_ai: "🤖 Automatizaciones con IA",
    hero_pill_fullstack: "🎨 Experiencia Full-Stack",
    hero_pill_scalable: "🚀 Arquitectura Escalable",
    hero_sub: "Más de 10 años de experiencia diseñando y escalando sistemas web de alta disponibilidad con PHP/Laravel, Node.js y NestJS, capaces de procesar grandes volúmenes de datos con PostgreSQL, MySQL, Redis y MongoDB.",
    hero_cta_talk: "💬 Hablemos",
    hero_cta_cv: "⬇ Descargar CV",
    hero_cta_exp: "💼 Ver Experiencia",
    about_title: "Soy Adrián Pérez.",
    about_role: "Full-Stack & Backend Developer",
    about_desc: "Desarrollador Full-Stack con más de una década de trayectoria diseñando y escalando sistemas web. Especialista en el ecosistema Back-End (PHP/Laravel, Node.js, NestJS), con capacidad sólida para liderar el ciclo completo de desarrollo, desde la arquitectura de base de datos hasta el front-end moderno con React, Vue y TypeScript. Enfocado en automatización de procesos, integración de APIs de terceros y arquitecturas limpias orientadas al negocio.",
    about_badge_degree: "🎓 Ingeniero en Informática · UPT Aragua, 2015",
    about_badge_languages: "🌐 Español Nativo · Inglés Profesional",
    about_btn_explore: "Explorar proyectos →",
    about_ring1_title: "Años de Trayectoria",
    about_ring1_desc: "Diseñando y escalando sistemas web para empresas en LATAM, USA y Europa.",
    about_ring2_title: "Proyectos de Alto Impacto",
    about_ring2_desc: "Desde SaaS de pagos P2P y marketplaces hasta logística internacional y GovTech.",
    about_ring3_title: "Tecnologías Dominadas",
    about_ring3_desc: "Laravel, NestJS, React, Vue, Angular, PostgreSQL, MySQL, Redis, Docker y más.",
    exp_pill: "Experiencia Comprobada",
    exp_title_1: "Construyendo productos con impacto, esfuerzo y un toque de ",
    exp_title_highlight: "código limpio",
    exp_link_talk: "Hablemos de tu proyecto →",
    filter_all: "Todos",
    filter_backend: "Backend & APIs",
    filter_fullstack: "Full-Stack",
    filter_ecommerce: "E-commerce & Fintech",
    filter_mobile: "Mobile & GovTech",
    proj_type_label: "Tipo de proyecto",
    proj_btn_details: "Ver detalles y arquitectura",
    proj_btn_visit: "Visitar sitio ↗",
    skills_pill: "Stack Técnico",
    skills_title: "Tecnologías & Herramientas",
    skills_link: "Hablemos sobre tu stack →",
    skills_cat_backend: "Backend & Arquitectura",
    skills_cat_frontend: "Frontend Moderno",
    skills_cat_databases: "Bases de Datos & Storage",
    skills_cat_devops: "DevOps & Entorno de Trabajo",
    foot_title: "¿Listo para construir con propósito?",
    foot_desc: "Si buscas un desarrollador que escuche las necesidades reales de tu negocio, diseñe arquitecturas escalables y construya soluciones confiables, iniciemos la conversación.",
    foot_btn_email: "Enviar email directo",
    foot_btn_copy: "Copiar correo",
    foot_nav_title: "Navegación",
    foot_nav_home: "Inicio",
    foot_location: "Estado Aragua, Venezuela (Disponible Remoto Mundial)",
    foot_copyright: "Todos los derechos reservados · Diseñado e implementado con código limpio por Adrián Pérez.",
    modal_default_title: "Detalle del Proyecto",
    modal_achievements_title: "Puntos clave & Logros técnicos",
    modal_btn_close: "Cerrar",
    modal_btn_visit: "Visitar sitio web ↗",
    modal_btn_inquire: "Consultar sobre este proyecto",
    toast_copied: "¡Correo copiado!",
    toast_email_label: "Email copiado:",
  },
  en: {
    meta_title: "Adrián José Pérez Figueredo | Full-Stack & Backend Developer",
    meta_desc: "Full-Stack Developer with over 10 years of experience. Specialist in PHP/Laravel, Node.js, NestJS, React, Vue, Angular, PostgreSQL, and MySQL. Aragua, Venezuela.",
    nav_about: "About me",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_contact: "Contact",
    nav_talk: "Let's talk",
    nav_cv: "⬇ Download CV",
    lang_btn_text: "ES",
    lang_btn_title: "Switch language to Spanish (Español)",
    theme_light_title: "Light mode",
    theme_dark_title: "Dark mode",
    hero_available: "Available for new projects",
    hero_role_pill: "Full-Stack · Backend Developer",
    hero_title_1: "Building ",
    hero_title_highlight1: "robust architectures",
    hero_title_2: ", automated workflows with ",
    hero_title_highlight2: "AI",
    hero_title_3: " and ",
    hero_title_highlight3: "scalable technology solutions.",
    hero_pill_backend: "⚙️ Back-End Development",
    hero_pill_apis: "🔌 APIs & Microservices",
    hero_pill_ai: "🤖 AI-Driven Automations",
    hero_pill_fullstack: "🎨 Full-Stack Experience",
    hero_pill_scalable: "🚀 Scalable Architecture",
    hero_sub: "Over 10 years of experience designing and scaling high-availability web systems with PHP/Laravel, Node.js, and NestJS, capable of processing large volumes of data with PostgreSQL, MySQL, Redis, and MongoDB.",
    hero_cta_talk: "💬 Let's talk",
    hero_cta_cv: "⬇ Download CV",
    hero_cta_exp: "💼 View Experience",
    about_title: "I'm Adrián Pérez.",
    about_role: "Full-Stack & Backend Developer",
    about_desc: "Full-Stack Developer with over a decade of experience designing and scaling web systems. Specialist in the Back-End ecosystem (PHP/Laravel, Node.js, NestJS), with a strong ability to lead the entire development lifecycle, from database architecture to modern front-ends with React, Vue, and TypeScript. Focused on process automation, third-party API integrations, and clean business-driven architectures.",
    about_badge_degree: "🎓 B.S. in Computer Engineering · UPT Aragua, 2015",
    about_badge_languages: "🌐 Native Spanish · Professional English",
    about_btn_explore: "Explore projects →",
    about_ring1_title: "Years of Experience",
    about_ring1_desc: "Designing and scaling web systems for companies across LATAM, the US, and Europe.",
    about_ring2_title: "High-Impact Projects",
    about_ring2_desc: "From P2P payment SaaS and marketplaces to international logistics and GovTech.",
    about_ring3_title: "Mastered Technologies",
    about_ring3_desc: "Laravel, NestJS, React, Vue, Angular, PostgreSQL, MySQL, Redis, Docker, and more.",
    exp_pill: "Proven Experience",
    exp_title_1: "Building products with impact, dedication, and a touch of ",
    exp_title_highlight: "clean code",
    exp_link_talk: "Let's discuss your project →",
    filter_all: "All",
    filter_backend: "Backend & APIs",
    filter_fullstack: "Full-Stack",
    filter_ecommerce: "E-commerce & Fintech",
    filter_mobile: "Mobile & GovTech",
    proj_type_label: "Project type",
    proj_btn_details: "View details & architecture",
    proj_btn_visit: "Visit website ↗",
    skills_pill: "Tech Stack",
    skills_title: "Technologies & Tools",
    skills_link: "Let's discuss your stack →",
    skills_cat_backend: "Backend & Architecture",
    skills_cat_frontend: "Modern Frontend",
    skills_cat_databases: "Databases & Storage",
    skills_cat_devops: "DevOps & Work Environment",
    foot_title: "Ready to build with purpose?",
    foot_desc: "If you're looking for a developer who listens to real business needs, architects scalable systems, and delivers dependable solutions, let's start the conversation.",
    foot_btn_email: "Send direct email",
    foot_btn_copy: "Copy email",
    foot_nav_title: "Navigation",
    foot_nav_home: "Home",
    foot_location: "Aragua, Venezuela (Available for Worldwide Remote)",
    foot_copyright: "All rights reserved · Designed and crafted with clean code by Adrián Pérez.",
    modal_default_title: "Project Details",
    modal_achievements_title: "Key Points & Technical Achievements",
    modal_btn_close: "Close",
    modal_btn_visit: "Visit website ↗",
    modal_btn_inquire: "Inquire about this project",
    toast_copied: "Email copied to clipboard!",
    toast_email_label: "Email:",
  },
};

