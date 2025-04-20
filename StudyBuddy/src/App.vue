<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
  import { useThemeWatcher } from './composables/useThemeWatcher'

  const { watchSystemTheme } = useThemeWatcher()

  onMounted(() => {
    watchSystemTheme()
  })
</script>
