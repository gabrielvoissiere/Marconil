<template>
  <div class="home">

    <!-- <div id="line-background">
      <img src="../assets/images/svg/line-footer.svg" alt="">
    </div> -->

    <section id="above_the_fold">
      <h1><span class="special_text">Marconil</span> <span v-html="$t('home_page.above_the_fold.title')"></span></h1>
      <button v-html="$t('home_page.above_the_fold.btn')"></button>
      <img class="background-line" src="../assets/images/svg/line-top.svg" alt="">
    </section>

    <section id="work">
      <h2 v-html="$t('home_page.work.title')"></h2>
      <h3 v-html="$t('home_page.work.subtitle')"></h3>

      <div class="work-box">

        <div class="box">
          <div class="title">
            <h4 v-html="$t('home_page.work.first_block.title')"></h4>
            <div class="line" />
          </div>
          <p v-html="$t('home_page.work.first_block.text')"></p>
        </div>

        <div class="box">
          <div class="title">
            <h4 v-html="$t('home_page.work.second_block.title')"></h4>
            <div class="line" />
          </div>
          <p v-html="$t('home_page.work.second_block.text')"></p>
        </div>

        <div class="box">
          <div class="title">
            <h4 v-html="$t('home_page.work.third_block.title')"></h4>
            <div class="line" />
          </div>
          <p v-html="$t('home_page.work.third_block.text')"></p>
        </div>

        <div class="box">
          <div class="title">
            <h4 v-html="$t('home_page.work.fourth_block.title')"></h4>
            <div class="line" />
          </div>
          <p v-html="$t('home_page.work.fourth_block.text')"></p>
        </div>

      </div>
    </section>

    <section id="who">
      <div class="title">
        <h2 v-html="$t('home_page.who.title')"></h2>
        <div class="line" />
      </div>
      <h3 v-html="$t('home_page.who.subtitle')"></h3>
      <img class="background-line" src="../assets/images/svg/line-medium.svg" alt="">
    </section>

    <section id="projects">
      <div class="title">
        <h2 v-html="$t('home_page.projects.title')"></h2>
        <div class="line" />
      </div>

      <div class="grid">

        <div class="grid-elm">
          <img src="../assets/images/svg/urban-vision-mac-mockup.svg" alt="">
          <div class="legend">
            <div class="left">
              <p>Urban vision - <span class="special_text">ザイン + ウェ</span></p>
              <p>beatmaking school studio</p>
            </div>
            <div class="right">
              <p>2022</p>
              <a>En savoir plus</a>
            </div>
          </div>
        </div>

        <div class="grid-elm">
          <img src="../assets/images/svg/urban-vision-mac-mockup.svg" alt="">
          <div class="legend">
            <div class="left">
              <p>Urban vision - <span class="special_text">ザイン + ウェ</span></p>
              <p>beatmaking school studio</p>
            </div>
            <div class="right">
              <p>2022</p>
              <a>En savoir plus</a>
            </div>
          </div>
        </div>

        <div class="grid-elm">
          <img src="../assets/images/svg/urban-vision-mac-mockup.svg" alt="">
          <div class="legend">
            <div class="left">
              <p>Urban vision - <span class="special_text">ザイン + ウェ</span></p>
              <p>beatmaking school studio</p>
            </div>
            <div class="right">
              <p>2022</p>
              <a>En savoir plus</a>
            </div>
          </div>
        </div>

        <div class="grid-elm">
          <img src="../assets/images/svg/urban-vision-mac-mockup.svg" alt="">
          <div class="legend">
            <div class="left">
              <p>Urban vision - <span class="special_text">ザイン + ウェ</span></p>
              <p>beatmaking school studio</p>
            </div>
            <div class="right">
              <p>2022</p>
              <a>En savoir plus</a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="value">
      <div class="title">
        <h2 v-html="$t('home_page.value.title')"></h2>
        <div class="line" />
      </div>
      <img class="background-line" src="../assets/images/svg/line-bottom.svg" alt="">
    </section>

    <section id="contact">
      <div class="title-box">
        <div class="title">
          <img class="dark" src="../assets/images/svg/right-arrow.svg" alt="">
          <h2 v-html="$t('home_page.contact.title')"></h2>
        </div>
        <div class="line" />
      </div>
      <h3 v-html="$t('home_page.contact.subtitle')"></h3>
    </section>

    <h3 id="sentence"><span class="special_text" v-html="$t('home_page.sentence.first')"></span><br><span
        v-html="$t('home_page.sentence.second')"></span></h3>

    <!-- <MainFooter /> -->

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
    display: flex;
    flex-direction: column;
    align-content: center;

    #line-background {
      position: absolute;
      left: 0;
      z-index: -5;

      img {
        position: relative;
      }

      img:first-child {
        right: 100px;
      }

      img:nth-child(2) {
        margin-top: 35vh;
        right: 80px;
      }

      img:nth-child(3) {
        margin-top: 60vh;
        right: 150px;
      }
    }

    #above_the_fold {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      position: relative;
      width: calc(100vw - (2 * $gutter-size));

      h1 {
        font-size: $font-size-l-large;
        font-family: $title-font;
      }

      button {
        background-color: $green;
        padding: 15px 25px;
        border: none;
        color: $white;
        font-size: $font-size-normal;
        margin-top: 20px;
      }

      .background-line {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100vw;
      }
    }

    #work {
      width: calc(100vw - (2 * $gutter-size));

      h2 {
        font-size: $font-size-x-large;
        text-align: right;
        font-family: $title-font;
      }

      h3 {
        font-size: $font-size-medium;
        color: $green;
        text-align: right;
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

    #who {
      height: 100vh;
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
          margin-bottom: $margin-medium;
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

    #projects {
      width: calc(100vw - (2 * $gutter-size));

      .title {
        font-size: $font-size-large;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-family: $title-font;

        .line {
          height: 1px;
          background-color: $black;
          width: 260px;
          margin-top: $margin-x-small;
          margin-bottom: $margin-medium;
        }
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(2, 0.5fr);
        // gap: $gap-size;

        .grid-elm {
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            object-fit: cover;
            width: 100%;
          }

          .legend {
            width: 75%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: $font-size-normal;

            .right {
              text-align: right;

              a {
                text-decoration: underline;
                font-size: $font-size-small;
                font-style: italic;

                &:hover {
                  font-style: normal;
                  color: $green;
                }
              }
            }
          }
        }
      }
    }

    #value {
      position: relative;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: calc(100vw - (2 * $gutter-size));

      .title {
        font-size: $font-size-x-large;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: $title-font;

        .line {
          height: 1px;
          background-color: $black;
          width: 334px;
          margin-top: $margin-x-small;
          margin-bottom: $margin-medium;
        }
      }

      .background-line {
        position: absolute;
        width: 100vw;
        top: -335px;
        left: -500px;
        z-index: -10;
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