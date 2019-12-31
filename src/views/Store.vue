<template>
  <div>
    <p>appName: {{ appName }}</p>
    <button @click="handleChangeAppName">点我改变 appName</button>
    <!--    <p>appNameWithVersion: {{ appNameWithVersion }}</p>-->
    <!--    <p>userNameFirstLetter: {{ userNameFirstLetter }}</p>-->
    <!--    <a-input @input="handleInput"/>-->
    <!--    <p>Text: {{ inputValue }}</p>-->
    <!--    <a-show :content="inputValue"/>-->
    <!--    <p>userName: {{ userName }}</p>-->
    <!--    <p>{{ inputValue }} -> lastLetter is : {{ inputValueLastLetter }}</p>-->
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// import { mapState, mapGetters } from 'vuex'
// import AInput from '../components/AInput'
// import AShow from '../components/AShow'

// const { mapState } = createNamespacedHelpers('user')
export default {
  name: 'Store',
  components: {
    // AInput,
    // AShow
  },
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    // ...mapGetters('user', ['userNameFirstLetter']),
    // inputValueLastLetter () {
    //   return this.inputValue.substr(-1, 1)
    // },
    // // 方法五
    // ...mapState('user', {
    //   userName: state => state.userName
    // })
    // 方法四
    // ...mapState({
    //   userName: state => state.userName
    // })
    // 方法三
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // })
    // 方法二
    // ...mapState(['appName', 'userName'])
    // 方法一
    appName () {
      return this.$store.state.appName
    }
    // userName () {
    //   return this.$store.state.user.userName
    // }
  },
  methods: {
    ...mapMutations(['SET_APP_NAME']),
    handleChangeAppName () {
      // this.$store.commit('SET_APP_NAME', 'magua')
      this.SET_APP_NAME('magua2')
    }
    // handleInput (val) {
    //   this.inputValue = val
    // }
  }
}
</script>

<style scoped></style>
