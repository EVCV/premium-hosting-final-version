// Navigation and social media links used across components

export const NAV_LINKS = [
  {
    name: "About us",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Use cases",
    href: "#cases",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Contact",
    href: "#contact",
  },
] as const;

export const FOOTER_LINKS = [
  { name: "About us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Use Cases", href: "#cases" },
  { name: "Pricing", href: "#Testimonials" },
  { name: "Blog", href: "#Home" },
] as const;

// Social media links for footer (src will be imported in components)
export const SOCIAL_LINKS = [
  { name: "Facebook", link: "https://facebook.com" },
  { name: "Linkedin", link: "https://linkedin.com" },
  { name: "Twitter", link: "https://twitter.com" },
] as const;

// Anchor link selectors (used in lenis.js for smooth scrolling)
export const ANCHOR_SELECTORS = {
  home: "#home",
  about: "#about",
  services: "#services",
  cases: "#cases",
  testimonials: "#testimonials",
  contact: "#contact",
} as const;
