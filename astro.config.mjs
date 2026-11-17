import { defineConfig } from 'astro/config';

// Site 100% estático: o build gera a pasta `dist/` pronta para
// Vercel, Cloudflare Pages, Netlify, GitHub Pages ou qualquer hospedagem.
export default defineConfig({
  site: 'https://thassys.com.br',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
