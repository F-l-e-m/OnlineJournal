import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';

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
    name: 'Home',
    component: () => import('@/views/Home/Home.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/newnote',
    name: 'NewNote',
    component: () => import('@/views/NewNote/NewNote.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('@/views/History/History.vue'),
    meta: {
      auth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const user = firebase.auth().currentUser;
  const requiredAuth = to.matched.some((record) => record.meta.auth);
  if (!user && requiredAuth) {
    next('/login');
  } else {
    next();
  }
  if (user && !requiredAuth) {
    next(from);
  }
});

export default router;
