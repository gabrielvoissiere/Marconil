<template>
    <div class="header">
        <router-link to="/">
            <h1>Marconil - web design web development device development</h1>
            <p>ウェブデザイン ウェブ開発</p>
        </router-link>

        <nav>
            <router-link to="/about">About</router-link>
            <router-link to="/work">work</router-link>
            <router-link to="/contact">contact</router-link>
        </nav>

        <label class="switch-box">
          <input @click="test" id='input' type="checkbox"/>
          <span class="slider round"></span>
        </label>

        <router-view />
    </div>
</template>

<script>
    export default {
        name: "MainHeader",
        methods: {
            test () {
                console.log('tadaa')
            }
        },
    }
</script>

<style lang="scss" scoped>

    @import '../assets/styles/_variables.scss';

    nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .switch {

        &-box {
            position: relative;
            display: inline-block;
            width: 57px;
            height: 28px;

            input {
                opacity: 0;
                width: 0;
                height: 0;

                &:checked + .slider {
                    background-color: $green;
                    border-color: transparent;
                }

                &:checked + .slider:before {
                    transform: translate(calc(100% + 12px), -50%);
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
                transition: .4s;

                &:before {
                    position: absolute;
                    content: "";
                    height: 17px;
                    width: 17px;
                    left: 5px;
                    top: 50%;
                    transform: translateY(-50%);
                    background-color: $black;
                    transition: .4s;
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