<template>
  <div class="footer desktop">
    <div id="text">
      <div class="text-box">
        <span v-html="$t('footer.title')"></span>
        <p class="special_text">ウェブデザイン ウェブ開発</p>
      </div>
      <div class="text-box">
        <span class="special_text" v-html="$t('footer.contact')"></span>
        <a :href="'tel:' + phone">{{ phone }}</a>
        <a :href="'mailto:' + email">{{ email }}</a>
      </div>
    </div>
    <h2 class="phone-text">NEZA *</h2>
    <img
      id="bottom-text"
      src="../assets/images/svg/footer-bottom-text.svg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "MainFooter",
  data() {
    return {
      email: "nezaagency@gmail.com",
      phone: "+33 (0) 7 62 61 07 41",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.footer {
  margin-top: $margin-medium;
  width: 100vw;
  height: 400px !important;
  background-color: $black;
  color: white;
  font-size: $font-size-normal;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  // block css
  display: none !important;

  @media screen and (max-width: 428px) {
    height: 0 !important;
    display: none;
  }

  .phone-text {
    display: none;
  }

  @media screen and (max-width: 428px) {
    font-size: 1.75rem;
    text-align: center;
    line-height: 1.5;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto !important;

    .phone-text {
        display: block;
        font-size: 10rem;
        font-family: $title-font;
        margin-top: 42px;
    }
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: green;
    }
  }

  #text {
    width: calc(100vw - (2 * $gutter-size));
    display: flex;
    margin-top: $margin-medium;

    @media screen and (max-width: 428px) {
      width: calc(100vw - (2 * $gutter-size-phone));
      flex-direction: column;
    }

    .text-box {
      display: flex;
      flex-direction: column;

      &:last-child {
        margin-left: $margin-x-large;

        @media screen and (max-width: 428px) {
          margin-left: 0;
          margin-top: 42px;
        }
      }
    }
  }

  #bottom-text {
    position: absolute;
    bottom: -10%;
    left: 15px;
    width: 100vw;

    @media screen and (max-width: 428px) {
      display: none;
    }
  }
}
</style>