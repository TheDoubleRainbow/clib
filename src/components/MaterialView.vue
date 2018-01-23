<template>
	<div class="wrapper container">
		<div class="columns is-centered">
			<div class="column file is-9-desktop is-12-touch">
				<div class="columns is-multiline">
					<div class="column data is-4">
						<div class="data-el">Title: {{content.name}}</div>
						<div class="data-el">Type: {{content.type}}</div>
						<div class="data-el">Sub type: {{content.subType}}</div>
					</div>
					<div class="column visual is-8">
						<ImageMaterial v-if="content.type == 'Image'" :content="content.content"/>
						<TextMaterial v-if="content.type == 'Text'" :content="content.content"/>
						<VideoMaterial v-if="content.type == 'Video'" :content="content.content"/>
						<AudioMaterial v-if="content.type == 'Music'" :content="content.content"/>
					</div>
					<div class="column social is-12">
						social
					</div>
					<div class="column comments is-12">
						comments
					</div>
				</div>
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
				content: undefined
			}
		},
		methods: {
			getContentent: function () {
				let id = this.$route.params.id;
				let materials = this.$store.state.materials;
				for(let el in materials){
					if(materials[el].id == id){
						this.content = materials[el];
					}
				}
				if(this.content == undefined){
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
		margin-top: 55px
	.file
		border-radius: 3px
		box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
</style>