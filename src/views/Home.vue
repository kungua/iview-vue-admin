<template>
  <div class="home">
    <b>{{ food }}</b>
    <button @click="getInfo">获取用户信息</button>
    <img alt="Vue logo" src="../assets/img/logo.png"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import { getUserInfo } from '../api/user'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     console.log(vm)
  //   })
  // },
  // beforeRouteLeave (to, from, next) {
  //   const leave = confirm('您确定不再玩会儿了嘛')
  //   if (leave) {
  //     next()
  //   } else {
  //     next(false)
  //   }
  // },
  props: {
    food: {
      type: String,
      default: 'banana'
    }
  },
  methods: {
    getInfo () {
      getUserInfo({
        pageIdx: 1,
        pageCount: 20,
        acceptanceCode: '',
        oaId: '',
        purchaseId: '',
        shipmentId: '',
        brand: '',
        model: '',
        recordStatus: '',
        acceptanceTimeStart: '',
        acceptanceTimeEnd: '',
        creator: '',
        applyDateStart: '',
        applyDateEnd: ''
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
