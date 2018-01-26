<template>
	<div class="container">
		<div class="wrapper">
			<div class="breadcrumb">{{message}}</div>
			<div class="column col is-9-desktop is-12-touch">
				<div class="columns is-multiline">
					<div v-if="content" class="column data is-5">
						<table class="table is-fullwidth ">
							<tbody>
								<tr>
									<td>Title:</td>
									<td>{{content.name}}</td>
								</tr>
								<tr>
									<td>Type:</td>
									<td>{{content.type}}</td>
								</tr>
								<tr>
									<td>Sub type:</td>
									<td>{{content.subType}}</td>
								</tr>
								<tr>
									<td>Keywords:</td>
									<td>{{content.keywords}}</td>
								</tr>
								<tr>
									<td>Likes:</td>
									<td>{{content.social.likes}}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div v-if="content" class="column visual is-7">
						<ImageMaterial v-if="content.type == 'Image'" :full="true" :content="content.content"/>
						<TextMaterial v-if="content.type == 'Text'" :full="true"  :content="content.content"/>
						<VideoMaterial v-if="content.type == 'Video'" :full="true"  :content="content.content"/>
						<AudioMaterial v-if="content.type == 'Music'" :full="true"  :content="content.content"/>
					</div>
				</div>
			</div>
			<div class="column col social is-9-desktop is-12-touch">
				<div class="likeButton"><i class="far fa-thumbs-up"></i> <span class="likeText">Like</span></div>
			</div>
			<div class="column col comments is-9-desktop is-12-touch">
				 <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
			</div>
		</div>
	</div>
</template>

<script>
	import Audio from './materialSpec/AudioMaterial';
	import Text from './materialSpec/TextMaterial';
	import Video from './materialSpec/VideoMaterial';
	import Image from './materialSpec/ImageMaterial';
	export default {
		components: {
			"AudioMaterial": Audio,
			"TextMaterial": Text,
			"VideoMaterial": Video,
			"ImageMaterial": Image
		},
		data () {
			return {
				content: false,
				message: ''
			}
		},
		methods: {
			getContentent: function () {
				let id = this.$route.params.id;
				let materials = this.$store.state.materials;
				for(let el in materials){
					if(materials[el].id == id){
						this.content = materials[el];
						this.message = `This is ${this.content.name} material from ${this.content.type} category.`
					}
				}
				if(this.content == undefined){
					this.message = "Error while loading material"
					console.error("Error while loading material")
				}
			}
		},
		mounted: function(){
			this.getContentent()
		}

	}
</script>

<style lang="sass" scoped>
	.wrapper
		margin-top: 30px
	.columns
		background: white
		border-radius: 3px
	.col
		border-radius: 3px
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
		margin: 0 auto
		margin-top: 15px
	.data
		font-size: 14pt
		margin-top: 5px
	.wrap
		border-radius: 3px
	.wrapper
		margin-bottom: 20px
	.likeText
		margin-left: 10px
	.likeTextLeft
		margin-right: 10px
	.likeButton
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
		transition: all 0.3s cubic-bezier(.25,.8,.25,1)
		display: inline-block
		padding: 5px 10px 5px 10px
		border-radius: 3px
		cursor: pointer
	.likeButton:hover
		box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)
	.breadcrumb
		margin-bottom: 0px
		text-align: center
		display: block
		font-size: 14pt
		color: #979B99
	@media screen and (max-width: 1023px)
		.wrapper
			margin-top: 10px	

</style>