/* ============================================================
   ARZESH — Project detail page initializer
   Reads data-page-slug from <body> and hydrates optional slots
   (currently: enables lightbox gallery).
   ============================================================ */

import { initLightbox } from './gallery.js';

function boot() {
  initLightbox();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}