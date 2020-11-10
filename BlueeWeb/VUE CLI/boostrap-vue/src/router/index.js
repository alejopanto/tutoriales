import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import(/* webpackChunkName: "Grid" */ '../views/Grid.vue')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import(/* webpackChunkName: "Cards" */ '../views/Cards.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import(/* webpackChunkName: "Input" */ '../views/Input.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
