import { authorization, login } from '../../api/user'
import { setToken } from '../../lib/utils'

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
  },
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password })
        .then(res => {
          console.log(res)
          if (res.code === 200) {
            setToken(res.data.token)
            resolve()
          } else {
            //
            reject(new Error('error'))
          }
        })
        .catch(error => {
          console.log(error)
        })
    })
  },
  logout () {
    setToken('')
  },
  authorization ({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization()
        .then(res => {
          if (parseInt(res.code) === 401) {
            reject(new Error('token error'))
          } else {
            setToken(res.data.token)
            resolve()
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
