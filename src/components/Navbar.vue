<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
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
			<div class="search control has-icons-left">
			   <input @keyup.enter="search()" v-model="query" class="input" type="text" placeholder="Search">
			   <span class="icon is-small is-left">
			   	<i class="fas fa-search"></i>
			   </span>
			</div>
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
				console.log(this.query)
				this.$router.push(`/search/${this.query}`)
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
</style>