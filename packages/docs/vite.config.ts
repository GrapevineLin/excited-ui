import { defineConfig, searchForWorkspaceRoot } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import unocss from "unocss/vite";
// import '@excited/core/dist/assets/'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [unocss({ configFile: "./uno.config.ts" }), vueJsx()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  server: {
    fs: {
      // strict: false,
      allow: [searchForWorkspaceRoot(process.cwd())],
    },
  },
});
