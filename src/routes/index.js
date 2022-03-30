import { createRouter, createWebHashHistory } from 'vue-router'
import index from '@/components/index'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
      { path: '/', component: index}
  ],
})

export default router
