import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LandingPage from './views/LandingPage.vue'
import StoreFront from './views/StoreFront.vue'
import StoreShelf from './views/StoreShelf.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/landing-page',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/store-front',
      name: 'StroreFront',
      component: StoreFront
    },
    {
      path: '/store-shelf',
      name: 'StroreShelf',
      component: StoreShelf
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
