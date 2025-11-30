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
    instagram: "premiumhosting",
    github: "premiumhosting",
    youtube: "premiumhosting",
    tiktok: "premiumhosting",
    pinterest: "premiumhosting",
    reddit: "premiumhosting",
    slack: "premiumhosting",
    bluesky: "premiumhosting",
    google: "premiumhosting",
    whatsapp: "premiumhosting",
    telegram: "premiumhosting",
    discord: "premiumhosting",
    medium: "premiumhosting",
    vimeo: "premiumhosting",
    tumblr: "premiumhosting"
  },

  // Business credits and licensing
  credits: {
    year: "2025",
    company: "Premium Hosting",
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

// Size constants for consistent styling
export const SIZES = {
  icon: {
    social: "w-10 h-10, flex-shrink-0",
  },
  logo: {
    footerMaxWidth: "max-w-[400px]",
  },
} as const;
