<template>
  <div>
    <ul @click="handleClick">
      <li
        v-for="(item, index) in list"
        :key="`list_item_${index}`"
        @click.stop="handleClick"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RenderPage',
  data () {
    return {
      list: [{ name: 'zhangsan' }, { name: 'wangwu' }]
    }
  },
  methods: {
    handleClick (ev) {
      console.log(ev)
    }
  }
}
</script>

<style scoped></style>
