<template>
	<nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
		</div>
		<div class="navbar-menu">
			<a class="navbar-item">
			  Home
			</a>
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link">
					Music
				</a>
				<div class="navbar-dropdown is-boxed">
					<a v-for="i in a" class="navbar-item">
			 			Type
					</a>
				</div>
			</div>
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link">
					Video
				</a>
				<div class="navbar-dropdown is-boxed">
					<a v-for="i in a" class="navbar-item">
			  			Type
					</a>
				</div>
			</div>
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link">
					Text
				</a>
				<div class="navbar-dropdown is-boxed">
					<a v-for="i in a" class="navbar-item">
				  		Type
					</a>
				</div>
			</div>
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link">
					Pictures
				</a>
				<div class="navbar-dropdown is-boxed">
					<a v-for="i in a" class="navbar-item">
			  			Type
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: "Navbar",
		data () {
			return {
				a: [,,,],
				SubTypes: {
					music: [],
					audio: [],
					video: [],
					text: []
				},
			}
		},
		methods: {
			
		},
		mounted: function(){
			this.loadSubTypes()
		}
	}
</script>

<style lang="sass" scoped>
	
</style>