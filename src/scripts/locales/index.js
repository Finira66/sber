import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '../store'

import ru from './lang/ru'
import en from './lang/en'

Vue.use(VueI18n)

// Готовые переводы сообщений локализаций
const messages = {
  en,
  ru,
}

// Создание экземпляра VueI18n с настройками
const i18n = new VueI18n({
  locale: store.getters.lang || 'ru', // установка локализации по умолчанию
  // locale: 'ru',
  fallbackLocale: [ 'en','ru'],
  messages // установка сообщений локализаций
})

export default i18n
