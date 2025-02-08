import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/home/HomeContent.vue') // 默认首页内容
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/home/Dashboard.vue') // 仪表盘页面
        },
        {
          path:'/CompetitionReporting',
          name:'CompetitionReporting',
          component:()=>import('@/views/home/CompetitionReporting.vue')
        },
        {
          path:'/List',
          name:'List',
          component:()=>import('@/views/home/List.vue')
        },
        {
          path:'/Admin',
          name:'Admin',
          component:()=>import('@/views/home/Admin.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/login'
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
