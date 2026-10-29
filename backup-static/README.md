# Portafolio Profesional — Adrián José Pérez Figueredo
> Full-Stack & Backend Developer (+10 años de experiencia)

Portafolio web moderno, ultraligero y accesible construido con HTML5 semántico, CSS3 moderno con variables y soporte Dark/Light Mode, y JavaScript vainilla modular sin dependencias externas pesadas.

---

## 🚀 Características Implementadas

1. **Arquitectura y Estructura Limpia**:
   - Separación de responsabilidades: `index.html`, `css/styles.css` y `js/main.js`.
   - Cero dependencias externas pesadas (carga instantánea y rendimiento óptimo en Core Web Vitals).

2. **Correcciones Críticas del HTML Original**:
   - ⚠️ **Eliminado `<base target="_blank">`**: El original rompía todos los enlaces ancla internos (`#sobre-mi`, `#experiencia`, `#habilidades`, `#contacto`) forzando apertura en pestañas nuevas. Ahora los enlaces navegan suavemente por la misma página con `scroll-behavior: smooth`.
   - Enlaces externos asegurados con `target="_blank" rel="noopener noreferrer"`.

3. **Modo Claro / Oscuro (Dark & Light Mode)**:
   - Detección automática según preferencias del sistema operativo (`prefers-color-scheme`).
   - Botón toggle interactivo con icono animado (🌙 / ☀️) y persistencia en `localStorage`.

4. **Navegación Móvil y Desktop Mejorada**:
   - Menú hamburguesa animado y accesible (`aria-expanded`, `aria-controls`) para dispositivos móviles.
   - **Scrollspy / Navegación activa**: Destaca automáticamente el enlace de la sección visible conforme haces scroll.
   - Barra de progreso de lectura interactiva en el borde superior de la pantalla.

5. **Filtros Interactivos de Proyectos**:
   - Filtra la lista de proyectos en tiempo real: *Todos*, *Backend & APIs*, *Full-Stack*, *E-commerce & Fintech*, *Mobile & GovTech*.
   - Transiciones suaves y recuento por categoría.

6. **Modal Nativo `<dialog>` para Detalles de Proyectos**:
   - Al pulsar "Ver detalles" en cualquier proyecto, se abre un modal accesible y elegante con el caso de estudio, retos técnicos, arquitectura y stack.
   - Se cierra con `Esc`, botón de cierre o haciendo clic fuera del modal.

7. **Interacciones de Contacto Rápidas**:
   - Botón **"Copiar correo"** con feedback inmediato mediante notificación Toast flotante.
   - Enlace directo a WhatsApp con mensaje profesional predefinido.
   - Enlace directo a email (`mailto:`) y perfil de LinkedIn.

8. **SEO y Metadatos**:
   - Metadatos completos Open Graph y Twitter Cards.
   - Favicon SVG personalizado con iniciales y gradiente.
   - Año de copyright dinámico mediante JavaScript.

---

## 📂 Estructura de Archivos

```text
portfolio/
├── index.html              # Estructura principal optimizada
├── css/
│   └── styles.css          # Estilos modernos, temas, grid y animaciones
├── js/
│   └── main.js             # Lógica interactiva modular (temas, modal, filtros, toast)
├── assets/
│   ├── favicon.svg         # Favicon vectorial con gradiente 'AP'
│   └── CV_Adrian_Perez.pdf # Coloca aquí tu currículum en PDF
└── README.md               # Documentación del proyecto
```

---

## 🛠️ Cómo Probar Localmente

Puedes abrir directamente el archivo `index.html` en cualquier navegador, o iniciar un servidor local rápido con:

```bash
# Con Python
python3 -m http.server 8080

# O con Node.js
npx serve .
```

Luego abre tu navegador en `http://localhost:8080`.

---

## 📝 Personalizaciones Pendientes

- **Currículum PDF**: Guarda tu archivo PDF en `assets/CV_Adrian_Perez.pdf` para que los botones de descarga funcionen de inmediato.
- **WhatsApp y Teléfono**: Si deseas cambiar el número de teléfono preconfigurado (`+58 412-8913959`), actualízalo en el footer de `index.html` y en el enlace `wa.me`.
- **Email**: Si deseas usar otro correo en lugar de `adrianperez1223@gmail.com`, cámbialo en los atributos `data-email` y `mailto:` en `index.html`.
