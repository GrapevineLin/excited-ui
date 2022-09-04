import { defineConfig, searchForWorkspaceRoot } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import Unocss from "./uno.config";
// import '@excited/core/dist/assets/'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [Unocss(), vueJsx()],
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
