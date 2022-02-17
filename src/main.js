import { createApp } from 'vue'
import App from './App.vue'
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'

// createApp(App).use(VueAnimXyz)
//   .mount('#app');
const app = createApp(App)
app.use(VueAnimXyz)
app.mount('#app')
