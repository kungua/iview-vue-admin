<template>
  <li class="a-menu-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'AMenuItem'
}
</script>

<style scoped lang="less">
.a-menu-item {
  background-color: rgb(90, 92, 104);
  color: #fff;
}
</style>
