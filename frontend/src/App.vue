<template>
  <MainHeader :getSwitchStatus="getSwitchStatus"/>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
export default {
  name: 'app',
  
  data() {
    return {
      dark_mode: '',
    }
  },

  components: {
    MainHeader
  },
  methods: {
    getSwitchStatus(switchStatus) {
      this.dark_mode = switchStatus
    }
  },
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
