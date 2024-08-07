import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import sitemap from "vite-plugin-sitemap";

const hostname = "https://dirwalker.com/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify(), sitemap({ hostname: hostname })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
