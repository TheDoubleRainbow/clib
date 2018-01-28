<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<div class="search control has-icons-left is-hidden-desktop">
			   <input @keyup.enter="search()" v-model="query" class="input" type="text" placeholder="Search">
			   <span class="icon is-small is-left">
			   	<i class="fas fa-search"></i>
			   </span>
			</div>
			<button @click="openBurger()" class="button navbar-burger">
		      <span></span>
		      <span></span>
		      <span></span>
		    </button>
		</div>
		<div class="navbar-menu">
			<a href="/" class="navbar-item">
			  Home
			</a>
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link">
					<i class="fas fa-music"></i> <span class="type">Music</span>
				</a>
				<div class="navbar-dropdown">
					<a @click="goto('Music', i)" v-for="i in $store.state.subTypes.audio" class="navbar-item">
			 			{{i}}
					</a>
				</div>
			</div>
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link">
					<i class="fas fa-video"></i> <span class="type">Video</span>
				</a>
				<div class="navbar-dropdown">
					<a @click="goto('Video', i)"  v-for="i in $store.state.subTypes.video" class="navbar-item">
			  			{{i}}
					</a>
				</div>
			</div>
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link">
					<i class="fas fa-align-left"></i> <span class="type">Text</span>
				</a>
				<div class="navbar-dropdown">
					<a @click="goto('Text', i)"  v-for="i in $store.state.subTypes.text" class="navbar-item">
				  		{{i}}
					</a>
				</div>
			</div>
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link">
					<i class="far fa-images"></i> <span class="type">Images</span>
				</a>
				<div class="navbar-dropdown">
					<a @click="goto('Image', i)"  v-for="i in $store.state.subTypes.image" class="navbar-item">
			  			{{i}}
					</a>
				</div>
			</div>
		</div>
		<div class="navbar-end">
			<div class=" is-hidden-touch search control has-icons-left">
			   <input @keyup.enter="search()" v-model="query" class="input" type="text" placeholder="Search">
			   <span class="icon is-small is-left">
			   	<i class="fas fa-search"></i>
			   </span>
			</div>
			<ul ref="burgerMenu" class="burger-menu is-hidden-desktop">
				<div class="burger-header"><a href="/"><i class="fas fa-home"></i> <span class="type">Home</span></a></div>
				<div @click="openBurgerEl($refs.Music)" ref="Music" class="burger-header"><i class="fas fa-music"></i> <span class="type">Music</span></div>
				<ul class="burger-list">
					<li @click="goto('Music', i)" v-for="i in $store.state.subTypes.audio" class="burger-el">{{i}}</li>
				</ul>
				<div @click="openBurgerEl($refs.Video)" ref="Video" class="burger-header"><i class="fas fa-video"></i> <span class="type">Video</span></div>
				<ul class="burger-list">
					<li @click="goto('Video', i)" v-for="i in $store.state.subTypes.video" class="burger-el">{{i}}</li>
				</ul>
				<div @click="openBurgerEl($refs.Text)" ref="Text" class="burger-header"><i class="fas fa-align-left"></i> <span class="type">Text</span></div>
				<ul class="burger-list">
					<li @click="goto('Text', i)" v-for="i in $store.state.subTypes.text" class="burger-el">{{i}}</li>
				</ul>
				<div @click="openBurgerEl($refs.Images)" ref="Images" class="burger-header"><i class="far fa-images"></i> <span class="type">Images</span></div>
				<ul class="burger-list">
					<li @click="goto('Image', i)" v-for="i in $store.state.subTypes.image" class="burger-el">{{i}}</li>
				</ul>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
		name: "Navbar",
		data () {
			return {
				query: ''
			}
		},
		methods: {
			goto: function(type, subType){
				this.$router.push(`/types/${type}/${subType}`)
			},
			search: function () {
				if(this.query != " " && this.query != ""){
					this.$router.push(`/search/${this.query}`)
				}
			},
			openBurger(){
				this.$refs.burgerMenu.style.display = this.$refs.burgerMenu.style.display == 'block' ? 'none' : 'block';
			},
			openBurgerEl(el){
				el.nextElementSibling.style.display = el.nextElementSibling.style.display == 'block' ? 'none' : 'block';
			}
		}
	}
</script>

<style lang="sass" scoped>
	.type
		margin-left: 10px
	.search
		margin: 8px 20px 0px 0px
		min-width: 300px
	.burger-menu
		display: none
		text-align: center
	.burger-menu:last-child
	.burger-header
		cursor: pointer
		box-shadow: 0px 0px 3px #757678
		padding: 5px
		margin: 10px 30px 10px 30px
		border-radius: 5px
		z-index: 10
	.burger-el
		cursor: pointer
	.burger-list
		display: none
	@media screen and (max-width: 1023px)
		.search
			width: 100%
			margin-left: 15px
		a
			color: #424242
		.burger-menu
			padding-bottom: 10px
</style>