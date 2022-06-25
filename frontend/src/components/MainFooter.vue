<template>
    <div class="footer">
        <div id="text">
            <div class="text-box">
                <span v-html="$t('footer.title')"></span>
                <p class="special_text">ウェブデザイン ウェブ開発</p>
            </div>
            <div class="text-box">
                <span  class="special_text" v-html="$t('footer.contact')"></span>
                <a :href="'mailto:'+email">Marconil@gmail.com</a>
            </div>
        </div>
        <img id="bottom-text" src="../assets/images/svg/footer-bottom-text.svg" alt=""/>
    </div>
</template>

<script>
export default {
    name: 'MainFooter',
    data() {
        return {
            email: 'Marconil@gmail.com'
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../assets/styles/_variables.scss';
    .footer {
        margin-top: $margin-medium;
        width: 100vw;
        height: 550px;
        background-color: $black;
        color: white;
        font-size: $font-size-normal;
        display: flex;
        justify-content: center;
        position: relative;
        overflow: hidden;

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

            .text-box {
                display: flex;
                flex-direction: column;

                &:last-child {
                    margin-left: $margin-x-large;
                }
            }
        }

        #bottom-text {
            position: absolute;
            bottom: -10%;
            width: 100vw;
            font-family: $title-font;
        }
    }
</style>