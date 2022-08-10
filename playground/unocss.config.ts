import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetNuxtUI } from 'nuxt-ui'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetNuxtUI(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
