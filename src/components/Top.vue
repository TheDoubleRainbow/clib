<template>
	<header>
		<div class="columns is-centered">
			<div class="column recent">
				Recent files
			</div>
		</div>
		<Slider />
		<Navbar />
	</header>
</template>

<script>
	import Slider from './Slider'
	import Nav from './Navbar'
	export default{
		name: "Top",
		data () {
			return {
				a: [,,,,]
			}
		},
		components: {
			"Navbar": Nav,
			"Slider": Slider
		}
	}
</script>

<style lang="sass" scoped>
	header
		background: #424242
		height: 350px
		font-size: 12pt
	.recent
		color: white
		text-align: center
		font-size: 20pt
		margin: 10px 0px 15px
	.navbar
		top: 25px
		box-shadow: 0px 0px 6px #979797

</style>