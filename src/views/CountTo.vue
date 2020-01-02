<template>
  <div>
    <div>这是一个使用 CountTo 组件的页面</div>
    <count-to class-name="klass3" :end-val="30" :duration="0.7"/>
    <button @click="getNumber">获取数值</button>
    <button @click="up">更新数值</button>
    <count-to
      :end-val="endVal"
      @on-animation-end="handleEnd"
      class-name="klass1"
      ref="countTo"
    >
      <span slot="left">总金额: </span>
      <span slot="right">元</span>
    </count-to>
    <count-to class-name="klass2" :end-val="30000" :duration="2.8"/>
  </div>
</template>

<script>
import CountTo from '../components/count-to'

export default {
  name: 'CountToPage',
  components: {
    CountTo
  },
  data () {
    return {
      endVal: 40
    }
  },
  methods: {
    handleEnd (endVal) {
      console.log('endVal -> ', endVal)
    },
    up () {
      this.endVal = this.endVal + Math.random() * 100 + 1
    },
    getNumber () {
      console.log(this.$refs.countTo.getCount())
    }
  }
}
</script>

<style scoped></style>
