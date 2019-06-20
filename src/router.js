import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import StoreFront from './views/StoreFront.vue'
import StoreShelf from './views/StoreShelf.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/1',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/2',
      name: 'StroreFront',
      component: StoreFront
    },
    {
      path: '/3',
      name: 'StroreShelf',
      component: StoreShelf
    },
    {
      path: '*',
      redirect: '/1'
    }
  ]
})
