import i18n from '../../locales'

/*
en, :ru, :bg, :de, :it, :et, :pl, :ro, :cs
*/

export default {
  namespaced: true,
  state: {
    lang: 'ru',
    availableLangs: [
      {
        key: 'en',
        label: 'eng',
        title: 'English',
      },
      {
        key: 'ru',
        label: 'рус',
        title: 'Русский',
      }
    ],
  },
  mutations: {
    setLang(state, lang) {
      i18n.locale = lang
      state.lang = lang
    },
  },
}
