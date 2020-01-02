<template>
  <div class="menu-box">
    <!--    <a-menu>-->
    <!--      <a-menu-item>111</a-menu-item>-->
    <!--      <a-menu-item>222</a-menu-item>-->
    <!--      <a-menu-item>333</a-menu-item>-->
    <!--      <a-submenu>-->
    <!--        <div slot="title">444</div>-->
    <!--        <a-menu-item>444-111</a-menu-item>-->
    <!--        <a-menu-item>444-222</a-menu-item>-->
    <!--        <a-submenu>-->
    <!--          <div slot="title">444-333</div>-->
    <!--          <a-menu-item>444-333-111</a-menu-item>-->
    <!--          <a-menu-item>444-333-222</a-menu-item>-->
    <!--        </a-submenu>-->
    <!--      </a-submenu>-->
    <!--    </a-menu>-->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item v-if="!item.children" :key="`menu_item_${index}`">{{ item.title }}</a-menu-item>
        <re-submenu v-else :parent="item" :key="`menu_item_${index}`" :index="index"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import menuComponents from '../components/menu'
import ReSubmenu from './ReSubmenu'

const { AMenu, AMenuItem } = menuComponents

export default {
  name: 'MenuPage',
  components: {
    AMenu,
    AMenuItem,
    ReSubmenu
  },
  data () {
    return {
      list: [
        { title: '1111' },
        { title: '2222' },
        {
          title: '3333',
          children: [
            { title: '3333-1' },
            {
              title: '3333-2',
              children: [
                { title: '3333-2-1' },
                {
                  title: '3333-2-2',
                  children: [{ title: '3333-2-2-1' }, { title: '3333-2-2-2' }]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.menu-box {
  width: 300px;
  height: 400px;
}
</style>
