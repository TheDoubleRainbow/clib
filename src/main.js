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
	  		{id: 0, type: "Image", keywords: "Picture, Knuckles, Uganda, De wey, queen", name: "Hello world", content: "http://i0.kym-cdn.com/photos/images/newsfeed/001/329/402/beb.jpg", subType: "Meme", social: {comments: 1, likes: 70, views: 228}},
			{id: 1, type: "Text", keywords: "", name: "A Poem", content: "Bla Bla Bla Bla Lorem Ipsum Dolor Bla Bla", subType: "Poem", social: {comments: 1, likes: 69, views: 228}},
			{id: 2, type: "Music", keywords: "", name: "Suicide is painless", content: "/static/2.mp3", subType: "Song", social: {comments: 1337, likes: 669, views: 228}},
			{id: 3, type: "Image", keywords: "maik, TES, morrowind, oblivion, skyrim", name: "Lzhec", content: "https://cs.pikabu.ru/post_img/2013/07/18/12/1374175270_1791086148.jpg", subType: "Meme", social: {comments: 1, likes: 50, views: 228}},
			{id: 4, type: "Video", keywords: "", name: "An another meme", content: "https://youtu.be/VbUMVq4pY94", subType: "YouTube", social: {comments: 122, likes: 6913, views: 228}},
			{id: 5, type: "Image", keywords: "", name: "Bla-bla", content: "https://pbs.twimg.com/media/C5c28huXMAAEReQ.jpg", subType: "Epic battles", social: {comments: 1, likes: 69, views: 12}},
			{id: 6, type: "Image", keywords: "City, country, ancap", name: "Singapore", content: "https://cogitogroup.com.au/wp-content/uploads/Singapore-1366-700-Landing.jpg", subType: "City", social: {comments: 1, likes: 80, views: 228}},
			{id: 7, type: "Text", keywords: "", name: "Some text", content: "Roses are red. Violets are blue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta nibh id eros volutpat, eget congue neque maximus. Nunc sit amet felis vel odio mattis consectetur ut non", subType: "Long poem", social: {comments: 12, likes: 21369, views: 2288}},
			{id: 8, type: "Text", keywords: "", name: "Trolo-lo-lo-lo", content: "Bla Bla Bla  asdasd askjd haksdaks Bla Lorem Ipsum Dolor Bla Bla", subType: "Poem", social: {comments: 1, likes: 0, views: 228}},
			{id: 9, type: "Text", keywords: "", name: "Earth is flat", content: "Bla Bla asdasddjadhajs dahksjdhkjasdajk dkashd adas  Bla Bla Lorem Ipsum Dolor Bla Bla", subType: "Earth is shaiba", social: {comments: 11, likes: 29, views: 228}},
			{id: 10, type: "Image", keywords: "", name: "A meme", content: "https://memegenerator.net/img/instances/500x/59738032/illegal-loli-hunting.jpg", subType: "Meme", secType: "Meme", social: {comments: 0, likes: 0, views: 0}},
			{id: 11, type: "Image", keywords: "", name: "Blu-blu", content: "http://i0.kym-cdn.com/photos/images/facebook/000/170/791/welcome-to-the-internet-internet-demotivational-poster-1264714433.png.jpg", subType: "Meme", social: {comments: 1, likes: 69, views: 228}}
		],
		subTypes: {
			image: ['All', 'Meme', 'Epic battles', 'City'],
			text: ['All', 'Poem', 'Long poem', 'Earth is shaiba'],
			audio: ['All', 'Song'],
			video: ['All', 'YouTube']
		},
	},
  mutations: {
    
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})