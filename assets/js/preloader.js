/* ============================================================
   ARZESH — Premium preloader
   Uses the existing ARZESH logo mark. Fail-safe hides the
   preloader if the page is slow or an error occurs.
   ============================================================ */

const MIN_VISIBLE_MS = 350;
const MAX_WAIT_MS = 3500;

export function initPreloader() {
  const el = document.getElementById('preloader');
  if (!el) return;

  const start = performance.now();
  let hidden = false;

  const hide = () => {
    if (hidden) return;
    hidden = true;
    el.classList.add('preloader--done');
    el.setAttribute('aria-hidden', 'true');
    // Remove from the DOM after the CSS transition completes
    window.setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 650);
  };

  const hideWhenReady = () => {
    const elapsed = performance.now() - start;
    const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
    window.setTimeout(hide, wait);
  };

  if (document.readyState === 'complete') {
    hideWhenReady();
  } else {
    window.addEventListener('load', hideWhenReady, { once: true });
  }

  // Fail-safe: never trap the visitor behind the preloader
  window.setTimeout(hide, MAX_WAIT_MS);

  // Safety net for unexpected runtime errors
  window.addEventListener('error', hide, { once: true });
}