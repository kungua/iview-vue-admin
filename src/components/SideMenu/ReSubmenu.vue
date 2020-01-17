<template>
  <Submenu :name="parent.meta.title">
    <template slot="title">
      <Icon v-if="parent.icon" :type="parent.icon"></Icon>
      {{ parent.meta.title }}
    </template>
    <template v-for="item in parent.children">
      <re-submenu
        v-if="item.children"
        :key="`menu_${item.meta.title}`"
        :parent="item"
      ></re-submenu>
      <menu-item v-else :key="`menu_${item.meta.title}`" :name="item.name">
        {{ item.meta.title }}
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
