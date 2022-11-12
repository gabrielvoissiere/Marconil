<template>
  <div class="header">
    <!-- <div id="progress">
      <h3>{{ count_loader }}</h3>
    </div> -->
    <router-link id="title-box" to="/">
      <h1 v-html="$t('header.title')"></h1>
      <p>ウェブデザイン ウェブ開発</p>
    </router-link>

    <nav>
      <router-link to="/about" v-html="$t('header.nav.first')"></router-link>
      <a
        v-if="current_page === '/' || current_page === '/#projects'"
        href="#projects"
        v-html="$t('header.nav.second')"
      ></a>
      <!-- <router-link to="/contact" v-html="$t('header.nav.third')"></router-link> -->
      <a href="mailto:nezaagency@gmail.com" v-html="$t('header.nav.third')"></a>
    </nav>

    <label class="switch-box">
      <input @click="handleSwitch" id="input" type="checkbox" />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      count_loader: 0,
      current_page: "/",
    };
  },
  props: {
    getSwitchStatus: {
      type: Function,
    },
  },
  methods: {
    handleSwitch() {
      if (document.getElementById("input").checked) {
        this.getSwitchStatus("dark");
      } else {
        this.getSwitchStatus("light");
      }
    },
  },
  mounted() {
    setTimeout(() => {
      const loader = setInterval(() => {
        this.count_loader++;
        if (this.count_loader === 35) {
          clearInterval(loader);
        }
      }, 25);
    }, 1000);

    setTimeout(() => {
      const loader = setInterval(() => {
        this.count_loader++;
        if (this.count_loader === 69) {
          clearInterval(loader);
        }
      }, 25);
    }, 2500);

    setTimeout(() => {
      const loader = setInterval(() => {
        this.count_loader++;
        if (this.count_loader === 100) {
          clearInterval(loader);
        }
      }, 25);
    }, 4000);
  },
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      console.log(to.fullPath);
      this.current_page = to.fullPath;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

@keyframes progress {
  0% {
    opacity: 1;
    z-index: 1000000;
  }

  90% {
    opacity: 1;
    z-index: 1000000;
  }

  100% {
    opacity: 0;
    z-index: -1000000;
  }
}

#progress {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  animation: progress 6000ms linear both;

  h3 {
    width: 80%;
    text-align: center;
    font-size: $font-size-l-title;
    font-family: $title-font;
  }
}

.header {
  margin-top: $margin-medium;
  display: flex;
  justify-content: space-between;
  width: calc(100vw - ($gutter-size * 2));

@media screen and (max-width: 428px) {
  height: 0 !important;
  display: none;
}
}

#title-box {
  text-decoration: none;
  text-align: left;

  @media screen and (max-width: 428px) {
    display: none;
  }

  h1 {
    font-size: $font-size-medium;
    font-weight: $normal;
  }

  p {
    color: $green;
  }
}

nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 428px) {
    width: 100%;
    a:first-child,
    a:nth-child(2) {
      display: none;
    }
  }

  a {
    text-decoration: none;
    font-size: $font-size-medium;

    &.router-link-exact-active {
      color: #42b983;
    }

    &:hover {
      color: $green;
      text-decoration: underline;
    }
  }
}

.switch {
  &-box {
    position: relative;
    display: inline-block;
    width: 57px;
    height: 28px;

    @media screen and (max-width: 428px) {
      display: none;
    }

    input {
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + .slider {
        background-color: $green;
        border-color: transparent;
      }

      &:checked + .slider:before {
        transform: translate(calc(100% + 11.5px), -50%);
        background-color: $white;
      }
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: $white;
      border: 1px solid $black;
      transition: 400ms;

      &:before {
        position: absolute;
        content: "";
        height: 17px;
        width: 17px;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
        background-color: $black;
        transition: 0.4s;
      }

      &.round {
        border-radius: 19px;

        &:before {
          border-radius: 50%;
        }
      }
    }
  }
}
</style>