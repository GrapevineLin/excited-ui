/// <reference types="vitest" />
import unocss from "./config/unocss";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

export default defineConfig({
  base: "/excited-ui/",
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js", // 定义vue的别名，如果使用其他的插件，可能会用到别名
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue(), vueJsx(), unocss()],
  build: {
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        // format: 'module',
        globals: {
          vue: "Vue",
        },
      },
    },
    cssCodeSplit: true,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "ExcitedUI",
      fileName: "excited-ui",
      // 导出模块格式
      formats: ["es", "cjs", "umd", "iife"],
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
