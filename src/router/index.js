import Vue from 'vue'
import Router from 'vue-router'
import Materials from '@/components/Materials'
import 'bulma/bulma.sass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Materials',
      component: Materials
    },
    {
    	path: '/types/:type/:subtype',
    	name: 'Typed',
    	component: Materials
    },
    {
    	path: '/search/:query',
    	name: 'Search',
    	component: Materials
    }
  ]
})
