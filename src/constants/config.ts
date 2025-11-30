// Configuration constants for layout, spacing, and behavior

// Layout dimensions and spacing
export const LAYOUT_CONFIG = {
  // Container max widths
  containers: {
    content: "1440px",
    footer: "1920px",
    navbar: "1920px",
  },

  // CSS custom properties for layout
  cssVars: {
    "--content-max-width": "1440px",
    "--footer-max-width": "1920px",
    "--navbar-max-width": "1920px",
  },

  // Component spacing
  spacing: {
    // Lenis smooth scroll offset for anchor links
    scrollOffset: -132,
  },
} as const;

// Font families and weights
export const TYPOGRAPHY = {
  fonts: {
    grotesk: ["Grotesk", "sans-serif"],
  },
  weights: {
    regular: 400,
    medium: 500,
  },
} as const;

// Responsive design breakpoints (matching Tailwind)
export const RESPONSIVE_BREAKPOINTS = {
  sm: "640px",  // Tablet breakpoint
  md: "768px",  // Desktop breakpoint
  lg: "1024px", // Large desktop breakpoint
  xl: "1280px", // Extra large breakpoint
  xxl: "1536px", // Extra extra large breakpoint
  xxxl: "1920px", // Extra extra extra large breakpoint
} as const;

// Animation and transition durations
export const ANIMATION_CONFIG = {
  duration: {
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
  },
  easing: {
    easeOut: "ease-out",
    linear: "linear",
  },
} as const;
