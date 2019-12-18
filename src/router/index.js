import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'gen', component: login },
  { path: '/home', name: 'home', component: () => import('../views/home') }
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
