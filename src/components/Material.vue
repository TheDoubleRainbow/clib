<template>
	<div class="file column is-narrow">
		<div class="file-header">
			<span v-if="data.type == 'Image'" :style="typeColor()" class="file-type"><i class="far fa-images"></i></span>
			<span v-if="data.type == 'Music'" :style="typeColor()" class="file-type"><i class="fas fa-music"></i></span>
			<span v-if="data.type == 'Video'" :style="typeColor()" class="file-type"><i class="fas fa-video"></i></span>
			<span v-if="data.type == 'Text'" :style="typeColor()" class="file-type"><i class="fas fa-align-left"></i></span>
			<span class="file-text">{{data.name}}</span>
		</div>
		<div class="file-body">
			<ImageMaterial v-if="data.type == 'Image'" :content="data.content"/>
			<TextMaterial v-if="data.type == 'Text'" :content="data.content"/>
			<VideoMaterial v-if="data.type == 'Video'" :content="data.content"/>
			<AudioMaterial v-if="data.type == 'Music'" :content="data.content"/>
		</div>
		<div :style="style" class="file-panel">
			<span class="panel-likes"><i class="far fa-thumbs-up"></i> {{data.social.likes}}</span>
			<span class="panel-views"><i class="fas fa-eye"></i> {{data.social.views}}</span>
			<span class="panel-comments"><i class="fas fa-comments"></i> {{data.social.comments}}</span>
		</div>
		<div @click="view" class="file-footer">
			View
		</div>
	</div>
</template>

<script>
	import Audio from './materialSpec/AudioMaterial';
	import Text from './materialSpec/TextMaterial';
	import Video from './materialSpec/VideoMaterial';
	import Image from './materialSpec/ImageMaterial';
	export default{
		name: "material",
		props: ['data'],
		components: {
			"AudioMaterial": Audio,
			"TextMaterial": Text,
			"VideoMaterial": Video,
			"ImageMaterial": Image
		},
		data () {
			return {
				style: this.data.type == "Video" ? "top: 255px" : "top: 255"
			}
		},
		methods: {
			typeColor: function (){
				return this.data.type == "Image" ? "background: #1CBBB0" : this.data.type == "Text" ? "background: #424242" : this.data.type == "Video" ? "background: #F25E50" : "background: #FD883D"
			},
			view: function(){
				this.$router.push(`/material/${this.data.id}`)
			}
		},
		created: function () {
			if(this.data.type == "Music"){
				this.style = "top: 255px";
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
		width: 400px
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
		transition: all 0.3s cubic-bezier(.25,.8,.25,1)
	.file:hover .file-panel
		top: 255px
	.file-body
		background: #EEF1EF
		height: 250px
	.file-type
		border-radius: 3px 0px 0px 0px
		background: #1CBBB0
		display: inline-block
		padding: 3px 5px 3px 5px
		color: white
		font-size: 14pt
		width: 35px
		margin-right: 5px
	.file-text
		font-size: 14pt
	.file-panel
		height: 30px
		width: 400px
		top: 285px
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
		border-radius: 0px 0px 3px 3px
	.file-footer:hover
		color: #2F69B9
	@media screen and (max-width: 1023px)
		.file
			width: 300px
			margin: auto
			margin: 20px 20px 20px 20px
		.file-panel
			width: 300px
	@media screen and (max-width: 769px)
		.file
			margin: auto
			margin-top: 20px
</style>