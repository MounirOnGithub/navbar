import type { App } from 'vue'
import NavigationBar from './components/NavigationBar.vue'

export default {
  install(app: App) {
    app.component('NavigationBar', NavigationBar)
  },
}
