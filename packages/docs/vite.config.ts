import { defineConfig, searchForWorkspaceRoot } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import '@excited/core/dist/assets/'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
  ],
  resolve: {
    alias: [
      // {
      //   find: /^@\/(.*)$/,
      //   replacement: `${path.resolve("..")}/src/$1`,
      // },
    ],
    // alias: {
    //   "@": path.resolve(__dirname, "../src"),
    // },
  },
  server: {
    fs: {
      // strict: false,
      allow: [searchForWorkspaceRoot(process.cwd())],
    },
  },
});
