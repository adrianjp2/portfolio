# Portafolio Profesional — Adrián José Pérez Figueredo
> Full-Stack & Backend Developer (+10 años de experiencia)

Portafolio web de alto rendimiento optimizado para **SEO (Search Engine Optimization)** y **Core Web Vitals**, construido con **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS** y **Schema.org JSON-LD**.

---

## 🚀 Optimización SEO & Arquitectura Implementada

1. **Pre-renderizado Estático (SSG - Static Site Generation)**:
   - Todo el contenido en Español (`/es`) e Inglés (`/en`) es compilado a HTML estático en tiempo de build.
   - Los rastreadores de Google, Bing, LinkedIn y Twitter reciben el HTML 100% renderizado de inmediato, sin depender de la ejecución de JavaScript en el cliente.

2. **Internacionalización Real (i18n) con URLs Independientes**:
   - `/es`: Versión en español con metadatos y canonical específicos.
   - `/en`: Versión en inglés indexable para reclutadores y clientes internacionales.
   - Etiquetas `<link rel="alternate" hreflang="es" ...>` y `hreflang="en"` automáticas.

3. **Metadatos Nativos & OpenGraph Enriquecido (Next.js Metadata API)**:
   - Títulos y descripciones optimizados por idioma.
   - Open Graph y Twitter Cards completos para previsualizaciones en redes sociales (LinkedIn, WhatsApp, Slack, Twitter/X).
   - Generación de favicons e iconos en formato SVG vectorial.

4. **Datos Estructurados Schema.org (JSON-LD)**:
   - Marcado de nivel profesional tipo `ProfilePage`, `Person` y `WebSite`.
   - Incluye habilidades clave, trayectoria académica (`UPT Aragua`), redes sociales (`sameAs`), cargo y contacto directo para activar **Google Rich Snippets** y paneles de conocimiento.

5. **Sitemap y Robots Dinámicos**:
   - `sitemap.xml`: Generado automáticamente mediante `src/app/sitemap.ts` con frecuencia de actualización y prioridades por ruta.
   - `robots.txt`: Generado automáticamente mediante `src/app/robots.ts` indicando las directivas de rastreo a los motores de búsqueda.

6. **Core Web Vitals & Rendimiento Óptimo**:
   - **`next/font`**: Auto-hospeda las fuentes *Inter* y *Space Grotesk* en formato `.woff2`, eliminando peticiones externas bloqueantes a Google Fonts y garantizando cero Cumulative Layout Shift (CLS).
   - **`next/image`**: Compresión automática en formatos modernos WebP/AVIF y prevención de brincos de maquetación.

---

## 📂 Estructura del Proyecto

```text
portfolio/
├── backup-static/              # Respaldo completo de la versión HTML/CSS/JS previa
├── public/
│   ├── assets/                 # Imágenes, PDF del currículum, etc.
│   └── favicon.svg             # Favicon vectorial
├── src/
│   ├── app/
│   │   ├── [lang]/
│   │   │   └── page.tsx        # Página bilingüe estática (/es y /en)
│   │   ├── globals.css         # Estilos globales y variables de diseño
│   │   ├── layout.tsx          # Root layout con fuentes, tema y metadatos
│   │   ├── page.tsx            # Entrada principal (renderiza /es con canonical)
│   │   ├── robots.ts           # Generador de robots.txt
│   │   └── sitemap.ts          # Generador de sitemap.xml
│   ├── components/
│   │   ├── About.tsx           # Sección sobre mí con anillos de métricas SVG
│   │   ├── Experience.tsx      # Lista de proyectos y filtros interactivos
│   │   ├── Footer.tsx          # Pie de página y opciones de contacto
│   │   ├── Hero.tsx            # Hero principal con avatar e insignias
│   │   ├── JsonLd.tsx          # Marcado de datos estructurados para Google
│   │   ├── Navbar.tsx          # Barra de navegación, scrollspy y toggles
│   │   ├── ProjectModal.tsx    # Modal accesible para detalles de proyectos
│   │   ├── ScrollProgress.tsx  # Barra de progreso superior
│   │   ├── Skills.tsx          # Matriz categorizada de tecnologías
│   │   ├── ThemeToggle.tsx     # Selector de modo claro / oscuro
│   │   └── ToastContext.tsx    # Notificaciones toast flotantes
│   └── data/
│       ├── projects.ts         # Datos estructurados y bilingües de proyectos
│       ├── skills.ts           # Categorías de tecnologías y herramientas
│       └── translations.ts     # Diccionario tipado completo (ES / EN)
├── tailwind.config.ts          # Configuración de colores, fuentes y temas
├── tsconfig.json               # Configuración de TypeScript
└── next.config.mjs             # Configuración de Next.js
```

---

## 🛠️ Comandos de Desarrollo

```bash
# Iniciar servidor de desarrollo local
npm run dev

# Compilar para producción (genera las páginas estáticas SSG)
npm run build

# Probar el servidor de producción localmente
npm run start
```

Luego abre tu navegador en `http://localhost:3000`.

---

## 🌐 Configurar tu Dominio de Producción

En tu archivo `.env.local` (o en las variables de entorno de tu proveedor de hosting como Vercel o Cloudflare):

```env
NEXT_PUBLIC_SITE_URL=https://www.adrianperez.dev
```

Esto actualizará automáticamente los enlaces canónicos, el `sitemap.xml`, `robots.txt` y los metadatos de Open Graph con tu dominio real.
