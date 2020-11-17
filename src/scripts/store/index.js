import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import user from './modules/user'
import streams from './modules/streams'
import modals from './modules/modals'
import lang from './modules/lang'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {
    lang: (state) => state.lang.lang,
    token: (state) => state.user.user.sign_token,
    user: (state) => state.user.user.user_data,
    userId: (state) => state.user.user.user_id,
    isAuth: (state) => !!state.user.user.sign_token && !state.user.user.temp_user,
  },
  modules: {
    user,
    streams,
    modals,
    lang,
  },
  plugins: [new VuexPersistence({key: 'zeen_sber_aij'}).plugin],
})

export default store
