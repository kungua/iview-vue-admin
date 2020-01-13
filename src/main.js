import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
// import './assets/font/iconfont.js'
import './assets/font/iconfont.css'
import IconFont from './components/icon-font'

// import CountTo from './components/count-to/CountTo'

if (process.env.NODE_ENV !== 'production') {
  require('./mock')
}

Vue.use(ViewUI)
Vue.config.productionTip = false
Vue.component('icon-font', IconFont)
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// const handleClick = ev => {
//   console.log(ev)
//   ev.stopPropagation()
// }

// const list = [{ name: 'zhangsan' }, { name: 'lisi' }]
// const getLiEleArr = h => {
//   return list.map((item, index) =>
//     h(
//       'li',
//       {
//         on: {
//           click: handleClick
//         },
//         key: `list_item_${index}`
//       },
//       item.name
//     )
//   )
// }

// new Vue({
//   router,
//   store,
//   render: h =>
//     h('div', [
//       h(
//         'ul',
//         {
//           on: {
//             click: handleClick
//           }
//         },
//         // [
//         //   h(
//         //     'li',
//         //     {
//         //       on: {
//         //         click: handleClick
//         //       }
//         //     },
//         //     1
//         //   ),
//         //   h('li', 2)
//         // ]
//         getLiEleArr(h)
//       )
//     ])
// }).$mount('#app')
// //
// new Vue({
//   router,
//   store,
//   render: h => h('div', {
//     attrs: {
//       id: 'box'
//     },
//     style: {
//       color: 'pink'
//     }
//   }, 'magua')
// }).$mount('#app')

// new Vue({
//   router,
//   store,
//   render: h =>
//     // h(CountTo, {
//     //   // 'class': 'count-to wrapper',
//     //   // class: ['count-to', Math.random() > 0.5 ? 'aa' : 'bb'],
//     //   style: {},
//     //   attrs: {},
//     //   class: {
//     //     'count-to': true
//     //   },
//     //   // domProps: {
//     //   //   innerHTML: '123'
//     //   // },
//     //   props: {
//     //     endVal: 100
//     //   },
//     //   on: {
//     //     'on-animation-end': val => {
//     //       console.log('animation end: ', val)
//     //     }
//     //   },
//     //   nativeOn: {
//     //     click: () => {
//     //       console.log('click')
//     //     }
//     //   },
//     //   directives: [],
//     //   scopedSlots: {},
//     //   slot: '',
//     //   key: '',
//     //   ref: ''
//     // })
//     h('div', [
//       h('span', 123),
//       h('span', 456)
//     ])
// }).$mount('#app')
