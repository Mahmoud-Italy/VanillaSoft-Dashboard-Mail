import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import utils from '@/utils'
import { i18n } from '@/translation'

// baseURL
window.baseURL = 'http://localhost:8000/v1';
Vue.config.productionTip = false

new Vue({
  i18n,
  utils,
  router,
  render: h => h(App),
}).$mount('#app')
