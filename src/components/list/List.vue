<template>
  <ul>
    <li @mousemove.prevent="handleMove" v-for="(item, index) in list" :key="`item_${index}`">
      <span v-if="!render">{{ item.name }}</span>
      <render-dom v-else :render-func="render" :end-val="item.endVal"/>
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
  },
  methods: {
    handleMove (ev) {
      console.log(ev)
    }
  }
}
</script>

<style scoped></style>
