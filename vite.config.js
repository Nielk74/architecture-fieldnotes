import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        chapterOne: fileURLToPath(new URL('./chapter-one.html', import.meta.url)),
        fundamentals: fileURLToPath(new URL('./fundamentals.html', import.meta.url)),
        hardParts: fileURLToPath(new URL('./hard-parts.html', import.meta.url)),
        learning: fileURLToPath(new URL('./learn.html', import.meta.url)),
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        illustrations: fileURLToPath(new URL('./illustrations.html', import.meta.url)),
      },
    },
  },
});
