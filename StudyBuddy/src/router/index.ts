// router/index.ts

import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '@/pages/index.vue';
// import AboutView from '@/views/AboutView.vue';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/SideMenu.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/pages/home.vue'),
      },
      // {
      //   path: '/dashboard',
      //   component: () => import('@/pages/Dashboard.vue')
      // }
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: AboutView,
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
