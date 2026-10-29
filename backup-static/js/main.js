/**
 * Portfolio Interactive Scripts
 * Adrián José Pérez Figueredo - Full-Stack & Backend Developer
 */

let currentLang = 'es';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTheme();
  initScrollProgress();
  initScrollReveal();
  initProgressRings();
  initMobileNav();
  initActiveNav();
  initProjectFilters();
  initProjectModal();
  initClipboardAndToast();
  initDynamicYear();
});

/* ==========================================================================
   0. INTERNATIONALIZATION (i18n)
   ========================================================================== */
function initLanguage() {
  const savedLang = localStorage.getItem('portfolio_lang');
  // Default is 'es' (Spanish)
  currentLang = savedLang === 'en' ? 'en' : 'es';

  applyLanguage(currentLang);

  const langToggles = document.querySelectorAll('.lang-toggle-btn');
  langToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      localStorage.setItem('portfolio_lang', currentLang);
      applyLanguage(currentLang);
    });
  });
}

function applyLanguage(lang) {
  const translations = window.PORTFOLIO_TRANSLATIONS && window.PORTFOLIO_TRANSLATIONS[lang];
  if (!translations) return;

  document.documentElement.lang = lang;

  // Text content replacements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] !== undefined) {
      el.textContent = translations[key];
    }
  });

  // HTML content replacements
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[key] !== undefined) {
      el.innerHTML = translations[key];
    }
  });

  // Title attribute replacements
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (translations[key] !== undefined) {
      el.setAttribute('title', translations[key]);
    }
  });

  // Aria-label replacements
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (translations[key] !== undefined) {
      el.setAttribute('aria-label', translations[key]);
    }
  });

  // Document Title & Meta Description
  if (translations.meta_title) {
    document.title = translations.meta_title;
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations.meta_desc) {
    metaDesc.setAttribute('content', translations.meta_desc);
  }

  // Language switcher buttons state
  const langToggles = document.querySelectorAll('.lang-toggle-btn');
  langToggles.forEach(btn => {
    const textSpan = btn.querySelector('.lang-text');
    if (textSpan) {
      textSpan.textContent = translations.lang_btn_text;
    }
    btn.setAttribute('title', translations.lang_btn_title);
    btn.setAttribute('aria-label', translations.lang_btn_title);
  });

  // Update theme toggle title according to active language
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const label = isDark ? translations.theme_light_title : translations.theme_dark_title;
    if (label) {
      themeBtn.setAttribute('title', label);
      themeBtn.setAttribute('aria-label', label);
    }
  }
}

/* ==========================================================================
   1. THEME SWITCHER (Dark / Light mode)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  setTheme(currentTheme);

  toggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(activeTheme);
    localStorage.setItem('theme', activeTheme);
  });

  // Listen to OS system theme changes if no manual override was set
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function setTheme(theme) {
  const toggleBtn = document.getElementById('theme-toggle');
  const translations = (window.PORTFOLIO_TRANSLATIONS && window.PORTFOLIO_TRANSLATIONS[currentLang]) || {};

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (toggleBtn) {
      toggleBtn.innerHTML = '☀️';
      const label = translations.theme_light_title || 'Modo claro';
      toggleBtn.setAttribute('aria-label', label);
      toggleBtn.setAttribute('title', label);
    }
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (toggleBtn) {
      toggleBtn.innerHTML = '🌙';
      const label = translations.theme_dark_title || 'Modo oscuro';
      toggleBtn.setAttribute('aria-label', label);
      toggleBtn.setAttribute('title', label);
    }
  }
}

/* ==========================================================================
   2. READING SCROLL PROGRESS
   ========================================================================== */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollTotal <= 0) return;
    const progress = (window.scrollY / scrollTotal) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

/* ==========================================================================
   3. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   4. ANIMATED PROGRESS RINGS
   ========================================================================== */
function initProgressRings() {
  const rings = document.querySelectorAll('.ring');
  if (!rings.length) return;

  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  rings.forEach(ring => {
    const bar = ring.querySelector('.bar');
    const pct = parseFloat(ring.dataset.pct) || 0;
    if (!bar) return;

    bar.style.strokeDasharray = `${circumference}`;
    bar.style.strokeDashoffset = `${circumference}`;

    const ringObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bar.style.strokeDashoffset = `${circumference * (1 - pct / 100)}`;
          obs.disconnect();
        }
      });
    }, { threshold: 0.35 });

    ringObserver.observe(ring);
  });
}

/* ==========================================================================
   5. MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (menu.classList.contains('open') && !menu.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  function openMenu() {
    menu.classList.add('open');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menu.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  }
}

/* ==========================================================================
   6. ACTIVE NAV SCROLLSPY
   ========================================================================== */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   7. PROJECT CATEGORY FILTERS
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.proj');

  if (!filterBtns.length || !projects.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projects.forEach(proj => {
        const category = proj.dataset.category || '';
        const categories = category.split(' ');

        if (filter === 'all' || categories.includes(filter)) {
          proj.classList.remove('hidden');
          proj.classList.add('visible');
        } else {
          proj.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   8. PROJECT MODAL DIALOG
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  const modalTitle = modal.querySelector('#modal-title');
  const modalSubtitle = modal.querySelector('#modal-subtitle');
  const modalContent = modal.querySelector('#modal-body-content');
  const modalActionBtn = modal.querySelector('#modal-action-btn');

  // Open modal from project cards
  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.proj');
      if (!card) return;

      const translations = (window.PORTFOLIO_TRANSLATIONS && window.PORTFOLIO_TRANSLATIONS[currentLang]) || {};

      const title = card.querySelector('h3')?.innerText || translations.modal_default_title || 'Detalle del proyecto';
      const type = card.querySelector('.proj-type')?.innerText || '';
      const date = card.querySelector('.proj-date')?.innerText || '';
      const summary = card.querySelector('.proj-desc')?.innerHTML || '';
      const detailsList = card.querySelector('.proj-detail ul')?.innerHTML || '';
      const stack = card.querySelector('.proj-stack')?.innerHTML || '';
      const externalLink = card.dataset.liveUrl || '';

      const achievementsLabel = translations.modal_achievements_title || 'Puntos clave & Logros técnicos';

      if (modalTitle) modalTitle.innerText = title;
      if (modalSubtitle) modalSubtitle.innerText = `${type}${date ? ' · ' + date : ''}`;

      if (modalContent) {
        modalContent.innerHTML = `
          <div style="margin-bottom: 18px;">${summary}</div>
          <h4 class="modal-section-title">${achievementsLabel}</h4>
          <ul style="padding-left: 0;">${detailsList}</ul>
          <div style="margin-top: 20px; padding: 16px; background: var(--bg-subtle); border-radius: 12px; border: 1px solid var(--border);">
            ${stack}
          </div>
        `;
      }

      if (modalActionBtn) {
        if (externalLink) {
          modalActionBtn.style.display = 'inline-flex';
          modalActionBtn.href = externalLink;
          modalActionBtn.innerText = translations.modal_btn_visit || 'Visitar sitio web ↗';
        } else {
          modalActionBtn.style.display = 'inline-flex';
          modalActionBtn.href = '#contacto';
          modalActionBtn.innerText = translations.modal_btn_inquire || 'Consultar sobre este proyecto';
          modalActionBtn.onclick = () => modal.close();
        }
      }

      modal.showModal();
    });
  });

  // Close modal button
  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.close());
  }

  // Close modal when clicking backdrop
  modal.addEventListener('click', (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  });
}

/* ==========================================================================
   9. CLIPBOARD & TOAST NOTIFICATION
   ========================================================================== */
function initClipboardAndToast() {
  const toast = document.getElementById('toast');
  const copyBtns = document.querySelectorAll('.copy-email-btn');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.dataset.email || 'adrianperez1223@gmail.com';
      const translations = (window.PORTFOLIO_TRANSLATIONS && window.PORTFOLIO_TRANSLATIONS[currentLang]) || {};

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`${translations.toast_copied || '¡Correo copiado!'} (${email})`);
        }).catch(() => {
          fallbackCopyText(email, translations);
        });
      } else {
        fallbackCopyText(email, translations);
      }
    });
  });

  function fallbackCopyText(text, translations) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(`${translations.toast_copied || '¡Correo copiado!'} (${text})`);
    } catch (err) {
      showToast(`${translations.toast_email_label || 'Email:'} ${text}`);
    }
    document.body.removeChild(textArea);
  }

  function showToast(message) {
    if (!toast) return;
    toast.querySelector('.toast-msg').innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}

/* ==========================================================================
   10. DYNAMIC YEAR
   ========================================================================== */
function initDynamicYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.innerText = new Date().getFullYear();
  }
}
