import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(() => {
  // Get the default language from environment variable or fallback to Serbian
  const defaultLang = process.env.VITE_DEFAULT_LANG || "en";

  return {
    plugins: [
      tailwindcss(),
      react(),
      // Custom plugin to inject default language
      {
        name: "inject-default-language",
        transformIndexHtml: {
          order: "pre",
          handler(html) {
            return html.replace(
              '<script type="module" src="/src/main.jsx"></script>',
              `<script>
                window.__DEFAULT_LANGUAGE__ = "${defaultLang}";
              </script>
              <script type="module" src="/src/main.jsx"></script>`
            );
          },
        },
      },
    ],
    define: {
      // Make default language available in the app
      __DEFAULT_LANGUAGE__: JSON.stringify(defaultLang),
    },
    build: {
      outDir: `dist-${defaultLang}`,
      rollupOptions: {
        input: `./index-${defaultLang}.html`,
        output: {
          // Generate different chunk names for different builds
          chunkFileNames: `assets/[name]-${defaultLang}-[hash].js`,
          entryFileNames: `assets/[name]-${defaultLang}-[hash].js`,
          assetFileNames: `assets/[name]-${defaultLang}-[hash].[ext]`,
        },
      },
    },
  };
});
