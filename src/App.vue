<template>
  <div id="app">
  	<Top/>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background: #EEF1EF
</style>
