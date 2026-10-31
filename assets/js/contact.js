/* ============================================================
   ARZESH — Contact page copy-to-clipboard
   ============================================================ */

function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise((resolve, reject) => {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

export function initCopyButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    const text = btn.dataset.copy;
    if (!text) return;

    const reset = () => {
      btn.classList.remove('copied');
      btn.innerHTML = btn.dataset.originalHtml || btn.innerHTML;
      btn.removeAttribute('data-original-html');
    };

    if (!btn.dataset.originalHtml) {
      btn.dataset.originalHtml = btn.innerHTML;
    }

    copyText(text)
      .then(() => {
        btn.classList.add('copied');
        btn.innerHTML =
          '<span class="copy-icon">✓</span><span class="copy-label">Copied!</span>';
        window.setTimeout(reset, 1800);
      })
      .catch(() => {
        // Silent failure — no-op. Keep the button actionable.
      });
  });
}

document.addEventListener('DOMContentLoaded', initCopyButtons);