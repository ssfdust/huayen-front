import { createRouter, createWebHashHistory } from 'vue-router'
import index from '@/components/index'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
      { path: '/', component: index, meta: {title: "华严一言"}}
  ],
})

router.beforeEach((to) => {
    document.title = to.meta.title
})

export default router
