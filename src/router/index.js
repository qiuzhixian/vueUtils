import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/date',
    name: 'date',
    component: () => import('../views/date.vue')
  },
  {
    path: '/countdownTime',
    name: 'countdownTime',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/countdownTime.vue')
  },
  {
    path: '/toast',
    name: 'toast',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/toast.vue')
  },
  {
    path: '/loading',
    name: 'loading',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/loading.vue')
  },
  {
    path: '/axios',
    name: 'axios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/axios.vue')
  },
  {
    path: '/Highlight',
    name: 'Highlight',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Highlight.vue')
  },
  {
    path: '/canvas',
    name: 'canvas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/canvas.vue')
  },
  {
    path: '/hree-level-linkage',
    name: 'hree-level-linkage',
    component: () => import(/* webpackChunkName: "about" */ '../views/hree-level-linkage/index.vue')
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import(/* webpackChunkName: "about" */ '../views/switch.vue')
  },
  {
    path: '/font',
    name: 'font',
    component: () => import(/* webpackChunkName: "about" */ '../views/font.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局路由前置拦截
router.beforeEach((to, from, next) => {
  console.log(to, from)
  if(to.path == from.path) {
    next({ path: '/' });
  }else {
    next()
  }
})

export default router
