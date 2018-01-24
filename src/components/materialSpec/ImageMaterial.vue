<template>
	<div class="wrap">
		<img :src="content" />
	</div>
</template>

<script>
	export default {
		props: ["content"],
		name: "ImageMaterial",
		data () {
			return {
				
			}
		}
	}
</script>

<style lang="sass" scoped>
	.wrap
		height: 250px
		text-align: center
	img
		height: 100%
</style>