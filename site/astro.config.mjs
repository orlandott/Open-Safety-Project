import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// For a GitHub Pages project site, the deploy workflow sets PUBLIC_BASE_PATH=/Open-Safety-Project.
// Locally and at the domain root it defaults to "/".
export default defineConfig({
  site: "https://orlandott.github.io",
  base: process.env.PUBLIC_BASE_PATH || "/",
  integrations: [react(), tailwind(), mdx()],
});
