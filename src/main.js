// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
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

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
	  	materials: [
	  		{type: "Image", name: "Hello world", content: "http://i0.kym-cdn.com/photos/images/newsfeed/001/329/402/beb.jpg", subType: "Meme", social: {comments: 1, likes: 69, views: 1488}},
			{type: "Text", name: "A Poem", content: "Bla Bla Bla Bla Lorem Ipsum Dolor Bla Bla", subType: "Poem", social: {comments: 1, likes: 69, views: 1488}},
			{type: "Music", name: "Suicide is painless", content: "/static/2.mp3", subType: "Song", social: {comments: 1337, likes: 69, views: 1488}},
			{type: "Image", name: "A meme", content: "https://memegenerator.net/img/instances/500x/59738032/illegal-loli-hunting.jpg", subType: "Meme", secType: "Meme", social: {comments: 0, likes: 0, views: 0}},
			{type: "Video", name: "An another meme", content: "https://www.youtube.com/watch?v=VbUMVq4pY94&index=67&list=LLrOrZVl41HwptjZDGieIGyQ", subType: "YouTube", social: {comments: 122, likes: 6913, views: 1488}},
			{type: "Image", name: "Bla-bla", content: "https://pbs.twimg.com/media/C5c28huXMAAEReQ.jpg", subType: "Epic battles", social: {comments: 1, likes: 69, views: 12}},
			{type: "Image", name: "Blu-blu", content: "http://i0.kym-cdn.com/photos/images/facebook/000/170/791/welcome-to-the-internet-internet-demotivational-poster-1264714433.png.jpg", subType: "Meme", social: {comments: 1, likes: 69, views: 1488}},
			{type: "Text", name: "Blo-blo", content: "Bla Bla Bla B saD asdhasjk ashajksdjkadjkasjhkd ajksadkasdhkajshk jsdkasdkasdjahdkj hajksdhajkhdjkasjkhaskdhaksdaksjdkasdkas la Lorem Ipsum Dolor Bla Bla", subType: "Long poem", social: {comments: 12, likes: 21369, views: 1488}},
			{type: "Text", name: "Trolo-lo-lo-lo", content: "Bla Bla Bla  asdasd askjd haksdaks Bla Lorem Ipsum Dolor Bla Bla", subType: "Poem", social: {comments: 1, likes: 0, views: 1488}},
			{type: "Text", name: "Earth is flat", content: "Bla Bla asdasddjadhajs dahksjdhkjasdajk dkashd adas  Bla Bla Lorem Ipsum Dolor Bla Bla", subType: "Earth is shaiba", social: {comments: 11, likes: 629, views: 1488}}
		],
		subTypes: [
			'Meme', 'Poem', 'Song', 'YouTube', 'Epic battles', 'Long poem', 'Earth is shaiba'
		],
	},
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})