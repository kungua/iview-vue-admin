<template>
  <div class="login-wrapper">
    <i-input type="text" v-model="userName"></i-input>
    <i-input type="password" v-model="password"></i-input>
    <Button @click="handleSubmit">登录</Button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    handleSubmit () {
      const { userName, password } = this
      this.login({ userName, password })
        .then(() => {
          this.$router.push({ name: 'home' })
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.login-wrapper {
  padding: 8px;
  width: 300px;

  .ivu-input-wrapper {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
</style>
