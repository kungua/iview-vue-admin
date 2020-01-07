import Layout from '../views/Layout'
import Home from '../views/Home'

export const routerMap = [
  {
    path: '/',
    alias: '/home_page',
    name: 'home',
    component: Layout,
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
    },
    children: [
      {
        path: '/home',
        name: 'home_index',
        component: Home
      },
    ]
  },
  {
    path: '/count-to',
    name: 'count_to',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/CountTo.vue')
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/SplitPane.vue')
  },
  {
    path: '/render-page',
    name: 'render_page',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/RenderPage.vue')
  },
  {
    path: '/menu-page',
    name: 'menu_page',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/MenuPage.vue')
  },
  {
    path: '/folder-tree',
    name: 'folder_tree',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/folder-tree/FolderTree.vue')
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
    redirect: '/'
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
    // // 写法4
    // redirect: to => '/'
  },
  {
    path: '/store',
    component: () => import('../views/Store.vue')
  },
]

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '*',
    component: () => import('../views/Error404.vue')
  }
]
