<script lang='ts' setup>
import { OCard } from '@nuxt-ui/components'
defineProps<{ name: string }>()
</script>

<template>
  <o-card>
    <h4>{{ name }}</h4>
    <div flex="~ gap-4">
      <slot />
    </div>
  </o-card>
</template>

<style lang='scss' scoped>
</style>
