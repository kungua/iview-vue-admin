<template>
  <Dropdown placement="right-start" >
    <a href="" class="drop-menu-a">
      <Icon v-if="parent.icon" :type="parent.icon" size="20"></Icon>
      <span>{{ parent.title }}</span>
    </a>
    <DropdownMenu slot="list">
      <template v-for="item in parent.children">
        <re-dropdown
          v-if="parent.children"
          :key="`drop_${item.title}`"
          :parent="item"
        />

        <DropdownItem
          v-else
          :key="`drop_${item.title}`"
          :name="item.title"
        >
          123123
          {{ item.title }}
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  name: 'ReDropdown',
  props: {
    parent: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped></style>
