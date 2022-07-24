<template>
  <div class="project">
    <section id="title">
      <div class="title">
        <h2 v-html="$t('project_page.title.title')"></h2>
        <div class="line" />
      </div>
      <h3 v-html="$t('project_page.title.subtitle')"></h3>
    </section>

    <section id="image">
      <img src="../assets/images/svg/urban-vision-mac-mockup.svg" alt="" />
    </section>

    <section id="work">
      <h2 v-html="$t('project_page.work.title')"></h2>
      <div class="line" />
      <h3 v-html="$t('project_page.work.subtitle')"></h3>

      <div class="work-box">
        <div class="box">
          <div class="title">
            <h4 v-html="$t('project_page.work.first_block.title')"></h4>
            <div class="line" />
          </div>
          <p v-html="$t('project_page.work.first_block.text')"></p>
        </div>

        <div class="box">
          <div class="title">
            <h4 v-html="$t('project_page.work.second_block.title')"></h4>
            <div class="line" />
          </div>
          <p v-html="$t('project_page.work.second_block.text')"></p>
        </div>

        <div class="box">
          <div class="title">
            <h4 v-html="$t('project_page.work.third_block.title')"></h4>
            <div class="line" />
          </div>
          <p v-html="$t('project_page.work.third_block.text')"></p>
        </div>

        <div class="box">
          <div class="title">
            <h4 v-html="$t('project_page.work.fourth_block.title')"></h4>
            <div class="line" />
          </div>
          <p v-html="$t('project_page.work.fourth_block.text')"></p>
        </div>
      </div>
    </section>

    <section id="graphic">
      <div class="title">
        <h2 v-html="$t('project_page.graphic.title')"></h2>
        <div class="line" />
      </div>
      <h3 v-html="$t('project_page.graphic.subtitle')"></h3>
    </section>

    <section id="graphic-exemple">
      <img src="../assets/images/svg/afiche-le-studio-blanche.svg" alt="" />
      <img
        src="../assets/images/svg/affiche-le-studio-noir-horizontal.svg"
        alt=""
      />
      <img src="../assets/images/svg/affiche-le-studio-orange.svg" alt="" />
    </section>

    <section id="result">
      <div class="title">
        <h2 v-html="$t('project_page.result.title')"></h2>
        <div class="line" />
      </div>
    </section>

    <section id="graphic-exemple">
      <img
        src="../assets/images/svg/affiche-le-studio-orange-horizontal.svg"
        alt=""
      />
      <img src="../assets/images/svg/affiche-le-studio-noir.svg" alt="" />
    </section>

    <section id="graphic">
      <div class="title">
        <h2 v-html="$t('project_page.final.title')"></h2>
        <div class="line" />
      </div>
      <h3 v-html="$t('project_page.final.subtitle')"></h3>
    </section>

    <section id="grid">
      <img
        src="../assets/images/svg/affiche-le-studio-noir-horizontal.svg"
        alt=""
      />
      <div class="grid-box">
        <img
          class="first-main"
          src="../assets/images/svg/urban-vision-final-site.svg"
          alt=""
        />
        <div class="next">
          <img
            class="second-main"
            src="../assets/images/svg/urban-vision-final-site-part-1.svg"
            alt=""
          />
          <img
            class="second-second"
            src="../assets/images/svg/urban-vision-final-site-part-2.svg"
            alt=""
          />
          <img
            class="second-last"
            src="../assets/images/svg/urban-vision-final-site-part-3.svg"
            alt=""
          />
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="title-box">
        <div class="title">
          <img class="dark" src="../assets/images/svg/right-arrow.svg" alt="">
          <h2 v-html="$t('project_page.contact.title')"></h2>
        </div>
        <div class="line" />
      </div>
      <h3 v-html="$t('project_page.contact.subtitle')"></h3>
    </section>

    <h3 id="sentence"><span class="special_text" v-html="$t('project_page.sentence.first')"></span><br><span
        v-html="$t('project_page.sentence.second')"></span></h3>
  </div>
</template>

<script>
export default {
  name: "Project-page",
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.project {
  display: flex;
  flex-direction: column;
  width: calc(100vw - (2 * $gutter-size));
  align-content: center;

  #title {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: calc(100vw - (2 * $gutter-size));
    position: relative;

    h3 {
      font-size: $font-size-medium;
      color: $green;
      text-align: center;
    }

    .title {
      font-size: $font-size-large;
      display: flex;
      flex-direction: column;
      font-family: $title-font;

      .line {
        height: 1px;
        background-color: $black;
        width: 178px;
        margin-top: $margin-x-small;
        margin-bottom: $margin-small;
      }
    }

    .background-line {
      position: absolute;
      width: 100vw;
      top: -150px;
      left: -200px;
      z-index: -10;
    }
  }

  #image {
    display: flex;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  #work {
    width: 100%;

    h2 {
      font-size: $font-size-x-large;
      text-align: left;
      font-family: $title-font;
    }

    h3 {
      font-size: $font-size-medium;
      color: $green;
      text-align: left;
    }

    .line {
      height: 1px;
      background-color: $black;
      width: 178px;
      margin-top: $margin-x-small;
      margin-bottom: $margin-small;
    }

    .work-box {
      display: flex;
      justify-content: space-between;
      margin-top: $margin-x-large;

      .box {
        display: flex;
        flex-direction: column;
        width: 22%;
        text-align: center;
        font-size: $font-size-normal;

        .title {
          font-size: $font-size-large;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: $title-font;

          .line {
            height: 1px;
            background-color: $black;
            width: 123px;
            margin-top: $margin-x-small;
            margin-bottom: $margin-large;
          }
        }
      }
    }
  }

  #graphic {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100vw - (2 * $gutter-size));
    position: relative;

    h3 {
      font-size: $font-size-medium;
      color: $green;
      text-align: center;
    }

    .title {
      font-size: $font-size-large;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: $title-font;

      .line {
        height: 1px;
        background-color: $black;
        width: 178px;
        margin-top: $margin-x-small;
        margin-bottom: $margin-small;
      }
    }

    .background-line {
      position: absolute;
      width: 100vw;
      top: -150px;
      left: -200px;
      z-index: -10;
    }
  }

  #graphic-exemple {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  #result {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: calc(100vw - (2 * $gutter-size));
    position: relative;
    margin-top: calc(2 * $margin-x-large);

    h3 {
      font-size: $font-size-medium;
      color: $green;
      text-align: center;
    }

    .title {
      font-size: $font-size-large;
      display: flex;
      flex-direction: column;
      font-family: $title-font;

      .line {
        height: 1px;
        background-color: $black;
        width: 178px;
        margin-top: $margin-x-small;
        margin-bottom: $margin-small;
      }
    }

    .background-line {
      position: absolute;
      width: 100vw;
      top: -150px;
      left: -200px;
      z-index: -10;
    }
  }

  #grid {
    display: flex;
    flex-direction: column;
    align-items: center;

    .grid-box {
      display: flex;
      align-items: flex-start;
      
      img {
        margin-top: $margin-large;
      }

      .next {
        display: flex;
        flex-direction: column;
        margin-left: $margin-x-large;
      }
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
      font-size: $font-size-l-large;
      font-family: $title-font;
    }
}
</style>