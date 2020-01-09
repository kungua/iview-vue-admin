import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import store from '../store'
import { setTitle, getToken } from '../lib/utils'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// const HAS_LOGINED = false

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)

  const token = getToken()
  if (token) {
    if (!store.state.router.hasGetRules) {
      store.dispatch('authorization').then(rules => {
        store.dispatch('concatRoutes', rules).then(routers => {
          router.addRoutes(routers)
          next({ ...to, replace: true })
        }).catch(() => {
          next({ name: 'login' })
        })
      })
    } else {
      next()
    }
  } else {
    if (to.name === 'login') {
      next()
    } else {
      next({ name: 'login' })
    }
  }
  // const token = getToken()
  // if (token) {
  //   if (!store.state.router.hasGetRules) {
  //     store.dispatch('authorization').then(rules => {
  //       store.dispatch('concatRoutes', rules).then(routers => {
  //         router.addRoutes(routers.filter(item => item.name !== 'login'))
  //         next({ ...to, replace: true })
  //       }).catch(() => {
  //         next({ name: 'login' })
  //       })
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   if (to.name === 'login') {
  //     next()
  //   } else {
  //     next({ name: 'login' })
  //   }
  // }

  // next()
  // const token = getToken()
  // if (token) {
  //   store
  //     .dispatch('authorization', token)
  //     .then(() => {
  //       if (to.name === 'login') {
  //         next({ name: 'home' })
  //       } else {
  //         next()
  //       }
  //     })
  //     .catch(() => {
  //       setToken('')
  //       next({ name: 'login' })
  //     })
  // } else {
  //   if (to.name === 'login') {
  //     next()
  //   } else {
  //     next({ name: 'login' })
  //   }
  // }
  // if (to.name !== 'login') {
  //   if (HAS_LOGINED) {
  //     next()
  //   } else {
  //     next({ name: 'login' })
  //   }
  // } else {
  //   if (HAS_LOGINED) {
  //     next({ name: 'home_page' })
  //   } else {
  //     next()
  //   }
  // }
})

// router.beforeResolve()

// router.afterEach((to, from) => {
//   // loading = false
// })

export default router
