<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu v-if="!collapsed" width="auto" theme="dark">
      <template v-for="item in list">
        <re-submenu
          v-if="item.children"
          :key="`menu_${item.title}`"
          :parent="item"
        />
        <menu-item v-else :key="`menu_${item.title}`" :name="item.title">
          <Icon v-if="item.icon" :type="item.icon"></Icon>
          {{ item.title }}
        </menu-item>
      </template>
    </Menu>
    <div v-else>
      <template v-for="item in list">
        <re-dropdown
          v-if="item.children"
          :key="`drop_${item.title}`"
          :parent="item"
        />
        <Tooltip
          v-else
          :content="item.title"
          :key="`drop_${item.title}`"
          placement="right"
          transfer
        >
          <a href="" class="drop-menu-a">
            <Icon v-if="item.icon" :type="item.icon" size="20"></Icon>
          </a>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
import ReSubmenu from './ReSubmenu'
import ReDropdown from './ReDropdown'

export default {
  name: 'SideMenu',
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ReSubmenu,
    ReDropdown
  }
}
</script>

<style lang="less">
.side-menu-wrapper {
  width: 100%;

  .ivu-tooltip,
  .drop-menu-a {
    width: 100%;
    display: block;
    text-align: center;
    padding: 8px 0;
  }
}
</style>
