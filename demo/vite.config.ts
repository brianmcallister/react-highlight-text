import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  // Relative asset paths, so the build works under the /react-highlight-text/ subpath on GitHub Pages.
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      // Use the component source from this repository, so the demo always shows the current code.
      '@brianmcallister/react-highlight-text': fileURLToPath(
        new URL('../src/index.ts', import.meta.url),
      ),
    },
    // The component source imports these, so resolve them from the demo's own dependencies.
    dedupe: ['react', 'react-dom', '@brianmcallister/highlight-text'],
  },
});
