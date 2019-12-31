const state = {
  userName: '剑来'
}

const getters = {
  userNameFirstLetter: state => state.userName.substr(0, 1)
}

const mutations = {
  //
}

const actions = {
  //
  updateUserName ({ commit, state, rootState, dispatch }) {
    //
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
