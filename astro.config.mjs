// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://zion369369.github.io',
  base: '/awesome-prompting-hacks',
  integrations: [sitemap()]
});