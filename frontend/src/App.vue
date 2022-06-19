<template>
  <div>
    <MainHeader :getSwitchStatus="getSwitchStatus"/>
    <router-view />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
export default {
  name: 'app',
  
  data() {
    return {
      dark_mode: null,
    }
  },

  components: {
    MainHeader
  },
  methods: {
    getSwitchStatus(switchStatus) {
      this.dark_mode = switchStatus
      
      const body = document.body

      if (this.dark_mode === 'light') {
        if (body.classList.contains('dark')) {
          body.classList.add('light')
          body.classList.remove('dark')
        }
      } else if (this.dark_mode === 'dark') {
        if (body.classList.contains('light')) {
          body.classList.add('dark')
          body.classList.remove('light')
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/styles/_variables.scss';

body.light {
  background-color: $white;
  color: $black;

  a {
    color: $black;
  }
}

body.dark {
  background-color: $black;
  color: $white;

  a {
    color: $white;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
