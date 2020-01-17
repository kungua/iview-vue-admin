import Layout from '../views/Layout'
import Home from '../views/Home'

export const routerMap = [
  // {
  //   path: '/',
  //   alias: '/home_page',
  //   name: 'home',
  //   component: Layout,
  //   props: route => {
  //     //
  //     return {
  //       food: route.query.food
  //     }
  //   },
  //   // beforeEnter: (to, from, next) => {
  //   //   if (from.name === 'about') {
  //   //     console.log('这是从About页面来的')
  //   //   } else {
  //   //     console.log('这不是 别瞎说')
  //   //   }
  //   //   next()
  //   // },
  //   meta: {
  //     title: '主页'
  //   },
  //   children: [
  //     {
  //       path: '/home',
  //       name: 'home_index',
  //       component: Home
  //     },
  //   ]
  // },
  {
    path: '/home',
    name: 'home',
    components: Layout,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'home-index',
        name: 'home_index',
        meta: {
          title: '首页',
          component: Home
        }
      }
    ]
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
    path: '/count-to',
    name: 'count_to',
    meta: {
      title: 'count_to'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/CountTo.vue')
  },
  {
    path: '/menu-page',
    name: 'menu_page',
    meta: {
      title: 'menu_page'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/MenuPage.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    meta: {
      title: 'upload'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Upload.vue')
  },
  {
    path: '/form',
    name: 'form',
    meta: {
      title: 'form'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue')
  },
  {
    path: '/optimize',
    name: 'optimize_page',
    meta: {
      title: 'optimize'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Optimize.vue')
  },
  {
    path: '/wrapper',
    name: 'wrapper',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Layout.vue'),
    meta: {
      title: '表格'
    },
    children: [
      {
        path: '/table',
        name: 'table',
        meta: {
          title: '表格'
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Table.vue')
      },
      {
        path: '/folder-tree',
        name: 'folder_tree',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/folder-tree/FolderTree.vue'
            ),
        meta: {
          title: '文件夹'
        }
      },
      {
        path: '/params/:id',
        name: 'params',
        props: true,
        component: () => import(/* webpackChunkName: "about" */ '../views/Argu.vue'),
        meta: {
          title: '参数'
        }
      },
    ]
  },
  {
    path: '/render-page',
    name: 'render_page',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/RenderPage.vue'),
    meta: {
      title: 'render_page'
    }
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    meta: {
      title: 'split_pane',
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/SplitPane.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    meta: {
      title: 'parent'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Parent.vue'),
    children: [
      {
        path: 'child',
        name: 'child',
        meta: {
          title: 'child'
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Child.vue')
      }
    ]
  },
  {
    path: '/named-view',
    name: 'named_view',
    meta: {
      title: 'named_view',
    },
    components: {
      default: () =>
        import(/* webpackChunkName: "about" */ '../views/Child.vue'),
      email: () => import(/* webpackChunkName: "about" */ '../views/Email.vue'),
      tel: () => import(/* webpackChunkName: "about" */ '../views/Tel.vue')
    }
  },
  // {
  //   path: '/bigfile-upload',
  //   name: 'bigfile_upload',
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/UploadBigFile.vue')
  // },

  // {
  //   path: '/main',
  //   // 写法1
  //   redirect: '/'
  //   // 写法2
  //   // redirect: {
  //   //   name: 'home'
  //   // }
  //   // 写法3
  //   // redirect: to => {
  //   //   return {
  //   //     name: 'home'
  //   //   }
  //   // }
  //   // // 写法4
  //   // redirect: to => '/'
  // },
  {
    path: '/store',
    name: 'store',
    meta: {
      title: 'store'
    },
    component: () => import('../views/Store.vue')
  }
]

export const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/icon-page',
    name: 'icon_page',
    meta: {
      title: 'icon_page'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/IconPage.vue')
  },
  {
    path: '*',
    component: () => import('../views/Error404.vue')
  }
]
