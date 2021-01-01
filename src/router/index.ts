import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '@/components/Tabs.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/tabs/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/scanner',
    name: 'Scanner',
    component: () => import(/* webpackChunkName: "scanner" */ '../views/Scanner.vue')
  },
  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "home",
      },
      {
        path: "home",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: "scanner",
        name: "Scanner",
        component: () => import(/* webpackChunkName: "scanner" */ '../views/Scanner.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
