<template>
<div id="app">
  <NavBar></NavBar>
  <router-view></router-view>

</div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components : {
    'NavBar': NavBar
  }
}
</script>

<style>
</style>
