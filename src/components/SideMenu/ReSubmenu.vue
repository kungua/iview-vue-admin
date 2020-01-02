<template>
  <Submenu :name="parent.title">
    <template slot="title">
      <Icon v-if="parent.icon" :type="parent.icon"></Icon>
      {{ parent.title }}
    </template>
    <template v-for="item in parent.children">
      <re-submenu
        v-if="item.children"
        :key="`menu_${item.title}`"
        :parent="item"
      ></re-submenu>
      <menu-item v-else :key="`menu_${item.title}`" :name="item.title">
        {{ item.title }}
      </menu-item>
    </template>
  </Submenu>
</template>

<script>
export default {
  name: 'ReSubmenu',
  props: {
    parent: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped></style>
