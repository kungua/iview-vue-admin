import { routes, routerMap } from '../../router/router'

const state = {
  routers: routes,
  hasGetRules: false
}

const mutations = {
  //
  CONCAT_ROUTES (state, routerList) {
    state.routers = routerList.concat(routes)
    state.hasGetRules = true
  }
}

const getAccessRouterList = (routes, rules) => {
  return routes.filter(item => {
    const rule = rules[item.name]
    if (rule && item.children) {
      item.children = getAccessRouterList(item.children, rules)
    }
    return rule

    // const rule = rules[item.name]
    // if (rule) {
    //   if (item.children) {
    //     item.children = getAccessRouterList(item.children, rules)
    //   }
    //   return true
    // } else {
    //   return false
    // }
  })
}

const actions = {
  concatRoutes ({ commit }, rules) {
    return new Promise((resolve, reject) => {
      try {
        let routerList = []
        if (Object.entries(rules).every(item => item[1])) {
          routerList = routerMap
        } else {
          routerList = getAccessRouterList(routerMap, rules)
        }
        commit('CONCAT_ROUTES', routerList)
        resolve(state.routers)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
