<template>
  <MainHeader />
</template>

<script>
import MainHeader from './components/MainHeader.vue'
export default {
  name: 'app',
  components: {
    MainHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>
