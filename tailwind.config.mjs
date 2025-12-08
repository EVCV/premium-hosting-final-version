/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Grotesk", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
      },
      colors: {
        gold: "var(--gold)",
        black: "var(--black)",
        dark: "var(--dark)",
        white: "var(--white)",
      },
      boxShadow: {
        'crisp-sm': '4px 4px 0px rgba(0, 0, 0, 0.1)',
        'crisp': '6px 6px 0px rgba(0, 0, 0, 0.15)',
        'crisp-md': '8px 8px 0px rgba(0, 0, 0, 0.2)',
        'crisp-lg': '12px 12px 0px rgba(0, 0, 0, 0.25)',
        'crisp-gold-sm': '4px 4px 0px rgba(212, 175, 55, 0.3)',
        'crisp-gold': '6px 6px 0px rgba(212, 175, 55, 0.4)',
        'crisp-gold-md': '8px 8px 0px rgba(212, 175, 55, 0.5)',
      },
    },
  },
  plugins: [],
};
