import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import StoreFront from './views/StoreFront.vue'
import StoreShelf from './views/StoreShelf.vue'

import Home from './views/newPages/Home.vue'
import Store from './views/newPages/Store.vue'
import Countries from './views/newPages/Countries.vue'
import WasteTypes from './views/newPages/WasteTypes.vue'
import WasteGroups from './views/newPages/WasteGroups.vue'
import ExpirationDate from './views/newPages/ExpirationDate.vue'
import Storage from './views/newPages/Storage.vue'
import Planing from './views/newPages/Planing.vue'
import FoodSharing from './views/newPages/FoodSharing.vue'
import Influences from './views/newPages/Influences.vue'
import Credits from './views/newPages/Credits.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/1'
    },
    {
      path: '/1',
      name: 'Home',
      component: Home
    },
    {
      path: '/2',
      name: 'Store',
      component: Store
    },
    {
      path: '/3',
      name: 'Countries',
      component: Countries
    },
    {
      path: '/4',
      name: 'WasteTypes',
      component: WasteTypes
    },
    {
      path: '/5',
      name: 'WasteGroups',
      component: WasteGroups
    },
    {
      path: '/6',
      name: 'ExpirationDate',
      component: ExpirationDate
    },
    {
      path: '/7',
      name: 'Storage',
      component: Storage
    },
    {
      path: '/8',
      name: 'Planing',
      component: Planing
    },
    {
      path: '/9',
      name: 'FoodSharing',
      component: FoodSharing
    },
    {
      path: '/10',
      name: 'Influences',
      component: Influences
    },
    {
      path: '/11',
      name: 'Credits',
      component: Credits
    },
    {
      path: '/20',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/21',
      name: 'StroreFront',
      component: StoreFront
    },
    {
      path: '/22',
      name: 'StroreShelf',
      component: StoreShelf
    }
  ]
})
