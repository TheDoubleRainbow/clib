<template>
	<div class="materials container">
		<div class="breadcrumb">{{message}}</div>
		<div class="columns is-centered is-multiline">
			<Material v-for="material in materials" :data="material" :key="material.id" />
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				materialsRow: this.$store.state.materials,
				materials: [],
				type: "",
				subType: "",
				message: "Welcome to content library"
			}
		},
		methods: {
			loadMaterials: function () {
				this.type = this.$route.params.type;
				this.subType = this.$route.params.subtype;
				if(this.subType != "All"){
					for(let el in this.materialsRow){
						if(this.materialsRow[el].type == this.type && this.materialsRow[el].subType == this.subType){
							this.materials.push(this.materialsRow[el])
						}
					}
				}else{
					for(let el in this.materialsRow){
						if(this.materialsRow[el].type == this.type){
							this.materials.push(this.materialsRow[el])
						}
					}
				}
				if(this.materials == []){
					this.message = "There is no content in selected category"
				}
				else{
					if(this.subtype == "All"){
						this.message = `You see all ${this.type} content` 
					}
					else{
						this.message = `You see ${this.subType} content in ${this.type} category` 
					}
				}
			},
			loadSearchQuery: function () {
				let reg = new RegExp(this.$route.params.query, "i");
				for(let el in this.materialsRow){
					if(this.materialsRow[el].name.match(reg) || this.materialsRow[el].subType.match(reg) || this.materialsRow[el].type.match(reg)){
						this.materials.push(this.materialsRow[el])
					}
				}
				if(this.materials.length != 0){
					this.message = this.materials.length > 1 ? `Done! We found ${this.materials.length} files for you!` : `Done! We found one file for you!`
				}
				else{
					this.message = "We didn't find anything :("
				}
			}
		},
		created: function () {
			if(this.$route.params.type){
				this.loadMaterials();
			}
			else if(this.$route.params.query){
				this.loadSearchQuery();
			}
			else{
				this.materials = this.materialsRow
			}
		}
	}
</script>

<style lang="sass" scoped>
	.materials
		margin-top: 35px
	.breadcrumb
		margin-bottom: 10px
		text-align: center
		display: block
		font-size: 14pt
		color: #979B99
</style>