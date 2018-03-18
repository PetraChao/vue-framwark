import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import index from '@/pages/index'
import ElementUI from 'element-ui'

Vue.use(Router)
Vue.use(Vuex)
Vue.use(ElementUI, { size: 'small' })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
