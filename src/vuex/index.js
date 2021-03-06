import Vue from 'vue'
import Vuex from 'vuex'

import auth from '../app/auth/vuex'
import home from '../app/home/vuex'
import customers from '../app/customers/vuex'
import passes from '../app/passes/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    home,
    customers,
    passes
  }
})
