<template>
	<div>
		{{content}}
	</div>
</template>

<script>
	export default {
		props: ["content"]
	}
</script>

<style lang="sass" scoped>
	div
		padding: 10px
		background: #424242
		color: white
		height: 200px
		overflow: hidden
		text-overflow: ellipsis
</style>