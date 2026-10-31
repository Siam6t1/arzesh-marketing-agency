/* ============================================================
   ARZESH — Portfolio project data
   Used by portfolio grid, project detail pages and sitemap.
   ============================================================ */

export const projects = [
  {
    slug: "morrow-coffee-house",
    title: "MORROW Coffee House",
    category: "social-media",
    categoryLabel: "Social Media Campaign",
    status: "concept",
    year: "2025",
    tagline:
      "Visual direction, campaign objective and social media creatives for a premium café brand.",
    cover: {
      type: "image",
      src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80",
      alt: "MORROW Coffee House concept visual"
    },
    overview:
      "MORROW is a concept social media campaign for a premium café brand. The goal was to build a visual language that feels warm, refined and editorial — appropriate for a specialty coffee house.",
    objectives: [
      "Define a cohesive visual direction for the café's social presence.",
      "Develop a campaign concept for a seasonal menu launch.",
      "Produce a set of social media creatives that could extend into a content series."
    ],
    strategy:
      "The campaign centers on the ritual of coffee — quiet moments, warm light and slow attention. Visual direction leans on muted tones, generous whitespace and a restrained editorial grid.",
    deliverables: [
      "Campaign concept document",
      "Visual direction moodboard",
      "6 social media post creatives (mockup presentation)",
      "Story and feed layout mockups"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600&q=80",
        alt: "Coffee shop interior",
        caption: "Interior mood reference"
      },
      {
        src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80",
        alt: "Coffee cup on wooden table",
        caption: "Product still life"
      },
      {
        src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&q=80",
        alt: "Coffee beans close up",
        caption: "Ingredient close-up"
      },
      {
        src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80",
        alt: "Café seating area",
        caption: "Seating area"
      }
    ],
    expectedOutcomes: [
      "A clear, repeatable visual system the café could extend.",
      "Campaign creative direction ready for production.",
      "A stronger perceived brand quality in the café's social presence."
    ],
    summary:
      "A restrained, editorial concept campaign demonstrating how ARZESH approaches social media for premium local brands — starting from a clear visual idea, not decorative assets."
  },
  {
    slug: "brand-identity-design",
    title: "Brand Identity Design",
    category: "brand-identity",
    categoryLabel: "Brand Identity",
    status: "concept",
    year: "2025",
    tagline:
      "Logo and wordmark presentation, typography, color direction and identity applications.",
    cover: {
      type: "gradient",
      gradient: "linear-gradient(135deg, #012A2D 0%, #1a4a4d 60%, #2a5a5d 100%)",
      alt: "Brand identity concept"
    },
    overview:
      "A concept brand identity project exploring how a modern, strategy-led identity system can be built and presented with restraint.",
    objectives: [
      "Develop a logo and wordmark with a clear visual rationale.",
      "Establish a typographic and color system.",
      "Present applications across print and digital touchpoints."
    ],
    strategy:
      "The identity is built around clarity and structure. Typography carries most of the visual weight, with a minimal mark as an anchor.",
    deliverables: [
      "Logo & wordmark presentation",
      "Typography & color direction",
      "Identity application mockups",
      "Brand presentation document"
    ],
    gallery: [
      { gradient: "linear-gradient(135deg, #012A2D, #1a4a4d)", caption: "Primary mark exploration" },
      { gradient: "linear-gradient(135deg, #435355, #5a6b6d)", caption: "Typography system" },
      { gradient: "linear-gradient(135deg, #2a3a3c, #3a4a4c)", caption: "Color palette" },
      { gradient: "linear-gradient(135deg, #1a1a1a, #2d2d2d)", caption: "Stationery application" }
    ],
    expectedOutcomes: [
      "A coherent, usable identity foundation.",
      "Clear visual direction for future brand assets."
    ],
    summary:
      "A concept identity project demonstrating how ARZESH builds visual systems around strategy — starting from a clear idea, not decoration."
  },
  {
    slug: "project-three",
    title: "Project Slot",
    category: "editable",
    categoryLabel: "Editable",
    status: "coming-soon",
    year: "—",
    tagline: "Reserved for a future project. Replace the content in data/projects.js.",
    cover: {
      type: "gradient",
      gradient: "linear-gradient(135deg, #435355 0%, #5a6b6d 100%)",
      alt: "Coming soon"
    },
    overview:
      "This project slot is editable. Update its details in assets/js/data/projects.js to replace it with a real or concept project.",
    objectives: [],
    strategy: "Coming soon.",
    deliverables: [],
    gallery: [],
    expectedOutcomes: [],
    summary: "Coming soon."
  },
  {
    slug: "project-four",
    title: "Project Slot",
    category: "editable",
    categoryLabel: "Editable",
    status: "coming-soon",
    year: "—",
    tagline: "Reserved for a future project. Replace the content in data/projects.js.",
    cover: {
      type: "gradient",
      gradient: "linear-gradient(135deg, #2a3a3c 0%, #3a4a4c 100%)",
      alt: "Coming soon"
    },
    overview:
      "This project slot is editable. Update its details in assets/js/data/projects.js to replace it with a real or concept project.",
    objectives: [],
    strategy: "Coming soon.",
    deliverables: [],
    gallery: [],
    expectedOutcomes: [],
    summary: "Coming soon."
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}