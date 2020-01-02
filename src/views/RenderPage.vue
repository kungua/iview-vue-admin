<template>
  <div>
    <list :list="list"/>
    <list :list="list" :render="renderFunc"/>
    <!--    <ul @click="handleClick">-->
    <!--      <li-->
    <!--        v-for="(item, index) in list"-->
    <!--        :key="`list_item_${index}`"-->
    <!--        @click.stop="handleClick"-->
    <!--      >-->
    <!--        {{ item.name }}-->
    <!--      </li>-->
    <!--    </ul>-->
  </div>
</template>

<script>
import List from '../components/list'

export default {
  name: 'RenderPage',
  components: {
    List
  },
  data () {
    return {
      list: [{ name: 'zhangsan' }, { name: 'wangwu' }]
    }
  },
  methods: {
    handleClick (ev) {
      console.log(ev)
    },
    renderFunc (h, name) {
      return h('i', {
        style: {
          color: 'pink'
        }
      }, name)
    }
  }
}
</script>

<style scoped></style>
