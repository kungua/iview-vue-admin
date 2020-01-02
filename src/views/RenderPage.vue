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
import CountTo from '../components/count-to/CountTo'

export default {
  name: 'RenderPage',
  components: {
    List
  },
  data () {
    return {
      list: [{ name: 'zhangsan', endVal: 100 }, { name: 'wangwu', endVal: 90 }]
    }
  },
  methods: {
    handleClick (ev) {
      console.log(ev)
    },
    handleEnd () {
      console.log('end!')
    },
    // renderFunc (h, name) {
    renderFunc (h, endVal) {
      return (
        // <i style={{ color: 'red' }} on-click={this.handleClick} >{name}</i>
        <CountTo
          style={{ color: 'red' }}
          nativeOn-click={this.handleClick}
          on-on-animation-end={this.handleEnd}
          endVal={endVal} >
          {name}
        </CountTo>
      )
      // return h('i', {
      //   style: {
      //     color: 'pink'
      //   }
      // }, name)
    }
  }
}
</script>

<style scoped></style>
