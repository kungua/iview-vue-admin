<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  name: 'Argu',
  props: {
    name: {
      type: [String, Number],
      default: 'guakun'
    }
  },
  beforeRouteUpdate (to, from, next) {
    //
    console.log(to.name)
    console.log(from)
    next()
  }
}
</script>

<style scoped></style>
