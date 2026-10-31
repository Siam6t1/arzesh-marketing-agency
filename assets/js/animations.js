/* ============================================================
   ARZESH — Scroll and entrance animations
   Respects prefers-reduced-motion. No-JS safe (hidden state is
   applied only when <html> has the .js class).
   ============================================================ */

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initScrollReveal() {
  if (REDUCED) {
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('revealed'));
    return;
  }

  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  targets.forEach((el) => observer.observe(el));
}

export function initHeroReveal() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  if (REDUCED) {
    hero.classList.add('hero--ready');
    return;
  }

  // Let the browser paint the initial (hidden) state first
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      hero.classList.add('hero--ready');
    });
  });
}