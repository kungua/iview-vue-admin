import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'home',
    component: Home,
    props: route => {
      //
      return {
        food: route.query.food
      }
    },
    // beforeEnter: (to, from, next) => {
    //   if (from.name === 'about') {
    //     console.log('这是从About页面来的')
    //   } else {
    //     console.log('这不是 别瞎说')
    //   }
    //   next()
    // },
    meta: {
      title: '主页'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/count-to',
    name: 'count_to',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/CountTo.vue')
  },
  {
    path: '/about',
    name: 'about',
    props: {
      food: 'banana'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Argu.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Parent.vue'),
    children: [
      {
        path: 'child',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () =>
        import(/* webpackChunkName: "about" */ '../views/Child.vue'),
      email: () => import(/* webpackChunkName: "about" */ '../views/Email.vue'),
      tel: () => import(/* webpackChunkName: "about" */ '../views/Tel.vue')
    }
  },
  {
    path: '/main',
    // 写法1
    // redirect: '/'
    // 写法2
    // redirect: {
    //   name: 'home'
    // }
    // 写法3
    // redirect: to => {
    //   return {
    //     name: 'home'
    //   }
    // }
    // 写法4
    redirect: to => '/'
  },
  {
    path: '/store',
    component: () => import('../views/Store.vue')
  },
  {
    path: '*',
    component: () => import('../views/Error404.vue')
  }
]
