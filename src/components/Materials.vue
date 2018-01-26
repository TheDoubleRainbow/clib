<template>
	<div class="materials container">
		<div class="breadcrumb">{{message}}</div>
		<div class="columns is-centered is-multiline">
			<Material v-for="material in materials" :data="material" :key="material.id" />
		</div>
		<nav v-if="materialsRow.length>9" class="pagination is-centered" role="navigation" aria-label="pagination">
			  <a v-if="currentPage!=1" @click="changePage('prev')" class="pagination-previous">Previous</a>
			  <a v-if="currentPage!= pagesNum" @click="changePage('next')" class="pagination-next">Next page</a>
			  <ul class="pagination-list">
			    <li><a @click="setPage(page)" v-for="page in pages" :class="isActive(page)" aria-label="Goto page 1">{{page}}</a></li>
			  </ul>
		</nav>
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
				message: "Welcome to content library",
				currentPage: 1,
				elementsPerPage: 9,
				pagesNum: 0,
				pages: []
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
					this.materialsRow = this.materials;
				}else{
					for(let el in this.materialsRow){
						if(this.materialsRow[el].type == this.type){
							this.materials.push(this.materialsRow[el])
						}
					}
					this.materialsRow = this.materials;
				}
				if(this.materials == []){
					this.message = "There is no content in selected category"
				}
				else{
					if(this.subtype == "All"){
						this.message = `This is the all ${this.type} content`;
						this.pagination();
					}
					else{
						this.message = `This is the ${this.subType} content in ${this.type} category`;
						this.pagination()
					}
				}
			},
			loadSearchQuery: function () {
				let reg = new RegExp(this.$route.params.query, "i");
				for(let el in this.materialsRow){
					if(this.materialsRow[el].name.match(reg) || this.materialsRow[el].subType.match(reg) || this.materialsRow[el].keywords.match(reg) || this.materialsRow[el].type.match(reg)){
						this.materials.push(this.materialsRow[el])
					}
				}
				this.materialsRow = this.materials;
				if(this.materials.length != 0){
					this.message = this.materials.length > 1 ? `Done! We found ${this.materials.length} files for you!` : `Done! We found one file for you!`;
					this.pagination()
				}
				else{
					this.message = "We didn't find anything :("
				}
			},
			pagination: function () {
				this.materials = [];
				for(let i = this.currentPage*this.elementsPerPage-9; i < this.currentPage*this.elementsPerPage; i++){
					if(this.materialsRow[i]){
						this.materials.push(this.materialsRow[i]);
					}
				}
			},
			getPaginationNumbers: function () {
				this.pagination()
				this.pagesNum = Math.ceil(this.materialsRow.length/this.elementsPerPage);
				for(let i = 0; i < this.pagesNum; i++){
					this.pages.push(i+1)
				}
			},
			setPage: function(page){
				this.currentPage = page;
				this.pagination();
			},
			changePage: function(type){
				type=="next" ? this.currentPage++ : this.currentPage--;
				this.pagination();
			},
			isActive: function(page){
				return this.currentPage == page ? "pagination-link is-current" : "pagination-link"
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
				this.getPaginationNumbers();
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
	.pagination
		max-width: 700px
		margin: auto
		margin-bottom: 20px
		color: #424242
	.pagination-link
		color: #424242
	.is-current
		color: white
		background: #424242
		border: none
	.pagination-previous, .pagination-next
		color: #424242
	@media screen and (max-width: 1023px)
		.materials
			margin-top: 10px	

</style>