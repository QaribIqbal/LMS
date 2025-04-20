// composables/useThemeWatcher.ts
import { useTheme } from 'vuetify'

export function useThemeWatcher () {
  const theme = useTheme()

  const watchSystemTheme = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const updateTheme = (e: MediaQueryListEvent) => {
      theme.global.name.value = e.matches ? 'dark' : 'light'
    }

    mediaQuery.addEventListener('change', updateTheme)

    // Cleanup
    return () => mediaQuery.removeEventListener('change', updateTheme)
  }

  return { watchSystemTheme }
}
