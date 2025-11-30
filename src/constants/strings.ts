// Reusable UI strings and text constants

export const UI_STRINGS = {
  // Buttons
  buttons: {
    bookConsultation: "Book a consultation",
    requestQuote: "Request a quote",
    seeAllTeam: "See all team",
  },

  // Navigation
  nav: {
    aboutUs: "About us",
    services: "Services",
    useCases: "Use Cases",
    useCasesLower: "Use cases", // Alternative casing
    testimonials: "Testimonials",
    contact: "Contact",
    pricing: "Pricing",
    blog: "Blog",
  },

  // Section headings and descriptions
  sections: {
    hero: {
      title: "Navigating the digital landscape for success",
      description:
        "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
    },
    team: {
      title: "Team",
      description:
        "Meet the skilled and experienced team behind our successful digital marketing strategies",
    },
    faq: {
      description:
        "Find answers to the most common questions about our web hosting and server solutions. Our FAQ section provides detailed information to help you make informed decisions about our services.",
    },
    services: {
      title: "Services",
      description:
        "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include",
    },
  },

  // Contact and footer
  contact: {
    title: "Contact us:",
    email: "examplemail.com",
    phone: "+123 456 789",
  },

  // Alt texts and labels
  altTexts: {
    logo: "Logo for Premium Hosting Brand",
    blueskyIcon: "Bluesky",
    facebookIcon: "Facebook",
    githubIcon: "Github",
    googleIcon: "Google My Business",
    instagramIcon: "Instagram",
    linkedinIcon: "Linkedin",
    pinterestIcon: "Pinterest",
    redditIcon: "Reddit",
    slackIcon: "Slack",
    tiktokIcon: "TikTok",
    twitterIcon: "Twitter (X)",
    youtubeIcon: "Youtube",
  },
} as const;

// Placeholder data for team members (since asset imports are component-specific)
export const TEAM_PLACEHOLDER_DATA = {
  member: {
    name: "Maria Katz",
    role: "CEO",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    link: "https://linkedin.com",
  },
} as const;
