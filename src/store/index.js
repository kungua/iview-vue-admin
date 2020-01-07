import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// import saveInLocal from './plugin/saveInLocal'
import user from './module/user'
import router from './module/router'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: process.env.NODE_ENV === 'development',
  strict: false,
  state,
  getters,
  mutations,
  actions,
  modules: {
    user,
    router
  },
  // plugins: [saveInLocal]
})
