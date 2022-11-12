<template>
  <section id="Florame">
    <div id="above_the_fold">
      <div class="title">
        <h2>Florame</h2>
        <div class="line"></div>
        <p class="special_text">
          Réalisation de l'UX pour un diagnostic de peau
        </p>
      </div>
      <img src="../assets/images/RESSOURCE/FLORAME/mockup_florame.png" alt="" />
      <p>
        Florame est une société proposant des produits de soins et bien-être.
        Nous étions mis au défis de réaliser une interface sur téléphone pour un
        diagnostic de peau en seulement 3 jours. En fonction des réponses du
        client, des produits adapté devaient être proposé.
      </p>
    </div>
    <div id="graphic-charter">
      <h2>Final</h2>
      <div id="grid-chart">
        <img src="../assets/images/RESSOURCE/FLORAME/SCREEN_FLORAME/FLORAME1.png" alt="" />
        <img src="../assets/images/RESSOURCE/FLORAME/SCREEN_FLORAME/FLORAME2.png" alt="" />
        <img src="../assets/images/RESSOURCE/FLORAME/SCREEN_FLORAME/FLORAME3.png" alt="" />
        <img src="../assets/images/RESSOURCE/FLORAME/SCREEN_FLORAME/FLORAME4.png" alt="" />
        <img src="../assets/images/RESSOURCE/FLORAME/SCREEN_FLORAME/FLORAME5.png" alt="" />
        <img src="../assets/images/RESSOURCE/FLORAME/SCREEN_FLORAME/FLORAME6.png" alt="" />
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

#Florame {
  display: flex;
  flex-direction: column;
  align-items: center;

  #above_the_fold {
    width: calc(100vw - (2 * $gutter-size));
    display: flex;
    flex-direction: column;
    margin-top: calc(1.5 * $margin-xx-large);

    .title {
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
          width: 50%;
          margin-top: calc(1.5 * $margin-large);
          font-size: $font-size-medium;
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
        margin-top: calc(1.5 * $margin-large);
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(auto, 1fr);
        column-gap: $margin-small;

      img {
        width: 100%;
        border: 1px solid black;
      }
    }
  }

  #contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: calc(2 * $margin-xx-large);
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
}
</style>