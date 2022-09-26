<template>
  <div class="about">
    <section id="above_the_fold" class="above_the_fold">
      <h2 v-html="$t('about_page.title')"></h2>
      <p v-html="$t('about_page.about_page_text')"></p>
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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: $title-font;
    font-size: $font-size-large;

    h2 {
      color: $green;
      font-weight: $bold;
    }

    p {
      font-size: calc(2 * $font-size-medium);
      width: 45%;
      margin-right: calc(1 * $margin-large);
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