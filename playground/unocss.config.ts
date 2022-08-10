import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetOnu } from 'nuxt-ui'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetOnu(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
