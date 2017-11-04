import Vue from 'vue'
import Vuex from 'vuex'

import auth from '../app/auth/vuex'
import home from '../app/home/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: auth,
    home: home
  }
})
