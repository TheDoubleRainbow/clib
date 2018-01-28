<template>
	<div class="top-files columns is-centered">
		<div class="prevSlide" @click="changeSlide('prev')"><i class="arrow far fa-arrow-alt-circle-left"></i></div>
		<div @click=view(material.id) v-for="material in materials" :key="material.id" class="top-file is-narrow column">
			<div class="top-file-header">
				<span v-if="material.type == 'Image'" :sliderView="true" :style="typeColor(material)" class="file-type"><i class="far fa-images"></i></span>
				<span v-if="material.type == 'Music'" :sliderView="true" :style="typeColor(material)" class="file-type"><i class="fas fa-music"></i></span>
				<span v-if="material.type == 'Video'" :sliderView="true" :style="typeColor(material)" class="file-type"><i class="fas fa-video"></i></span>
				<span v-if="material.type == 'Text'" :sliderView="true" :style="typeColor(material)" class="file-type"><i class="fas fa-align-left"></i></span>
				<span class="top-file-name">{{material.name}}</span>
			</div>
			<div class="top-file-body">
				<ImageMaterial v-if="material.type == 'Image'" :sliderView="true" :content="material.content"/>
				<TextMaterial v-if="material.type == 'Text'" :sliderView="true" :content="material.content"/>
				<VideoMaterial v-if="material.type == 'Video'" :sliderView="true" :content="material.content"/>
				<AudioMaterial v-if="material.type == 'Music'" :sliderView="true" :content="material.content"/>
			</div>
			<!--<div class="recent-file-footer">
				View
			</div>-->
		</div>
		<div class="nextSlide" @click="changeSlide('next')"><i class="arrow far fa-arrow-alt-circle-right"></i></div>
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
				materials: [],
				rowMaterials: [],
				whileNum: 0,
				perSlide: 4,
				materialsNum: 8,
				pages: 0,
				page: 0,
				likes: []
			}
		},
		mounted: function () {
			window.addEventListener('resize', this.calcEls)
			this.calcEls();
		},
		beforeDestroy: function () {
			window.removeEventListener('resize', this.calcEls)
		},
		methods: {
			loadMaterials: function () {
				this.likes = [];
				this.rowMaterials = this.$store.state.materials
				this.whileNum = this.rowMaterials.length > this.perSlide ? this.perSlide : this.rowMaterials.length;
				for(let i = 0; i < this.rowMaterials.length; i++){
					this.likes.push(this.rowMaterials[i].social.likes*1);
				}
				this.likes.sort(function(a, b) {return a - b;});
				this.likes.reverse()
				this.likes = this.likes.splice(this.page*this.perSlide, this.perSlide)
				this.getTopMaterials()
				
			},
			getTopMaterials: function () {
				for(let i = 0; i < this.whileNum; i++){
					for(let j = 0; j < this.rowMaterials.length; j++){
						if(this.likes[i]){
							if(this.likes[i] == this.rowMaterials[j].social.likes){
								this.materials.push(this.rowMaterials[j]);
								this.likes.splice(i, 1)
							}
						}
					}
				}
				if(this.materials.length < this.whileNum){
					this.getTopMaterials()
				}
			},
			typeColor: function (data){
				return data.type == "Image" ? "background: #1CBBB0" : data.type == "Text" ? "background: #535454" : data.type == "Video" ? "background: #F25E50" : "background: #FD883D"
			},
			view: function(id){
				this.$router.push(`/material/${id}`)
			},
			changeSlide: function(direction) {
				if(direction == "next"){
					if(this.page<this.pages-1){
						this.materials = [];
						this.page++;
						this.loadMaterials()
					}
				}
				else{
					if(this.page != 0){
						this.materials = [];
						this.page--;
						this.loadMaterials()
					}
				}
			},
			calcEls: function() {
				this.perSlide = document.documentElement.clientWidth<1024 ? 2 : document.documentElement.clientWidth<1300 ? 3 : 4;
				this.pages = this.materialsNum/this.perSlide;
				this.materials = [];
				this.loadMaterials();
			}
		}
	}
</script>

<style lang="sass" scoped>
	.top-files
		text-align: center
		height: 194px
	.top-file
		background: #F5F9FC
		border-radius: 3px
		padding: 0
		margin: 15px
		cursor: pointer
		width: 280px;
		border-radius: 3px
		display: inline-block
	.top-file-body
		background: #E2E5E5
		height: 160px
		border-radius: 0px 0px 3px 3px
	.top-file-type
		border-radius: 3px 0px 0px 0px
		background: #1CBBB0
		display: inline-block
		padding: 3px 5px 3px 5px
		color: white
	.top-file-footer
		cursor: pointer
		text-align: center
		padding: 2px
		transition-duration: 0.3s
	.top-file-footer:hover
		color: #2F69B9
	.file-type
		border-radius: 3px 0px 0px 0px
		background: #1CBBB0
		display: inline-block
		padding: 3px 5px 3px 5px
		color: white
		font-size: 14pt
		width: 35px
		margin-right: 5px
	.top-file-header
		text-align: left
	.prevSlide, .nextSlide
		display: inline-block
		color: white
		cursor: pointer
		position: relative
		top: 80px
	.arrow
		height: 32px
		width: 32px
</style>