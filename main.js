

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/styles.css'; //修改element plus的全局主题色覆盖
import './mock/index.js';

import App from './App.vue'
import router from './router'
import './assets/index.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
