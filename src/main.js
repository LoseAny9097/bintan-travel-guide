import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// 导入页面组件
import Home from './views/Home.vue'
import Timeline from './views/Timeline.vue'
import Visa from './views/Visa.vue'
import Transport from './views/Transport.vue'
import Map from './views/Map.vue'
import Dialogue from './views/Dialogue.vue'
import Info from './views/Info.vue'

// 路由配置
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/timeline', name: 'Timeline', component: Timeline },
  { path: '/visa', name: 'Visa', component: Visa },
  { path: '/transport', name: 'Transport', component: Transport },
  { path: '/map', name: 'Map', component: Map },
  { path: '/dialogue', name: 'Dialogue', component: Dialogue },
  { path: '/info', name: 'Info', component: Info }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
