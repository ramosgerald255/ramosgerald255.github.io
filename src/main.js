import { createApp } from 'vue'
import App from './App.vue'
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'
import VueObserveVisibility from "vue-observe-visibility";
// import Observer from 'intersection-observer'

// createApp(App).use(VueAnimXyz)
//   .mount('#app');
const app = createApp(App)
app.use(VueAnimXyz)
app.use(VueObserveVisibility)
// app.use(Observer)
app.mount('#app')
