// @ts-check
import { defineConfig } from 'astro/config';

// Rein statischer Build: Ergebnis ist nur HTML/CSS/Bilder in ./dist –
// kein PHP, keine Datenbank, kein Admin-Login, nichts was angreifbar wäre.
export default defineConfig({
  site: 'https://hhniesing.de',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Kein Inline-CSS → strikte Content-Security-Policy ohne 'unsafe-inline'
    inlineStylesheets: 'never',
  },
  devToolbar: { enabled: false },
});
