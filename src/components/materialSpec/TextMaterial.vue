<template>
	<div class="wrap">
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
	.wrap
		padding: 10px
		background: #424242
		color: white
		height: 250px
		overflow: hidden
		text-overflow: ellipsis
</style>