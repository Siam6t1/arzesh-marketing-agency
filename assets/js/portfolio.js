/* ============================================================
   ARZESH — Portfolio page (filters + grid render)
   ============================================================ */

import { projects } from './data/projects.js';

const STATUS_LABEL = {
  concept: 'CONCEPT PROJECT',
  'coming-soon': 'COMING SOON'
};

function escape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function coverStyle(cover) {
  if (!cover) return '';
  if (cover.type === 'image') return `background-image:url('${escape(cover.src)}');`;
  if (cover.type === 'gradient') return `background:${escape(cover.gradient)};`;
  return '';
}

function projectCard(p) {
  const labelClass = p.status === 'concept' ? 'concept' : 'coming';
  const labelText = STATUS_LABEL[p.status] || 'PROJECT';
  const ariaLabel = `${p.title} — ${p.categoryLabel}`;
  return `
    <a href="../projects/${escape(p.slug)}/" class="project-card" aria-label="${escape(ariaLabel)}">
      <div class="project-visual" role="img" aria-label="${escape(p.cover && p.cover.alt ? p.cover.alt : p.title)}" style="${coverStyle(p.cover)}">
        <span class="project-label ${labelClass}">${labelText}</span>
      </div>
      <div class="project-info">
        <div class="cat">${escape(p.categoryLabel)}</div>
        <h3>${escape(p.title)}</h3>
        <div class="status">${escape(p.tagline)}</div>
      </div>
    </a>`;
}

function renderProjects(filter) {
  const grid = document.getElementById('portfolioGrid');
  const empty = document.getElementById('emptyState');
  if (!grid) return;

  const visible = projects.filter((p) => filter === 'all' || p.category === filter);
  grid.innerHTML = visible.map(projectCard).join('');
  if (empty) empty.style.display = visible.length ? 'none' : 'block';
}

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      renderProjects(btn.dataset.filter);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initFilters();
  renderProjects('all');
});