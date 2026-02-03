// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
      plugins: [tailwindcss()],
	},

  integrations: [react(), sanity({
      projectId: 'rntte34l',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),],
});