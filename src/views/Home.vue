<template>
  <div class="home">
    <b>{{food}}</b>
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
  props: {
    food: {
      type: String,
      default: 'banana'
    }
  }
}
</script>
