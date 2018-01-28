<template>
	<div ref="wrap" class="wrap">
		<img :src="content" />
	</div>
</template>

<script>
	export default {
		props: ["content", "sliderView"],
		name: "ImageMaterial",
		data () {
			return {
				
			}
		},
		mounted: function(){
			if(this.sliderView){
				this.$refs.wrap.style.height = "160px"
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
		border-radius: 0px 0px 3px 3px
</style>