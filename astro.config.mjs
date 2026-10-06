// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://pixelpusher829.github.io",
  base: "/vibrant-visions",
  trailingSlash: "ignore",
  integrations: [sitemap()],
});
