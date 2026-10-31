/* ============================================================
   ARZESH — Entry point (loaded on every page, type="module")
   ============================================================ */

import { initNavbarScroll, initMobileMenu, setActiveLink, initFaq } from './navigation.js';
import { initScrollReveal, initHeroReveal } from './animations.js';
import { initPreloader } from './preloader.js';

function boot() {
  initPreloader();
  initNavbarScroll();
  initMobileMenu();
  setActiveLink();

  // FAQ only exists on the home page — safe to call elsewhere
  if (document.querySelector('.faq-list')) initFaq();

  initHeroReveal();
  initScrollReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}