import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
       mdi,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#FAF8F8',
          secondary: '#EAFFEC',
          th: '#6EDD9E',
          ft: '#D8FFBF',
          trash: '#FF5050',
        },
      },
    },
  },
})
