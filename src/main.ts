import { createApp } from 'vue'
import OnuUI from 'onu-ui'
import router from './router'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'onu-ui/dist/style.css'
import 'uno.css'

const app = createApp(App)

app.use(router)
app.use(OnuUI)
app.mount('#app')
