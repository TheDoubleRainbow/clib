<template>
	<div class="materials container">
		<div class="columns is-centered is-multiline">
			<Material />
			<Material />
			<Material />
			<Material />
			<Material />
			<Material />
			<Material />
		</div>
	</div>
</template>

<script>
	export default{
		name: "materials",
		data () {
			return {
				key: 0,
				materials: [,,,,,,,,,]
			}
		}
	}
</script>

<style lang="sass" scoped>
	.materials
		margin-top: 65px
</style>