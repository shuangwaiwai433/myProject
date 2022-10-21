import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import unocss from "./config/unocss";
/// <reference types="vitest" />

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export const config = {
  plugins: [
    vue(),
    vueJsx({}),
    // 添加UnoCSS插件
    unocss(),
  ],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    environment: "happy-dom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  build: {
    rollupOptions,
    minify: "terser",
    sourcemap: true, // 输出单独 source文件
    // brotliSize: true,  // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
    outDir: "./dist",
  },
};

export default defineConfig(config);
