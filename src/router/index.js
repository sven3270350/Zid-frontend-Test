import { createRouter, createWebHistory } from 'vue-router'
import ProfilePage from '../components/ProfilePage.vue'
import PaymentPage from '../components/PaymentPage.vue'
// import PayPage from '../components/PayPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProfilePage
    },
    {
      path: '/payment',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PaymentPage
    }
  ]
})

export default router
