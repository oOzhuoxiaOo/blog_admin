import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView/LoginView.vue'
import AdminView from "@/views/AdminView/AdminView.vue"
import NotFound from '@/views/NotFount/NotFound.vue'
import ChartView from "@/views/ChartView/ChartView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: "login"
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      children: [
        {
          path: "chartview",
          name: "chartview",
          component: ChartView
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    },
    {
      path: '/notfound',
      name: 'notfound',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NotFound
    }
  ]
})

export default router
