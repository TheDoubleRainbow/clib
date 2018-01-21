<template>
	<iframe width="300" height="170" :src="url" allow="encrypted-media"></iframe>
</template>

<script>
	export default {
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