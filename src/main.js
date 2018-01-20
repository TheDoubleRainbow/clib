// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Top from './components/Top'
import Material from './components/Material'
import Materials from './components/Materials'

Vue.component('Top', Top);
Vue.component('Material', Material);
Vue.component('Materials', Materials);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})