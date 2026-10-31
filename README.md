# ARZESH — Marketing Agency Website

A premium, English-only multi-page static website for ARZESH Marketing Agency. Built with HTML5, CSS3 and vanilla JavaScript (ES modules). No backend, no framework, no build step.

**Live site:** https://siam-mahmud-rana.github.io/arzesh-marketing-agency/

---

## Tech Stack

- **HTML5** — semantic pages with static header and footer
- **CSS3** — modular: base / components / pages
- **Vanilla JavaScript (ES modules)** — data-driven sections, navigation, preloader, animations, lightbox
- **GitHub Pages** — static hosting
- **Google Fonts** — Space Grotesk
- **Unsplash / Pexels** — photography (free-use licenses)

---

## Site Structure
arzesh-marketing-agency/
├── index.html Home
├── 404.html Branded error page
├── robots.txt
├── sitemap.xml
├── README.md
├── .gitignore
│
├── about/index.html About Us
├── services/index.html 7 detailed services
├── portfolio/index.html Portfolio with filters
├── process/index.html 5-step workflow
├── pricing/index.html Packages + comparison
├── contact/index.html Split layout, no form
├── privacy-policy/index.html Legal draft
├── terms-of-service/index.html Legal draft
│
├── projects/
│ ├── morrow-coffee-house/index.html
│ ├── brand-identity-design/index.html
│ ├── project-three/index.html Placeholder
│ └── project-four/index.html Placeholder
│
└── assets/
├── css/
│ ├── base/ variables, reset, typography, global
│ ├── components/ header, footer, buttons, cards, lightbox, preloader
│ ├── pages/ home, about, services, portfolio, process,
│ │ pricing, contact, legal, project, error
│ ├── animations.css
│ └── responsive.css
├── js/
│ ├── data/ site, navigation, seo, projects, services, pricing
│ ├── main.js Entry point
│ ├── navigation.js
│ ├── portfolio.js
│ ├── gallery.js
│ ├── animations.js
│ ├── preloader.js
│ ├── contact.js
│ └── project-detail.js
├── images/
│ ├── logo/ arzesh-mark-A-dark.png, arzesh-mark-A-light.png
│ └── (og-*.jpg — add these)
├── icons/
└── favicon/

---

## Editing Content

### Text / Copy
Edit **the HTML file directly** for page copy. SEO metadata is in each page's `<head>`. Shared content (site name, email, social URLs) lives in `assets/js/data/site.js` and `assets/js/data/seo.js`.

### Navigation & Footer Links
- Nav links: static in each page's `<header>` markup (edit all pages consistently).
- Navigation data mirror (for future use): `assets/js/data/navigation.js`.

### Portfolio Projects
All project data lives in `assets/js/data/projects.js` as an exported array.

**To replace a placeholder project:**
1. Open `assets/js/data/projects.js`
2. Find the entry with `slug: "project-three"` (or `"project-four"`)
3. Update `title`, `category`, `cover`, `overview`, `gallery`, etc.
4. Portfolio grid updates automatically.
5. For the detail page, edit the matching `projects/project-three/index.html`.

**To add a new project:**
1. Add an object to the `projects` array with a unique `slug`
2. Create `projects/your-slug/`
3. Copy `projects/project-three/index.html` into it
4. Update the content and canonical URL
5. Add a `<url>` to `sitemap.xml`

### Pricing
Prices are **placeholders** (`৳ —`). To set actual prices, edit `pricing/index.html`. Mirror the change in `assets/js/data/pricing.js` if you want both to stay in sync.

### Facebook / Social Links
- Update `assets/js/data/site.js` (used by JS) AND
- The static footer in every page (search for `facebook.com/arzesh.agency`)

---

## Deployment (GitHub Pages)

1. Push all files to the `main` branch of your repository.
2. Repo → Settings → Pages → Source: **Deploy from branch** → `main` / `/(root)`.
3. Wait for deployment. Site will be live at `https://<username>.github.io/arzesh-marketing-agency/`.

### Required Before Deploy

- **Logo assets**: upload the two logo PNG files to `assets/images/logo/`:
  - `arzesh-mark-A-dark.png` (dark mark on white — used by preloader)
  - `arzesh-mark-A-light.png` (white mark — favicon fallback)
- **OG images** (optional but recommended): upload to `assets/images/`:
  - `og-home.jpg`, `og-about.jpg`, `og-services.jpg`, `og-portfolio.jpg`,
  - `og-process.jpg`, `og-pricing.jpg`, `og-contact.jpg`

---

## Local Development

ES modules require an HTTP server (not `file://`).

**VS Code:** use the **Live Server** extension. Right-click any `index.html` → "Open with Live Server".

**Python:** `python3 -m http.server 8000` from repo root, then visit `http://localhost:8000/`.

---

## Notes

- Site is English-only. No language toggle.
- Header and footer are duplicated static HTML across pages. When editing, update all pages consistently.
- No-JS fallback: essential content is visible; preloader hides automatically; the `.js` class gates only the reveal/entrance animations.
- The preloader fails safe after 3.5 s even if the page is slow.
- `prefers-reduced-motion` is honored globally.