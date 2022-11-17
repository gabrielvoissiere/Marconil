<template>
  <div id="home" class="home" ref="scrollSections">
    <img
      src="../assets/images/svg/line-phone-atf.svg"
      alt=""
      class="phone-line"
    />

    <section id="above_the_fold">
      <a href="#contact-phone" class="mobile anchor">Contact</a>
      <div class="cache-box">
        <!-- <div class="cache"></div> -->
        <h2 id="wave1">
          <span class="special_text">Neza</span>
          <span v-html="$t('home_page.above_the_fold.title')"></span>
        </h2>
      </div>
      <div class="cache-box-link">
        <div class="cache"></div>
        <p>
          <a
            href="mailto:nezaagency@gmail.com"
            v-html="$t('home_page.above_the_fold.btn')"
            class="parallax-cta"
          ></a>
        </p>
      </div>
      <img
        class="background-line"
        src="../assets/images/svg/line-top.svg"
        alt=""
      />
    </section>

    <section id="work" class="reveal">
      <h2
        id="wave2"
        class="parallax-work-title"
        v-html="$t('home_page.work.title')"
      ></h2>
      <h3
        class="parallax-work-subtitle"
        v-html="$t('home_page.work.subtitle')"
      ></h3>

      <div class="work-box">
        <div id="slider" class="slider">
          <div class="box reveal-1">
            <div class="title">
              <h4 v-html="$t('home_page.work.first_block.title')"></h4>
              <div class="line" />
            </div>
            <p v-html="$t('home_page.work.first_block.text')"></p>
          </div>

          <div class="box reveal-2">
            <div class="title">
              <h4 v-html="$t('home_page.work.second_block.title')"></h4>
              <div class="line" />
            </div>
            <p v-html="$t('home_page.work.second_block.text')"></p>
          </div>

          <div class="box reveal-3">
            <div class="title">
              <h4 v-html="$t('home_page.work.third_block.title')"></h4>
              <div class="line" />
            </div>
            <p v-html="$t('home_page.work.third_block.text')"></p>
          </div>

          <div class="box reveal-4">
            <div class="title">
              <h4 v-html="$t('home_page.work.fourth_block.title')"></h4>
              <div class="line" />
            </div>
            <p v-html="$t('home_page.work.fourth_block.text')"></p>
          </div>
        </div>
      </div>

      <img
        class="dark mobile"
        id="sliderBtn"
        src="../assets/images/svg/right-arrow.svg"
        alt=""
      />
    </section>

    <section id="who" class="">
      <div class="title reveal parallax-who">
        <h2 class="reveal-1" v-html="$t('home_page.who.title')"></h2>
        <div class="line reveal-2" />
      </div>
      <img
        class="background-line"
        src="../assets/images/svg/line-medium.svg"
        alt=""
      />
    </section>

    <section id="projects">
      <div class="title reveal">
        <h2
          class="reveal-1 desktop"
          v-html="$t('home_page.projects.title')"
        ></h2>
        <h2
          class="reveal-1 mobile"
          v-html="$t('home_page.projects.title_phone')"
        ></h2>
        <div class="line" />
      </div>

      <div class="mobile mobile-projetcs">
        <h3>urban vision</h3>
        <h3>agence hauwel</h3>
        <h3>florame</h3>
      </div>

      <div class="grid reveal parallax-project-title desktop">
        <div class="grid-elm reveal-1">
          <img src="../assets/images/png/mac1.png" alt="" />
          <div class="legend">
            <div class="left">
              <p>
                Urban vision - <span class="special_text">ザイン + ウェ</span>
              </p>
              <p>beatmaking school studio</p>
            </div>
            <div class="right">
              <p>2021</p>
              <router-link class="project-link" to="/urban_vision"
                >En savoir plus</router-link
              >
            </div>
          </div>
        </div>

        <div class="grid-elm reveal-2">
          <img
            src="../assets/images/RESSOURCE/AGENCE_HAUWEL/Plandetravail–16.png"
            alt=""
          />
          <div class="legend">
            <div class="left">
              <p>
                Agence Hauwel - <span class="special_text">ザイン + ウェ</span>
              </p>
              <p>Site internet</p>
            </div>
            <div class="right">
              <p>2022</p>
              <router-link class="project-link" to="/agence_hauwel"
                >En savoir plus</router-link
              >
            </div>
          </div>
        </div>

        <div class="grid-elm reveal-3">
          <img src="../assets/images/png/iphone.png" alt="" />
          <div class="legend">
            <div class="left">
              <p>Florame - <span class="special_text">ザイン + ウェ</span></p>
              <p>Diagnostic</p>
            </div>
            <div class="right">
              <p>2022</p>
              <router-link class="project-link" to="/florame"
                >En savoir plus</router-link
              >
            </div>
          </div>
        </div>

        <!-- <div class="grid-elm">
          <img src="../assets/images/svg/urban-vision-mac-mockup.svg" alt="">
          <div class="legend">
            <div class="left">
              <p>Urban vision - <span class="special_text">ザイン + ウェ</span></p>
              <p>beatmaking school studio</p>
            </div>
            <div class="right">
              <p>2022</p>
              <router-link class="project-link" to="/project">En savoir plus</router-link>
            </div>
          </div>
        </div> -->
      </div>
    </section>

    <section id="value" class="reveal">
      <div class="title parallax-value-title reveal-1">
        <h2 v-html="$t('home_page.value.title')"></h2>
        <div class="line" />
      </div>
      <!-- <img class="background-line" src="../assets/images/svg/line-bottom.svg" alt=""> -->
    </section>

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

    <h3 id="sentence" class="reveal desktop">
      <span
        class="special_text reveal-1"
        v-html="$t('home_page.sentence.first')"
      ></span
      ><br /><span
        class="reveal-2"
        v-html="$t('home_page.sentence.second')"
      ></span>
    </h3>

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
  </div>
</template>

<script>
import { wave } from "simply_wave"
export default {
  name: "Home-page",
  data() {
    return {
      count_loader: 0,
    };
  },
  mounted() {
    const above_the_fold = document.getElementById("above_the_fold");
    const header = document.querySelector(".header").offsetHeight;
    above_the_fold.style.height = `calc(100vh - ${header}px - 30px)`;

    const threshold = 0.1;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > threshold) {
          entry.target.classList.remove("reveal");
          observer.unobserve(entry.target);
        }
      });
    };

    document.documentElement.classList.add("reveal-loaded");

    const observer = new IntersectionObserver(handleIntersect, options);
    const targets = document.querySelectorAll(".reveal");
    targets.forEach(function (target) {
      observer.observe(target);
    });

    let translate = 0;
    const sliderBtn = document.getElementById("sliderBtn");

    sliderBtn.addEventListener("click", function () {
      console.log("cc");
      if (translate === 300) {
        translate = 0;
      } else {
        translate += 100;
      }

      document.getElementById(
        "slider"
      ).style.transform = `translateX(-${translate}vw)`;
    });

    let isPageLoaded = document
      .getElementById("progress")
      .classList.contains("loaded");

    if (window.screen.width > 428) {
      let wave1 = document.getElementById(`wave1`).offsetHeight;

      const waveOptions = {
        target: "wave1",
        transform: `${wave1}px`,
        duration: 1200,
        animationDelay: isPageLoaded ? 200 : 6200,
        letterDelay: 0,
        easing: "cubic-bezier(0,0,.09,1)",
        overflow: true
      }

      wave(waveOptions)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.cursor {
  transition-timing-function: ease-out;
  background-color: red;
  border-radius: 5px;
  height: 10px;
  transition-duration: 500ms;
  transform: translateX(-50%) translateY(-50%);
  position: fixed;
  width: 10px;
}

.reveal-loaded .reveal [class*="reveal-"] {
  opacity: 0;
  transform: translateY(60px);
}

.reveal-loaded [class*="reveal"] {
  transition: 800ms ease-in-out;
}

/* On ajoute du délai */
.reveal-loaded .reveal-2 {
  transition-delay: 100ms;
}

.reveal-loaded .reveal-3 {
  transition-delay: 200ms;
}

.reveal-loaded .reveal-4 {
  transition-delay: 300ms;
}

.phone-line {
  display: none;

  @media screen and (max-width: 428px) {
    display: block;
    position: absolute;
    top: 0;
    right: 8px;
    z-index: -100000;
    max-height: 100vh;
  }
}

section {
  @media screen and (max-width: 428px) {
    min-height: 100vh !important;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly !important;
    align-items: center;
  }
}

.desktop {
  @media screen and (max-width: 428px) {
    display: none !important;
  }
}

.mobile {
  display: none !important;
  @media screen and (max-width: 428px) {
    display: block !important;
  }
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 428px) {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }

  // #arf {
  //   width: 100vw;
  //   height: 100vh;
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   background-color: $white;
  //   z-index: -1000000;
  //   overflow: hidden;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   opacity: 0;

  //   h3 {
  //     width: 80%;
  //     text-align: center;
  //   }

  //   img {
  //     width: 80%;
  //   }

  //   @media screen and (max-width: 1160px) {
  //     opacity: 1;
  //     z-index: 1000000;
  //   }
  // }

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

  // @keyframes apparition_link {
  //   0% {
  //     transform: translateY(100%);
  //   }
  //   100% {
  //     transform: translateY(0);
  //   }
  // }

  // @keyframes apparition_line {
  //   0% {
  //     opacity: 0;
  //     transform: translate(-50%, 100px);
  //   }
  //   100% {
  //     opacity: 1;
  //     transform: translate(-50%, 0);
  //   }
  // }

  #above_the_fold {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    width: calc(100vw - (2 * $gutter-size));

    a.anchor {
      font-size: $font-size-normal;
      text-decoration: none;
      margin-bottom: 42px;
    }

    @media screen and (max-width: 428px) {
      width: calc(100vw - (2 * $gutter-size-phone));
      justify-content: center !important;
    }

    .cache-box {
      position: relative;

      .cache {
        position: absolute;
        bottom: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: $white;
        transition: 200ms;

        @media screen and (max-width: 428px) {
          background-color: transparent;
        }
      }

      h2 {
        font-size: 3.75rem;
        font-family: $title-font;
        font-weight: 500;
        margin-top: 50px;

        // animation: apparition 1200ms ease-in-out both;
        // animation: apparition 2000ms ease-in-out 6500ms both;

        @media screen and (max-width: 1280px) {
          font-size: 3.25rem;
        }

        @media screen and (max-width: 428px) {
          font-size: 5rem;
          width: 90%;
          margin-top: 0;
          animation: none;
        }
      }
    }

    .cache-box-link {
      position: relative;
      margin-top: 20px;
      z-index: 3;

      .cache {
        position: absolute;
        left: 50%;
        bottom: calc(-102%);
        transform: translateX(-50%);
        transition: 200ms;
        width: 102%;
        height: 52px;
        background-color: $white;
        z-index: 2;
      }

      p {
        // animation: apparition_link 2000ms ease-in-out 7000ms both;
        animation: apparition_link 2000ms ease-in-out both;
        padding: 15px 25px;
        background-color: $green;

        @media screen and (max-width: 428px) {
          animation: none;
        }
      }

      a {
        border: none;
        color: $white;
        font-size: $font-size-normal;
        font-family: "Montserrat-regular";
        font-size: 1.125rem;
        font-weight: 300;
        text-decoration: none;
        z-index: 100000;
        // 7000ms

        @media screen and (max-width: 428px) {
          margin-top: 42px;
        }
      }
    }

    .background-line {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100vw;
      z-index: 3;

      animation: apparition_line 2000ms ease-in-out 6000ms both;

      @media screen and (max-width: 428px) {
        display: none;
      }
    }
  }

  #work {
    width: calc(100vw - (2 * $gutter-size));

    @media screen and (max-width: 428px) {
      width: calc(100vw - (2 * $gutter-size-phone));
      display: flex !important;
      flex-direction: column;
      justify-content: center !important;
      align-items: center;
    }

    h2 {
      font-size: $font-size-x-large;
      text-align: right;
      font-family: $title-font;
      font-weight: 500;

      @media screen and (max-width: 428px) {
        text-align: center;
      }
    }

    h3 {
      font-size: $font-size-medium;
      color: $green;
      text-align: right;
      font-weight: 300;

      @media screen and (max-width: 428px) {
        display: none;
      }
    }

    .work-box {
      display: flex;
      justify-content: space-between;
      margin-top: $margin-x-large;
      position: relative;

      @media screen and (max-width: 1280px) {
        margin-top: $margin-large;
      }

      @media screen and (max-width: 428px) {
        margin-top: 0 !important;
        width: 100vw;
        height: 500px;
        flex-direction: column;
        justify-content: space-evenly !important;
        justify-content: center;
        overflow-x: hidden;
      }

      .slider {
        display: flex;
        justify-content: space-between;
        transition: 400ms ease-in-out;

        @media screen and (max-width: 428px) {
          position: absolute;
          left: 0;
          align-items: center;
          margin-top: 0 !important;
        }
        .box {
          display: flex;
          flex-direction: column;
          width: 22%;
          text-align: center;
          font-size: $font-size-normal;

          @media screen and (max-width: 428px) {
            width: 100vw;
            margin-top: 0 !important;
            align-items: center;
          }

          .title {
            font-size: 2.8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-weight: 300;
            font-family: $title-font;

            h4 {
              font-weight: 300;
            }

            .line {
              height: 1px;
              background-color: $black;
              width: 123px;
              margin-top: $margin-x-small;
              margin-bottom: $margin-large;

              @media screen and (max-width: 428px) {
                margin-bottom: $margin-medium;
              }
            }
          }

          p {
            font-size: $font-size-normal;

            @media screen and (max-width: 428px) {
              width: 80%;
            }
          }
        }
      }
    }

    img {
      width: 60px;
      margin-bottom: 100px;
      margin: 0;
    }
  }

  #who {
    height: 110vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100vw - (2 * $gutter-size));
    position: relative;
    font-weight: 300;

    @media screen and (max-width: 428px) {
      width: calc(100vw - (2 * $gutter-size-phone));
      justify-content: flex-start !important;
    }

    h2 {
      font-size: 3.125rem;
      text-align: center;

      @media screen and (max-width: 428px) {
        text-align: left;
        text-transform: uppercase;
        line-height: 1.25;
        margin-top: $margin-x-large !important;
      }
    }

    .title {
      font-size: $font-size-large;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: $title-font;

      h2 {
        font-weight: 300;
      }

      .line {
        height: 1px;
        background-color: $black;
        width: 178px;
        margin-top: $margin-x-small;
        margin-bottom: $margin-medium;

        @media screen and (max-width: 428px) {
          display: none;
        }
      }
    }

    .background-line {
      position: absolute;
      width: 100vw;
      top: -150px;
      left: -200px;
      z-index: -10;

      @media screen and (max-width: 428px) {
        display: none;
      }
    }
  }

  #projects {
    width: calc(100vw - (2 * $gutter-size));

    @media screen and (max-width: 428px) {
      width: calc(100vw - (2 * $gutter-size-phone));
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
      align-items: flex-start !important;
    }

    .title {
      font-size: $font-size-large;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-family: $title-font;

      @media screen and (max-width: 428px) {
        margin-top: $margin-large !important;
      }

      h2 {
        font-weight: 300;
      }

      .line {
        height: 1px;
        background-color: $black;
        width: 260px;
        margin-top: $margin-x-small;
        margin-bottom: $margin-medium;
      }
    }

    .mobile-projetcs {
      text-transform: uppercase;
      font-family: $title-font;
      font-size: $font-size-large;
      font-weight: 300;
        margin-bottom: $margin-large !important;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 0.5fr);

      @media screen and (max-width: 428px) {
        grid-template-columns: 1fr;
        margin-top: 42px;
      }
      // gap: $gap-size;

      .grid-elm {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (max-width: 428px) {
          &:nth-child(2) {
            margin-top: 42px;
          }
        }

        img {
          object-fit: cover;
          width: 80%;
        }

        &:last-child {
          grid-column: 1 / 3;
          margin-top: 20px;

          @media screen and (max-width: 428px) {
            grid-column: 1;
            margin-top: 0;
          }

          img {
            width: 40%;

            @media screen and (max-width: 428px) {
              width: 100%;
            }
          }

          .legend {
            width: 30%;

            @media screen and (max-width: 428px) {
              width: 75%;
            }
          }
        }

        .legend {
          width: 75%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: $font-size-normal;
          margin-top: $margin-small;

          .right {
            text-align: right;

            .project-link {
              text-decoration: underline;
              font-size: $font-size-small;
              font-style: italic;

              &:hover {
                font-style: normal;
                color: $green;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }

  #value {
    position: relative;
    height: 140vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100vw - (2 * $gutter-size));

    @media screen and (max-width: 428px) {
      width: calc(100vw - (2 * $gutter-size-phone));
    }

    .title {
      font-size: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: $title-font;

      @media screen and (max-width: 428px) {
        text-align: center;
      }

      .line {
        height: 1px;
        background-color: $black;
        width: 334px;
        margin-top: $margin-x-small;
        margin-bottom: $margin-medium;

        @media screen and (max-width: 428px) {
          display: none;
        }
      }
    }

    .background-line {
      position: absolute;
      width: 100vw;
      top: -335px;
      left: -300px;
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

  #sentence {
    width: calc(100vw - (2 * $gutter-size));
    font-size: $font-size-large;
    font-weight: 300;
    font-family: $title-font;

    @media screen and (max-width: 428px) {
      width: calc(100vw - (2 * $gutter-size-phone));
      text-align: center;
      line-height: 1.25;
    }
  }

  .phone-contact {
    display: none;
    flex-direction: column;
    justify-content: space-between !important;
    align-items: center;

    @media screen and (max-width: 428px) {
      display: flex !important;
    }
    .text {
      text-align: center;
      margin-top: $margin-xx-large !important;

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