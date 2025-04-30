import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://zerokinetik.pages.dev",
  output: "server", // Use 'server' for SSR or 'static' for static site generation
  adapter: cloudflare(),
  integrations: [mdx(), sitemap(), tailwind()],
});
