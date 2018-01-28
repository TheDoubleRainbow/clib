<template>
	<div ref="wrap" class="wrap">
		<div v-if="!sliderView" class="volume">
			<div class="vol-img-wrapper"><img @click="switchVol()" class="vol-img" :src="volumeImg"/></div>
			
		</div>
		<div v-if="!sliderView" class="play" @click="play()"><img class="playButton" :src="playImg" /></div>
		<div v-if="!sliderView"@click="timelineChange($event)" ref="timeline" class="timeline"><div ref="playhead" class="playhead"></div></div>
		<audio v-if="!sliderView" volume="0.5" ref="audio" class="player">
			<source :src="content" type="audio/mpeg">
		</audio>
		<div v-if="sliderView">
			<div ref="playB" class="playSlider" ><img class="playButton" src="static/play.png" /></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "AudioMaterial",
		props: ["content", "sliderView", "full"],
		data () {
			return {
				playState: false,
				playImgs: ["static/play.png", "static/pause.png"],
				playImg: "static/play.png",
				volumeMuted: false,
				volumeImgs: ["static/vol-max.png", "static/vol-muted.png"],
				volumeImg: "static/vol-max.png",
				upd: ''
			}
		},
		methods: {
			play () {
				if(this.playState){
					this.$refs.audio.pause();
					this.playState = false;
					this.playImg = this.playImgs[0]
				}else{
					this.$refs.audio.play();
					this.playState = true;
					this.playImg = this.playImgs[1]
				}
			},
			switchVol () {
				if(this.volumeMuted){
					this.$refs.audio.volume = 0.5;
					this.volumeMuted = false;
					this.volumeImg = this.volumeImgs[0]
				}else{
					this.$refs.audio.volume = 0;
					this.volumeMuted = true;
					this.volumeImg = this.volumeImgs[1]
				}
			},
			timelineChange (e) {
				this.$refs.audio.currentTime = e.offsetX/this.$refs.timeline.clientWidth*this.$refs.audio.duration;
				this.$refs.playhead.style.marginLeft = e.offsetX+"px"
			},
			timelineUpdate () {
				if(this.$refs.playhead){
					this.$refs.playhead.style.marginLeft = this.$refs.audio.currentTime/this.$refs.audio.duration*this.$refs.timeline.clientWidth+"px";
				}
				else{
					clearInterval(this.upd)
				}
			}
		},
		mounted : function () {
			this.upd = setInterval(this.timelineUpdate, 1000)
			if(this.sliderView){
				this.$refs.wrap.style.height = "160px";
				this.$refs.wrap.style.width = "280px";
				this.$refs.wrap.style.borderRadius = "0px 0px 3px 3px";
				this.$refs.playB.style.marginRight = "160px";
			}
		}
	}
</script>

<style lang="sass" scoped>
	.wrap
		background: #FD883D
		height: 250px
		width: 400px
		margin: 0 auto
	.playButton
		height: 90px
		width: 90px
	.playSlider
		position: relative
		top: 35px
		left: 90px
	.volume
		display: inline-block
		position: relative
		padding-left: 10px
		top: -50px
	.play
		display: inline-block
		position: relative
		top: 75px
		left: 110px
	.vol-img
		height: 25px
		width: 25px
	.vol-button
		width: 10px
		height: 10px
		background: white
		border-radius: 100%
		margin-left: 2px
		margin-top: 6px
	.timeline
		background: white
		width: 380px
		margin: 0 auto
		height: 16px
		border-radius: 16px
		padding: 1px 0px 0px 2px
		position: relative
		top: 100px
		transition-duration: 0.3s
	.playhead
		height: 14px
		width: 14px
		background: #FD883D
		border-radius: 100%
	@media screen and (max-width: 1023px)
		.wrap
			width: 300px
		.timeline
			width: 260px
		.play
			top: 75px
			left: 65px

</style>