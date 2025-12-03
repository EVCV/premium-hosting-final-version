// Navigation and social media links used across components

export const NAV_LINKS = [
  {
    name: "Products",
    href: "/products",
    isDropdown: true,
    children: [
      {
        category: "Web Hosting",
        items: [
          { name: "Shared Hosting", href: "/shared-hosting", description: "Perfect for starting websites" },
          { name: "WordPress Hosting", href: "/wordpress-hosting", description: "Optimized for WordPress" },
          { name: "VPS Hosting", href: "/vps-hosting", description: "Virtual private servers" },
          { name: "Dedicated Servers", href: "/dedicated-servers", description: "Full server resources" }
        ]
      },
      {
        category: "Domain & Security",
        items: [
          { name: "Domain Registration", href: "/domains", description: "Register your domain" },
          { name: "SSL Certificates", href: "/ssl", description: "Secure your website" },
          { name: "Email Hosting", href: "/email", description: "Professional email solutions" }
        ]
      }
    ]
  },
  {
    name: "Services",
    href: "/services",
    isDropdown: true,
    children: [
      {
        category: "Professional Services",
        items: [
          { name: "Website Migration", href: "/migration", description: "Move your site safely" },
          { name: "Website Design", href: "/design", description: "Custom website creation" },
          { name: "SEO Services", href: "/seo", description: "Improve search rankings" },
          { name: "Support Services", href: "/support", description: "24/7 expert assistance" }
        ]
      }
    ]
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
] as const;

export const FOOTER_LINKS = {
  products: [
    { name: "Shared Hosting", href: "/shared-hosting" },
    { name: "WordPress Hosting", href: "/wordpress-hosting" },
    { name: "VPS Hosting", href: "/vps-hosting" },
    { name: "Dedicated Servers", href: "/dedicated-servers" },
    { name: "Domain Registration", href: "/domains" },
    { name: "SSL Certificates", href: "/ssl" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "News", href: "/news" },
    { name: "Partners", href: "/partners" }
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Knowledge Base", href: "/kb" },
    { name: "System Status", href: "/status" },
    { name: "Contact Support", href: "/support" },
    { name: "Migration Services", href: "/migration" },
    { name: "Website Builder", href: "/website-builder" }
  ],
  legal: [
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Cookie Policy", href: "/legal/cookies" },
    { name: "Refund Policy", href: "/legal/refunds" },
    { name: "Acceptable Use", href: "/legal/aup" },
    { name: "SLA", href: "/legal/sla" }
  ]
} as const;

// Social media links for footer (src will be imported in components)
export const SOCIAL_LINKS = [
  { name: "Bluesky", link: "https://bluesky.com" },
  { name: "Facebook", link: "https://facebook.com" },
  { name: "Github", link: "https://github.com" },
  { name: "Google My Business", link: "https://www.google.com/business" },
  { name: "Instagram", link: "https://instagram.com" },
  { name: "Linkedin", link: "https://linkedin.com" },
  { name: "Pinterest", link: "https://pinterest.com" },
  { name: "Reddit", link: "https://reddit.com" },
  { name: "Slack", link: "https://slack.com" },
  { name: "TikTok", link: "https://tiktok.com" },
  { name: "Twitter (X)", link: "https://x.com" },
  { name: "Youtube", link: "https://youtube.com" },
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
