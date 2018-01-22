<template>
	<div>
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
	div
		height: 250px
		text-align: center
	img
		height: 100%
</style>