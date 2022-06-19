<template>
  <div class="home">

    <section id="above_the_fold">
      <h1><span class="special_text">Marconil</span> <span v-html="$t('home_page.above_the_fold.title')"></span></h1>
      <button v-html="$t('home_page.above_the_fold.btn')"></button>
    </section>

    <section id="work">
      <h2 v-html="$t('home_page.work.title')"></h2>
      <h3 v-html="$t('home_page.work.subtitle')"></h3>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'Home-page',
    mounted() {
      const above_the_fold = document.getElementById('above_the_fold')
      const header = document.querySelector('.header').offsetHeight
      above_the_fold.style.height = `calc(100vh - ${header}px - 40px)`
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/_variables.scss';

  .home {

    #above_the_fold {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      
      h1 {
      font-size: $font-size-l-large;
    }

    button {
      background-color: $green;
      padding: 15px 25px;
      border: none;
      color: $white;
      font-size: $font-size-normal;
      margin-top: 20px;
    }
    }

    #work {

      h2 {
        font-size: $font-size-x-large;
        text-align: right;
      }

      h3 {
        font-size: $font-size-medium;
        color: $green;
        text-align: right;
      }
    }
  }
</style>