// Design system colors and CSS custom properties
export const COLORS = {
  // Brand colors
  GOLD: '#D4AF37',
  BLACK: '#000000',
  DARK: '#1a0033',
  WHITE: '#FFFFFF',
  GRAY: '#f3f3f3',

  // Semantic color map for convenience
  brand: '#D4AF37', // gold
  text: '#000000', // black
  background: '#FFFFFF', // white
  surface: '#1a0033', // dark
} as const;

// CSS Custom Properties (for styles/globals.css and tailwind)
export const CSS_VARS = {
  '--gold': COLORS.GOLD,
  '--black': COLORS.BLACK,
  '--dark': COLORS.DARK,
  '--white': COLORS.WHITE,
  '--gray': COLORS.GRAY,
} as const;

// Media query breakpoints and values used in the design
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
  xxxl: '1920px',
} as const;
