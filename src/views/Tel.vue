<template>
  <div class="tel">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Tel',
  data () {
    return {
      message: '我的天哪 这么神奇吗'
    }
  },
  mounted () {
    this.$bus.$on('on-click', mes => {
      this.message = mes
    })
  }
}
</script>

<style scoped lang="less">
.tel {
  border: 1px solid red;
}
</style>
