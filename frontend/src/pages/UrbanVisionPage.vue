<template>
  <section id="urbanVision">
    <div id="above_the_fold">
      <div class="title">
        <h2>Urban vision</h2>
        <div class="line"></div>
        <p class="special_text" v-html="$t('urban_page.subtitle')"></p>
      </div>
      <img src="../assets/images/png/mac1.png" alt="" />
      <p>
        Urban vision est un studio de beatmaking associatif qui a pour but de
        réunir les jeunes issus de milieu défavoriser pour leur donner la
        possibilité d’apprendre et de composer de la musique gratuitement.
        <br />
        Nous avons eu pour but de réaliser toute l’UX/UI, le web design et la
        direction artistique du projet.
      </p>
    </div>
    <div id="graphic-charter">
      <h2>Graphic charter</h2>
      <div id="grid-chart">
        <img src="../assets/images/svg/afiche-le-studio-blanche.svg" alt="" />
        <img
          src="../assets/images/svg/affiche-le-studio-noir-horizontal.svg"
          alt=""
        />
        <img src="../assets/images/svg/affiche-le-studio-orange.svg" alt="" />
      </div>
      <h2>Résultas différents</h2>
      <div id="grid-results">
        <img
          src="../assets/images/svg/affiche-le-studio-orange-horizontal.svg"
          alt=""
        />
        <img src="../assets/images/svg/affiche-le-studio-noir.svg" alt="" />
      </div>
      <h2>Final</h2>
      <img src="../assets/images/svg/urban-vision-final.svg" alt="" />
      <div id="final">
        <img src="../assets/images/svg/urban-vision-final-site.svg" alt="" />
        <div id="right-img">
          <img
            src="../assets/images/svg/urban-vision-final-site-part-1.svg"
            alt=""
          />
          <img
            src="../assets/images/svg/urban-vision-final-site-part-2.svg"
            alt=""
          />
          <img
            src="../assets/images/svg/urban-vision-final-site-part-3.svg"
            alt=""
          />
        </div>
      </div>
    </div>

    <section id="contact" class="reveal desktop">
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

    <section id="contact-phone" class="phone-contact mobile">
      <div class="text">
        <p>
          <strong>Contact</strong> <br /><br />
          <a href="tel:07 62 61 07 41">07 62 61 07 41</a><br />
          <a href="mailto:nezaagency@gmail.com">nezaagency@gmail.com</a>
        </p>
      </div>
      <h2 class="phone-text">NEZA *</h2>
    </section>
  </section>
</template>

<script>
export default {
  name: "UrbanVision",
  mounted() {
    document.documentElement.scrollTop = 0;
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

#urbanVision {
  display: flex;
  flex-direction: column;
  align-items: center;

  #above_the_fold {
    width: calc(100vw - (2 * $gutter-size));
    display: flex;
    flex-direction: column;
    margin-top: calc(1.5 * $margin-xx-large);

    .title {
      width: 100%;
      margin-bottom: calc(1 * $margin-xx-large);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: flex-start;

      h2 {
        font-size: $font-size-title;
        font-family: $title-font;
      }

      .line {
        width: 50%;
        height: 1px;
        background-color: $black;
        margin-bottom: $margin-x-small;

        & + p {
          font-size: $font-size-medium;
        }
      }

      & + img {
        width: 90%;
        align-self: center;

        & + p {
          width: 80%;
          margin-top: calc(1.5 * $margin-large);
          font-size: calc($font-size-medium * 1.25);
        }
      }
    }
  }

  #graphic-charter {
    width: calc(100vw - (2 * $gutter-size));
    display: flex;
    flex-direction: column;
    margin-top: calc(1.5 * $margin-xx-large);

    h2 {
      font-size: $font-size-title;
      font-family: $title-font;
      position: relative;
      align-self: flex-start;

      &:nth-child(3),
      &:nth-child(5) {
        margin-top: calc(1.5 * $margin-xx-large);
      }

      &::after {
        content: "";
        width: 55%;
        border-top: 1px solid #000;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    #grid-chart {
      margin-top: $margin-xx-large;
      display: grid;
      column-gap: 20px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(auto, 1fr);

      img {
        width: 100%;
      }
    }

    #grid-results {
      margin-top: calc(1.5 * $margin-large);
      display: grid;
      column-gap: 20px;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(auto, 1fr);

      & + h2 + img {
        width: 25%;
        align-self: center;
        margin-top: calc(2 * $margin-x-large);
      }

      img {
        width: 100%;
      }
    }

    #final {
      margin-top: calc(2 * $margin-large);
      display: flex;
      align-items: flex-start;
      justify-content: center;
      column-gap: $margin-xx-large;

      #right-img {
        display: flex;
        flex-direction: column;
        row-gap: calc(1.5 * $margin-large);
      }

      img {
        width: 100%;
      }
    }
  }

  #contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: calc($margin-large * 3);
    margin-bottom: calc($margin-large * 3);
    width: calc(100vw - (2 * $gutter-size));
    transition: 300ms ease-in-out;

    @media screen and (max-width: 428px) {
      width: calc(100vw - (2 * $gutter-size-phone));
    }

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

  .phone-contact {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 428px) {
      display: flex !important;
    }
    .text {
      text-align: center;

      strong {
        font-size: $font-size-large;
      }

      a {
        text-decoration: none;
        font-size: $font-size-medium;
      }
    }

    h2 {
      font-size: 13rem;
      font-family: $title-font;
      margin-top: 42px;
    }
  }
}
</style>