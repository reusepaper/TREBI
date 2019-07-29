import Vue from 'vue'
import Router from 'vue-router'
import Trebi from './Trebi.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Trebi',
      component: Trebi
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
