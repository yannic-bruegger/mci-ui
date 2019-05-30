import Vue from 'vue'
import Router from 'vue-router'

import About from './views/About.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
