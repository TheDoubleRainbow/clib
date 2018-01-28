<template>
	<header>
		<div class="is-hidden-mobile column top">
			Top materials
		</div>
		<Slider class="is-hidden-mobile" />
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
		},
		mounted: function(){
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
			margin-top: 40px
			top: 0px
	@media screen and (max-width: 768px)
		.navbar
			margin-top: 0px

</style>