/* ============================================================
   ARZESH — Pricing data (centralized reference)
   Also rendered statically in pricing/index.html for SEO + no-JS.
   Prices are placeholders and must be confirmed in writing.
   ============================================================ */

export const pricing = {
  socialMedia: {
    title: "Social Media Management",
    intro:
      "Monthly social media support — from content planning to publishing coordination and agreed reporting. Scoped in clear packages.",
    packages: [
      {
        name: "Starter",
        recommended: false,
        purpose: "Limited-scope social media support for smaller or newer pages.",
        price: "৳ —",
        priceNote: "PRICE PLACEHOLDER · PER MONTH",
        features: [
          "Content calendar (limited scope)",
          "Post creatives & captions",
          "Publishing coordination",
          "Monthly summary (agreed scope)"
        ],
        cta: "Inquire About Starter"
      },
      {
        name: "Standard",
        recommended: true,
        purpose: "Broader, regular content support for established pages.",
        price: "৳ —",
        priceNote: "PRICE PLACEHOLDER · PER MONTH",
        features: [
          "Everything in Starter",
          "Extended content calendar",
          "More creatives per month",
          "Page management support",
          "Agreed monthly reporting"
        ],
        cta: "Inquire About Standard"
      },
      {
        name: "Custom",
        recommended: false,
        purpose: "Tailored social media scope for specific business requirements.",
        price: "Custom Quote",
        priceNote: "SCOPED TO YOUR NEEDS",
        features: [
          "Multi-platform management",
          "Campaign integration",
          "Content production support",
          "Flexible reporting scope"
        ],
        cta: "Request Custom Quote"
      }
    ]
  },
  graphicDesign: {
    title: "Graphic Design",
    intro:
      "Design support for social media creatives, campaign graphics, banners and marketing materials — scoped in clear packages.",
    packages: [
      {
        name: "Starter",
        recommended: false,
        purpose: "Limited number of design deliverables for smaller needs.",
        price: "৳ —",
        priceNote: "PRICE PLACEHOLDER · PER PROJECT",
        features: [
          "Social media creatives (limited set)",
          "Agreed revisions per deliverable",
          "Final files in standard formats"
        ],
        cta: "Inquire About Starter"
      },
      {
        name: "Standard",
        recommended: true,
        purpose: "Broader design support for regular marketing needs.",
        price: "৳ —",
        priceNote: "PRICE PLACEHOLDER · PER PROJECT",
        features: [
          "Everything in Starter",
          "Extended creative set",
          "Multi-format deliverables",
          "Additional revision rounds (agreed)"
        ],
        cta: "Inquire About Standard"
      },
      {
        name: "Custom",
        recommended: false,
        purpose: "Larger campaign or design scope, tailored to your needs.",
        price: "Custom Quote",
        priceNote: "SCOPED TO YOUR NEEDS",
        features: [
          "Campaign-level design scope",
          "Multi-deliverable packages",
          "Extended revision policy (agreed)"
        ],
        cta: "Request Custom Quote"
      }
    ]
  }
};