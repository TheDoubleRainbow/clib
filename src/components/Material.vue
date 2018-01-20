<template>
	<div class="file column is-narrow">
		<div class="file-header">
			<span class="file-type">Image</span>
			<span class="file-text">An Interesting Picture</span>
		</div>
		<div class="file-body">
		</div>
		<div class="file-panel">
			<span class="panel-likes">Likes: 69</span>
			<span class="panel-views">Views: 228</span>
			<span class="panel-comments">Comments: 10</span>
		</div>
		<div class="file-footer">
			View
		</div>
	</div>
</template>

<script>
	export default{
		name: "material",
		data () {
			return {

			}
		}
	}
</script>

<style lang="sass" scoped>
	.file
		background: #F5F9FC
		border-radius: 3px
		padding: 0
		margin: 20px 30px 20px 30px
		width: 380px
		box-shadow: 0px 0px 10px #BDC2C5
	.file:hover .file-panel
		top: 200px
	.file-body
		background: #5FA3B8
		height: 200px
	.file-type
		border-radius: 3px 0px 0px 0px
		background: #1CBBB0
		display: inline-block
		padding: 3px 5px 3px 5px
		color: white
		margin-right: 5px
	.file-panel
		height: 30px
		width: 380px
		top: 230px
		background: white
		position: absolute
		text-align: center
		transition-duration: 0.3s
		z-index: 2
	.file-panel span
		display: inline-block
		margin: 0px 15px 0px 15px
		padding-top: 3px
	.file-footer
		cursor: pointer
		text-align: center
		background: #F5F9FC
		font-size: 14pt
		padding: 2px
		transition-duration: 0.3s
		position: relative
		z-index: 3
	.file-footer:hover
		color: #2F69B9
</style>