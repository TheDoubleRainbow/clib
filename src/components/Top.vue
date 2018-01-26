<template>
	<header>
		<div class="is-hidden-touch column top">
			Top materials
		</div>
		<Slider class="is-hidden-touch" />
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
		font-size: 12pt
	.top
		color: white
		text-align: center
		font-size: 20pt
		margin: 0px 15px
	.navbar
		top: 25px
		box-shadow: 0px 0px 6px #979797
	@media screen and (max-width: 1023px)
		.navbar
			top: 0px

</style>