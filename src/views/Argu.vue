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
  }
}
</script>

<style scoped></style>
