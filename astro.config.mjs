import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://premium-hosting.co.uk",
  image: {
    // Enable built-in asset optimization
    service: {
      entrypoint: "astro/assets/services/sharp"
    }
  },
  integrations: [tailwind({ configFile: "./tailwind.config.mjs" })],
  // Enable built-in prefetch for better performance
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Vendor chunks for better caching
            astro: ["astro"],
            tailwind: ["tailwindcss"],
            // Separate swiper and lenis for better caching
            swiper: ["swiper"],
            lenis: ["lenis"]
          }
        }
      }
    }
  },
  // Enable view transitions for better UX performance
  viewTransitions: true
});
