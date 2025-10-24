// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
   // enable the Vercel imageService
  output: 'server',
  adapter: vercel({
  imageService: true
   }),
});