<script lang="ts" setup>
const githubUrl = 'https://github.com/516310460'
</script>

<template>
  <Card name="Button">
    <OButton>
      button
    </OButton>
    <OButton>
      button
    </OButton>
    <o-button :to="githubUrl">
      <template #icon>
        <div i-carbon-logo-github />
      </template>
      github
    </o-button>
  </Card>
</template>
