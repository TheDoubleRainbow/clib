<template>
	<div class="wrap">
		<div class="volume">
			<div class="vol-img-wrapper"><img class="vol-img" src="static/vol-max.png"/></div>
			<div class="vol-button"></div>
			<div class="vol-button"></div>
			<div class="vol-button"></div>
			<div class="vol-button"></div>
			<div class="vol-button"></div>
		</div>
		<div class="play" @click="play()"><img class="playButton" :src="playImg" /></div>
		<div class="timeline"><div class="playhead"></div></div>
		<audio class="player">
			<source :src="content" type="audio/mpeg">
		</audio>
	</div>
</template>

<script>
	export default {
		props: ["content"],
		data () {
			return {
				playState: false,
				playImgs: ["static/play.png", "static/pause.png"],
				playImg: "static/play.png"
			}
		},
		methods: {
			play () {
				if(this.playState){
					document.querySelector(".player").pause();
					this.playState = false;
					this.playImg = this.playImgs[0]
				}else{
					document.querySelector(".player").play();
					this.playState = true;
					this.playImg = this.playImgs[1]
				}
			}
		}
	}
</script>

<style lang="sass" scoped>
	.wrap
		background: #FD883D
		height: 200px
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
		top: 35px
		left: 70px
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
		width: 280px
		margin-left: 10px
		height: 16px
		border-radius: 16px
		padding: 1px 0px 0px 2px
		position: relative
		top: -10px
		transition-duration: 0.3s
	.wrap:hover .timeline
		top: -30px
	.playhead
		height: 14px
		width: 14px
		background: #FD883D
		border-radius: 100%
</style>