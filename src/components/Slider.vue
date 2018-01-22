<template>
	<div class="recent-files columns is-centered">
		<div v-for="me in 'epam'" class="recent-file column is-2">
			<div class="recent-file-header">
				<span class="recent-file-type">Image</span>
				<span class="recent-file-name">An Interesting Picture</span>
			</div>
			<div class="recent-file-body">
			</div>
			<!--<div class="recent-file-footer">
				View
			</div>-->
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				materials: []
			}
		}
	}
</script>

<style lang="sass" scoped>
	.recent-file
		background: #F5F9FC
		border-radius: 3px
		padding: 0
		margin-left: 30px
		cursor: pointer
	.recent-file-body
		background: #5FA3B8
		height: 160px
		border-radius: 0px 0px 3px 3px
	.recent-file-type
		border-radius: 3px 0px 0px 0px
		background: #1CBBB0
		display: inline-block
		padding: 3px 5px 3px 5px
		color: white
	.recent-file-footer
		cursor: pointer
		text-align: center
		padding: 2px
		transition-duration: 0.3s
	.recent-file-footer:hover
		color: #2F69B9
</style>