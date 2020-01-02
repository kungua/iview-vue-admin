<template>
  <ul>
    <li v-for="(item, index) in list" :key="`item_${index}`">
      <span v-if="!render">{{ item.name }}</span>
      <render-dom v-else :render-func="render" :name="item.name"/>
    </li>
  </ul>
</template>

<script>
import RenderDom from '../RenderDom'

export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function,
      default: () => {
      }
    }
  },
  components: {
    RenderDom
  }
}
</script>

<style scoped></style>
