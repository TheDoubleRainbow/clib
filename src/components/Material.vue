<template>
	<div class="file column is-narrow">
		<div class="file-header">
			<span :style="typeColor()" class="file-type">{{data.type}}</span>
			<span class="file-text">{{data.name}}</span>
		</div>
		<div class="file-body">
			<ImageMaterial v-if="data.type == 'Image'" :content="data.content"/>
			<TextMaterial v-if="data.type == 'Text'" :content="data.content"/>
			<VideoMaterial v-if="data.type == 'Video'" :content="data.content"/>
			<AudioMaterial v-if="data.type == 'Music'" :content="data.content"/>
		</div>
		<div :style="style" class="file-panel">
			<span class="panel-likes">Likes: {{data.social.likes}}</span>
			<span class="panel-views">Views: {{data.social.views}}</span>
			<span class="panel-comments">Comments: {{data.social.comments}}</span>
		</div>
		<div class="file-footer">
			View
		</div>
	</div>
</template>

<script>
	export default{
		name: "material",
		props: ['data'],
		data () {
			return {
				style: this.data.type == "Video" ? "top: 200px" : ""
			}
		},
		methods: {
			typeColor: function (){
				return this.data.type == "Image" ? "background: #1CBBB0" : this.data.type == "Text" ? "background: #424242" : this.data.type == "Video" ? "background: #F25E50" : "background: #FD883D"
			}
		}
	}
</script>

<style lang="sass" scoped>
	.file
		background: #F5F9FC
		border-radius: 3px
		padding: 0
		margin: 20px 20px 20px 20px
		width: 300px
		box-shadow: 0px 0px 10px #BDC2C5
	.file:hover .file-panel
		top: 200px
	.file-body
		background: #EEF1EF
		height: 200px
	.file-type
		border-radius: 3px 0px 0px 0px
		background: #1CBBB0
		display: inline-block
		padding: 3px 5px 3px 5px
		color: white
		width: 55px
		margin-right: 5px
	.file-panel
		height: 30px
		width: 300px
		top: 230px
		background: white
		position: absolute
		text-align: center
		transition-duration: 0.3s
		z-index: 2
	.file-panel span
		display: inline-block
		margin: 0px 5px 0px 5px
		font-size: 11pt
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