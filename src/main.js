import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
