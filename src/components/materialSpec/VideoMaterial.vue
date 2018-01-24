<template>
	<div class="wrapy">
		<iframe ref="video" class="wrap" width="400" height="220" :src="url" allow="encrypted-media"></iframe>
	</div>
</template>

<script>
	export default {
		name: "VideoMaterial",
		props: ["content", "full", "sliderView"],
		data () {
			return {
				url: `https://youtube.com/embed/${this.content.split("/")[3]}`
			}
		},
		mounted: function () {
			if(this.full){
				this.$refs.video.style.width = "450px"
				this.$refs.video.style.height = "250px"

			}
			if(this.sliderView){
				this.$refs.video.style.width = "280px"
				this.$refs.video.style.height = "160px"
			}
		}
	}
</script>

<style lang="sass" scoped>
	.wrapy
		text-align: center
</style>