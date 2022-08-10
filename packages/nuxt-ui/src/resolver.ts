import type { ComponentResolver } from 'unplugin-vue-components'

export function NuxtUIResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^O[A-Z]/))
        return { name, from: 'nuxt-ui' }
    },
  }
}
