import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

const HAS_LOGINED = true

router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (HAS_LOGINED) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    if (HAS_LOGINED) {
      next({ name: 'home_page' })
    } else {
      next()
    }
  }
})

// router.beforeResolve()

router.afterEach((to, from) => {
  // loading = false
})

export default router
