import 'current-script-polyfill'
import Vue from 'vue'
import App from './scripts/App'
import SvgIcon from './scripts/components/SvgIcon'
import i18n from './scripts/locales'

if (process.env.NODE_ENV === 'development') {
  require('file-loader!./template/index.pug')
}

Vue.config.productionTip = false

import router from './scripts/router'
import store from './scripts/store'

Vue.component('SvgIcon', SvgIcon)

window.app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')

