/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

import { VTimePicker } from 'vuetify/labs/VTimePicker'

//Checking for system default theme
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: isDark ? 'dark' : 'light',
  },
  components: {
    VTimePicker,
  },
})
