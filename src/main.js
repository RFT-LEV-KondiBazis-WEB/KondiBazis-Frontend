// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import router from './router'
import store from './vuex'
import localforage from 'localforage'

localforage.config({
  driver: localforage.LOCALSTORAGE,
  storeName: 'fitbase'
})

Vue.use(Vue2Filters)

Vue.config.productionTip = false

import App from './components/App.vue'

store.dispatch('auth/setToken').then(() => {
  store.dispatch('auth/fetchUser').catch(() => {
    store.dispatch('auth/clearAuth')
    router.replace({ name: 'login' })
  })
}).catch(() => {
  store.dispatch('auth/clearAuth')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
