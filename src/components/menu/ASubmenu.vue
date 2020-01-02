<template>
  <ul class="a-submenu">
    <div @click="handleClick" class="a-submenu-title">
      <slot name="title"></slot>
      <span
        :style="{ transform: `rotateZ(${showChild ? 0 : 180}deg)` }"
        class="shrink-icon"
      >^</span
      >
    </div>
    <li v-show="showChild" class="a-submenu-child-box">
      <slot></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ASubmenu',
  data () {
    return {
      showChild: false
    }
  },
  methods: {
    handleClick () {
      this.showChild = !this.showChild
    }
  }
}
</script>

<style scoped lang="less">
.a-submenu {
  background-color: rgb(33, 35, 39);
  &-title {
    color: #fff;
    position: relative;

    .shrink-icon {
      position: absolute;
      top: 0px;
      right: 10px;
    }
  }

  &-child-box {
    overflow: hidden;
    padding-left: 20px;
  }
  li {
    background-color: rgb(33, 35, 39);
  }
}
</style>
