import Vue from 'vue'
import Router from 'vue-router'

import About from './views/About.vue'
import Dashboard from './views/Dashboard.vue'
import Modul from './views/Modul.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/modul',
      name: 'modul',
      component: Modul
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})
