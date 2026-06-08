import { createApp, h } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.component('ClientOnly', {
  setup(props, { slots }) {
    return () => slots.default ? slots.default() : null
  }
})
app.mount('#app')

