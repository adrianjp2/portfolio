export interface ProjectItem {
  id: string;
  categories: ('backend' | 'fullstack' | 'ecommerce' | 'mobile')[];
  company: string;
  title: {
    es: string;
    en: string;
  };
  type: {
    es: string;
    en: string;
  };
  cardDescription?: {
    es: string;
    en: string;
  };
  modalDescription?: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  points: {
    es: string[];
    en: string[];
  };
  stack: string;
  liveUrl?: string;
  btnLabel?: {
    es: string;
    en: string;
  };
}

export const projects: ProjectItem[] = [
  {
    id: 'p1',
    categories: ['backend', 'fullstack'],
    company: 'THEEGG BITS & BYTES LLC · MailAmericas (MLA)',
    title: {
      es: 'Plataforma de Tracking & Fulfillment Logístico',
      en: 'Logistics Tracking & Fulfillment Platform',
    },
    type: {
      es: 'Cross-border e-commerce · MailAmericas (MLA)',
      en: 'Cross-border e-commerce · MailAmericas (MLA)',
    },
    description: {
      es: 'El motor que mueve ~100.000 paquetes entre África y Latinoamérica. Plataforma backend de alto rendimiento que sigue cada paquete de punta a punta: clasificación, aduanas, aranceles, zonas de distribución y rastreo en tiempo real, todo orquestado en un solo sistema.',
      en: 'The engine moving ~100,000 packages between Africa and Latin America. High-performance backend platform tracking every parcel end-to-end: sorting, customs clearance, tariffs, distribution zones, and real-time tracking, all orchestrated in a single system.',
    },
    points: {
      es: [
        '🌍 Escala real: ~100.000 paquetes en movimiento, operación multi-región integrada con los marketplaces y couriers más grandes del mundo.',
        '📡 Motor de eventos de tracking: diseño del procesamiento que mantiene sincronizado el estado de cada paquete en tiempo real con sistemas externos.',
        '🔌 Integraciones masivas: AliExpress y Cainiao para la ingesta y sincronización de datos de envíos a gran escala.',
        '🧩 Módulos de dominio logístico: zonas de distribución, sorting y servicios de paquetes con procesamiento asíncrono.',
        '⚡ Resiliencia operativa: miles de operaciones concurrentes con Redis/Horizon, reintentos automáticos y tolerancia a fallos.',
      ],
      en: [
        '🌍 Real scale: ~100,000 active packages, multi-region operation integrated with the world’s largest marketplaces and couriers.',
        '📡 Tracking event engine: real-time processing architecture that keeps shipment states synchronized across external systems.',
        '🔌 Massive integrations: AliExpress and Cainiao for large-scale shipment data ingestion and synchronization.',
        '🧩 Logistics domain modules: distribution zones, sorting hubs, and parcel services powered by asynchronous processing.',
        '⚡ Operational resilience: thousands of concurrent operations handled via Redis/Horizon, automatic retries, and fault tolerance.',
      ],
    },
    stack: 'PHP 8.1, Laravel 9, Redis, Laravel Horizon, MySQL, GraphQL, REST, SOAP, AWS S3, Docker, Datadog.',
    btnLabel: {
      es: 'Ver detalles y arquitectura',
      en: 'View details & architecture',
    },
  },
  {
    id: 'p2',
    categories: ['backend', 'fullstack'],
    company: 'THEEGG BITS & BYTES LLC · MailAmericas (MLA)',
    title: {
      es: 'Sorting — Clasificación logística inteligente',
      en: 'Sorting — Intelligent Logistics Classification',
    },
    type: {
      es: 'Logística / SaaS multiempresa',
      en: 'Logistics / Multi-tenant SaaS',
    },
    description: {
      es: 'Plataforma que automatiza la clasificación de paquetes en centros de distribución de punta a punta: cada orden se evalúa contra reglas de negocio dinámicas y configurables, enrutando al destino y proveedor correctos en tiempo real, sin intervención manual.',
      en: 'Platform that automates parcel sorting across distribution centers end-to-end: each order is evaluated against dynamic, configurable business rules, routing to the correct destination and carrier in real time without manual intervention.',
    },
    points: {
      es: [
        '⚡ Procesamiento asíncrono: sostiene grandes volúmenes de órdenes con baja latencia y sin degradar la experiencia de usuario.',
        '🧩 Motor de reglas configurable: enrutamiento por código postal, tipo de servicio, peso y dimensiones.',
        '🏗️ Arquitectura limpia: Domain-Driven Design (DDD) con NestJS y PostgreSQL, altamente modular y mantenible.',
        '🚀 CI/CD automatizado: entrega continua con Docker y versionado semántico estricto.',
      ],
      en: [
        '⚡ Asynchronous processing: sustains high order throughput with low latency without degrading user experience.',
        '🧩 Configurable rule engine: intelligent routing by postal code, service type, weight, and dimensions.',
        '🏗️ Clean architecture: Domain-Driven Design (DDD) with NestJS and PostgreSQL, highly modular and maintainable.',
        '🚀 Automated CI/CD: continuous delivery with Docker and strict semantic versioning.',
      ],
    },
    stack: 'React, TypeScript, NestJS, PostgreSQL, Redis, Docker.',
    btnLabel: {
      es: 'Ver detalles y arquitectura',
      en: 'View details & architecture',
    },
  },
  {
    id: 'akt-motos',
    categories: ['fullstack', 'backend', 'ecommerce'],
    company: 'ToGet C.A. · AKT Motos La Principal',
    title: {
      es: 'AKT Motos La Principal — Plataforma Web Full-Stack & CMS Comercial',
      en: 'AKT Motos La Principal — Full-Stack Web Platform & Commercial CMS',
    },
    type: {
      es: 'E-commerce / CMS Comercial · Retail Automotriz',
      en: 'E-commerce / Commercial CMS · Automotive Retail',
    },
    cardDescription: {
      es: 'Plataforma web corporativa de alto rendimiento y sistema CMS a medida para concesionario de motocicletas. Incluye catálogo interactivo multi-imagen, enrutamiento directo de leads a asesores comerciales vía WhatsApp, localizador de sucursales y un panel administrativo seguro con autenticación JWT y procesamiento multimedia.',
      en: 'High-performance corporate web platform and custom CMS for a motorcycle dealership. Features an interactive multi-image catalog, direct lead routing to sales advisors via WhatsApp, branch locator, and a secure admin panel with JWT authentication and multimedia processing.',
    },
    modalDescription: {
      es: 'Plataforma web comercial y panel administrativo (CMS) desarrollado para centralizar la presencia digital y optimizar la captación de clientes de AKT Motos La Principal. El sistema resuelve la necesidad de mantener un catálogo dinámico y actualizado sin depender de desarrolladores, conectando a los usuarios directamente con asesores de venta en tiempo real.',
      en: 'Commercial web platform and administrative CMS developed to centralize digital presence and streamline customer acquisition for AKT Motos La Principal. The system eliminates developer dependency for maintaining a dynamic, up-to-date catalog, directly connecting potential buyers with sales advisors in real time.',
    },
    description: {
      es: 'Plataforma web corporativa de alto rendimiento y sistema CMS a medida para concesionario de motocicletas. Incluye catálogo interactivo multi-imagen, enrutamiento directo de leads a asesores comerciales vía WhatsApp, localizador de sucursales y un panel administrativo seguro con autenticación JWT y procesamiento multimedia.',
      en: 'High-performance corporate web platform and custom CMS for a motorcycle dealership. Features an interactive multi-image catalog, direct lead routing to sales advisors via WhatsApp, branch locator, and a secure admin panel with JWT authentication and multimedia processing.',
    },
    points: {
      es: [
        '🏍️ Catálogo Interactivo con Galería Multi-imagen: Filtrado dinámico por categorías, especificaciones técnicas detalladas y cotización directa por WhatsApp con mensajes preconfigurados por modelo.',
        '📍 Red de Asesores y Sucursales: Directorio geolocalizado con integración a Google Maps y asignación directa de leads comerciales 1-to-1.',
        '🔐 Panel Administrativo (CMS Propio): Dashboard privado con autenticación segura (JWT + bcrypt), gestión integral (CRUD) de motocicletas, sucursales, asesores y categorías.',
        '🖼️ Gestión Multimedia Avanzada: Módulo de subida de imágenes con recorte interactivo en el cliente y almacenamiento optimizado.',
        '⚡ SEO & Rendimiento: Optimización técnica completa con SSR en Next.js 15, metadatos dinámicos, sitemap.ts y tiempos de carga instantáneos.',
      ],
      en: [
        '🏍️ Interactive Catalog with Multi-image Gallery: Dynamic category filtering, detailed technical specifications, and direct WhatsApp quote requests with pre-configured messages per model.',
        '📍 Sales Advisor & Branch Network: Geolocation-enabled directory integrated with Google Maps and direct 1-to-1 lead routing.',
        '🔐 Custom Admin Panel (CMS): Private dashboard with robust authentication (JWT + bcrypt), full CRUD management for motorcycles, branches, advisors, and categories.',
        '🖼️ Advanced Multimedia Handling: Image upload pipeline with interactive client-side cropping and optimized storage.',
        '⚡ SEO & Performance: Comprehensive technical optimization with Next.js 15 SSR, dynamic metadata, sitemap.ts, and instant page loads.',
      ],
    },
    stack: 'Next.js 15, React 19, NestJS, TypeScript, TypeORM, MariaDB, Docker, Tailwind CSS.',
    liveUrl: 'https://motoslaprincipal.co/',
    btnLabel: {
      es: 'Ver detalles y arquitectura',
      en: 'View details & architecture',
    },
  },
  {
    id: 'p3',
    categories: ['ecommerce', 'fullstack'],
    company: 'ToGet C.A.',
    title: {
      es: 'ToGet — Marketplace',
      en: 'ToGet — Marketplace',
    },
    type: {
      es: 'E-commerce / Marketplace · Retail tech',
      en: 'E-commerce / Marketplace · Retail tech',
    },
    description: {
      es: 'E-commerce de tecnología con tienda física en el C.C. Hyper Jumbo (Maracay) y delivery express a toda Venezuela: productos 100% originales, financiamiento con Cashea y checkout asistido por WhatsApp.',
      en: 'Consumer tech e-commerce with a physical flagship store in C.C. Hyper Jumbo (Maracay) and nationwide express delivery across Venezuela: 100% genuine products, Cashea installment financing, and WhatsApp-assisted checkout.',
    },
    points: {
      es: [
        '🛒 Marketplace completo: catálogo reactivo, carrito de compras, cotizaciones y gestión automatizada de pedidos.',
        '💳 Calculadora Cashea en vivo: cálculo instantáneo (inicial 40% + 3 cuotas) con cronograma exacto de pagos.',
        '📲 Checkout asistido: flujo interactivo vía WhatsApp para confirmación de stock y cierre directo de venta.',
        '🚚 Logística nacional: delivery express local y envíos nacionales con tasa de cambio BCV sincronizada en vivo.',
      ],
      en: [
        '🛒 Full-featured marketplace: reactive catalog, shopping cart, price quotations, and automated order processing.',
        '💳 Live Cashea calculator: instant calculation (40% down payment + 3 installments) with exact payment schedules.',
        '📲 Assisted checkout: interactive WhatsApp flow for real-time stock confirmation and direct deal closing.',
        '🚚 National logistics: express local delivery and nationwide shipping with live-synchronized official BCV exchange rate.',
      ],
    },
    stack: 'React 19, TypeScript, TanStack Start & Router, TanStack Query, Tailwind CSS v4, Radix UI, React Hook Form, Zod, Supabase, Cloudflare.',
    liveUrl: 'https://togetmcy.com/',
    btnLabel: {
      es: 'Ver detalles',
      en: 'View details',
    },
  },
  {
    id: 'p4',
    categories: ['ecommerce', 'backend'],
    company: 'Rock7Media',
    title: {
      es: 'GivBux',
      en: 'GivBux',
    },
    type: {
      es: 'Fintech / Pagos móviles P2P',
      en: 'Fintech / P2P Mobile Payments',
    },
    description: {
      es: 'Pagos móviles "peer to peer" sin efectivo con puntos de lealtad, recompensas y descuentos. App publicada en Google Play respaldada por APIs seguras para aplicaciones móviles y clientes web.',
      en: 'Cashless peer-to-peer mobile payments with loyalty points, merchant rewards, and discounts. Google Play-published mobile app backed by secure APIs for mobile and web clients.',
    },
    points: {
      es: [
        '💳 Pasarelas financieras: integración de métodos de pago bancario y transaccional con Dwolla y PayPal.',
        '⚡ Arquitectura de Microservicios: servicios PHP con Laravel 5 y micro-framework Lumen 5.6 de alta velocidad.',
        '📱 Soporte Multiplataforma: API REST consumida simultáneamente por apps móviles en iOS/Android y web.',
        '💻 Panel Front-End: interfaces administrativas reactivas construidas con Vue.js y Webpack.',
      ],
      en: [
        '💳 Financial gateways: transactional and bank payment integrations with Dwolla and PayPal.',
        '⚡ Microservices architecture: high-performance PHP services built with Laravel 5 and Lumen 5.6 micro-framework.',
        '📱 Multi-platform support: unified REST API consumed simultaneously by iOS/Android apps and web clients.',
        '💻 Front-End dashboard: reactive administrative interfaces developed with Vue.js and Webpack.',
      ],
    },
    stack: 'Laravel 5, Lumen 5.6, Vue.js, PHP, Dwolla, PayPal, MySQL, JSON, Webpack.',
    btnLabel: {
      es: 'Ver detalles técnicos',
      en: 'View technical details',
    },
  },
  {
    id: 'p5',
    categories: ['backend', 'fullstack'],
    company: 'Rock7Media',
    title: {
      es: 'Eutopia Life',
      en: 'Eutopia Life',
    },
    type: {
      es: 'SaaS / Plataforma web + CRM',
      en: 'SaaS / Web Platform + CRM',
    },
    description: {
      es: 'Plataforma web empresarial con pasarela de pagos y CRM para la gestión integral del negocio: portal público de información, portal de cobros y CRM interno a medida.',
      en: 'Enterprise web platform with payment gateway and tailored CRM for end-to-end business operations: public informational portal, billing portal, and internal custom CRM.',
    },
    points: {
      es: [
        '🌐 Ecosistema unificado: sitio público institucional, pasarela transaccional y CRM operativo.',
        '💼 CRM a medida: gestión de cartera de clientes, estados de cuenta, facturación y reportes analíticos.',
        '🎨 Front-end modular: maquetación responsiva con Vue.js, Element UI, Bootstrap y SASS.',
        '⚙️ Infraestructura: configuración y optimización de servidores Apache, MySQL y entornos de producción.',
      ],
      en: [
        '🌐 Unified ecosystem: public institutional website, transactional checkout, and operational CRM.',
        '💼 Custom CRM: customer portfolio management, financial statements, invoicing, and analytical reporting.',
        '🎨 Modular front-end: responsive layout crafted with Vue.js, Element UI, Bootstrap, and SASS.',
        '⚙️ Infrastructure: server configuration and tuning for Apache, MySQL, and production environments.',
      ],
    },
    stack: 'Laravel 5, Vue.js, Element UI, Bootstrap, SASS, MySQL, Apache, cPanel.',
    btnLabel: {
      es: 'Ver detalles del ecosistema',
      en: 'View ecosystem details',
    },
  },
  {
    id: 'p6',
    categories: ['mobile', 'fullstack'],
    company: 'Lyncros',
    title: {
      es: 'Salix Fruits',
      en: 'Salix Fruits',
    },
    type: {
      es: 'Marketplace / App móvil + Web',
      en: 'Marketplace / Mobile App + Web',
    },
    description: {
      es: 'App y plataforma de marketplace para el mercado internacional de frutas, con aplicación móvil híbrida para distribuidores y panel web de administración global.',
      en: 'Marketplace platform and app for the international fresh fruit industry, featuring a hybrid mobile app for distributors and a global web administration dashboard.',
    },
    points: {
      es: [
        '📱 Desarrollo móvil híbrido: app publicada en Google Play utilizando Ionic Framework.',
        '🖥️ Panel Web Angular: front-end robusto desarrollado con Angular 5/6/7, Angular Material y SASS.',
        '🔌 Backend RESTful: arquitectura de APIs en Laravel 5 para sincronización de catálogos y órdenes en tiempo real.',
      ],
      en: [
        '📱 Hybrid mobile development: app published on Google Play built using Ionic Framework.',
        '🖥️ Angular web panel: robust front-end engineered with Angular 5/6/7, Angular Material, and SASS.',
        '🔌 RESTful backend: API architecture in Laravel 5 for real-time catalog and order synchronization.',
      ],
    },
    stack: 'Ionic, Angular 5/6/7, Laravel 5, PHP, Angular Material, MySQL.',
    btnLabel: {
      es: 'Ver detalles de la app',
      en: 'View app details',
    },
  },
  {
    id: 'p7',
    categories: ['fullstack'],
    company: 'Rock7Media',
    title: {
      es: 'Astrology Hive',
      en: 'Astrology Hive',
    },
    type: {
      es: 'Web App / Full-Stack',
      en: 'Web App / Full-Stack',
    },
    description: {
      es: 'Plataforma web de astrología con desarrollo Full-Stack completo: cálculo de cartas natales, integraciones cartográficas y front-end interactivo responsivo.',
      en: 'Astrology web platform with full-cycle Full-Stack development: natal chart calculations, mapping integrations, and interactive responsive front-end.',
    },
    points: {
      es: [
        '🗺️ Integración geográfica: geocodificación y cálculo de coordenadas con Google Maps API.',
        '⚙️ Mantenimiento evolutivo: optimización continua de rendimiento y nuevas características en backend Laravel.',
        '🖥️ Experiencia de usuario: interfaces reactivas en Vue.js diseñadas para visualización clara de datos.',
      ],
      en: [
        '🗺️ Geographic integration: geocoding and coordinate calculations using Google Maps API.',
        '⚙️ Continuous evolution: proactive performance optimization and feature releases on Laravel backend.',
        '🖥️ User experience: reactive Vue.js interfaces engineered for clear data visualization.',
      ],
    },
    stack: 'Laravel 5, Vue.js, PHP, MySQL, Google Maps API, JSON.',
    btnLabel: {
      es: 'Ver detalles del proyecto',
      en: 'View project details',
    },
  },
];

