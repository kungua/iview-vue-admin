import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// import store from '../store'
// import { setTitle, getToken, setToken } from '../lib/utils'
import { setTitle } from '../lib/utils'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// const HAS_LOGINED = false

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  next()
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

router.afterEach((to, from) => {
  // loading = false
})

export default router
