/* ============================================================
   ARZESH — Lightbox gallery (ES module)
   Usage:
     <div data-lightbox data-lightbox-src="..." data-lightbox-alt="..."
          data-lightbox-caption="...">
   Supports image src or gradient-only tiles.
   ============================================================ */

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initLightbox() {
  const triggers = document.querySelectorAll('[data-lightbox]');
  if (!triggers.length) return;

  let overlay, imgEl, captionEl, closeBtn, prevBtn, nextBtn, imgWrap;
  let items = [];
  let currentIndex = 0;
  let lastFocused = null;

  function buildOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Image viewer');
    overlay.innerHTML = `
      <button type="button" class="lightbox-close" aria-label="Close">×</button>
      <button type="button" class="lightbox-prev" aria-label="Previous image">‹</button>
      <button type="button" class="lightbox-next" aria-label="Next image">›</button>
      <div class="lightbox-content">
        <div class="lightbox-img-wrap">
          <img class="lightbox-img" alt="">
        </div>
        <div class="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(overlay);
    imgEl = overlay.querySelector('.lightbox-img');
    imgWrap = overlay.querySelector('.lightbox-img-wrap');
    captionEl = overlay.querySelector('.lightbox-caption');
    closeBtn = overlay.querySelector('.lightbox-close');
    prevBtn = overlay.querySelector('.lightbox-prev');
    nextBtn = overlay.querySelector('.lightbox-next');

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', () => navigate(-1));
    nextBtn.addEventListener('click', () => navigate(1));
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });
    document.addEventListener('keydown', onKey);
  }

  function onKey(e) {
    if (!overlay || !overlay.classList.contains('open')) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      navigate(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      navigate(1);
    } else if (e.key === 'Tab') {
      trapFocus(e);
    }
  }

  function trapFocus(e) {
    const focusables = overlay.querySelectorAll('button');
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function show(index) {
    if (!items.length) return;
    currentIndex = (index + items.length) % items.length;
    const item = items[currentIndex];

    if (item.src) {
      imgEl.src = item.src;
      imgEl.alt = item.alt || '';
      imgEl.style.display = '';
      imgWrap.style.background = '';
    } else if (item.gradient) {
      imgEl.removeAttribute('src');
      imgEl.alt = item.alt || '';
      imgEl.style.display = 'none';
      imgWrap.style.background = item.gradient;
    }

    captionEl.textContent = item.caption || '';
    prevBtn.style.display = items.length > 1 ? '' : 'none';
    nextBtn.style.display = items.length > 1 ? '' : 'none';
  }

  function navigate(dir) {
    show(currentIndex + dir);
  }

  function open(clickedEl) {
    if (!overlay) buildOverlay();

    items = Array.from(triggers).map((el) => ({
      src: el.dataset.lightboxSrc || (el.querySelector('img') ? el.querySelector('img').src : ''),
      alt: el.dataset.lightboxAlt || (el.querySelector('img') ? el.querySelector('img').alt : ''),
      caption: el.dataset.lightboxCaption || '',
      gradient: el.dataset.lightboxGradient || ''
    }));

    const idx = items.findIndex(
      (it) =>
        it.src === clickedEl.dataset.lightboxSrc &&
        it.gradient === clickedEl.dataset.lightboxGradient
    );

    lastFocused = clickedEl;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    show(idx >= 0 ? idx : 0);
    closeBtn.focus();
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-lightbox]');
    if (!trigger) return;
    e.preventDefault();
    open(trigger);
  });

  // Basic reduced-motion guard for keyboard navigation overlays
  if (REDUCED) {
    // nothing additional — transitions are handled in CSS
  }
}