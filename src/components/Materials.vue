<template>
	<div class="materials container">
		<div class="columns is-centered is-multiline">
			<Material v-for="material in $store.state.materials" :data="material" :key="material.name" />
		</div>
	</div>
</template>

<script>
	export default{
		name: "materials"
	}
</script>

<style lang="sass" scoped>
	.materials
		margin-top: 65px
</style>