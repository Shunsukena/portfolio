import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

/**
 * 本番のサイト URL（末尾 / 推奨・OGP の絶対パス用）。
 * Cloudflare / 独自ドメイン / GitHub ユーザーサイト等に合わせて変更。
 */
const site = 'https://yanachanapps.pages.dev/';

export default defineConfig({
  site,
  integrations: [tailwind({ applyBaseStyles: true })],
});
