<template>
  <div class="home">
    <b>{{ food }}</b>
    <img alt="Vue logo" src="../assets/img/logo.png"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  beforeRouteEnter (to, from, next) {
    //
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    const leave = confirm('您确定不再玩会儿了嘛')
    if (leave) {
      next()
    } else {
      next(false)
    }
  },
  props: {
    food: {
      type: String,
      default: 'banana'
    }
  }
}
</script>
