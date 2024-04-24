import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/IndexView.vue'),
      children: [
        { path: '', component: () => import('@/components/ArticleComponent.vue') },
        { path: 'post', component: () => import('@/components/PostComponent.vue') }
      ]
    }
  ]
})

export default router
