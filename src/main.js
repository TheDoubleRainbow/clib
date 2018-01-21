// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Top from './components/Top'
import Material from './components/Material'
import Audio from './components/materialSpec/AudioMaterial'
import Text from './components/materialSpec/TextMaterial'
import Video from './components/materialSpec/VideoMaterial'
import Image from './components/materialSpec/ImageMaterial'
import Materials from './components/Materials'

Vue.component('Top', Top);
Vue.component('Material', Material);
Vue.component('Materials', Materials);
Vue.component('TextMaterial', Text);
Vue.component('AudioMaterial', Audio);
Vue.component('VideoMaterial', Video);
Vue.component('ImageMaterial', Image);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})