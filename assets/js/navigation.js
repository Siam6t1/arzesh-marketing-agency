
/* ============================================================
   ARZESH — Navigation interactions
   ============================================================ */

export function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

export function initMobileMenu() {
  document.addEventListener('click', (e) => {
    const burger = e.target.closest('#hamburger');
    if (burger) {
      e.preventDefault();
      const menu = document.getElementById('mobileMenu');
      const isOpen = burger.classList.toggle('open');
      if (menu) menu.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      return;
    }

    // Close mobile menu on outside click
    const menu = document.getElementById('mobileMenu');
    if (!menu || !menu.classList.contains('open')) return;
    if (menu.contains(e.target)) return;
    const burgerEl = document.getElementById('hamburger');
    menu.classList.remove('open');
    if (burgerEl) {
      burgerEl.classList.remove('open');
      burgerEl.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const menu = document.getElementById('mobileMenu');
    const burgerEl = document.getElementById('hamburger');
    if (!menu || !menu.classList.contains('open')) return;
    menu.classList.remove('open');
    if (burgerEl) {
      burgerEl.classList.remove('open');
      burgerEl.setAttribute('aria-expanded', 'false');
      burgerEl.focus();
    }
  });
}

export function setActiveLink() {
  const page = document.body.dataset.page;
  if (!page) return;

  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach((link) => {
    const href = link.getAttribute('href') || '';
    // Strip trailing slash + leading path; match against page key
    const cleaned = href
      .replace(/^(\.\.\/)+/, '')
      .replace(/^(\.\/)+/, '')
      .replace(/\/$/, '');
    const key = cleaned === '' ? 'home' : cleaned.split('/')[0];
    if (key === page) link.setAttribute('aria-current', 'page');
  });
}

export function initFaq() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-question');
    if (!btn) return;
    const item = btn.closest('.faq-item');
    if (!item) return;

    const wasOpen = item.classList.contains('open');
    const list = item.closest('.faq-list');
    if (list) {
      list.querySelectorAll('.faq-item.open').forEach((openItem) => {
        openItem.classList.remove('open');
        const q = openItem.querySelector('.faq-question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });
    }
    if (!wasOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
}