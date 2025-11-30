// Site-wide constants and metadata extensions

import siteData from "../data/siteData.json";

// Extended site data - combine with siteData.json
export const SITE_CONFIG = {
  ...siteData,
  // Contact information
  contact: {
    email: "examplemail.com",
    phone: "+123 456 789",
  },

  // Social media handles/usernames
  social: {
    linkedin: "premiumhosting",
    twitter: "@premiumhosting",
    facebook: "premiumhosting",
  },

  // Business credits and licensing
  credits: {
    year: "2024",
    company: "Positivus",
    builtWith: {
      name: "Astro",
      url: "https://astro.build/",
    },
    credit: {
      name: "Olga Skuja",
      url: "https://www.olgaskuja.design/",
    },
    license: {
      name: "Licence",
      url: "https://creativecommons.org/licenses/by/4.0/",
    },
  },
} as const;

// External links for templates, badges, etc.
export const EXTERNAL_LINKS = {
  atemplate: "https://atemplate.com/item/premium-hosting",
  atemplateBadge: "https://atemplate.com/badages-awards.svg",
} as const;

// Asset paths (for favicons, logos)
export const ASSETS = {
  faviconSvg: "/premium-hosting-favicon.svg",
  faviconPng: "/premium-hosting-favicon.png",
  logo: "/premium-hosting-horizontal-logo.svg",
} as const;
