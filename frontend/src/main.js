import { createApp } from 'vue'

import { createI18n } from 'vue-i18n'
import { messages } from './lang/language'

import App from './App.vue'
import router from './router'
import store from './store'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

createApp(App).use(store).use(i18n).use(router).mount('#app')
