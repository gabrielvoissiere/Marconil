<template>
  <div class="about">
    <section id="above_the_fold" class="above_the_fold">
      <!-- <router-link to="/about_page" -->
      <router-link to="/about"
        ><div class="line"></div>
        <h2 v-html="$t('about_page.title')"></h2
      ></router-link>
      <h3 v-html="$t('about_page.text')"></h3>
      <!-- <router-link to="/approche_page" -->
      <router-link to="/about"
        ><div class="line"></div>
        <h2 v-html="$t('about_page.title_bis')"></h2
      ></router-link>
    </section>

    <section id="contact" class="reveal">
      <div class="title-box">
        <div class="title reveal-1">
          <img class="dark" src="../assets/images/svg/right-arrow.svg" alt="" />
          <a
            href="mailto:nezaagency@gmail.com"
            v-html="$t('home_page.contact.title')"
          ></a>
        </div>
        <div class="line reveal-2" />
      </div>
      <h3 class="reveal-3" v-html="$t('home_page.contact.subtitle')"></h3>
    </section>

    <h3 id="sentence" class="reveal">
      <span
        class="special_text reveal-1"
        v-html="$t('home_page.sentence.first')"
      ></span
      ><br /><span
        class="reveal-2"
        v-html="$t('home_page.sentence.second')"
      ></span>
    </h3>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  mounted() {
    const above_the_fold = document.getElementById("above_the_fold");
    const header = document.querySelector(".header").offsetHeight;
    above_the_fold.style.height = `calc(100vh - ${header}px - 30px)`;
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.about {
  display: flex;
  flex-direction: column;
  align-items: center;

  #above_the_fold {
    width: calc(100vw - (2 * $gutter-size));
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    font-family: $title-font;
    font-size: 2.8rem;

    a {
      text-decoration: none;
      position: relative;

      .line {
        position: absolute;
        bottom: -10px;
        width: 30%;
        height: 2px;
        background-color: $green;
        transition: 300ms ease-in-out;
      }

      &:hover {
        cursor: pointer;
        color: $green;
        transition: 200ms ease-in-out;

        .line {
          width: 100%;
        }
      }

      &:first-child {
        margin-right: calc(4 * $margin-large);
      }

      &:last-child {
        margin-right: calc(4 * $margin-large);
      }
    }

    h3 {
      align-self: flex-start;
      font-size: 2.8rem;
    }
  }

  #contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: calc($margin-large * 3);
    width: calc(100vw - (2 * $gutter-size));
    transition: 300ms ease-in-out;

    h3 {
      font-size: $font-size-medium;
      color: $green;
      text-align: left;
      margin-left: 118px;
    }

    .title-box {
      font-size: $font-size-large;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .title {
        display: flex;
        font-family: $title-font;

        a {
          text-decoration: none;
          font-size: 1.5em;
        }

        img {
          width: 88px;
          margin-right: $margin-normal;
          transition: 300ms ease-in-out;
        }
      }

      .line {
        height: 1px;
        background-color: $black;
        width: 247px;
        margin-top: $margin-x-small;
        margin-bottom: $margin-small;
        margin-left: 118px;
      }
    }

    &:hover {
      transform: translateX(2%);
    }

    &:hover img {
      transform: translateX(-20%);
    }
  }

  #sentence {
    width: calc(100vw - (2 * $gutter-size));
    font-size: $font-size-large;
    font-weight: 300;
    font-family: $title-font;
  }
}
</style>