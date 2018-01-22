<template>
	<div class="wrap">
		<div class="volume">
			<div class="vol-img-wrapper"><img @click="switchVol()" class="vol-img" :src="volumeImg"/></div>
			
		</div>
		<div class="play" @click="play()"><img class="playButton" :src="playImg" /></div>
		<div @click="timelineChange($event)" ref="timeline" class="timeline"><div ref="playhead" class="playhead"></div></div>
		<audio volume="0.5" ref="audio" class="player">
			<source :src="content" type="audio/mpeg">
		</audio>
	</div>
</template>

<script>
	export default {
		name: "AudioMaterial",
		props: ["content"],
		data () {
			return {
				playState: false,
				playImgs: ["static/play.png", "static/pause.png"],
				playImg: "static/play.png",
				volumeMuted: false,
				volumeImgs: ["static/vol-max.png", "static/vol-muted.png"],
				volumeImg: "static/vol-max.png"
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
				this.$refs.audio.currentTime = e.offsetX/380*this.$refs.audio.duration;
				this.$refs.playhead.style.marginLeft = e.offsetX+"px"
			},
			timelineUpdate () {
				this.$refs.playhead.style.marginLeft = this.$refs.audio.currentTime/this.$refs.audio.duration*380+"px";
			}
		},
		mounted : function () {
			setInterval(this.timelineUpdate, 1000)
		}
	}
</script>

<style lang="sass" scoped>
	.wrap
		background: #FD883D
		height: 250px
	.playButton
		height: 90px
		width: 90px
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
		margin-left: 10px
		height: 16px
		border-radius: 16px
		padding: 1px 0px 0px 2px
		position: relative
		top: 120px
		transition-duration: 0.3s
	.wrap:hover .timeline
		top: 90px
	.playhead
		height: 14px
		width: 14px
		background: #FD883D
		border-radius: 100%

</style>