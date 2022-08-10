import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import { presetNuxtUI } from '@nuxt-ui/preset'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: '@nuxt-ui/components',
    },
    rollupOptions: {
      external: [
        'vue',
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    Vue(),
    VueSetupExtend(),
    UnoCSS({
      presets: [
        presetAttributify(),
        presetUno(),
        presetNuxtUI(),
      ],
    }),
  ],
})
