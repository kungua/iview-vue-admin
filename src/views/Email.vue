<template>
  <div>
    <button @click="handleClick">按我鸭</button>
    email
  </div>
</template>

<script>
export default {
  name: 'Email',
  mounted () {
    console.log(this.$bus)
  },
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  }
}
</script>

<style scoped></style>
