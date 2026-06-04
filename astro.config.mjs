// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

const DEFAULT_SITE_URL = "https://lalocurabar.com.co";
const siteUrl = (
  process.env.PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  DEFAULT_SITE_URL
).replace(/\/+$/, "");

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
