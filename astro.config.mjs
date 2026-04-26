import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: true })],
  output: "hybrid",
  adapter: cloudflare()
});