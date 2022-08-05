<template>
    <div class="header">
        <router-link id="title-box" to="/">
            <h1>Neza - web design web development device development</h1>
            <p>ウェブデザイン ウェブ開発</p>
        </router-link>

        <nav>
            <router-link to="/about">about</router-link>
            <router-link to="/work">work</router-link>
            <router-link to="/contact">contact</router-link>
        </nav>

        <label class="switch-box">
            <input @click="handleSwitch" id='input' type="checkbox" />
            <span class="slider round"></span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "MainHeader",

        props: {
            getSwitchStatus: {
                type: Function
            }
        },

        methods: {
            handleSwitch() {
                if (document.getElementById('input').checked) {
                    this.getSwitchStatus('dark')
                } else {
                    this.getSwitchStatus('light')
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/_variables.scss';

    .header {
        margin-top: $margin-medium;
        display: flex;
        justify-content: space-between;
        width: calc(100vw - ($gutter-size * 2));
    }

    #title-box {
        text-decoration: none;
        text-align: left;

        h1 {
            font-size: $font-size-normal;
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

        a {
            text-decoration: none;
            font-size: $font-size-normal;

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

                &:checked+.slider {
                    background-color: $green;
                    border-color: transparent;
                }

                &:checked+.slider:before {
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