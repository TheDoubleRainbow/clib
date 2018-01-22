<template>
	<iframe width="400" height="220" :src="url" allow="encrypted-media"></iframe>
</template>

<script>
	export default {
		name: "VideoMaterial",
		props: ["content"],
		data () {
			return {
				url: `https://youtube.com/embed/${this.content.split("/")[3]}`
			}
		}
	}
</script>

<style lang="sass" scoped>

</style>