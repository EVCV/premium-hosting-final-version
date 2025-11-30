// Main export file for all constants

// Export design system constants
export * from "./colors";

// Export configuration constants
export * from "./config";

// Export navigation and routing constants
export * from "./navigation";

// Export site metadata constants
export * from "./site";

// Export UI strings and text constants
export * from "./strings";

// Re-export siteData.json for convenience (already used in jsonLD.js)
export { default as siteData } from "../data/siteData.json";
