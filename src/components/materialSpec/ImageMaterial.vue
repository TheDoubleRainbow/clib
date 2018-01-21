<template>
	<div>
		<img :src="content" />
	</div>
</template>

<script>
	export default {
		props: ["content"],
		data () {
			return {
				
			}
		}
	}
</script>

<style lang="sass" scoped>
	div
		height: 200px
		text-align: center
		box-shadow: inset 0px 0px 5px #BCBFBF
	img
		height: 100%
		box-shadow: inset 0px 0px 1px black
</style>