<template>
	<div>
		{{content}}
	</div>
</template>

<script>
	export default {
		name: "TextMaterial",
		props: ["content"]
	}
</script>

<style lang="sass" scoped>
	div
		padding: 10px
		background: #424242
		color: white
		height: 250px
		overflow: hidden
		text-overflow: ellipsis
</style>