<template>
  <div id="app-content">
    <MainHeader :getSwitchStatus="getSwitchStatus"/>
    <router-view />
    <MainFooter/>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'app',
  
  data() {
    return {
      dark_mode: null,
    }
  },

  components: {
    MainHeader,
    MainFooter
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
  },
  mounted() {
    document.getElementById('description').style.display = 'none'
  },
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

  .line {
    filter: invert(100%);
  }

  img.dark {
    filter: invert(100%);
  }

  .cache {
    background-color: black !important;
  }
}

#app {
  // font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  
  #app-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
