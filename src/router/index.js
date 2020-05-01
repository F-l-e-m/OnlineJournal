import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Auth',
    component: () => import('@/views/Auth/Auth.vue'),
    meta: {
      layout: 'AuthLayout',
    },
  },
  {
    path: '/',
    redirect: '/login',
    name: 'Auth',
    component: () => import('@/views/Auth/Auth.vue'),
    meta: {
      layout: 'AuthLayout',
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/Home.vue'),
  },
  {
    path: '/newnote',
    name: 'NewNote',
    component: () => import('@/views/NewNote/NewNote.vue'),
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('@/views/History/History.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
