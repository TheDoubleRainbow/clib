<template>
	<div ref="wrap" class="wrap">
		{{content}}
	</div>
</template>

<script>
	export default {
		name: "TextMaterial",
		props: ["content", "sliderView"],
		mounted: function () {
			if(this.sliderView){
				this.$refs.wrap.style.width = "280px";
				this.$refs.wrap.style.height = "160px";
				this.$refs.wrap.style.background = "#E2E5E5";
				this.$refs.wrap.style.color = "black"
			}
		}
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
		border-radius: 0px 0px 3px 3px
</style>