import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/newPages/Home.vue'
import Store from './views/newPages/Store.vue'
import Countries from './views/newPages/Countries.vue'
import WasteTypes from './views/newPages/WasteTypes.vue'
import WasteGroups from './views/newPages/WasteGroups.vue'
import Transition from './views/newPages/Transition.vue'
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
      name: 'Transition',
      component: Transition
    },
    {
      path: '/7',
      name: 'ExpirationDate',
      component: ExpirationDate
    },
    {
      path: '/8',
      name: 'Storage',
      component: Storage
    },
    {
      path: '/9',
      name: 'Planing',
      component: Planing
    },
    {
      path: '/10',
      name: 'FoodSharing',
      component: FoodSharing
    },
    {
      path: '/11',
      name: 'Influences',
      component: Influences
    },
    {
      path: '/12',
      name: 'Credits',
      component: Credits
    }
  ]
})
