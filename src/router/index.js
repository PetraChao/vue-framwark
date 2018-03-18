import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import index from '@/pages/index'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
