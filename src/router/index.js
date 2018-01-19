import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import 'bulma/bulma.sass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
